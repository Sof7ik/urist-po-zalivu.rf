function closeModalByEscape(e, modalOverlayElem, showedClass)
{
    if (e.key === "Escape")
    {
        if (modalOverlayElem.classList.contains(showedClass))
        {
            modalOverlayElem.classList.remove(showedClass);
            document.body.classList.remove('not-scrollable');
        }
    }
}

function modalHandler(e, modalOverlayElem, showedClass)
{
    if (modalOverlayElem.classList.contains(showedClass))
    {
        // close
        modalOverlayElem.classList.remove(showedClass);
        document.body.classList.remove('not-scrollable');
    }
    else
    {
        // open
        modalOverlayElem.classList.add(showedClass);
        document.body.classList.add('not-scrollable');
    }
}

async function callbackRequest(url)
{
    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data)
            {
                console.log('success');
            }
        })
}

document.addEventListener('DOMContentLoaded', e => {

    // GET HELP modal
    // --------------------------------
    const modalOverlayElem = document.querySelector(".get-help-overlay");
    const getHelpShowedClass = "showed";

    document.getElementById('close-get-help')
        .addEventListener('click',
            e => modalHandler(e, modalOverlayElem, getHelpShowedClass));

    document.querySelectorAll('[data-modal="get-help"]').forEach(elem => {
        elem.addEventListener('click', e => modalHandler(e, modalOverlayElem, getHelpShowedClass));
    })

    document.addEventListener('keydown', e => closeModalByEscape(e, modalOverlayElem, getHelpShowedClass));
    // ---------------------------------------

    // CASES modal
    // -----------------------------
    const casesModalOverlay = document.querySelector(".cases-modal-overlay");
    const casesModalShowedClass = "showed";

    document.getElementById('close-cases-modal')
        .addEventListener('click',
            e => modalHandler(e, casesModalOverlay, casesModalShowedClass));

    document.querySelectorAll('[data-modal="case"]').forEach(elem => {
        elem.addEventListener('click', e => modalHandler(e, casesModalOverlay, casesModalShowedClass));
    })

    document.addEventListener('keydown', e => closeModalByEscape(e, casesModalOverlay, casesModalShowedClass));
    // ------------------------------
})