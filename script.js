(function () {
    const navLinksElm = document.querySelector('.nav-links');
    const hamburgerElm = document.querySelector('.hamburger');
    const hamburgerLineElm = document.querySelectorAll('.hamburger div');
        
    console.log(hamburgerLineElm);
    hamburgerElm.addEventListener('click',()=>{
        navLinksElm.classList.toggle('nav-active');
        
        hamburgerLineElm.forEach((elm)=>{
            elm.classList.toggle('toggle');
        });
    });
}());
