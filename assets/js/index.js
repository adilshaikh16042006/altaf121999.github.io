let cursor = document.getElementById("cursor")
let cursor1 = document.getElementById("cursor1")
let text = document.getElementById('text')
let list = document.getElementById('list')
let loader = document.querySelector(".loader");
let section = document.querySelectorAll('section');
let height = window.innerHeight;
let span = document.querySelectorAll('#list span');

window.onload = (event) => {
  setTimeout(() => {
    loader.style.visibility="hidden";
    loader.style.transitionDelay="2000ms";
  },3000);
};
document.addEventListener("mousemove", function(e) {
    let x = e.clientX - 25;
    let y = e.clientY - 25;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
})
document.addEventListener("mousemove", function(e) {
    let y = e.clientY -3;
    let x = e.clientX -3;
    cursor1.style.left = `${x}px`;
    cursor1.style.top = `${y}px`;
})
// window.addEventListener('scroll', function (){
//   let scrollY = window.scrollY;
//   section.forEach(function(section , i){
//       if(section.offsetTop < scrollY + height/2 &&scrollY < section.offsetTop + height/2){
//             span[i].classList.add('selected');
//       }
//       else{
//             span[i].classList.remove('selected');
//       }
//   })  
// })


  
// particlesJS.load('particles-js', 'particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

const shop = [ "banana", "apple", "cherry"]; 
// for (var i = 0; i < shop.length; i++) {
//   console.log(shop[i])
// }
// console.log(shop)
shop.forEach((fruits,index)=>{
  console.log(`<li>${index} Fruits:${fruits}</li>`)
  // document.write(`${fruits}`)
})