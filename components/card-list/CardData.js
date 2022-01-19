export default function CardData(card) {
    const $cardData = document.createElement('div')
    $cardData.classList.add('card-data')

    const $cardTitle = document.createElement('div')
    $cardTitle.classList.add('card-text')
    $cardTitle.textContent = card.title

    const $cardDiscount = document.createElement('div')
    $cardDiscount.classList.add('card-text')
    $cardDiscount.textContent = `Desconto: ${card.discount}%`

    $cardData.appendChild($cardTitle)
    $cardData.appendChild($cardDiscount)

    $cardData.appendChild(style())
    return $cardData
}

function style() {
    const style = document.createElement('style');
    style.textContent = /*css*/`
        .card-data {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: max-content;
            height: max-content;
        }

        .card-text {
            font-size: 0.7rem;
            font-weight: bold;
            color: var(--secondaryColor);
        }

        @media (min-width: 425px) {
            .card-text {
                font-size: 0.75rem;
            }
        }

        @media (min-width: 768px) {
            .card-text {
                font-size: 0.8rem;
            }
        }
        
        @media (min-width: 1024px) {
            .card-text {
                font-size: 0.9rem;
            }
        }

        @media (min-width: 2560px) {
            .card-text {
                font-size: 1rem;
            }
        }
    `;
    return style;
}
