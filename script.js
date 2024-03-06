const openFaBar = document.getElementById("fa-bar");
const closeFaBar = document.getElementById("fa-xmark");

closeFaBar.hidden = "false"

const openSideBar = () => {
    closeFaBar.hidden = "true"
    console.log('side bar is working')
}
openFaBar.addEventListener('click', openSideBar)