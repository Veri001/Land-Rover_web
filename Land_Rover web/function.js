function topScroll(){
    const topScrollCont = document.getElementById('top-scroll-content')
    if (this.scrollY >= 500){
        topScrollCont.classList.add('top-scroll-up')
    }
    else{
        topScrollCont.classList.remove('top-scroll-up')
    }
}
window.addEventListener('scroll', topScroll)
const topScrollContClick = document.querySelector('.top-scroll-content')
topScrollContClick.addEventListener('click', function(){
    scrollBy(0,0)
})

const contentText1 = document.querySelector('.content-all-img .img-text-1')
const contentText2 = document.querySelector('.content-all-img .img-text-2')
const contentText3 = document.querySelector('.content-all-img .img-text-3')
const contentText4 = document.querySelector('.content-all-img .img-text-4')
const contentText5 = document.querySelector('.content-all-img .img-text-5')
const contentText6 = document.querySelector('.content-all-img .img-text-6')


const contentImageGallery1 = document.querySelector('.image-content .img1')
const contentImageGallery2 = document.querySelector('.image-content .img2')
const contentImageGallery3 = document.querySelector('.image-content .img3')
const contentImageGallery4 = document.querySelector('.image-content .img4')
const contentImageGallery5 = document.querySelector('.image-content .img5')
const contentImageGallery6 = document.querySelector('.image-content .img6')


contentText1.addEventListener('mouseover', function(){
    contentImageGallery1.style.transform = 'scale(1.2)'
    contentImageGallery1.style.opacity = '1'
    contentImageGallery1.style.zIndex = 10
})
contentText1.addEventListener('mouseout', function(){
    contentImageGallery1.style.transform = 'scale(1)'
    contentImageGallery1.style.opacity = '0.6'
    contentImageGallery1.style.zIndex = 1
})
contentImageGallery1.addEventListener('mouseover', function(){
    contentImageGallery1.style.transform = 'scale(1.2)'
    contentImageGallery1.style.opacity = '1'
    contentImageGallery1.style.zIndex = 10
})
contentImageGallery1.addEventListener('mouseout', function(){
    contentImageGallery1.style.transform = 'scale(1)'
    contentImageGallery1.style.opacity = '0.6'
    contentImageGallery1.style.zIndex = 1
})

contentText2.addEventListener('mouseover', function(){
    contentImageGallery2.style.transform = 'scale(1.2)'
    contentImageGallery2.style.opacity = '1'
    contentImageGallery2.style.zIndex = 10
})
contentText2.addEventListener('mouseout', function(){
    contentImageGallery2.style.transform = 'scale(1)'
    contentImageGallery2.style.opacity = '0.6'
    contentImageGallery2.style.zIndex = 1
})
contentImageGallery2.addEventListener('mouseover', function(){
    contentImageGallery2.style.transform = 'scale(1.2)'
    contentImageGallery2.style.opacity = '1'
    contentImageGallery2.style.zIndex = 10
})
contentImageGallery2.addEventListener('mouseout', function(){
    contentImageGallery2.style.transform = 'scale(1)'
    contentImageGallery2.style.opacity = '0.6'
    contentImageGallery2.style.zIndex = 1
})

contentText3.addEventListener('mouseover', function(){
    contentImageGallery3.style.transform = 'scale(1.2)'
    contentImageGallery3.style.opacity = '1'
    contentImageGallery3.style.zIndex = 10
})
contentText3.addEventListener('mouseout', function(){
    contentImageGallery3.style.transform = 'scale(1)'
    contentImageGallery3.style.opacity = '0.6'
    contentImageGallery3.style.zIndex = 1
})
contentImageGallery3.addEventListener('mouseover', function(){
    contentImageGallery3.style.transform = 'scale(1.2)'
    contentImageGallery3.style.opacity = '1'
    contentImageGallery3.style.zIndex = 10
})
contentImageGallery3.addEventListener('mouseout', function(){
    contentImageGallery3.style.transform = 'scale(1)'
    contentImageGallery3.style.opacity = '0.6'
    contentImageGallery3.style.zIndex = 1
})

contentText4.addEventListener('mouseover', function(){
    contentImageGallery4.style.transform = 'scale(1.2)'
    contentImageGallery4.style.opacity = '1'
    contentImageGallery4.style.zIndex = 10
})
contentText4.addEventListener('mouseout', function(){
    contentImageGallery4.style.transform = 'scale(1)'
    contentImageGallery4.style.opacity = '0.6'
    contentImageGallery4.style.zIndex = 1
})
contentImageGallery4.addEventListener('mouseover', function(){
    contentImageGallery4.style.transform = 'scale(1.2)'
    contentImageGallery4.style.opacity = '1'
    contentImageGallery4.style.zIndex = 10
})
contentImageGallery4.addEventListener('mouseout', function(){
    contentImageGallery4.style.transform = 'scale(1)'
    contentImageGallery4.style.opacity = '0.6'
    contentImageGallery4.style.zIndex = 1
})

contentText5.addEventListener('mouseover', function(){
    contentImageGallery5.style.transform = 'scale(1.2)'
    contentImageGallery5.style.opacity = '1'
    contentImageGallery5.style.zIndex = 10
})
contentText5.addEventListener('mouseout', function(){
    contentImageGallery5.style.transform = 'scale(1)'
    contentImageGallery5.style.opacity = '0.6'
    contentImageGallery5.style.zIndex = 1
})
contentImageGallery5.addEventListener('mouseover', function(){
    contentImageGallery5.style.transform = 'scale(1.2)'
    contentImageGallery5.style.opacity = '1'
    contentImageGallery5.style.zIndex = 10
})
contentImageGallery5.addEventListener('mouseout', function(){
    contentImageGallery5.style.transform = 'scale(1)'
    contentImageGallery5.style.opacity = '0.6'
    contentImageGallery5.style.zIndex = 1
})

contentText6.addEventListener('mouseover', function(){
    contentImageGallery6.style.transform = 'scale(1.2)'
    contentImageGallery6.style.opacity = '1'
    contentImageGallery6.style.zIndex = 10
})
contentText6.addEventListener('mouseout', function(){
    contentImageGallery6.style.transform = 'scale(1)'
    contentImageGallery6.style.opacity = '0.6'
    contentImageGallery6.style.zIndex = 1
})
contentImageGallery6.addEventListener('mouseover', function(){
    contentImageGallery6.style.transform = 'scale(1.2)'
    contentImageGallery6.style.opacity = '1'
    contentImageGallery6.style.zIndex = 10
})
contentImageGallery6.addEventListener('mouseout', function(){
    contentImageGallery6.style.transform = 'scale(1)'
    contentImageGallery6.style.opacity = '0.6'
    contentImageGallery6.style.zIndex = 1
})

/* navbar hide */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

/*animation*/

window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i< reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}