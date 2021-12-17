


$(function(){

    
   menu =  gsap.fromTo('.menu li',{
        opacity:0,
        y:-20+'%'
    },{
        opacity:1,
        stagger:0.3,
        duration:1,
        y:0
    })

    menu.pause();
$('.hd_menu').click(function(e){
    e.preventDefault(); 
    $('.menu').addClass('on');
    menu.restart();//다시 닫았다가 눌러도 재시작 **
})

$('.menu .close').click(function(e){
    e.preventDefault();
    $('.menu').removeClass('on');
}) 


gsap.to('.main_visual .img_wrap img',{
    scrollTrigger:{
        trigger:'.main_visual',
        start:"0% top",
        end:"80% 50%",
        // markers:true,
        scrub:2, 
        pin:'.main_visual' 
    },
    scale:1.6,
    rotate:1.5,
    y:-10+"%",
})


gsap.to('.main_visual .t_wrap h2',{
    scrollTrigger:{
        trigger:'.main_visual',
        start:"0% top",
        end:"80% 50%",
         //markers:true,
        scrub:2, 
        pin:'.main_visual',
    },
     y:-100+"%",
     opacity:1,
     "filter": "blur(0px)",
     
})
//통합형 끝 ** 
gsap.to('.main_visual .t_wrap .btn',{
    scrollTrigger:{
        trigger:'.main_visual',
        start:"0% top",
        end:"80% 50%",
        // markers:true,
        scrub:2,
        pin:'.main_visual',
    },
     y:-50+"%",
     opacity:1,
     "filter": "blur(0px)",
     
})



let txtEffect = gsap.timeline({ 
    scrollTrigger:{
        trigger:'.sc_intro',
        start:"0% 80%",
        // markers:true,
        toggleActions:"play pause resume reset",
    },
})


txtEffect.fromTo('.sc_intro h2 span',{
    opacity:0,
    "filter": "blur(12px)", 
    y:60+"%",

},{
    opacity:1,
    stagger:0.8,
    "filter": "blur(0px)",
    duration:2,
    y:0,
   
}) // 분리형 



let intEffect = gsap.timeline({ 
    scrollTrigger:{
        trigger:'.sc_explain',
        start:"0% 80%",
        end:"bottom bottom",
        // markers:true,
  
        toggleActions:"play pause resume reset",
    },
})


intEffect.fromTo('.sc_explain .pd_int',{
    opacity:0,
    "filter": "blur(6px)",
    y:70+"%",
   
 
},{
    opacity:1,
    "filter": "blur(0px)",
    y:0,
    duration:1.5,
}) // 분리형 


let twrapEffect = gsap.timeline({ 
    scrollTrigger:{
        trigger:'.sc_explain',
        start:"-10% top",
        // markers:true,
 
        toggleActions:"play pause resume reset",
      
    },
})


twrapEffect.fromTo('.sc_explain .txt_wrap',{
    opacity:0,
    "filter": "blur(3px)", //블러처리 
    y:5+"%",
   
 
},{
    opacity:1,
    "filter": "blur(0px)",
    y:0,
    duration:1,
}) // 분리형 




$('.effect_img3').each(function(index, item){ 

    effectimg = gsap.timeline({
        scrollTrigger:{
            trigger:item,
            start:"top 80%",
            end:"bottom 0%",
            // markers:true,
            scrub:1,
        }
    })
    effectimg.to(item, { scale:1.2 })

});



$('.effect_img').each(function(index, item){  
  

    effectimg = gsap.timeline({
        scrollTrigger:{
            trigger:item,
            start:"top 80%",
            end:"bottom 0%",
            // markers:true,
            scrub:1,

        }
    })
    effectimg.to(item, { y:-150 })

});




$('.effect_img2').each(function(index, item){ 

    effectimg = gsap.timeline({
        scrollTrigger:{
            trigger:'.img_box01',
            start:"top 80%",
            end:"bottom 0%",
           // markers:true,
            scrub:1,
        }
    })
    effectimg.to(item, { scale:1.5 })

});




$('.effect_txt').each(function(index, item){ 

    effectimg = gsap.timeline({
        scrollTrigger:{
            trigger:'.img_box01',
            start:"top 0%",
            end:"bottom 0%",
            //markers:true,
            scrub:1,
        }
    })
    effectimg.to(item, { y:-200 })

});



$('.effect_txt2').each(function(index, item){ 

    effectimg = gsap.timeline({
        scrollTrigger:{
            trigger:item,
            start:"top 80%",
            end:"bottom 0%",
            // markers:true,
            scrub:1,
        }
    })
    effectimg.to(item, { x:50 })

});

let txtEffect2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc_noise .wrap',
        start:"-10% 0%",// 첫번째 top은 element 기준의 시작점(start), 두번째는 브라우저의 시작점(scroll-start)
        end: 'bottom 0%',
        //markers:true,
        pin:'.sc_noise',
        scrub:1,
    },
});

