$(function(){
    $(".has_dropdown").click(function () {
        var $ddis = $(this).children(".dropdown_panel");
        $ddis.slideToggle();


    })

    $(".portrait").click(function () {
        var heroBigImg = this.getAttribute("src")
        $(".mask").remove()
        $("<div class=mask style='background: url(\""+heroBigImg+"\") no-repeat'></div>").prependTo($(this).parent().parent());


        $(this).parent().parent().children(".mask").fadeIn(1000)
        $(this).parent().parent().css("zIndex",501).siblings().css("zIndex",500)

    })


    $(".hero-portrait-detailed").click(function () {
        //$(this).children("img").css({width:"500px"})
        return false;
    })

    //var dataGroups = $(".hero-portrait-detailed-container").attr("data-groups")

    //if(dataGroups == "['OFFENSE']"){
    //    console.log(1);
    //}

    //var dataGroups = $(".hero-portrait-detailed-container")[0].getAttribute("data-groups")





    //$("<img src='images/c8177f3e6709c93d912feee6973df8dcd00054c6.jpg'/>").css({position:"absolute",left: "-5px",top: "-4px",height:"52px",width:"26px"}).appendTo($(".icon"));
})
//var dataGroups = document.getElementsByClassName("hero-portrait-detailed-container")
//
//var dataGroups1 =  dataGroups[10].getAttribute("data-groups")
//console.log(dataGroups1);





//使图片按顺序排列开来
var porDetail = document.getElementsByClassName("hero-portrait-detailed-container");
for (var i = 0; i < porDetail.length; i++) {
    var left = i % 7;
    var top1 = Math.floor(i / 7)
    porDetail[i].style.transform = "translate3d(" + left * 163 + "px, " + top1 * 278 + "px, 0px) scale3d(1, 1, 1)"
}

//给导航加点击效果
var navLink = document.getElementsByClassName("navigation-item");
for (var i = 0; i < navLink.length; i++) {
    navLink[i].onclick = function () {
        for (var j = 0; j < navLink.length; j++) {
            navLink[j].className = "navigation-item";
        }
        this.className = "navigation-item active";
        var dataGroups = this.children[0].getAttribute("data-filter-key");
        var j = 0;
        for (var i = 0; i < porDetail.length; i++) {
            while (porDetail[i].getAttribute("data-groups") == "['" + dataGroups + "']") {
                var left = j % 7;
                var top1 = Math.floor(j / 7);
                porDetail[i].style.transform = "translate3d(" + left * 163 + "px, " + top1 * 278 + "px, 0px) scale3d(1, 1, 1)"
                porDetail[i].style.boxShadow = "inset 0 0 57px 14px rgba(0,195,255,.7)";
                porDetail[i].getElementsByClassName("container")[0].style.background = "rgba(0,195,255,.98)";
                porDetail[i].getElementsByClassName("portrait-title")[0].style.color = "#fff";
                j++;
                break;
            }
        }

        for (var i = 0; i < porDetail.length; i++) {
            while (porDetail[i].getAttribute("data-groups") !== "['" + dataGroups + "']") {
                left = j % 7;
                top1 = Math.floor(j / 7);
                porDetail[i].style.transform = "translate3d(" + left * 163 + "px, " + top1 * 278 + "px, 0px) scale3d(1, 1, 1)"
                porDetail[i].style.boxShadow = "";
                porDetail[i].getElementsByClassName("container")[0].style.background = "";
                porDetail[i].getElementsByClassName("portrait-title")[0].style.color = "";
                j++;
                break;
            }
        }
    }
}



//transform: translate3d(208px, 0px, 0px) scale3d(1, 1, 1);
//$(function () {
//    $('.hero-portrait-detailed').on('click', function() {
//        console.log(1);
//        $('#j_mask').show();
//        $('#j_formAdd').show();
//    });
//})


//.hero-portrait-detailed:before {
//    content: '';
//    display: block;
//    position: absolute;
//    top: 0;
//    left: 0;
//    width: 100%;
//    height: 100%;
//    box-shadow: inset 0 0 57px 14px rgba(0,195,255,.7);
//    visibility: hidden;
//    opacity: 0;
//    -webkit-transition: inherit;
//    transition: inherit;
//}




