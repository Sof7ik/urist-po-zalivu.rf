function openFAQ(e)
{
    const currTarget = e.currentTarget.closest('.faq-item');

    const answerWrapper = currTarget.querySelector('.faq-item__answer-wrapper');
    const answerText = currTarget.querySelector('.faq-item__answer');

    if (currTarget.classList.contains('opened'))
    {
        currTarget.classList.remove('opened');
        answerWrapper.style.height = `0px`;
    }
    else
    {
        currTarget.classList.add('opened');
        answerWrapper.style.height = `${answerText.clientHeight}px`;
    }
}

document.addEventListener("DOMContentLoaded", e => {
    const casesSlider = new Swiper(".cases-slider", {
        // Navigation arrows
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 800,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next__mobile',
                    prevEl: '.swiper-button-prev__mobile',
                },
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next__desktop-cases',
                    prevEl: '.swiper-button-prev__desktop-cases',
                },
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });

    const pricingSlider = new Swiper(".pricing-mobile-slider", {
        navigation: {
            nextEl: '.swiper-button-next__pricing',
            prevEl: '.swiper-button-prev__pricing',
        },
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 400,
        freeMode: {
            enabled: true,
        },
        centeredSlides: false
    });

    const paymentSlider = new Swiper(".mobile-payments-slider", {
        navigation: {
            nextEl: '.swiper-button-next__payments',
            prevEl: '.swiper-button-prev__payments',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
                initialSlide: 1,
            },
            651: {
                slidesPerView: 2,
                spaceBetween: 40,
                initialSlide: 0,
            }
        }
    })

    document.querySelectorAll('.faq-item__title-wrapper').forEach(elem => elem.addEventListener('click', openFAQ))
})