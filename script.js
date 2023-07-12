(function () {
    const bodyEml           = document.querySelector('body');
    const navLinksElm       = document.querySelector('.nav-links');
    const hamburgerElm      = document.querySelector('.hamburger');
    const hamburgerLineElm  = document.querySelectorAll('.hamburger div');
    const workEml           = document.querySelectorAll('.works a');
    const modalWindowElm    = document.querySelector('.modal-window');
    const modalClossElm     = document.querySelector('.modal-closs');
    const modalBodyImgElm   = document.querySelectorAll('.modal-body img');

    // スクロール制御
    function ToggleScrolling(){
        if (!(bodyEml.style.overflow === 'hidden')) {
            bodyEml.style.overflow = 'hidden';
        }else{
            bodyEml.style.overflow = '';
        }
    }

    //モーダルに写真を追加する
    function SetModalImages(target){
        modalBodyImgElm.forEach((elm, index)=>{
        const imageUrl = `img/${target}/${index + 1}.png`;
        const imgElement = document.getElementById(`img${index + 1}`);
        imgElement.src = imageUrl;
        })
    }

    hamburgerElm.addEventListener('click',(e)=>{
        e.preventDefault();
        ToggleScrolling();
        //ハンバーガーメニューをアクティブにする
        navLinksElm.classList.toggle('nav-active');
        
        //ハンバーガーメニューをtransformさせる
        hamburgerLineElm.forEach((elm)=>{
            elm.classList.toggle('toggle');
        });
    });

    //モーダル表示
    workEml.forEach((elm)=>{
        elm.addEventListener('click',(e)=>{
            e.preventDefault();
            ToggleScrolling();
            
            SetModalImages(e.target.alt);

            const y = window.scrollY;
            modalWindowElm.style.top = y + 'px';

            if(modalWindowElm.classList.contains('modal-close')){
                modalWindowElm.classList.remove('modal-close');
            }

            modalWindowElm.classList.add('modal-open');
        })
    })

    //モーダル非表示
    modalClossElm.addEventListener('click',(e)=>{
        e.preventDefault();
        ToggleScrolling();
        
        modalWindowElm.classList.add('modal-close');
        modalWindowElm.classList.remove('modal-open');
    });

}());

