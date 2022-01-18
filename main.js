import './styles/reset.css'
import './styles/style.css'
import './styles/colors.css'
import './components/shared/logo.js'

class App extends HTMLElement {
  constructor() {
    super()
    this.build()
  }

  build() {
    const shadow = this.attachShadow({ mode: 'open' })

    const $logo = document.createElement('logo-cp')

    shadow.appendChild($logo)
    shadow.appendChild(this.styles())
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = `
      .root-app {
        text-align: center;
      }
    `
    return style
  }
}

customElements.define('root-app', App)


