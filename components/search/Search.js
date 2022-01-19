import createSearchInput from './SearchInput.js'

export default function Search() {
    const $search = document.createElement('div')
    $search.classList.add('search')

    const $searchTitle = document.createElement('h1')
    $searchTitle.classList.add('search-title')
    $searchTitle.textContent = 'Lista de Estabelecimentos'

    const $searchInput = createSearchInput()
    $searchInput.classList.add('search-input')

    $search.appendChild($searchTitle)
    $search.appendChild($searchInput)
    $search.appendChild(styles())

    return $search
}

function styles() {
    const style = document.createElement('style')
    style.textContent = /*css*/`
            .search {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                width: 100%;
                height: max-content;
            }

            .search-title {
                font-size: 0.85rem;
                font-weight: bold;
                text-align: center;
                width: max-content;
                height: max-content;
            }

            @media ( min-width: 375px) {
                .search-title {
                    font-size: 1.1rem;
                }
            }

            @media (min-width: 769px) {
                .search-title {
                    font-size: 1.5rem;
                }

                .search-input {
                    width: 55%;
                }
            }

            @media (min-width: 1440px) {
                .search-title {
                    font-size: 1.75rem;
                }   
                
                .search-input {
                    width: 45%;
                }
            }

            @media (min-width: 2560px) {
                .search-title {
                    font-size: 2rem;
                }   
                
                .search-input {
                    width: 40%;
                }
            }
        `
    return style
}