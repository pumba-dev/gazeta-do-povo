// CSS IMPORT
import './styles/reset.css'
import './styles/style.css'
import './styles/colors.css'
// COMPONENTS IMPORT
import './components/header/Header.js'
import './components/search/Search.js'
import './components/card-list/CardList.js'

class App extends HTMLElement {
  constructor() {
    super()
    this.build()
  }

  build() {
    this.classList.add("root-app")
    const $shadow = this.attachShadow({ mode: 'open' })

    const $header = document.createElement('header-section')
    const $search = document.createElement('search-section')
    const $cardList = document.createElement('card-list-section')


    $shadow.appendChild($header)
    $shadow.appendChild($search)
    $shadow.appendChild($cardList)

    $shadow.appendChild(this.styles())
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = /*css*/`
      .root-app {
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
        width: 100%;
        height: max-content;
      }
    `
    return style
  }
}

customElements.define('root-app', App)


