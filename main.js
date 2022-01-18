// CSS IMPORT
import './styles/reset.css'
import './styles/style.css'
import './styles/colors.css'
// COMPONENTS IMPORT
import './components/header/Header.js'

class App extends HTMLElement {
  constructor() {
    super()
    this.build()
  }

  build() {
    this.classList.add("root-app")
    const $shadow = this.attachShadow({ mode: 'open' })

    const $header = document.createElement('header-section')

    $shadow.appendChild($header)
    $shadow.appendChild(this.styles())
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = /*css*/`
      .root-app {
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
      }
    `
    return style
  }
}

customElements.define('root-app', App)


