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
            padding: 1.2rem 1rem;
            border-radius: 1rem;
            background-color: var(--primaryColor);  
            gap: 0.7rem;
        }
    `;
    return style;
}
