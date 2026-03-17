
// Horizontal drag scroll on regions
const scroll = document.getElementById('regScroll');
let isDown=false,startX,scrollLeft;
scroll.addEventListener('mousedown',e=>{isDown=true;scroll.style.cursor='grabbing';startX=e.pageX-scroll.offsetLeft;scrollLeft=scroll.scrollLeft});
scroll.addEventListener('mouseleave',()=>{isDown=false;scroll.style.cursor='grab'});
scroll.addEventListener('mouseup',()=>{isDown=false;scroll.style.cursor='grab'});
scroll.addEventListener('mousemove',e=>{if(!isDown)return;e.preventDefault();const x=e.pageX-scroll.offsetLeft;scroll.scrollLeft=scrollLeft-(x-startX)*1.5});
