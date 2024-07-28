var tg = new Date();
 function time() {
    let t = document.getElementById("timezone");
    t.innerHTML=`<h3>${tg.toDateString()}</h3>`
 }

 var demgio=setInterval(function(){
   tg=new Date();
   let gio=document.getElementById("hour");
   let phut=document.getElementById("minute");
   let giay=document.getElementById("second");
   var y= tg.getHours();
   if(y>9){
      gio.innerHTML=`<h3>${tg.getHours()}</h3>`;
   }
   else
   gio.innerHTML=`<h3>0${tg.getHours()}</h3>`;
   var x=tg.getMinutes();
   if(x>9){
      phut.innerHTML=`<h3>${tg.getMinutes()}</h3>`;
   }
   else
   phut.innerHTML=`<h3>0${tg.getMinutes()}</h3>`;
   var z=tg.getSeconds();
   if(z>9)
   giay.innerHTML=`<h3>${tg.getSeconds()}</h3>`;
   else
   giay.innerHTML=`<h3>0${tg.getSeconds()}</h3>`;
   
 },1000)

var DOMContentLoaded =setInterval( function() {
   var menu = document.querySelectorAll('div.clock');
   var menu = menu[0];
       //Truy xuất div menu
       var trangthai="duoi300";
   window.addEventListener("scroll",function(){
       var x = pageYOffset;
       if(x > 300){
           if(trangthai == "duoi300")
           {
               trangthai="tren300";
               menu.classList.add('codinh');
           }
       }
       else{
           if(trangthai=="tren300"){
           menu.classList.remove('codinh');
           trangthai="";}
       }
   })
}, 1000)
 
window.addEventListener('scroll',function(){
    var x=this.pageYOffset;
    var muiten= document.querySelectorAll('div.back-to-top');
     var muiten=muiten[0];
       if(x>500){
            muiten.classList.add('hienthi');
            muiten.addEventListener("click", function lp (){
                $("HTML, BODY").stop().animate({ scrollTop: 0 }, 1000);
        })
       }
       else {
            muiten.classList.remove('hienthi');
            muiten.removeEventListener('click'.lp()); 
       }
      
})

$(function(){
    $('#alls').click(function () {
        event.preventDefault();
        $('.up').css("display","block")
        $('.model').css("display","block")
        $('.word').css('display','block')
    })
    $('#words').click(function(){
        event.preventDefault();
        $('.up').css("display","none")
        $('.model').css("display","none")
        $('.word').css('display','block')
        $('.all').css('display','block')
    })
    $('#models').click(function(){
        event.preventDefault();
        $('.up').css("display","none")
        $('.model').css("display","block")
        $('.word').css('display','none')
        $('.all').css('display','block')
    })
    $('#ups').click(function(){
        event.preventDefault();
        $('.up').css("display","block")
        $('.model').css("display","none")
        $('.word').css('display','none')
        $('.all').css('display','block')
    })
})
