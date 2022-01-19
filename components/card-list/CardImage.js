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
            width: 3.2rem;
            height: 3.2rem;
            border-radius: 1rem;
            bg-color: #fff;
        }

        .image {
            border-radius: 1rem;
            width: 100%;
            height: 100%;
        }

        @media (min-width: 425px) {
            .image-box {
                width: 3.5rem;
                height: 3.5rem;
            }
        }

        @media (min-width: 768px) {
            .image-box {
                width: 3.7rem;
                height: 3.7rem;
            }
        }
        
        @media (min-width: 1024px) {
            .image-box {
                width: 3.9rem;
                height: 3.9rem;
            }
        }

        @media (min-width: 1440px) {
            .image-box {
                width: 4.2rem;
                height: 4.2rem;
            }
        }

        @media (min-width: 2560px) {
            .image-box {
                width: 4.5rem;
                height: 4.5rem;
            }
        }
    `;
    return style;
}
