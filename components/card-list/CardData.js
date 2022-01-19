class CardData extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })

        const $cardData = document.createElement('div')
        $cardData.classList.add('card-data')

        const $cardTitle = document.createElement('h1')
        $cardTitle.classList.add('card-text')
        $cardTitle.textContent = this.getAttribute('cardTitle')

        const $cardDescription = document.createElement('span')
        $cardDescription.classList.add('card-text')
        $cardDescription.textContent = `Desconto: ${this.getAttribute('card-discount')}%`

        $cardData.appendChild($cardTitle)
        $cardData.appendChild($cardDescription)

        shadow.appendChild($cardData)
        shadow.appendChild(this.styles())
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = /*css*/`
            .card-data {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                width: max-content;
                height: max-content;
            }

            .card-text {
                font-size: 0.65rem;
                font-weight: bold;
                color: var(--secondaryColor);
            }
        `
        return style
    }
}

customElements.define('card-data', CardData)