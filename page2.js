let count=0;
let nextBtn=document.querySelector('#next')

function openGift() {
    const giftBox = document.querySelector('.gift-box');
    const message = document.getElementById('message');
    const images = document.getElementById('image-container');

    giftBox.style.animation = 'none';
    giftBox.style.backgroundColor = '#27ae60';
    message.style.display = 'block';
    count++;

    // Reveal images
    setTimeout(() => {
        images.style.display = 'flex';
    }, 500);
}
nextBtn.addEventListener("click",()=>{
if(count==1)
{
    window.location.href="page3.html";
}
})