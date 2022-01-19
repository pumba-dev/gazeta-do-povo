export default function CardImage(source) {
    const $imageBox = document.createElement('div')
    $imageBox.classList.add('image-box')

    const $image = document.createElement('img')
    $image.classList.add('image')
    $image.src = `https://clube-static.clubegazetadopovo.com.br/${source}`

    $imageBox.appendChild($image)

    $imageBox.appendChild(style())
    return $imageBox
}

function style() {
    const style = document.createElement('style');
    style.textContent = /*css*/`
        .image-box {
            width: 3rem;
            height: 3rem;
            border-radius: 1rem;
            bg-color: #fff;
        }

        .image {
            border-radius: 1rem;
            width: 100%;
            height: 100%;
        }
    `;
    return style;
}
