let item = document.querySelectorAll('.item');
let caja = document.querySelector('.caja');
let mover = document.querySelector('.mover');
let m = 250;
item.forEach(function(e,i) {
 e.style.transform = `translatex(${100+i*m}px)`+'skew(-9deg)';
});
let n = 0;
let x = 200;
caja.addEventListener('click',function() {
mover.style.transform += `translatex(${-x}px)`; 
n += 1;
if(n == 14) {
   x = -200;
}
else if(n == 28) {
   x = 200;
   n = 0;
}
console.log(n)
});


