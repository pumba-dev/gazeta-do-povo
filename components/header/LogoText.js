class LogoText extends HTMLElement {
  constructor() {
    super()
    this.build()
  }

  build() {
    const shadow = this.attachShadow({ mode: 'open' })

    const $logoText = document.createElement('h1')
    $logoText.classList.add('logo-text')
    $logoText.textContent = "Teste de Front-End"

    shadow.appendChild($logoText)
    shadow.appendChild(this.styles())
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = /*css*/`
          .logo-text {
            font-size: 1.2rem;
            font-weight: bold;
            color: --var(primaryColor);
            width: max-content;
            height: max-content;
          }
        `
    return style
  }
}

customElements.define('logo-text', LogoText)