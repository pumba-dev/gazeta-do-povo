import './SearchIcon.js'

class Searchinput extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })
        const $Input = document.createElement('input')
        $Input.classList.add('input')
        $Input.setAttribute('type', 'text')
        $Input.setAttribute('placeholder', 'Buscar')

        const $SearchIcon = document.createElement('search-icon')
        $SearchIcon.classList.add('search-icon')


        shadow.appendChild($Input)
        shadow.appendChild($SearchIcon)
        shadow.appendChild(this.styles())
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = /*css*/`
            .input {
                display: flex;
                border: 1px solid var(--primaryShadeColor);
                border-radius: 0.95rem;
                width: 100%;
                height: max-content;
                padding: 0.5rem 0.7rem;
                background-color: var(--mutedColor);
            }

            .search-icon {
                position: absolute;
                right: 1rem;
            }

        `
        return style
    }
}

customElements.define('search-input', Searchinput)