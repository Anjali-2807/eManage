document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const nextBtn = document.getElementById('nextBtn');
    const applyBtns = document.querySelectorAll('.applyBtn');
    const backBtns = document.querySelectorAll('.backBtn');
    
    const pages = document.querySelectorAll('.page');
    
    loginBtn.addEventListener('click', function() {
        showPage('infoPage');
    });
    
    nextBtn.addEventListener('click', function() {
        showPage('centerPage');
    });
    
    applyBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            showPage('thankYouPage');
        });
    });
    
    backBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const currentPage = document.querySelector('.page:not(.hidden)').id;
            if (currentPage === 'infoPage') {
                showPage('loginPage');
            } else if (currentPage === 'centerPage') {
                showPage('infoPage');
            } else if (currentPage === 'thankYouPage') {
                showPage('centerPage');
            }
        });
    });
    
    function showPage(pageId) {
        pages.forEach(function(page) {
            if (page.id === pageId) {
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
            }
        });
    }
});


