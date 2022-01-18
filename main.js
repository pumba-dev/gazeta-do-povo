import './styles/reset.css'
import './styles/style.css'
import './styles/colors.css'

class $RootApp extends HTMLElement {
  constructor() {
    super()
    this.build()
  }

  build() {
    const shadow = this.attachShadow({ mode: 'open' })

    const $title = document.createElement('h1')
    $title.classList.add('root-app')
    $title.textContent = "Pumba Developer"

    shadow.appendChild($title)
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

customElements.define('root-app', $RootApp)


