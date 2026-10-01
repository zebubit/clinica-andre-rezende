(function(){
  // palavras do titulo entram em sequencia
  document.querySelectorAll('#h1 .w').forEach(function(w,i){w.style.setProperty('--i',i)});
  // relogio ao vivo (horario de Cuiaba)
  var hr=document.getElementById('hora');
  function tick(){try{hr.textContent=new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Cuiaba',hour:'2-digit',minute:'2-digit'}).format(new Date())+' · 24h'}catch(e){hr.textContent='24 horas'}}
  if(hr){tick();setInterval(tick,20000)}
  // parallax por camadas no mouse (so desktop, sem reduced-motion)
  var st=document.getElementById('stage');
  if(st&&window.matchMedia('(min-width:1024px) and (pointer:fine)').matches&&!window.matchMedia('(prefers-reduced-motion:reduce)').matches){
    var layers=st.querySelectorAll('[data-depth]');
    st.addEventListener('mousemove',function(e){var r=st.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;layers.forEach(function(l){var d=+l.dataset.depth;l.style.transform='translate3d('+(x*d)+'px,'+(y*d)+'px,0)'})});
    st.addEventListener('mouseleave',function(){layers.forEach(function(l){l.style.transform=''})});
  }
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
})();
