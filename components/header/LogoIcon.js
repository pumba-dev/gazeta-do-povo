import { getSourceURL } from "../../scripts/getSourceURL"

export default function LogoIcon() {
    const $logoBox = document.createElement('a')
    $logoBox.classList.add('logo-box')
    $logoBox.href = "https://clube.gazetadopovo.com.br/"
    $logoBox.target = "_blank"

    const $logoIcon = document.createElement('img')
    $logoIcon.classList.add('logo-icon')
    $logoIcon.src = getSourceURL('gazeta-logo', 'svg')

    $logoBox.appendChild($logoIcon)

    $logoBox.appendChild(styles())

    return $logoBox
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
