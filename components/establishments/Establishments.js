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

        // SEARCH ON DEMAND BY USER INPUT
        const $searchInput = $search.childNodes[1].firstChild
        $searchInput.addEventListener('keyup', (event) => {
            for (let i = 1; i < $cardList.childNodes.length; i++) {
                const $card = $cardList.childNodes[i]
                const $cardTitle = $card.childNodes[1].firstChild

                if (
                    $cardTitle.textContent.toLowerCase().includes($searchInput.value.toLowerCase())
                ) {
                    $card.style.display = 'flex'
                } else {
                    $card.style.display = 'none'
                }
            }
        })

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
                width: 100%;
                height: max-content;
            }
        `
        return style
    }
}

customElements.define('establishments-section', Establishments)