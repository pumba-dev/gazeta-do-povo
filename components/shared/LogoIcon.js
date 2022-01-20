export default function LogoIcon() {
    const $logoBox = document.createElement('div')
    $logoBox.classList.add('logo-box')

    const $logoIcon = document.createElement('img')
    $logoIcon.classList.add('logo-icon')
    $logoIcon.src = getIconUrl()

    $logoBox.appendChild($logoIcon)

    $logoBox.appendChild(styles())

    return $logoBox
}

function getIconUrl() {
    const iconName = "gazeta-logo"
    return new URL(
        `../../assets/${iconName}.svg`,
        import.meta.url
    ).href;
}

function styles() {
    const style = document.createElement('style')
    style.textContent = /*css*/`
            .logo-box {
                width: 3rem;
                height: 3rem;
            }

            .logo-icon {
                width: 100%;
                height: 100%;
            }

            @media (min-width: 769px) {
                .logo-box {
                width: 4rem;
                height: 4rem;
                }
            }

            @media (min-width: 1024px) {
                .logo-box {
                width: 5rem;
                height: 5rem;
                }
            }

        `
    return style
}
