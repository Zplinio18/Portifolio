const header = document.querySelector('.navbar');

window.onscroll = () => {
    var top = window.scrollY;

    if (top >= 100) {
        header.classList.add('navbarDark');
    }else{
        header.classList.remove('navbarDark');
    }
}