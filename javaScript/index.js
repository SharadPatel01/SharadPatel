
    const realWidth = window.screen.availWidth;
    
    async function screenchk(){
        if(realWidth<768)
        {
            
            const ele = await document.getElementById("artSlide");
            console.log("small screen");
            await ele.classList.add("mySwiper");
            var swiper = new Swiper(".mySwiper", {
                loop:true,
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                },
                pagination: {
                el: ".swiper-pagination",
                clickable: true,
                },
                navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                },
            });

        }
}
        
