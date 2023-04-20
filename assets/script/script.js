const mobileMenuIcon = document.querySelector('#mobile-icon');

mobileMenuIcon.addEventListener('click', veiksmas =>{
    document.querySelector('.mobile_nav')
            .classList
            .toggle('show');
})

const mobileNav = document.querySelector('.mobile_nav');

mobileNav.addEventListener('click', veiksmas =>{
    document.querySelector('.mobile_nav')
            .classList
            .remove('show');
})