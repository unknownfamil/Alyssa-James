let video = document.getElementById('myVideo');
let btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    if(video.muted){
        video.muted = false;
        video.play();
    } else{
        video.play();
    }
});

window.addEventListener('scroll', reveal);
 function reveal(){
    let images = document.querySelectorAll('img');
    for( let i = 0; i < images.length; i++){
        let windowheight = window.innerHeight;
        let revealtop = images[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            images[i].classList.add('active');
        }
        else{
            images[i].classList.remove('active');
        }
    }
 }
// let video = document.getElementById('myVideo');

// window.addEventListener('load', ()=>{
//     if(video.muted){
//          video.muted = false;
//          video.play();
//      } else{
//          video.play();
//      }
// });