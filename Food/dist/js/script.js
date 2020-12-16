"use strict";
window.addEventListener('DOMContentLoaded', () =>{

    //TABS

    let tabsContent = document.querySelectorAll('.tabcontent');
    let tabsPerent = document.querySelector('.tabheader__items');
    let tabs = document.querySelectorAll('.tabheader__item');

    
    function hideTabContent() {
        tabsContent.forEach(item =>{
            item.style.display = "none";
            console.dir(item);

        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
            
        });
    }

    function showTabConten(i=0) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabConten();

    tabsPerent.addEventListener('click', (event) =>{
        let target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item , i) =>{
                if (target==item) {
                    hideTabContent();
                    showTabConten(i);
                }
            });
        }
    });

    //MODAL

    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('[data-close]');

    function modalShow() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearTimeout(modalTimer);
    }

    modalTrigger.forEach(btn =>{
        btn.addEventListener('click',modalShow);
    });

    function modalHide() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', modalHide);

    modal.addEventListener('click', (e)=>{
        if(e.target ===modal && modal.classList.contains('show')){
            modalHide();
        }
    });
   
    document.addEventListener('keydown',(e)=>{
       if (e.code === "Escape"){
           modalHide();
       } 
    });

    const modalTimer = setTimeout(modalShow , 10000);

        function modalShowScroll() {
            let a = window.pageYOffset,
                b = document.documentElement.clientHeight,
                c = document.documentElement.scrollHeight;
            if (a + b >= c) {
                modalShow();
                window.removeEventListener('scroll', modalShowScroll);
            } 
        }

    window.addEventListener('scroll', modalShowScroll);
    


    // CARDS

    class Cards{
        constructor(img, alt, title, descr, price ) {
            this.img = img,
            this.alt = alt,
            this.title = title,
            this.descr = descr,
            this.price = price
        }
        
        priceTotal(){
            this.price = this.price*20;
            
        }
        createCard(){
            const cardsMenu = document.querySelector('.menu .container')
            const div = document.createElement('div');
            div.classList.add('menu__item');
            div.innerHTML =`
                    <img src=${this.img} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>`;
            cardsMenu.append(div);
            
            
        }
    }
    const card = new Cards('img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"','Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',10);
    console.log();
    card.priceTotal();
    card.createCard();
    //card.priceTotal(this.price);


    //form
    let forms = document.querySelectorAll('form');

    const message={
        loading: 'Загрузка',
        success: 'Спасибо',
        failure: 'что то пошло нетак'
    };

    forms.forEach(item =>{
        postData(item);
    });
    
    function postData(form) {
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            const statusMessage = document.createElement("div");
            statusMessage.classList.add('status');
            statusMessage.textContent= message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            //request.setRequestHeader('Content-type', 'multipart/fotm-data');
            const formData = new FormData(form);
            request.send(formData);

            request.addEventListener('load', ()=>{
                if (request.status===200){
                    console.log(request.response);
                    statusMessage.textContent= message.success;
                } else{
                    statusMessage.textContent= message.failure;
                }
            });


        });
        
    }


});