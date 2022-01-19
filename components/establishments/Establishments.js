import createSearch from '../search/Search'
import createCardList from '../card-list/CardList.js'

class Establishments extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })

        const $establishments = document.createElement('div')
        $establishments.classList.add('establishments')

        const $search = createSearch()
        const $cardList = createCardList()



        $establishments.appendChild($search)
        $establishments.appendChild($cardList)
        $establishments.appendChild(this.styles())
        shadow.appendChild($establishments)
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = /*css*/`
            .establishments {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 3.5rem;
                width: 100%;
                height: max-content;
            }
        `
        return style
    }
}

customElements.define('establishments-section', Establishments)