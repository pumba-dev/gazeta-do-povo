import '../shared/Logo.js'
import './LogoText.js'

class Header extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })
        const $header = document.createElement('div')
        $header.classList.add('header')

        const $logo = document.createElement('logo-icon')
        const $logoText = document.createElement('logo-text')

        $header.appendChild($logo)
        $header.appendChild($logoText)

        shadow.appendChild($header)
        shadow.appendChild(this.styles())
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = /*css*/`
            .header {
                display: flex;
                gap: 1rem;
                height: max-content;
                align-items: center;
                padding: 1rem 2rem;
            }
        `
        return style
    }
}

customElements.define('header-section', Header)