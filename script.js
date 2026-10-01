(function(){
  var WHATS='5565999883109'; // WhatsApp da Clinica Andre Rezende
  document.querySelectorAll('[data-wa]').forEach(function(a){
    a.href='https://wa.me/'+WHATS+'?text='+encodeURIComponent(a.getAttribute('data-wa'));
    a.target='_blank'; a.rel='noopener';
  });
  document.getElementById('ano').textContent=new Date().getFullYear();
  var nav=document.getElementById('nav'),burger=document.getElementById('burger'),menu=document.getElementById('menu');
  function onScroll(){nav.classList.toggle('is-scrolled',window.scrollY>30)}
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  burger.addEventListener('click',function(){var o=menu.classList.toggle('is-open');burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Fechar menu':'Abrir menu')});
  menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('is-open');burger.setAttribute('aria-expanded','false')}});
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});els.forEach(function(el){io.observe(el)})}
  else els.forEach(function(el){el.classList.add('is-in')});
  document.querySelectorAll('.car').forEach(function(c){var t=c.querySelector('.car__track');c.querySelectorAll('.car__btn').forEach(function(b){b.addEventListener('click',function(){t.scrollBy({left:t.clientWidth*0.8*Number(b.dataset.dir),behavior:'smooth'})})})});
  // parallax sutil so no desktop
  var pf=document.querySelector('[data-parallax]');
  var desk=window.matchMedia('(min-width:1024px) and (pointer:fine)').matches&&!window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(pf&&desk){var tk=false;window.addEventListener('scroll',function(){if(tk)return;tk=true;requestAnimationFrame(function(){var y=Math.min(window.scrollY,700);pf.style.transform='translateY('+(y*0.06)+'px)';tk=false})},{passive:true})}
})();
