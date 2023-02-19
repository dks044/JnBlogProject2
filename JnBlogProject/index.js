/*default*/
var navHeight = document.getElementById('navbar').offsetHeight;//상단메뉴바 높이
/*default*/
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 10){
       navColorWhite();
    }else{
       navColorTransparent();
    }
  })
function navColorWhite(){
    var nav = document.getElementById('navbar')
    navbar.style.backgroundColor='white';
}
function navColorTransparent(){
    var navbar = document.getElementById('navbar')
    navbar.style.backgroundColor='transparent';
}