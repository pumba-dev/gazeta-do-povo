import { getSourceURL } from "../../scripts/getSourceURL"

export default function SearchIcon() {
    const $iconBox = document.createElement('div')
    $iconBox.classList.add('icon-box')

    const $searchIcon = document.createElement('img')
    $searchIcon.classList.add('icon')
    $searchIcon.setAttribute('src', getSourceURL('search-icon', 'svg'))

    $iconBox.appendChild($searchIcon)

    $iconBox.appendChild(styles())

    return $iconBox
}

function styles() {
    const style = document.createElement('style')
    style.textContent = /*css*/`
            .icon-box {
                width: 1.1rem;
                height: 1.1rem;
            }

            .icon {
                width: 100%;
                height: 100%;
            }
        `
    return style
}