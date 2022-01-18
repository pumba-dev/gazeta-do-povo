import './SearchInput.js'

class Search extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })

        const $search = document.createElement('div')
        $search.classList.add('search')

        const $searchTitle = document.createElement('h1')
        $searchTitle.classList.add('search-title')
        $searchTitle.textContent = 'Lista de Estabelecimentos'

        const $searchInput = document.createElement('search-input')
        $searchInput.classList.add('search-input')


        $search.appendChild($searchTitle)
        $search.appendChild($searchInput)

        shadow.appendChild($search)
        shadow.appendChild(this.styles())
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = /*css*/`
            .search {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                width: 100%;
                height: max-content;
            }

            .search-title {
                font-size: 0.85rem;
                font-weight: bold;
                text-align: center;
                width: max-content;
                height: max-content;
            }

            .search-input {
                position: relative;
                width: 75%;
                display: flex;
                align-items: center;
            }
        `
        return style
    }
}

customElements.define('search-section', Search)