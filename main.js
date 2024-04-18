document.addEventListener('DOMContentLoaded', function() {
    let launchBtn = document.querySelector('.launch-btn');
    let dinnerBtn = document.querySelector('.dinner-btn');
    let breakfastBtn = document.querySelector('.breakfast-btn');

    let launchTab = document.querySelector('.account-form #launch');
    let dinnerTab = document.querySelector('.account-form #dinner');
    let breakfastTab = document.querySelector('.account-form #breakfast');

    dinnerBtn.addEventListener('click', function() {
        dinnerBtn.classList.add('active');
        launchBtn.classList.remove('active');
        breakfastBtn.classList.remove('active');
        
        dinnerTab.style.display = 'block';
        launchTab.style.display = 'none';
        breakfastTab.style.display = 'none';
    });

    launchBtn.addEventListener('click', function() {
        dinnerBtn.classList.remove('active');
        launchBtn.classList.add('active');
        breakfastBtn.classList.remove('active');
        
        dinnerTab.style.display = 'none';
        launchTab.style.display = 'block';
        breakfastTab.style.display = 'none';
    });

    breakfastBtn.addEventListener('click', function() {
        dinnerBtn.classList.remove('active');
        launchBtn.classList.remove('active');
        breakfastBtn.classList.add('active');
        
        dinnerTab.style.display = 'none';
        launchTab.style.display = 'none';
        breakfastTab.style.display = 'block';
    });
});







