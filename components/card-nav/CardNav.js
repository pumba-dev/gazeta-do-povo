export default function CardNav(amountOfCards) {
    const $cardNav = document.createElement('div')
    $cardNav.classList.add('card-nav')

    const $navFirstItem = document.createElement('div')
    $navFirstItem.classList.add('nav-first-item', 'nav-item')
    $navFirstItem.innerText = "<<"

    const $navPrevItem = document.createElement('div')
    $navPrevItem.classList.add('nav-prev-item', 'nav-item')
    $navPrevItem.innerText = "<"

    const $navNumbers = document.createElement('div')
    $navNumbers.classList.add('nav-numbers', 'nav-item')
    $navNumbers.innerText = "Numbers"

    const $navNextItem = document.createElement('div')
    $navNextItem.classList.add('nav-next-item', 'nav-item')
    $navNextItem.innerText = ">"

    const $navLastItem = document.createElement('div')
    $navLastItem.classList.add('nav-last-item', 'nav-item')
    $navLastItem.innerText = ">>"

    $cardNav.appendChild($navFirstItem)
    $cardNav.appendChild($navPrevItem)
    $cardNav.appendChild($navNumbers)
    $cardNav.appendChild($navNextItem)
    $cardNav.appendChild($navLastItem)

    $cardNav.appendChild(style())

    return $cardNav
}

function style() {
    const style = document.createElement('style')
    style.textContent = /*css*/`
        .card-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 10rem;
            height: max-content;
            padding: 2rem;
        }

        .nav-item {
            font-weight: bold;
        }

    `
    return style
}