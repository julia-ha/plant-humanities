import axios from 'axios'
import ResizeSensor from 'resize-sensor'

export default {
    name: 'main-mixin',
    data: () => ({
      essay: undefined
    }),
    computed: {
      html() { return this.$store.getters.html },
      baseUrl() { return this.$store.getters.baseUrl },
      navMenuItems() { return this.$store.getters.navigation },
      navPaths() {
        const paths = new Set()
        this.navMenuItems.forEach(menuItem => paths.add(menuItem.path))
        return paths
      },
      settingsLoaded() { return this.$store.getters.settingsLoaded },
    },
    methods: {
      getStaticPage(route) {
        const source = route.path === '/' ? '/index.md' : `${route.path}.md`
        const pageUrl = `${this.baseUrl}/${source}`
        // const pageUrl = source.indexOf('http') === 0 ? source : `${this.baseUrl}/${source}`
        return axios.get(pageUrl)
          .then(resp => this.$marked(resp.data))
          .then((html) => {
            this.$store.dispatch('setHtml', html)
            this.$nextTick(() => {
              this.addStaticPageMetadata()
              this.updateLinks()
              if (route.hash.length > 1) {
                // Scroll to element position
                this.scrollToElem(route.hash.slice(1))
              }
            })
          })
      },
      scrollToElem(elemId) {
        const scrollToElem = document.getElementById(elemId)
        if (scrollToElem) {
          const header = document.querySelector('header')
          // const scrollTo = scrollToElem.offsetTop - (header ? header.offsetHeight : 0)
          const scrollTo = scrollToElem.offsetTop - 56
          document.getElementById('scrollableContent').scrollTo(0, scrollTo)
        }
      },
      addStaticPageMetadata() {
        const pageConfig = Array.from(this.$refs[this.$options.name].querySelectorAll('var'))
          .find(varElem => varElem.dataset.page !== undefined)
        this.$store.dispatch('setTitle', pageConfig ? pageConfig.title : undefined || this.$store.getters.siteTitle )
        this.$store.dispatch('setBanner', pageConfig ? pageConfig.dataset.banner : undefined  || this.$store.getters.siteBanner )
      },
      updateLinks() {
        if (this.$refs[this.$options.name]) {
          this.$refs[this.$options.name].querySelectorAll('a').forEach((link) => {
            if (link.href) {
              const parsedUrl = parseUrl(link.href)
              // if (this.navPaths.has(parsedUrl.pathname) || parsedUrl.pathname.indexOf('/essay/') === 0) {
              if (this.baseUrl.indexOf(parsedUrl.origin) === 0) {
                link.removeAttribute('href')
                link.addEventListener('click', (e) => {
                  this.$router.push({
                    path: parsedUrl.pathname,
                    query: parseQueryString(parsedUrl.search),
                    hash: parsedUrl.hash
                  })
                }) 
              }
            }
          })
          this.$refs[this.$options.name].querySelectorAll('img').forEach((img) => {
            const parsedImgUrl = parseUrl(img.src)
            if (parsedImgUrl.pathname.indexOf('/images/') === 0 && this.baseUrl.indexOf(parsedImgUrl.origin === 0)) {
              img.src = `${this.baseUrl}${parsedImgUrl.pathname}`
            }
          })
        }
      },
      getEssay(route) {
        const src = `${this.baseUrl}/content/${route.params.pathMatch}.md`
        window.data = undefined
        let url = `${process.env.ve_service_endpoint}/essay?src=${encodeURIComponent(src)}&nocss`
        if (process.env.context) {
          url += `&context=${process.env.context}`
        }
        axios.get(url)
          .then(resp => this.essay = resp.data)
          .then(_ => this.onLoaded())
      },
      onLoaded() {
        const essayElem = document.getElementById('visual-essay')
        if (essayElem) {
          const _this = this
          new ResizeSensor(essayElem, function() {
            const essaySpacer = document.getElementById('essay-spacer')
            _this.$store.dispatch('setSpacerHeight', essaySpacer ? essaySpacer.clientHeight : 0)
          })
          window.scrollTo(0, 0)
          // get essay metadata
          if (!window.data) {
            const jsonld = essayElem.querySelectorAll('script[type="application/ld+json"]')
            if (jsonld.length > 0) {
              jsonld.forEach((scr) => {
                eval(scr)
              })
            }
          }
          this.addEssayMetadata()
          this.updateLinks()
        } else {
          setTimeout(() => { this.onLoaded() }, 1000)
        }
      },
      addEssayMetadata() {
        if (window.data) {
          window.data.forEach((item) => {
            if (item.type === 'essay') {
              if (item.title) {
                this.$store.dispatch('setTitle', item.title)
              }
              if (item.banner) {
                const imageUrl = item.banner.indexOf('/images/') === 0 ? `${this.baseUrl}${item.banner}` : item.banner
                this.$store.dispatch('setBanner', imageUrl)
              }          
            }
          })
        } else {
          setTimeout(() => { this.addEssayMetadata() }, 1000)
        }
      }
    }
  }
  
function parseUrl (href) {
    const match = href.match(/^(https?)\:\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/)
    return match && {
      protocol: match[1],
      host: match[2],
      hostname: match[3],
      origin: `${match[1]}://${match[2]}`,
      port: match[4],
      pathname: match[5],
      search: match[6],
      hash: match[7]
    }
  }

function parseQueryString(queryString) {
    queryString = queryString || window.location.search
    const dictionary = {}
    try {
      if (queryString.indexOf('?') === 0) {
        queryString = queryString.substr(1)
      }
      const parts = queryString.split('&')
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i]
        const keyValuePair = p.split('=')
        if (keyValuePair[0] !== '') {
          const key = keyValuePair[0]
          if (keyValuePair.length === 2) {
            let value = keyValuePair[1]
            // decode URI encoded string
            value = decodeURIComponent(value)
            value = value.replace(/\+/g, ' ')
            dictionary[key] = value
          } else {
            dictionary[key] = 'true'
          }
        }
      }
    } catch (err) {
      console.log(err)
    }
    return dictionary
}