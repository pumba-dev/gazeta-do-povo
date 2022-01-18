class SearchIcon extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })

        const $IconBox = document.createElement('div')
        $IconBox.classList.add('icon-box')

        const $SearchIcon = document.createElement('img')
        $SearchIcon.classList.add('icon')
        $SearchIcon.setAttribute('src', './assets/search-icon.svg')

        $IconBox.appendChild($SearchIcon)

        shadow.appendChild($IconBox)
        shadow.appendChild(this.styles())
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = /*css*/`
            .icon-box {
                width: 1.1rem;
                height: 1.1rem;
            }

            .icon {
                width: 100%;
                height: 100%;
            }
        `
        return style
    }
}

customElements.define('search-icon', SearchIcon)