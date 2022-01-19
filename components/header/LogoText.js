export default function LogoText() {
  const $logoText = document.createElement('h1')
  $logoText.classList.add('logo-text')
  $logoText.textContent = "Teste de Front-End"

  $logoText.appendChild(styles())
  return $logoText
}

function styles() {
  const style = document.createElement('style')
  style.textContent = /*css*/`
          .logo-text {
            font-size: 1.2rem;
            font-weight: bold;
            color: --var(primaryColor);
            width: max-content;
            height: max-content;
          }

          @media ( min-width: 426px) {
            .logo-text {
              font-size: 1.4rem;
            }
          }

          @media (min-width: 769px) {
            .logo-text {
              font-size: 1.7rem;
            }
          }

          @media (min-width: 1024px) {
            .logo-text {
              font-size: 2.2rem;
            }
          }
        `
  return style
}
