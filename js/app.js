
    let screenHeight = $(window).height();
    console.log(screenHeight);


    $(window).scroll(function(){
        let currentPosition = $(this).scrollTop();
        if(currentPosition >= screenHeight-50){
            $(".site-nav").addClass("site-nav-scroll")
        }else{
            $(".site-nav").removeClass("site-nav-scroll")
        }
    });


    $(".navbar-toggler").click(function(){
        let result = $(".navbar-collapse").hasClass("show");
        console.log(result);
       
        if(result){
            $(".icon").toggleClass("fa-bars")

        }
        else{
            $(".icon").toggleClass("fa-xmark")

        }
    })


    const sectionAll = document.querySelectorAll('section[id]');
        window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sectionAll.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            console.log(sectionId);
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('li a[href*="' + sectionId + '"]').classList.add('active');
            } else {
            document.querySelector('li a[href*="' + sectionId + '"]').classList.remove('active');
            }
        });
        });


