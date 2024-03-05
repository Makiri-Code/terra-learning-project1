const navBar = document.getElementById('nav-bar');
const navIcon = document.getElementById('nav-icon');

const showHamburger = () => {
    if( navBar.classList === 'nav-bar-container') {
        navBar.classList += ' responsive';
    } else {
        navBar.classList === 'nav-bar-container';
    }
    console.log('button is working')
};

navIcon.addEventListener('click', showHamburger)