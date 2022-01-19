import { establishmentsApi } from "../../plugins/establishmentsApi.js"
import createCard from "./Card.js"


export default function CardList() {
    const $cardList = document.createElement('section')
    $cardList.classList.add('card-list')
    getEstablishments().then(establishmentList => {
        establishmentList.forEach(establishment => {
            const $card = createCard(establishment)
            $cardList.appendChild($card)
        })
    })
    $cardList.appendChild(styles())
    return $cardList
}

async function getEstablishments() {
    let establishments = []
    await establishmentsApi().then(response => {
        establishments = Array.from({ length: 100 }).map((_, index) => {
            return {
                id: index,
                imageSource: response.data[index].cover,
                title: response.data[index].fantasyName,
                discount: response.data[index].discountAmount
            }
        })
    })
    return establishments.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        else if (a.title < b.title) {
            return -1;
        }
        return 0;
    });
}

function styles() {
    const style = document.createElement('style')
    style.textContent = /*css*/`
            .card-list {
                display: flex;
                margin-top: 2rem;
                flex-direction: column;
                gap: 1rem;
                width: 100%;
                height: max-content;
                margin-left: auto;
                margin-right: auto;
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
                    width: 90%
                }
            }

            @media (min-width: 1150px) {
                .card-list {
                    margin-top: 4rem;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-row-gap: 1.5rem;
                    padding: 0rem 2rem;
                    width: 100%;
                    
                }
            }

            @media (min-width: 1440px) {
                .card-list {
                    margin-top: 4rem;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-row-gap: 1.5rem;
                    padding: 0rem 2rem;
                    width: 90%;                    
                }
            }

            @media (min-width: 2400px) {
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