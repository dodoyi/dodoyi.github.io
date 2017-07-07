/**
 * Created by ASUS on 2017/5/3.
 */
var logo = document.getElementById("logo");
logo.onmouseover = function () {
    this.style.backgroundPositionY = "-119px";
}
logo.onmouseout = function () {
    this.style.backgroundPositionY = "";
}
function my$(id) {
    return document.getElementById(id);
}
//导航栏
function getScroll() {
    return{
        left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0,
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0
    };
}
var nav = document.getElementsByClassName("nav");
window.onscroll = function () {
    if(getScroll().top>=document.getElementsByClassName("top")[0].offsetHeight){
        nav.style.position = "fixed";
        nav.style.top = "0px"
    }
}