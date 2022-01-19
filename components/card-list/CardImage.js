class CardImage extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })

        const $imageBox = document.createElement('div')
        $imageBox.classList.add('image-box')

        const $image = document.createElement('img')
        $image.classList.add('image')
        $image.setAttribute('src', this.getAttribute('image-source'))
        $image.setAttribute('alt', "Logo do Estabelecimento")

        $imageBox.appendChild($image)

        shadow.appendChild($imageBox)
        shadow.appendChild(this.styles())
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = /*css*/`
            .image-box {
                width: 3rem;
                height: 3rem;
                border-radius: 1rem;
                bg-color: #fff;
            }

            .image {
                width: 100%;
                height: 100%;
            }
        `
        return style
    }
}

customElements.define('card-image', CardImage)