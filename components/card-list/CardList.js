import "./Card.js"
import { establishmentsApi } from "../../plugins/establishmentsApi.js"

class CardList extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })

        const $cardList = document.createElement('section')
        $cardList.classList.add('card-list')

        this.cardListFill($cardList)

        shadow.appendChild($cardList)
        shadow.appendChild(this.styles())
    }

    async getEstablishments() {
        let establishments = []
        await establishmentsApi().then(response => {
            establishments = Array.from({ length: 100 }).map((_, index) => {
                return {
                    id: index,
                    imageSource: response.data[index].cover,
                    cardTitle: response.data[index].fantasyName,
                    cardDiscount: response.data[index].discountAmount
                }
            })
        })
        return establishments
    }

    cardListFill($cardList) {
        this.getEstablishments().then(establishments => {
            establishments.forEach(establishment => {
                const $cardBox = document.createElement('card-box')
                $cardBox.setAttribute('card-id', establishment.id)
                $cardBox.setAttribute('image-source', establishment.imageSource)
                $cardBox.setAttribute('card-title', establishment.cardTitle)
                $cardBox.setAttribute('card-discount', establishment.cardDiscount)
                $cardList.appendChild($cardBox)
            })
        })
    }


    styles() {
        const style = document.createElement('style')
        style.textContent = /*css*/`
            .card-list {
                margin-top: 2rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                width: 100%;
                height: max-content;
                align-items: center;
                justify-items: center;
                box-sizing: border-box;
            }

            @media (min-width: 768px) {
                .card-list {
                    display: grid;
                    gap: 0rem;
                    grid-template-columns: repeat(2, 1fr);
                    grid-row-gap: 1.5rem;
                }
            }

            @media (min-width: 1024px) {
                .card-list {
                    margin-top: 4rem;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-row-gap: 1.5rem;
                    padding: 0rem 2rem;
                }
            }

            @media (min-width: 2000px) {
                .card-list {
                    margin-top: 5rem;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-row-gap: 2rem;
                    padding: 0rem 10rem;
                }
            }
        `
        return style
    }
}

customElements.define('card-list-section', CardList)