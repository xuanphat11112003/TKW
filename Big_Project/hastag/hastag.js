
$(function lp(){
    var xp =setInterval(function(){
    var s =$(".items").offset().left;
    var x =$(".item1").offset().left;
    var y=$(".item2").offset().left;
    var z=$(".item3").offset().left;
    $(".buttons input").css("border-radius", "0px")
    if((x-s)>0 && (x-s) <5){
        $("#item10").css("border-radius", "10px")
       setTimeout(function(){
        $(".item3").animate({
            left: 5000
        },1000)
        $(".item1").slideUp(1000);
        $(".item2").animate({
            left: 0
        },1000)
       },900)
    }
    if((y-s)>0 && (y-s) <5){
        $("#item20").css("border-radius", "10px")
       setTimeout(function(){
        $(".item3").animate({
            left: 0
        },1000)
        $(".item2").animate({
            left: 1500
        },1000)
        $(".item1").slideUp(1000);
       },900)
    }
    if((z-s)>0 && (z-s) <5){
        $("#item30").css("border-radius", "10px")
       setTimeout(function(){
        $(".item1").slideDown(1000);
        $(".item2").animate({
            left: 5000
        },1000)
        $(".item3").animate({
            left: 5000
        },2000)
       },900)
    }
    },2100)
    $("#item10").click(function(){
        clearInterval(xp);
        $(".buttons input").css("border-radius", "0px")
        $("#item10").css("border-radius", "10px")
        $(".item1").slideDown(500);
        $(".item2").animate({
            left: 5000
        },1000)
        $(".item3").animate({
            left: 5000
        },500)
    })
    $("#item20").click(function(){
        clearInterval(xp);
        $(".buttons input").css("border-radius", "0px")
        $("#item20").css("border-radius", "10px")
        $(".item3").animate({
            left: 5000
        },1000)
        $(".item1").slideUp(500);
        $(".item2").animate({
            left: 0
        },500)
    })
    $("#item30").click(function(){
        clearInterval(xp);
        $(".buttons input").css("border-radius", "0px")
        $("#item30").css("border-radius", "10px")
        $(".item3").animate({
            left: 0
        },500)
        $(".item2").animate({
            left: 5000
        },1000)
        $(".item1").slideUp(500);
    })
})

$(function(){
    $(window).scroll(function(event){
        var x=$("html, body").scrollTop();
        var u=$('.chose>a:first-child').offset().top;
        var y=$('.chose>a:last-child').offset().top;
        if(x>100){
            $('.container').addClass('codinh');
        }
        else {
            $('.container').removeClass('codinh');
        }
        if(x>u-400){
            $('.chose a:nth-child(1)').animate({
                opacity: 1
            },1000)
            $('.chose a:nth-child(2)').animate({
                opacity: 1
            },2000)
            $('.chose a:nth-child(3)').animate({
                opacity: 1
            },3000)
        }
        if(x>y-600){
            $('.chose a:nth-child(4)').animate({
                opacity: 1
            },1000)
            $('.chose a:nth-child(5)').animate({
                opacity: 1
            },2000)
        }
        
    })
})