txtEffect2.fromTo('.sc_noise .wrap .left',{
    opacity:0,
    "filter": "blur(6px)",
    xPercent:-10,
},{
    opacity:1,
    "filter": "blur(0px)",
    stagger:3,
    duration:2,
    xPercent:0,
},-1) // 텍스트 효과 넣었고 첫번째 

txtEffect2.fromTo('.sc_noise .wrap .right',{
    opacity:0,
    "filter": "blur(6px)",
    xPercent:20,
},{
    opacity:1,
    "filter": "blur(0px)",
    stagger:3,
    duration:2,
    xPercent:0,
},-1)//이미지 효과 넣었고 두번째 -0.5는 좀 더 빨리 움직이도록 음수를 넣음

txtEffect2.fromTo('.sc_noise .wrap p',{
    opacity:0,
    "filter": "blur(6px)",
    yPercent:30,
},{
    opacity:1,
    "filter": "blur(0px)",
    stagger:1,
    duration:1,
    yPercent:0,
 
});// 마지막 효과 넣기 세번째




let fixEffect = gsap.timeline({
    scrollTrigger:{
        trigger:'.img_box02',
        start:"0% 0%",
    //    markers:true
        pin:'.img_box02',
        scrub:1,
    },
});


fixEffect.fromTo('.img_box02 .img_wrap .img_txt',{
    opacity:0,
    "filter": "blur(12px)"
},{
    opacity:1,
    stagger:0.3,
    "filter": "blur(0px)",
    duration:3,
})

fixEffect.to('.img_box02 .img_wrap img',{
    scale:1.2,
    // "filter": "blur(20px)"
    //duration:10,
},-0.5)





let imgEffect4 = gsap.timeline({ 
    scrollTrigger:{
        trigger:'.img_box03',
        start:"20% 10%",
        //markers:true,
         pin:'.img_box03',
 
        toggleActions:"play play resume reset",
      
    },
})



imgEffect4.fromTo('.img_box03 h3 span:nth-child(1)',{
    opacity:0,
    "filter": "blur(6px)",
    xPercent:-10,

},{
    opacity:1,
    "filter": "blur(0px)",
    stagger:2,
    duration:2,
    xPercent:-50,

},-1) // 텍스트 효과 넣었고 첫번째 

imgEffect4.fromTo('.img_box03 h3 span:nth-child(2)',{
    opacity:0,
    "filter": "blur(6px)",
    xPercent:20,

},{
    opacity:1,
    "filter": "blur(0px)",
    stagger:3,
    duration:2,
    xPercent:-50,
},-1)

imgEffect4.fromTo('.effect_img4',{
    opacity:0,
    "filter": "blur(3px)",
    y:10+"%",
    x:-50 + '%'
   
 
},{
    opacity:1,
    "filter": "blur(0px)",
    y:0,
    x:-50 + '%'
    // duration:1,

}); 




let imgEffect5 = gsap.timeline({ 
    scrollTrigger:{
        trigger:'.sip',
        start:"-50% top",
     
        toggleActions:"play play resume reset",
      
    },
})


imgEffect5.fromTo('.sip div',{
    opacity:0,
    y:-20+'%',
    scrub:1,
},{
    opacity:1,
    stagger:0.3,// li의 순차대로 실행되는 것
    duration:1,
    y:0
})







let listEffect = gsap.timeline({ 
    scrollTrigger:{
        trigger:'.sc_product',
        start:"0% 80%",
    
        toggleActions:"play pause resume reset",
    },
})


listEffect.fromTo('.sc_product li',{
    opacity:0,
    "filter": "blur(5px)", 
    y:5+"%",

},{
    opacity:1,
    stagger:0.9,
    "filter": "blur(0px)",
    duration:1,
    y:0,
   
}) // 분리형 


$('.f_menu > li > a').click(function(e){
    e.preventDefault(); 

    h = $(this).siblings('.tabCon').children('ul').outerHeight(); 

    

    if($(this).siblings('.tabCon').height() > 0){
        $('.tabCon').stop().animate({height:0},300);
        $(this).parents().removeClass('active');
    }else{
        $('.tabCon').stop().animate({height:0},300);
        $(this).siblings('.tabCon').stop().animate({height:h},300);
        $(this).parents().addClass('active');
    }

})


/* 스크립트 모션 04 */


 });