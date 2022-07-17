const faqItems = document.querySelectorAll('.faq__question--item')

faqItems.forEach(item => {
    const faqTitle = item.querySelector('.faq__question--title')
    faqTitle.addEventListener('click', () => {
        const faqTitle = item.querySelector('.faq__question--text')
        faqItems.forEach( text => {
            text !== item && text.classList.remove('show')
        })
        faqTitle.classList.toggle('show')
    })
})