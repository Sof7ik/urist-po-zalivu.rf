function openFAQ(e)
{
    console.log(e.currentTarget);

    const currTarget = e.currentTarget.closest('.faq-item');

    const answerWrapper = currTarget.querySelector('.faq-item__answer-wrapper');
    const answerText = currTarget.querySelector('.faq-item__answer');

    if (currTarget.classList.contains('opened'))
    {
        currTarget.classList.remove('opened');
        answerWrapper.style.height = `0px`;

        console.log('close')
    }
    else
    {
        console.log('open')

        currTarget.classList.add('opened');
        answerWrapper.style.height = `${answerText.clientHeight}px`;
    }
}


document.addEventListener("DOMContentLoaded", e => {
    const casesSlider = new Swiper(".cases-slider", {
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 800,
    });

    document.querySelectorAll('.faq-item__title-wrapper').forEach(elem => elem.addEventListener('click', openFAQ))
})