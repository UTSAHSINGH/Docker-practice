/* THEME TOGGLE */
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') toggleSwitch.checked = true;
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);


/* SCROLL PROGRESS BAR */
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
});


/* MAGNETIC BUTTONS & ENHANCED CURSOR */
const cur=document.getElementById('cur'),ring=document.getElementById('ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});

// Custom cursor follow
(function tick(){
    cur.style.left=mx+'px';
    cur.style.top=my+'px';
    rx+=(mx-rx)*.12;
    ry+=(my-ry)*.12;
    ring.style.left=rx+'px';
    ring.style.top=ry+'px';
    requestAnimationFrame(tick);
})();

// Magnetic effect on elements
const magneticEls = document.querySelectorAll('.magnetic');
magneticEls.forEach(el => {
    el.addEventListener('mousemove', function(e) {
        const position = el.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    el.addEventListener('mouseout', function() {
        el.style.transform = `translate(0px, 0px)`;
    });
});

// Cursor size change on hover
document.querySelectorAll('a, button, .ring-card, .plat-card, .magnetic, .theme-switch').forEach(el=>{
  el.addEventListener('mouseenter',()=>{
      cur.style.width='18px';
      cur.style.height='18px';
      ring.style.width='50px';
      ring.style.height='50px';
      ring.style.borderColor = 'rgba(0,229,255,1)';
  });
  el.addEventListener('mouseleave',()=>{
      cur.style.width='10px';
      cur.style.height='10px';
      ring.style.width='34px';
      ring.style.height='34px';
      ring.style.borderColor = 'rgba(0,229,255,.5)';
  });
});


/* PARALLAX HERO BACKGROUND */
const heroGrid = document.querySelector('.hero-grid');
const heroGlow1 = document.querySelector('.hero-glow');
const heroGlow2 = document.querySelector('.hero-glow2');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    if(heroGrid) heroGrid.style.transform = `translate(${x * 0.8}px, ${y * 0.8}px)`;
    if(heroGlow1) heroGlow1.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
    if(heroGlow2) heroGlow2.style.transform = `translate(${x * -1.2}px, ${y * -1.2}px)`;
});


/* VANILLA-TILT.JS FOR 3D PROJECT CARDS */
function initTilt() {
    VanillaTilt.init(document.querySelectorAll(".proj-card"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02
    });
}
// Initialize after DOM loads
document.addEventListener('DOMContentLoaded', initTilt);


/* NAV */
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>60));

/* TYPEWRITER */
const phrases=['Utsah Singh','a CS Engineer','an ML Builder','a Full-Stack Dev','a Competitive Coder'];
let pi=0,ci=0,del=false;
const twEl=document.getElementById('tw');
function type(){
  const ph=phrases[pi];
  if(!del){twEl.textContent=ph.slice(0,++ci);if(ci===ph.length){setTimeout(()=>{del=true;type();},1800);return;}}
  else{twEl.textContent=ph.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%phrases.length;}}
  setTimeout(type,del?55:90);
}
type();

/* SCROLL REVEAL */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    e.target.classList.add('visible');
    obs.unobserve(e.target);
  });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* SKILL BARS */
const sbObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    e.target.querySelectorAll('.sbf').forEach(b=>b.classList.add('go'));
    sbObs.unobserve(e.target);
  });
},{threshold:.2});
document.querySelectorAll('.skill-group').forEach(el=>sbObs.observe(el));

/* RING ANIMATION */
const rgObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    e.target.querySelectorAll('.ring-fill').forEach(r=>r.classList.add('go'));
    rgObs.unobserve(e.target);
  });
},{threshold:.2});
document.querySelectorAll('.stat-rings').forEach(el=>rgObs.observe(el));

/* MINI BAR CHARTS */
function makeBars(id,data){
  const el=document.getElementById(id);if(!el)return;
  const max=Math.max(...data.map(d=>d.v));
  el.innerHTML=data.map(d=>`<div class="mbar" data-h="${(d.v/max*54).toFixed(0)}px" style="height:0"><div class="mbar-tip">${d.l}: ${d.v}%</div><div class="mbar-lbl">${d.l}</div></div>`).join('');
}
makeBars('bars1',[{l:'Punjab',v:91},{l:'UP',v:88},{l:'MP',v:85},{l:'Bihar',v:87},{l:'Raj',v:89},{l:'Gujarat',v:86},{l:'MH',v:90},{l:'TN',v:84}]);
makeBars('bars2',[{l:'Retention',v:30},{l:'Speed',v:25},{l:'Engage',v:40},{l:'Accuracy',v:28},{l:'Completion',v:35}]);
makeBars('bars3',[{l:'Retrieval',v:40},{l:'Throughput',v:32},{l:'Uptime',v:99},{l:'Alerts',v:100},{l:'Latency',v:35}]);

const bcObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    e.target.querySelectorAll('.mbar').forEach((b,i)=>{
      setTimeout(()=>{b.style.height=b.dataset.h;},i*90);
    });
    bcObs.unobserve(e.target);
  });
},{threshold:.3});
['bars1','bars2','bars3'].forEach(id=>{const el=document.getElementById(id);if(el)bcObs.observe(el);});

/* PODIUM CHART */
(function(){
  const data=[
    {l:'All',h:15,c:'#1e2a38'},{l:'Top 50%',h:35,c:'rgba(0,229,255,.15)'},
    {l:'You',h:75,c:'#00e5ff'},{l:'Top 10%',h:55,c:'rgba(0,229,255,.3)'},
    {l:'Top 1%',h:80,c:'rgba(0,229,255,.18)'}
  ];
  const el=document.getElementById('podium');if(!el)return;
  el.innerHTML=data.map(d=>`<div class="pod" style="background:${d.color||d.c};height:0"><span class="pod-lbl">${d.l}</span></div>`).join('');
  const po=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting)return;
      e.target.querySelectorAll('.pod').forEach((b,i)=>{
        setTimeout(()=>{b.style.height=data[i].h+'px';},i*120);
      });
      po.unobserve(e.target);
    });
  },{threshold:.3});
  const parent=el.closest('.ach-big');
  if(parent)po.observe(parent);
})();
