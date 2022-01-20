import createLogoIcon from '../shared/LogoIcon.js'
import createLogoText from './LogoText.js'
import createHeaderNav from './HeaderNav.js'

class Header extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })
        const $header = document.createElement('div')
        $header.classList.add('header')

        const $headerLogo = document.createElement('div')
        $headerLogo.classList.add('header-logo')

        const $logoIcon = createLogoIcon()

        const $logoText = createLogoText()

        const $headerNav = createHeaderNav()
        $headerNav.classList.add('header-nav')

        $headerLogo.appendChild($logoIcon)
        $headerLogo.appendChild($logoText)
        $header.appendChild($headerLogo)
        $header.appendChild($headerNav)

        shadow.appendChild($header)
        shadow.appendChild(this.styles())
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = /*css*/`
            .header {
                display: flex;
                justify-content: space-between;
                height: max-content;
                align-items: center;
                padding: 1rem 2rem;
            }

            .header-logo {
                display: flex;
                gap: 1rem;
            }

            @media (max-width: 768px) {
                .header-nav {
                    display: none
                }
            }

            @media (min-width: 769px) {
                .header {
                    padding: 2rem 4rem;
                }

                .header-logo {
                gap: 1.25rem;
                }
            }

            @media (min-width: 1024px) {
                .header {
                    padding: 2rem 8rem;
                }

                .header-logo {
                gap: 1.5rem;
                }                
            }
        `
        return style
    }
}

customElements.define('header-section', Header)