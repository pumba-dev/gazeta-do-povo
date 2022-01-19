export default function HeaderNav() {
    const $headerNavList = document.createElement('ul')
    $headerNavList.classList.add('header-nav-list')

    const $LinkedinItem = document.createElement('li')
    $LinkedinItem.classList.add('header-nav-list-item')

    const $LinkedinLink = document.createElement('a')
    $LinkedinLink.classList.add('header-nav-list-link')
    $LinkedinLink.href = 'https://www.linkedin.com/in/pumba-dev/'
    $LinkedinLink.target = '_blank'
    $LinkedinLink.textContent = 'Linkedin'

    const $GitHubItem = document.createElement('li')
    $GitHubItem.classList.add('header-nav-list-item')

    const $GitHubLink = document.createElement('a')
    $GitHubLink.classList.add('header-nav-list-link')
    $GitHubLink.href = 'https://github.com/pumba-dev'
    $GitHubLink.target = '_blank'
    $GitHubLink.textContent = 'GitHub'

    $LinkedinItem.appendChild($LinkedinLink)
    $GitHubItem.appendChild($GitHubLink)
    $headerNavList.appendChild($LinkedinItem)
    $headerNavList.appendChild($GitHubItem)

    $headerNavList.appendChild(styles())
    return $headerNavList
}

function styles() {
    const style = document.createElement('style')
    style.textContent = /*css*/`
            .header-nav-list {
                display: flex;
                justify-content: space-between;
                gap: 2rem;
                align-items: center;
                list-style: none;   
            }

            .header-nav-list-link {
                font-size: 1.3rem;
                font-weight: bold;
                text-align: center;
                text-decoration: none;
                color: var(--primaryColor);
            }
        `
    return style
}