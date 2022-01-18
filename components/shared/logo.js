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
        $logoIcon.src = './assets/gazeta-logo.svg'

        $logoBox.appendChild($logoIcon)

        shadow.appendChild($logoBox)

        shadow.appendChild(this.styles())
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
            .logo-box {
                width: 38px;
                height: 34px;
            }
        `
        return style
    }
}

customElements.define('logo-cp', Logo)