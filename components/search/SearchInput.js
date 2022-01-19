import createSearchIcon from './SearchIcon.js'

export default function SearchInput() {

    const $searchInput = document.createElement('div')
    $searchInput.classList.add('search-input')

    const $input = document.createElement('input')
    $input.classList.add('input')
    $input.setAttribute('type', 'text')
    $input.setAttribute('placeholder', 'Buscar')

    const $searchIcon = createSearchIcon()
    $searchIcon.classList.add('search-icon')

    $searchInput.appendChild($input)
    $searchInput.appendChild($searchIcon)

    $searchInput.appendChild(styles())

    return $searchInput
}

function styles() {
    const style = document.createElement('style')
    style.textContent = /*css*/`    
            .search-input {
                display: flex;
                flex-direction: row;
                align-items: center;
                position: relative;
                width: 75%;
            }
    
            .input {
                width: 100%;
                height: max-content;
                border: 1px solid var(--primaryShadeColor);
                border-radius: 0.95rem;
                padding: 0.5rem 0.7rem;
                background-color: var(--mutedColor);
                font-size: 0.85rem;
            }

            .search-icon {
                position: absolute;
                right: 0.5rem;
            }

        `
    return style
}