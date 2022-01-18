class Logo extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })

        const $logoBox = document.createElement('div')
        $logoBox.classList.add('logo-box')

        const $logoIcon = document.createElement('img')
        $logoIcon.classList.add('logo-icon')
        $logoIcon.src = './assets/gazeta-logo.svg'

        $logoBox.appendChild($logoIcon)

        shadow.appendChild($logoBox)
        shadow.appendChild(this.styles())
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = /*css*/`
            .logo-box {
                width: 3rem;
                height: 3rem;
            }

            .logo-icon {
                width: 100%;
                height: 100%;
            }
        `
        return style
    }
}

customElements.define('logo-icon', Logo)