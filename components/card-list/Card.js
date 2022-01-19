import createImageBox from './CardImage.js'
import createCardData from './CardData.js'

export default function Card(card) {
    const $card = document.createElement('div')
    $card.classList.add('card')
    $card.appendChild(createImageBox(card.imageSource))
    $card.appendChild(createCardData(card))

    $card.appendChild(style())
    return $card
}

function style() {
    const style = document.createElement('style');
    style.textContent = /*css*/`
        .card {
            display: flex;
            align-items: center;
            width: 16rem;
            padding: 1.5rem 1rem;
            border-radius: 1rem;
            background-color: var(--primaryColor);  
            gap: 0.7rem;
        }

        @media (min-width: 425px) {
            .card {
                width: 18rem;
            }
        }
        
        @media (min-width: 1024px) {
            .card{
                width: 19rem;
            }
        }

        @media (min-width: 1440px) {
            .card{
                width: 20rem;
                padding-left: 2rem;
            }
        }

        @media (min-width: 2560px) {
            .card{
                width: 22rem;
            }
        }
    `;
    return style;
}
