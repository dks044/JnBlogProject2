/*default*/
var navHeight 
= document.getElementById('navbar').offsetHeight;//상단메뉴바 높이
console.log(skills_Location);
/*default*/
/*nav start*/
/*nav 스크롤할떄 색변화*/
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
/*nav 스크롤할떄 색변화*/
/*nav 각 링크 누를떄 해당탭으로 이동*/
var nav_brand = document.getElementById('nav_brand').
addEventListener('click',function a(){
    window.scrollTo({top:0, behavior:'smooth'});
})

var nav_aboutme = document.getElementById('nav_aboutme').
addEventListener('click',function() {
    window.scrollTo
    ({top:aboutme_Location - navHeight+10, behavior:'smooth'});
})
var nav_skills = document.getElementById('nav_skills').
addEventListener('click',function c() {
    window.scrollTo
    ({top:skills_Location - navHeight+10, behavior:'smooth'});
})
var nav_archiving = document.getElementById('nav_archiving').
addEventListener('click',function d() {
    window.scrollTo
    ({top:archiving_Location - navHeight+10, behavior:'smooth'});
})
var nav_project = document.getElementById('nav_project').
addEventListener('click',function e() {
    window.scrollTo
    ({top:project_Location - navHeight+10, behavior:'smooth'});
})
/*nav end*/
/*main start*/
//더알아보기 클릭할떄 aboutme로 이동
var moreInfo =document.getElementById('moreInfo').addEventListener
('click',function(){
    window.scrollTo
    ({top:aboutme_Location - navHeight+10, behavior:'smooth'});
})
/*main end*/
/*aboutme start*/
var aboutme_Location = document.getElementById('aboutMe').offsetTop;
/*aboutme end*/
/*skills start*/
var skills_Location = document.getElementById('skill').offsetTop
/*skills end*/
/*archiving start*/
var archiving_Location = document.getElementById('archiving').offsetTop;
/*archiving end*/
/*project start*/
var project_Location = document.getElementById('project').offsetTop;
/*project end*/ 