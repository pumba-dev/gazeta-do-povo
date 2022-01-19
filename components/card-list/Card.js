import './CardImage'
import './CardData'

class Card extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })

        const $card = document.createElement('div')
        $card.classList.add('card')

        const $cardImage = document.createElement('card-image')
        $cardImage.setAttribute('image-source', this.imageSource)

        const $cardData = document.createElement('card-data')
        $cardData.setAttribute('card-title', this.getAttribute('card-title'))
        $cardData.setAttribute('card-discount', this.getAttribute('card-discount'))

        $card.appendChild($cardImage)
        $card.appendChild($cardData)

        shadow.appendChild($card)
        shadow.appendChild(this.styles())
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = /*css*/`
            .card {
                display: flex;
                align-items: center;
                width: 16rem;
                padding: 1.2rem 1rem;
                border-radius: 1rem;
                background-color: var(--primaryColor);  
                gap: 0.7rem;
            }

            @media (min-width: 1400px) {
                .card {
                    width: 20rem;
                    padding: 1.7rem 1.5rem;
                    border-radius: 1rem;
                    background-color: var(--primaryColor);  
                    gap: 0.7rem;
                }
            }
        `
        return style
    }
}

customElements.define('card-box', Card)