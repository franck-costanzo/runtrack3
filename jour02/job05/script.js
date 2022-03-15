document.addEventListener("DOMContentLoaded", (event) => {

    let footer = document.querySelector('footer');
    let proportion = document.body.offsetHeight - window.innerHeight;

    document.addEventListener('scroll', function loadingBar(){

        let scrollPosition = 100*(window.scrollY / proportion);
        footer.setAttribute('style', '--position: '+scrollPosition+'%')
    })

})