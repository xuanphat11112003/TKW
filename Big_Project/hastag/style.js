$(function(){
    $("#banner h1").animate({
        opacity:1,
    },2000)
})
$(function(){
    $(window).scroll(function(event){
        var x=$("html, body").scrollTop();
        var u=$('.Item').offset().top;
        var y=$('.okok').offset().top;
        var z=$('.photo').offset().top;
        if(x>u-500){
            $('.text p').addClass('xuanphat');
            $('.img-item img').animate({
                opacity:1,
            },2000)
            $('.text h1').animate({
                opacity:1,
            },500)
            $('.text p').css("left","0%")
        }
        if(x>y-500){
            $('.okok .anh').animate({
                "right": "0%",
            },1000)
            $('.doanvan p').animate({
                "left": "0",
            },1000)
            $('.doanvan h1').animate({
                opacity:1,
            },2000)
        }
        if(x>z-500){
            $('#category-1').animate({
                "opacity": "1",
            },2000)
            $('#category-2').animate({
                "opacity":"1",
            },3000)
            $('#category-3').animate({
                "opacity":"1",
            },4000)
        }
})
})