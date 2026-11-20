const safe=f=>{try{f()}catch(e){console.error('A block failed to start:',e)}};
const CONFIG = {
  her: "Puspa",
  me: "Tahmid",
  known: "2018-09-21T00:00:00",
  firstDate: "2023-02-19T00:00:00",
  special: "2023-03-16T00:00:00",
  birthday: "11-21", // 21 November
  // Write your letter between the backticks. Press Enter for new lines. Any length works.
  letter: `My dearest Puspa,

Happy Birthday, my love! ❤️

Some stories begin with a big moment. Ours began quietly, on 21 September 2018, when I had no idea that someone I had just met would one day become my whole world.

Over the years you slowly became my favourite person to talk to, my safest place and my best friend. Then came 19 February 2023, our first date, when I was nervous, you were beautiful, and everything just felt right. And then 16 March 2023, our special day, the day I will celebrate for the rest of my life.

Thank you for being patient with me, for laughing with me, and for choosing me on ordinary days and difficult ones. Your smile is still my favourite view, and your happiness is still my favourite thing to protect.

On your birthday I wish you every beautiful thing this world can give, and I promise to keep adding to your happiness every single day.

I love you today, tomorrow and always.

Yours forever,
Tahmid ❤️`,
  milestones: [
      {
          "icon": "🌱",
          "date": "2018-09-21",
          "title": "The day we met",
          "text": "21 September 2018. A simple day that quietly became the beginning of everything."
      },
      {
          "icon": "🌹",
          "date": "2023-02-19",
          "title": "Our first date",
          "text": "19 February 2023. Nervous hearts, big smiles, and the first of a thousand favourite memories."
      },
      {
          "icon": "💖",
          "date": "2023-03-16",
          "title": "Our special day",
          "text": "16 March 2023. The day that became ours, and the one I will celebrate forever."
      }
  ],
  photoBase: "", // Where your photos live. Leave empty to use the images folder, or paste the address of another site, for example "https://my-photos.netlify.app/"
  photos: [
    { cap: "My Peace, My Person", line: "Somewhere between the sky and the earth, my heart found its favorite view.", msg: "You make even the simplest moments feel beautiful. No matter how far we are, my heart always finds its way back to you." },
    { cap: "My Favorite Smile", line: "A little smile, a thousand feelings, and one heart that owns mine.", msg: "I could look at you a thousand times and still find a new reason to fall in love. You’re effortlessly my favorite person." },
    { cap: "Elegance Beyond Words", line: "Not just beautiful, but a whole different kind of magic.", msg: "Words can never fully describe how special you are to me. You have a beauty that goes far beyond what the eyes can see." },
    { cap: "My Sunshine", line: "The sunshine has competition, because someone shines brighter in my world.", msg: "You bring warmth into my life in ways you probably don’t even realize. Keep being the wonderful person you are." },
    { cap: "Forever My Favorite", line: "If I had to choose my favorite view in this world, it would always be you.", msg: "I don’t need a perfect world. I just want a lifetime of little moments, endless conversations, silly smiles, and beautiful memories with you." },
    { cap: "A Sky Full of Beauty", line: "The sky is beautiful, but there’s something even more beautiful standing beneath it.", msg: "Even the endless sky can’t compete with the beauty you bring into my world. If I could choose one beautiful view to keep forever, it would always be you. You’re my favorite blessing." },
    { cap: "My Timeless Beauty", line: "Some flowers bloom in gardens, but some souls make the whole world beautiful.", msg: "There’s a special kind of elegance in you that words cannot explain. Whether you’re dressed in blue or simply being yourself, you will always be the most beautiful part of my world. I fall for you in a thousand little ways." },
    { cap: "The Queen in Red", line: "Red is beautiful, but the way you carry it makes it unforgettable.", msg: "Some people wear beautiful outfits, but you carry beauty with grace. Every little detail about you feels special to me. I may not always have the perfect words to describe how beautiful you are, but one thing is certain: my eyes will always search for you in a crowd, and my heart will always choose you." }
  ],
  photosNote: [
    "Different outfits, different places, different moments, but the same girl who makes my heart smile every single day.",
    "Whether you’re wearing purple, blue, pink, yellow, or red, you have your own beautiful way of making every moment special.",
    "I don’t know how to describe your beauty perfectly, because it’s not just about how you look. It’s your presence, your little smiles, your elegance, and all those little things that make you uniquely you.",
    "If I could keep one beautiful view in my life forever, it would always be you.",
    "You’re my favorite person, my sweetest blessing, and the one my heart keeps choosing. ❤️"
  ],
  reasons: [
    "Your smile makes my whole day better.",
    "You laugh at my worst jokes.",
    "You make ordinary days feel special.",
    "You are kind to everyone you meet.",
    "You make me want to be a better person.",
    "Home feels like wherever you are.",
    "Your hugs fix everything.",
    "You believe in me, even when I don’t.",
    "Your voice is my favourite sound.",
    "You make me laugh until I cry.",
    "You remember the little things.",
    "Your eyes feel like home.",
    "You are brave in ways you don’t notice.",
    "You listen like what I say matters.",
    "You make silence comfortable.",
    "You are beautiful in the morning.",
    "You make me feel safe.",
    "Your laugh is contagious.",
    "You love with your whole heart.",
    "You make boring errands fun.",
    "You are my best friend.",
    "You make me braver.",
    "You are stronger than you think.",
    "You dance like nobody’s watching.",
    "You are gentle with the people you love.",
    "You made me believe in love.",
    "You make every ordinary moment feel like music.",
    "You are my favourite person to talk to.",
    "You never give up on me.",
    "You are adorable when you concentrate.",
    "You turn my bad days into good ones.",
    "You keep growing, and it inspires me.",
    "You see the best in people.",
    "You make the world feel softer.",
    "You are funny without even trying.",
    "You care about the details.",
    "You comfort me without a single word.",
    "You make planning our future exciting.",
    "You are my favourite hello.",
    "You are my hardest goodbye.",
    "You are wonderfully weird.",
    "You make me feel understood.",
    "You never let me feel alone.",
    "You are patient with me.",
    "You are my calm in the chaos.",
    "You make small moments unforgettable.",
    "You are generous with your love.",
    "You make me smile at random times.",
    "You are the first person I want to tell everything.",
    "You are my favourite adventure.",
    "Your hand fits perfectly in mine.",
    "You turn bad weather into a cuddle day.",
    "You are proud of me, and it shows.",
    "You inspire me to dream bigger.",
    "You are adorable when you’re sleepy.",
    "You make me feel like I’m enough.",
    "You make every place feel like ours.",
    "You are thoughtful in the sweetest ways.",
    "You love me on my worst days.",
    "Your kindness is my favourite thing about you.",
    "You make me feel lucky every single day.",
    "You are honest with me.",
    "You are beautiful inside and out.",
    "You are my favourite notification.",
    "You make even the rain feel romantic.",
    "You make me feel at peace.",
    "You make my heart race.",
    "You are the best part of my day.",
    "You are always there when I need you.",
    "You help me laugh at myself.",
    "You give the best advice.",
    "You remind me what really matters.",
    "You make me want to grow old with someone.",
    "You are my person.",
    "You believe in kindness.",
    "Your goodnight messages are my favourite.",
    "You make little things feel big.",
    "You let me be myself.",
    "You taught me how to love better.",
    "You light up my dullest days.",
    "You make me feel wanted.",
    "You are stunning when you’re happy.",
    "You are my favourite memory maker.",
    "You are the reason I smile at my phone.",
    "You make hard things feel possible.",
    "You make me feel cherished.",
    "You are softer than you let on.",
    "You are my peace and my fire.",
    "You truly see me.",
    "You give me something to look forward to.",
    "You are the best thing that ever happened to me.",
    "You make forever sound exciting.",
    "You make me believe in magic.",
    "You are wonderfully you.",
    "You made home feel like a person.",
    "I fall for you a little more every day.",
    "You are my greatest adventure.",
    "I can’t imagine my life without you.",
    "You chose me, and I will never forget it.",
    "You are the reason behind all the others: I love you simply because you are you."
  ],
  wishes: [
    "May every day this year feel as special as you make me feel.",
    "May all your dreams quietly walk up and knock on your door.",
    "May you always be surrounded by laughter, love and people who adore you.",
    "May your worries be small and your cuddles be endless.",
    "May this year be your most beautiful one yet.",
    "And may I be lucky enough to share every one of them with you."
  ],
  compliments: [
    "You light up every room you walk into.",
    "Your kindness is rare and beautiful.",
    "You are even more amazing than you realise.",
    "Your laugh is my favourite sound in the world.",
    "You make hard days feel easy."
  ],
  openWhen: [
    { title: "Open when you miss me", text: "Close your eyes and feel my arms around you. I’m always only one thought away." },
    { title: "Open when you’re sad", text: "This will pass, and I’ll be right here until it does. You are loved more than you know." },
    { title: "Open when you can’t sleep", text: "Think of us, of the next time we laugh until it hurts. Goodnight, my love." },
    { title: "Open when you doubt yourself", text: "You are brilliant, beautiful and brave. I have never doubted you, not once." }
  ],
  promises: [
    "I promise to hold your hand, on the good days and the hard ones.",
    "I promise to make you laugh, even when you’re trying to stay serious.",
    "I promise to always choose you.",
    "I promise to listen, to learn and to love you better every day.",
    "I promise you forever, Puspa."
  ],
  secret: "Every star you caught is one of the reasons I fall for you again. Happy Birthday, Puspa. I love you.",
  coupons: [
    { icon: "🍽️", title: "One Dinner Date", text: "Your choice of place, my full attention." },
    { icon: "🥞", title: "Breakfast Together", text: "I cook (or order), you relax." },
    { icon: "🌙", title: "A Long Walk and Talk", text: "No phones, just us and the night sky." },
    { icon: "🎬", title: "Movie Night, Your Pick", text: "Snacks included. No complaints from me." },
    { icon: "✨", title: "One Wish Granted", text: "Anything within my power, any time." },
    { icon: "🍦", title: "Ice Cream Date", text: "Any flavour you want. I will even share mine." },
    { icon: "🧺", title: "Picnic Together", text: "A blanket, snacks and nowhere else to be." },
    { icon: "📸", title: "A Photo Date", text: "I take as many pictures of you as you allow." },
    { icon: "🧸", title: "Unlimited Cuddles", text: "Valid any time, no expiry date." },
    { icon: "🌍", title: "A Cultural Tour", text: "We explore a place with a different culture, its food, music and traditions, together." },
    { icon: "🎁", title: "A Surprise Gift", text: "You choose the day. I choose the surprise." },
    { icon: "🚗", title: "A Little Road Trip", text: "A day out, good music, and your hand in mine." }
  ],
  // Tahmid gets a push notification when Puspa redeems a coupon. In the free ntfy app (or ntfy.sh/your-topic in a browser), subscribe to this topic name. Keep it secret, it works like a password.
  notify: { email: "", /* <- type YOUR email between these quotes to get an email for every coupon */ topic: "tahmid-puspa-eb72d2cb9752" },
  capsule: [
    { date: "2026-11-21T00:00:00", title: "On your birthday", text: "Happy Birthday, my love. If you are opening this today, I hope you can feel how special you are. I woke up thinking about you, and I will go to sleep grateful that you exist. Thank you for every smile, every laugh and every moment you have given me. I love you more than I can say.\n— Tahmid" },
    { date: "2027-02-19T00:00:00", title: "Our first-date anniversary", text: "It is another 19 February. I still remember how nervous I was on our first date, and how happy I felt just sitting with you. Thank you for giving me that day, and every day after it. Whatever year it is when you read this, I would walk into that first date again.\n— Tahmid" },
    { date: "2027-03-16T00:00:00", title: "Our special day", text: "Another 16 March. This is the day I will always celebrate, because it is the day that became ours. Thank you for staying, for trusting me and for loving me. I hope I make you happier every single year.\n— Tahmid" },
    { date: "2027-11-21T00:00:00", title: "Your next birthday", text: "Happy Birthday again, my love. One more year of you, and I am still amazed by you. I hope this year was kind to you, that you laughed a lot, and that your dreams got a little closer. I will keep loving you, today and always.\n— Tahmid" }
  ],
  finalTitle: "One Last Thing…",
  finalText: "Out of everyone in the universe, I’d choose you every single time. Will you keep choosing me too?",
  yesMessage: "You just made me the happiest person in the universe. I love you, Puspa, forever and always. ❤️ Tahmid"
};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],pick=a=>a[Math.floor(Math.random()*a.length)];
const her=CONFIG.her,me=CONFIG.me;
$$("[data-her]").forEach(e=>e.textContent=her);
/* sky: stars, shooting stars, fireworks */
const cv=$("#sky"),cx=cv.getContext("2d"),fgc=$("#fx"),fg=fgc.getContext("2d");let W,H,stars=[],sparks=[],shoots=[];
function fit(){W=cv.width=fgc.width=innerWidth;H=cv.height=fgc.height=innerHeight;stars=Array.from({length:Math.round(W*H/9000)},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+.3,p:Math.random()*6.28,s:Math.random()*.02+.005}))}
fit();addEventListener("resize",fit);
function shoot(){shoots.push({x:W*.25+Math.random()*W*.7,y:Math.random()*H*.4,vx:-6-Math.random()*4,vy:3+Math.random()*2,l:1})}
function fire(x,y,n=70){for(let i=0;i<n;i++){const a=Math.random()*6.28,v=Math.random()*5+1.5;sparks.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:1,c:pick(["#f5d48f","#ff6b95","#b79cff","#ffffff"])})}}
(function loop(t){cx.clearRect(0,0,W,H);cx.fillStyle="#fff";
for(const s of stars){cx.globalAlpha=.3+.7*Math.abs(Math.sin(t*s.s*.1+s.p));cx.beginPath();cx.arc(s.x,s.y,s.r,0,6.28);cx.fill()}
fg.clearRect(0,0,W,H);fg.strokeStyle="#ffe7b0";fg.lineWidth=2;
for(const s of shoots){fg.globalAlpha=s.l;fg.beginPath();fg.moveTo(s.x,s.y);fg.lineTo(s.x-s.vx*8,s.y-s.vy*8);fg.stroke();s.x+=s.vx;s.y+=s.vy;s.l-=.012}
shoots=shoots.filter(s=>s.l>0);
for(const p of sparks){fg.globalAlpha=p.l;fg.fillStyle=p.c;fg.beginPath();fg.arc(p.x,p.y,2.2,0,6.28);fg.fill();p.x+=p.vx;p.y+=p.vy;p.vy+=.06;p.vx*=.985;p.l-=.011}
sparks=sparks.filter(p=>p.l>0);requestAnimationFrame(loop)})(0);
setInterval(()=>Math.random()<.5&&shoot(),3500);
function love(n=12){for(let i=0;i<n;i++){const s=document.createElement("span");s.className="fl8";s.textContent=pick(["♥","✦","♥","✧"]);s.style.cssText=`left:${Math.random()*100}vw;font-size:${12+Math.random()*20}px;color:${pick(["#ff6b95","#f5d48f","#b79cff","#ffd1dc"])};animation-duration:${3+Math.random()*3}s`;document.body.appendChild(s);setTimeout(()=>s.remove(),6500)}}
setInterval(()=>love(1),2400);
function modal(h){$("#mBody").innerHTML=h;$("#modal").classList.add("on")}
$("#mClose").onclick=()=>$("#modal").classList.remove("on");
$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.remove("on")};
/* pages */
const pages=$$(".page");let cur=0,ready=false;
function show(n){if(n<0||n>=pages.length||(ready&&n===cur))return;pages[cur].classList.remove("on");cur=n;ready=true;pages[n].classList.add("on");pages[n].scrollTop=0;
$("#chap").textContent=String(n+1).padStart(2,"0")+" / "+String(pages.length).padStart(2,"0")+"  ·  "+pages[n].dataset.t;
$("#barfill").style.width=(n+1)/pages.length*100+"%";$("#prev").style.display=n?"":"none";$("#next").style.display=n<pages.length-1?"":"none";
if(n){love(8);for(let k=0;k<2;k++)bloom(Math.random()<.5?10+Math.random()*W*.14:W-10-Math.random()*W*.14,H*.2+Math.random()*H*.6,30+Math.random()*22)}if(window.noBtn)noBtn.style.visibility=n===pages.length-1?"visible":"hidden"}
const go=d=>{if(ready&&!$("#modal").classList.contains("on"))show(cur+d)};
$("#prev").onclick=()=>go(-1);$("#next").onclick=()=>go(1);
addEventListener("keydown",e=>{if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1)});
let sx=0,sy=0;addEventListener("touchstart",e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.6&&!e.target.closest("#cake"))go(dx<0?1:-1)},{passive:true});
$("#seal").onclick=()=>{$("#gate").classList.add("open");setTimeout(()=>{$("#app").classList.remove("hide");$("#dock").classList.remove("hide");show(0);love(30);fire(W/2,H*.35,90);setTimeout(()=>toast("Tap “Continue” to turn the page. Tap the title at the top right to jump to any page.",7000),2500)},800)};
/* countdown to her birthday (restarts after midnight on the day) */
const [bm,bd]=CONFIG.birthday.split("-").map(Number);
$("#bdLine").textContent=new Date(2000,bm-1,bd).toLocaleDateString("en-GB",{day:"numeric",month:"long"});
function nextBd(){const n=new Date(),t0=new Date(n.getFullYear(),n.getMonth(),n.getDate());let t=new Date(n.getFullYear(),bm-1,bd);const today=+t===+t0;if(t<=t0)t=new Date(n.getFullYear()+1,bm-1,bd);return{t,today}}
function tick(){const{t,today}=nextBd(),s=Math.max(0,(t-new Date())/1000),D=Math.floor(s/86400),h=Math.floor(s/3600)%24,m=Math.floor(s/60)%60,q=Math.floor(s)%60;
$("#cdw").innerHTML=[[D,"Days"],[h,"Hours"],[m,"Minutes"],[q,"Seconds"]].map(([n,l])=>`<div><b>${String(n).padStart(2,"0")}</b><span>${l}</span></div>`).join("");
$("#cdnote").textContent=today?`It’s your birthday today, ${her}. The next countdown has already begun.`:`until the day the world got ${her}`;
$("#gateCd").textContent=today?"It’s your birthday today":`${D} days ${h}h ${m}m until your birthday`}
tick();setInterval(tick,1000);
/* cake: blow candles, wish, cut straight down */
const cake=$("#cake"),cn=$$(".cn"),SUB1="Tap each candle to blow it out.";let stage=0,cutX=150;
$("#cakeSub").textContent=SUB1;
function pt(e){const p=cake.createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform(cake.getScreenCTM().inverse())}
function resetCake(){stage=0;cn.forEach(c=>c.classList.remove("out"));cake.classList.remove("dark");$(".full").style.display="";$(".part").style.display="none";$("#slice").style.display="none";$("#slice").style.transform="";$("#gap").setAttribute("opacity",0);$("#relight").classList.add("hide");$("#cakeSub").textContent=SUB1}
function wishTime(){stage=1;cake.classList.add("dark");$("#cakeSub").textContent="Make a wish…";$("#wish").classList.add("on");
const t=setInterval(()=>{shoot();love(4)},450);
setTimeout(()=>{clearInterval(t);$("#wish").classList.remove("on");$("#cakeSub").textContent="Now drag straight down the cake to cut a slice.";stage=2},3800)}
cn.forEach(c=>{c.onclick=()=>{if(stage)return;c.classList.add("out");if(cn.every(x=>x.classList.contains("out")))wishTime()};c.onkeydown=e=>{if(e.key==="Enter"||e.key===" ")c.onclick()}});
function cutCake(){stage=3;const x=cutX,T=`M${x} 80L${x} 264L${x+110} 264Z`;
$("#pT").setAttribute("d",T);$("#pL").setAttribute("d",`M-30 0H343V300H-30Z${T}`);$("#gap").setAttribute("points",`${x},80 ${x},264 ${x+110},264`);
const l=$("#cutl");l.setAttribute("x1",x);l.setAttribute("x2",x);l.setAttribute("y1",70);l.setAttribute("y2",270);l.style.opacity=1;l.style.strokeDashoffset=0;
setTimeout(()=>{$(".full").style.display="none";$(".part").style.display="";$("#gap").setAttribute("opacity",1);const s=$("#slice");s.style.display="";s.style.transformOrigin=`${x+110}px 264px`;s.getBoundingClientRect();s.style.transform="translate(58px,14px) rotate(10deg)";
l.style.opacity=0;love(40);fire(W/2,H*.5,110);$("#cakeSub").textContent=`Happy Birthday, ${her}. The first slice is yours.`;$("#relight").classList.remove("hide")},650);
setTimeout(()=>modal(`<p style="font-size:3rem">🎂</p><p class="serif big">Happy Birthday, ${her}</p><p>May this year give you back every smile you give to others. I love you.\n— ${me}</p>`),2800)}
let ds=null;
cake.addEventListener("pointerdown",e=>{if(stage!==2||e.target.closest(".cn"))return;const p=pt(e);if(p.x<30||p.x>270||p.y<60||p.y>270)return;ds=p;cake.setPointerCapture(e.pointerId)});
cake.addEventListener("pointermove",e=>{if(!ds)return;const p=pt(e),l=$("#cutl");l.setAttribute("x1",ds.x);l.setAttribute("x2",ds.x);l.setAttribute("y1",ds.y);l.setAttribute("y2",Math.max(ds.y,p.y));l.style.transition="none";l.style.strokeDasharray="none";l.style.opacity=1});
cake.addEventListener("pointerup",e=>{if(!ds)return;const p=pt(e),dy=p.y-ds.y;cutX=Math.max(100,Math.min(150,ds.x));const l=$("#cutl");l.style.transition="";l.style.strokeDasharray=200;l.style.strokeDashoffset=200;l.style.opacity=0;const ok=dy>70&&dy>Math.abs(p.x-ds.x);ds=null;if(ok)cutCake()});
$("#relight").onclick=resetCake;
/* letter */
let typed=false,tmr;$("#openLetter").onclick=()=>{const p=$("#paper");p.classList.toggle("show");if(typed)return;typed=true;const f=CONFIG.letter,o=$("#letterText");let i=0;const pgL=p.closest(".page");tmr=setInterval(()=>{const near=pgL.scrollHeight-pgL.scrollTop-pgL.clientHeight<160;o.textContent=f.slice(0,i+=2);if(near)pgL.scrollTop=pgL.scrollHeight;if(i>=f.length)clearInterval(tmr)},24);p.onclick=()=>{clearInterval(tmr);o.textContent=f}};
/* memories */
const PB=(CONFIG.photoBase||"images/").replace(/\/?$/,"/");
$("#grid").innerHTML=CONFIG.photos.map((p,i)=>`<button class="ph" data-i="${i}"><i>♥</i><img src="${p.src||PB+"photo"+(i+1)+".jpg"}" alt="${p.cap}" onerror="this.remove()"><span>${p.cap}</span></button>`).join("");
const seen=new Set();
function noteState(){const n=CONFIG.photos.length,box=$("#allnote");if(!box)return;
if(seen.size<n){$("#anHead").textContent=`🔒 Open all ${n} memories to unlock one more message (${seen.size} / ${n})`;$("#anBody").innerHTML="";box.classList.remove("open")}
else{$("#anHead").textContent=`One message for all ${n} pictures`;$("#anBody").innerHTML=CONFIG.photosNote.map(x=>`<p>${x}</p>`).join("");box.classList.add("open")}}
$$(".ph").forEach(b=>b.onclick=()=>{const i=+b.dataset.i,p=CONFIG.photos[i],im=b.querySelector("img");
modal((im?`<img class="mimg" src="${im.src}" alt="">`:"")+`<p class="serif big">${p.cap}</p>${p.line?`<p class="serif" style="color:var(--gold2);font-size:1.3rem;line-height:1.35">${p.line}</p>`:""}<p>${p.msg}</p>`);love(8);
const before=seen.size;seen.add(i);noteState();if(before<CONFIG.photos.length&&seen.size===CONFIG.photos.length)setTimeout(()=>{toast("You opened them all ♥ One more message is waiting below.",5500);love(40)},900)});
noteState();
/* reasons */
const R=CONFIG.reasons;let op=0;$("#rtotal").textContent=R.length;
$("#reasons").innerHTML=R.map((_,i)=>`<button class="rh" aria-label="Reason ${i+1}"><b>${i+1}</b></button>`).join("");
const rh=$$(".rh");function reason(i){if(!rh[i].classList.contains("on")){rh[i].classList.add("on");$("#opened").textContent=++op}$("#rnum").textContent="Reason "+(i+1);$("#rtext").textContent=R[i];love(4)}
rh.forEach((b,i)=>b.onclick=()=>reason(i));$("#rand").onclick=()=>reason(Math.floor(Math.random()*R.length));
/* our dates */
const pl=(n,w)=>n+" "+w+(n===1?"":"s"),fmt=d=>new Date(d).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
$("#dates").innerHTML=CONFIG.milestones.map((m,i)=>`<div class="dc" data-i="${i}"><small>${fmt(m.date)}</small><strong>${m.title}</strong><b></b><em></em></div>`).join("");
function dt(){const n=new Date();$$(".dc").forEach((c,i)=>{const a=new Date(CONFIG.milestones[i].date);let y=n.getFullYear()-a.getFullYear(),mo=n.getMonth()-a.getMonth(),d=n.getDate()-a.getDate();if(d<0){mo--;d+=new Date(n.getFullYear(),n.getMonth(),0).getDate()}if(mo<0){y--;mo+=12}
const s=Math.floor((n-a)/1000),z=v=>String(v).padStart(2,"0");c.querySelector("b").textContent=pl(y,"year")+", "+pl(mo,"month")+", "+pl(d,"day");
c.querySelector("em").textContent=Math.floor(s/86400).toLocaleString()+" days · "+z(Math.floor(s/3600)%24)+":"+z(Math.floor(s/60)%60)+":"+z(s%60)+" and counting"})}
dt();setInterval(dt,1000);
$$(".dc").forEach(c=>c.onclick=()=>{const m=CONFIG.milestones[c.dataset.i];modal(`<p style="font-size:3rem">${m.icon}</p><p class="serif big">${m.title}</p><p>${m.text}</p>`);love(14)});
/* wishes, surprises, open when, finale */
$("#wl").innerHTML=CONFIG.wishes.map((w,i)=>`<li data-r style="--d:${.15+i*.1}s"><b>${["💌","✉️","💬","📜","💝","📨"][i%6]}</b><span>${w}</span></li>`).join("");
const tile=(e,t)=>`<button class="tile"><b>${e}</b>${t}</button>`;
function hit(el){el.classList.remove("hit");void el.offsetWidth;el.classList.add("hit");const r=el.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;fire(x,y,45);bloom(x,y,58)}
const say=(e,t,el)=>{love(30);pop(e);hit(el);toast(t);const n=$("#note");n.textContent=t;n.classList.remove("nn");void n.offsetWidth;n.classList.add("nn")};
const SUR=[["🤗","A hug",el=>say("🤗","A big, warm hug, just for you.",el)],["💌","A compliment",el=>say("💌",pick(CONFIG.compliments),el)],["🌠","Wish on a star",el=>say("🌠","Wish made. I’ll spend my life making it come true.",el)],["🎁","Your gift",el=>say("🎁",`This whole little universe is my gift to you, wrapped in every bit of my love. Happy Birthday, ${her}.`,el)]];
$("#tiles").innerHTML=SUR.map(s=>tile(s[0],s[1])).join("");$$("#tiles .tile").forEach((b,i)=>b.onclick=()=>SUR[i][2](b));
const OI=["💞","🫂","🌙","🌹"];
$("#owhen").innerHTML=CONFIG.openWhen.map((o,i)=>tile(OI[i]||"💌",o.title)).join("");
$$("#owhen .tile").forEach((b,i)=>b.onclick=()=>{const o=CONFIG.openWhen[i];b.classList.add("open");love(30);const r=b.getBoundingClientRect();bloom(r.left+r.width/2,r.top+r.height/2,58);fire(r.left+r.width/2,r.top+r.height/2,40);
setTimeout(()=>modal(`<p style="font-size:3rem">${OI[i]||"💌"}</p><p class="serif big">${o.title}</p><p>${o.text}</p>`),650);setTimeout(()=>b.classList.remove("open"),1800)});
$("#fTitle").textContent=CONFIG.finalTitle;$("#fText").textContent=CONFIG.finalText;$("#pl").innerHTML=CONFIG.promises.map(p=>`<li>${p}</li>`).join("");
$("#foot").textContent=`${me} ♥ ${her}`;
let said=false;$("#yes").onclick=()=>{if(said)return;said=true;let n=0;const t=setInterval(()=>{fire(Math.random()*W,Math.random()*H*.6,80);love(14);for(let k=0;k<4;k++)bloom(Math.random()*W,Math.random()*H,40+Math.random()*50);if(++n>9)clearInterval(t)},450);
const d=Math.floor((Date.now()-new Date(CONFIG.special))/864e5);
$("#endMsg").textContent=CONFIG.yesMessage.replace(/\s*❤️.*$/,"");$("#endDays").textContent=`${d.toLocaleString()} days since our special day, and I would choose every single one of them again.`;$("#endSign").textContent=`${me} ♥ ${her}`;
setTimeout(()=>{$("#end").classList.add("on");document.body.classList.add("ended")},2200)};
$("#replay").onclick=()=>location.reload();$("#stay").onclick=()=>{$("#end").classList.remove("on");document.body.classList.remove("ended");said=false};
/* "Let me think…" can never be used: it runs away */
(()=>{const no=$("#no"),yes=$("#yes");let sp=null,last=0;no.tabIndex=-1;no.setAttribute("aria-hidden","true");window.noBtn=no;
function dodge(){const n=Date.now();if(n-last<120)return;last=n;const b=no.getBoundingClientRect(),y=yes.getBoundingClientRect();
if(!sp){sp=document.createElement("span");sp.style.cssText=`display:inline-block;width:${b.width}px;height:${b.height}px`;no.parentNode.insertBefore(sp,no);document.body.appendChild(no);no.style.cssText+=";position:fixed;z-index:35;transition:left .28s ease,top .28s ease,transform .25s"}
let vx=b.left,vy=b.top;for(let k=0;k<40;k++){const x=12+Math.random()*(innerWidth-b.width-24),yy=70+Math.random()*(innerHeight-b.height-170);
if(Math.hypot(x-b.left,yy-b.top)>140&&(x+b.width<y.left-16||x>y.right+16||yy+b.height<y.top-16||yy>y.bottom+16)){vx=x;vy=yy;break}}
no.style.left=vx+"px";no.style.top=vy+"px"}
addEventListener("pointermove",e=>{if(!no.offsetParent||no.style.visibility==="hidden")return;const r=no.getBoundingClientRect();if(r.width&&Math.hypot(Math.max(r.left-e.clientX,0,e.clientX-r.right),Math.max(r.top-e.clientY,0,e.clientY-r.bottom))<70)dodge()});
["pointerenter","pointerdown","mousedown","touchstart","click","focus","keydown"].forEach(ev=>no.addEventListener(ev,e=>{e.preventDefault();e.stopPropagation();no.blur();dodge()},{passive:false}))})();

/* ---- heartbeat ---- */
safe(()=>{const c=$("#ecg"),g=c.getContext("2d"),P=160,pg=c.closest(".page");let x=0,py=75;
const Y=p=>p<.1?0:p<.15?-6:p<.2?0:p<.24?8:p<.3?-50:p<.36?24:p<.42?0:p<.55?-9*Math.sin((p-.42)/.13*Math.PI):0;
g.lineWidth=2.5;g.lineCap="round";
(function f(){if(pg.classList.contains("on")){g.clearRect(x,0,18,150);g.strokeStyle="#f5d48f";g.shadowColor="#ff6b95";g.shadowBlur=10;const ny=75+Y((x%P)/P);g.beginPath();g.moveTo(x-2,py);g.lineTo(x,ny);g.stroke();py=ny;x+=2;if(x>=c.width){x=0;py=75;g.clearRect(0,0,c.width,150)}}requestAnimationFrame(f)})();
const b=()=>{$("#beats").textContent=Math.floor((Date.now()-new Date(CONFIG.known))/833).toLocaleString()};b();setInterval(b,833)});
/* ---- love quiz ---- */
safe(()=>{const box=$("#quiz"),fm=d=>new Date(d).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),M=CONFIG.milestones;
const sh=(s,y,m,d)=>{const x=new Date(s);x.setFullYear(x.getFullYear()+y,x.getMonth()+m,x.getDate()+d);return fm(x)};
const dm=k=>new Date(2000,bm-1,bd+k).toLocaleDateString("en-GB",{day:"numeric",month:"long"}),yr=new Date(M[0].date).getFullYear();
const Q=[{q:"What year did we first meet?",o:[yr,yr-1,yr+1,yr+2].map(String)},
{q:"When was our first date?",o:[fm(M[1].date),sh(M[1].date,0,0,-5),sh(M[1].date,0,1,0),sh(M[1].date,-1,0,0)]},
{q:"Which day is our special day?",o:[fm(M[2].date),sh(M[2].date,0,1,0),sh(M[2].date,0,0,-10),sh(M[2].date,-1,0,0)]},
{q:`When is ${her}’s birthday?`,o:[dm(0),dm(-9),dm(10),dm(40)]},
{q:"Who loves who more?",o:["Both of us, equally, forever","Tahmid, obviously","Puspa, obviously","The pizza"]}];
let i=0,sc=0;
function render(){if(i>=Q.length){const m=sc===5?"You know us by heart.":sc>=3?"Almost perfect. You know us well.":"Time to read our story again.";box.innerHTML=`<h3 style="text-align:center">${sc} / ${Q.length}</h3><p class="lead" style="margin:auto">${m}</p><button class="cta" id="qagain">Play again</button>`;$("#qagain").onclick=()=>{i=0;sc=0;render()};if(sc>=4){love(30);fire(W/2,H/2,80)}return}
const q=Q[i],o=q.o.map((t,k)=>({t,k})).sort(()=>Math.random()-.5);
box.innerHTML=`<p class="eyebrow">Question ${i+1} of ${Q.length}</p><h3>${q.q}</h3>`+o.map(x=>`<button class="opt" data-k="${x.k}">${x.t}</button>`).join("");
box.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{box.querySelectorAll(".opt").forEach(x=>{x.disabled=true;if(x.dataset.k==="0")x.classList.add("ok")});if(b.dataset.k==="0"){sc++;love(10)}else b.classList.add("bad");setTimeout(()=>{i++;render()},1300)})}
render()});
/* ---- catch the stars ---- */
safe(()=>{const ar=$("#arena"),st=$("#gstat");let run=false,score=0,left=0,t1,t2;
function end(){run=false;clearInterval(t1);clearInterval(t2);ar.innerHTML="";$("#gstart").textContent="Play again";$("#gstart").classList.remove("hide");
if(score>=15){st.textContent=`You caught ${score}. Secret unlocked ♥`;modal(`<p style="font-size:3rem">🔓</p><p class="serif big">${CONFIG.secret}</p>`);fire(W/2,H/2,90)}else st.textContent=`You caught ${score}. Try for 15!`}
$("#gstart").onclick=()=>{if(run)return;run=true;score=0;left=20;$("#gstart").classList.add("hide");st.textContent="Score 0 · 20s";
t2=setInterval(()=>{left--;st.textContent=`Score ${score} · ${left}s`;if(left<=0)end()},1000);
t1=setInterval(()=>{const d=document.createElement("button"),hh=Math.random()<.45;d.className="drop";d.textContent=hh?"♥":"✦";d.style.color=hh?"#ff6b95":"#f5d48f";d.style.left=Math.random()*88+"%";d.style.animationDuration=2.4+Math.random()*1.6+"s";
d.onpointerdown=e=>{e.preventDefault();if(!run)return;score+=hh?2:1;st.textContent=`Score ${score} · ${left}s`;fire(e.clientX,e.clientY,14);d.remove()};d.onanimationend=()=>d.remove();ar.appendChild(d)},420)}});
/* ---- notifications to Tahmid (ntfy.sh) ---- */
const PQ="pendingNotify_"+her;
function post(ch,o){
if(ch==="ntfy")return fetch("https://ntfy.sh/"+CONFIG.notify.topic,{method:"POST",body:o.body,headers:{Title:o.title,Priority:"high",Tags:o.tags}}).then(r=>{if(!r.ok)throw 0});
return fetch("https://formsubmit.co/ajax/"+CONFIG.notify.email,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:o.title+": "+o.body.split("\n")[0],_template:"box",_captcha:"false",name:CONFIG.her,message:o.body})}).then(r=>{if(!r.ok)throw 0})}
function queue(ch,o){try{const q=JSON.parse(localStorage.getItem(PQ)||"[]");q.push({ch,title:o.title,body:o.body,tags:o.tags});localStorage.setItem(PQ,JSON.stringify(q))}catch(e){}}
function notify(title,body,tags="heart"){const n=CONFIG.notify||{},cs=[n.topic&&"ntfy",n.email&&"email"].filter(Boolean),o={title,body,tags};if(!cs.length)return Promise.resolve(false);
return Promise.all(cs.map(ch=>post(ch,o).then(()=>true,()=>{queue(ch,o);return false}))).then(r=>r.some(Boolean))}
function flushNotes(){try{const q=JSON.parse(localStorage.getItem(PQ)||"[]");if(!q.length)return;localStorage.removeItem(PQ);q.forEach(o=>post(o.ch,o).catch(()=>queue(o.ch,o)))}catch(e){}}
if(/[?&]reset/.test(location.search)){["coupons2_"+her,"wishes_"+her,PQ].forEach(k=>{try{localStorage.removeItem(k)}catch(e){}});try{indexedDB.deleteDatabase("lovephotos_"+her)}catch(e){}setTimeout(()=>toast("Saved coupons and wishes were cleared."),1500)}
safe(flushNotes);addEventListener("online",flushNotes);
/* ---- love coupons ---- */
safe(()=>{const box=$("#coupons"),K="coupons2_"+her,fmt=d=>new Date(d).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});let used={};try{used=JSON.parse(localStorage.getItem(K))||{}}catch(e){}
const lead=()=>{$("#cpLead").innerHTML=`Tap “Redeem” on any coupon and ${me} gets a message right away. <b>${CONFIG.coupons.filter(c=>used[c.title]).length}</b> of ${CONFIG.coupons.length} redeemed.`};
function draw(){box.innerHTML=CONFIG.coupons.map((c,i)=>{const u=used[c.title];return`<div class="cp${u?" used":""}" data-i="${i}"><em>${c.icon}</em><div><strong>${c.title}</strong><small>${u?"Redeemed on "+fmt(u):c.text}</small></div><button>Redeem</button></div>`}).join("");
box.querySelectorAll(".cp button").forEach(b=>b.onclick=()=>{const p=b.closest(".cp"),c=CONFIG.coupons[+p.dataset.i];if(used[c.title])return;used[c.title]=new Date().toISOString();try{localStorage.setItem(K,JSON.stringify(used))}catch(e){}
const r=b.getBoundingClientRect();love(16);fire(r.left+40,r.top,40);draw();lead();
modal(`<p style="font-size:3rem">${c.icon}</p><p class="serif big">${c.title}</p><p>Coupon redeemed ♥</p><p id="cpStatus" style="color:var(--gold2)">Telling ${me}…</p>`);
notify(`${her} redeemed a coupon`,`${c.icon} ${c.title}\n"${c.text}"\nRedeemed on ${new Date().toLocaleString("en-GB",{dateStyle:"medium",timeStyle:"short"})}`,"gift,heart").then(ok=>{const s=$("#cpStatus");if(s)s.textContent=ok?`${me} just got your message ♥`:`Saved ♥ Show this screen to ${me}, or he will be told when you are back online.`})})}
draw();lead()});
/* ---- send a wish ---- */
safe(()=>{const K="wishes_"+her,l=$("#wlist");let w=[];try{w=JSON.parse(localStorage.getItem(K))||[]}catch(e){}
const draw=()=>{l.innerHTML=w.map(x=>`<li>${x.replace(/</g,"&lt;")}</li>`).join("")};draw();
$("#wsend").onclick=()=>{const t=$("#wtext").value.trim();if(!t)return;w.unshift(t);try{localStorage.setItem(K,JSON.stringify(w.slice(0,20)))}catch(e){}$("#wtext").value="";draw();shoot();shoot();shoot();fire(W/2,H*.4,70);love(20);toast("Your wish is on its way to the stars ✦");
const s=document.createElement("div");s.className="wfly";s.textContent=t;document.body.appendChild(s);setTimeout(()=>s.remove(),3200)}});
/* ---- time capsule ---- */
safe(()=>{const box=$("#caps"),PREVIEW=/[?&]unlock/.test(location.search),fm=d=>new Date(d).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
box.innerHTML=CONFIG.capsule.map(c=>`<div class="cap"><em></em><div><strong>${c.title}</strong><small></small></div><button>Open</button></div>`).join("");
const left=i=>Math.floor((new Date(CONFIG.capsule[i].date).getTime()-Date.now())/1000),str=s=>Math.floor(s/86400)+"d "+Math.floor(s/3600)%24+"h "+Math.floor(s/60)%60+"m";
function cp(){box.querySelectorAll(".cap").forEach((el,i)=>{const s=left(i),open=s<=0||PREVIEW,c=CONFIG.capsule[i];el.classList.toggle("open",open);el.classList.toggle("lock",!open);el.querySelector("em").textContent=open?"💌":"🔒";
el.querySelector("small").textContent=open?"Unlocked · "+fm(c.date):"Opens "+fm(c.date)+" · in "+str(s);el.querySelector("button").textContent=open?"Open":"🔒 Locked"})}
cp();setInterval(cp,1000);
box.querySelectorAll(".cap button").forEach((b,i)=>b.onclick=()=>{const c=CONFIG.capsule[i],s=left(i);if(s>0&&!PREVIEW){toast(`This letter opens on ${fm(c.date)}. Only ${str(s)} to go ♥`);love(6);return}
modal(`<p style="font-size:3rem">💌</p><p class="serif big">${c.title}</p><p>${c.text}</p>`);love(12)})});
/* ---- chapter menu + stardust trail ---- */
$("#chap").setAttribute("role","button");$("#chap").tabIndex=0;
$("#chap").onclick=()=>{if(!ready)return;modal('<p class="eyebrow">Jump to</p><div class="menu">'+pages.map((p,i)=>`<button data-i="${i}" class="${i===cur?"cur":""}">${String(i+1).padStart(2,"0")} · ${p.dataset.t}</button>`).join("")+"</div>");
$$(".menu button").forEach(b=>b.onclick=()=>{$("#modal").classList.remove("on");show(+b.dataset.i)})};
let tl=0;addEventListener("pointermove",e=>{const n=Date.now();if(n-tl<60)return;tl=n;const s=document.createElement("span");s.className="trail";s.textContent=pick(["✦","♥","✧"]);s.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;font-size:${10+Math.random()*10}px`;document.body.appendChild(s);setTimeout(()=>s.remove(),900)});

/* ---- flowers ---- */
const PAL=[["#ff8fb3","#ffd1dc"],["#c9a8ff","#efe4ff"],["#ffb86b","#ffe2b8"],["#ff6b95","#ffc2d6"]];
function roseSVG(k){const c=k?{o:"#161619",m:"#24242c",i:"#0c0c10",s:"#6d6d80",h:"#8a8aa0"}:{o:"#a8112a",m:"#cf1f3b",i:"#820c1f",s:"#4d0a14",h:"#ff6a80"};let p="";
for(let i=0;i<5;i++)p+=`<circle r="19" cx="0" cy="-27" fill="${c.o}" stroke="${c.s}" stroke-width="1.4" transform="rotate(${i*72})"/>`;
for(let i=0;i<5;i++)p+=`<circle r="15" cx="0" cy="-17" fill="${c.m}" stroke="${c.s}" stroke-width="1.2" transform="rotate(${i*72+36})"/>`;
for(let i=0;i<4;i++)p+=`<circle r="11" cx="0" cy="-9" fill="${c.i}" stroke="${c.s}" stroke-width="1" transform="rotate(${i*90+20})"/>`;
return`<svg viewBox="-48 -48 96 96">${p}<path d="M-4 0a4 4 0 1 1 4 4a2.5 2.5 0 1 1-2.5-2.5" fill="none" stroke="${c.h}" stroke-width="1.3" stroke-linecap="round"/></svg>`}
function flowerSVG(){return roseSVG(Math.random()<.5?0:1)}
let tt;function toast(t,ms){const e=$("#toast");e.textContent=t;e.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>e.classList.remove("on"),ms||Math.max(3800,t.length*70))}
function bloom(x,y,s=40){s*=1.35;const e=document.createElement("div");e.className="bloom";e.style.cssText=`left:${x-s/2}px;top:${y-s/2}px;width:${s}px;height:${s}px`;e.innerHTML=flowerSVG();document.body.appendChild(e);setTimeout(()=>e.remove(),5200)}
function petal(){const e=document.createElement("i"),s=9+Math.random()*10;e.className="petal"+(Math.random()<.5?" k":"");e.style.cssText=`left:${Math.random()*100}vw;width:${s}px;height:${s*1.3}px;--dx:${Math.random()*240-120}px;animation-duration:${6+Math.random()*5}s`;document.body.appendChild(e);setTimeout(()=>e.remove(),11500)}
function pop(t){const d=document.createElement("div");d.className="pop";d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),1600)}
setInterval(petal,1000);
(()=>{const w=$("#wreath"),n=12;for(let i=0;i<n;i++){const a=i/n*360,s=i%2?26:36,d=document.createElement("div");d.className="wf";d.style.cssText=`width:${s}px;height:${s}px;margin:${-s/2}px 0 0 ${-s/2}px;transform:rotate(${a}deg) translateY(-100px) rotate(${-a}deg)`;d.innerHTML=roseSVG(i%2);w.appendChild(d)}})();
(()=>{const g=$("#garden");[["left","top"],["right","top"],["left","bottom"],["right","bottom"]].forEach(([hx,vy])=>{for(let i=0;i<9;i++){const s=40+Math.random()*46,d=document.createElement("div");d.className="gf";d.style[hx]=(i*26+Math.random()*20-16)+"px";d.style[vy]=(Math.abs(Math.sin(i*1.9))*48+Math.random()*30-18)+"px";d.style.width=d.style.height=s+"px";d.style.animationDelay=-Math.random()*6+"s";d.innerHTML=roseSVG(i%2);g.appendChild(d)}
for(let i=0;i<4;i++){const l=document.createElement("div");l.className="gl";l.style[hx]=(i*40+10)+"px";l.style[vy]=(20+Math.random()*50)+"px";l.style.transform=`rotate(${Math.random()*80-40}deg) scaleX(${hx==="right"?-1:1})`;g.insertBefore(l,g.firstChild)}})})();
addEventListener("pointerdown",e=>{if(!ready||e.target.closest("button,textarea,#cake,.arena,#modal,#dock,.paper"))return;bloom(e.clientX,e.clientY,30+Math.random()*26)});

/* ---- private photos (decrypted in the browser with her secret code) ---- */
safe(()=>{const V=window.PHOTOS_ENC,box=$("#vault");if(!V||!box)return;box.classList.remove("hide");$("#vhint").textContent=V.hint?"Hint: "+V.hint:"";
const b64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0)),K="vault_"+her;
async function decryptAll(code){const km=await crypto.subtle.importKey("raw",new TextEncoder().encode(code.trim().toLowerCase()),"PBKDF2",false,["deriveKey"]);
const key=await crypto.subtle.deriveKey({name:"PBKDF2",salt:b64(V.salt),iterations:V.iter,hash:"SHA-256"},km,{name:"AES-GCM",length:256},false,["decrypt"]);
const urls=[];for(const it of V.items)urls.push(URL.createObjectURL(new Blob([await crypto.subtle.decrypt({name:"AES-GCM",iv:b64(it.iv)},key,b64(it.d))],{type:"image/jpeg"})));
$$(".ph").forEach((b,i)=>{if(!urls[i])return;let im=b.querySelector("img");if(!im){im=document.createElement("img");im.alt=CONFIG.photos[i].cap;b.insertBefore(im,b.querySelector("span"))}im.src=urls[i]})}
async function tryCode(code,quiet){try{await decryptAll(code);try{localStorage.setItem(K,code)}catch(e){}box.classList.add("hide");if(!quiet){toast("Our photos are unlocked ♥");love(24)}return true}
catch(e){if(!quiet){$("#vmsg").textContent="That is not the code. Try again ♥";box.classList.remove("shake");void box.offsetWidth;box.classList.add("shake")}return false}}
$("#vgo").onclick=()=>tryCode($("#vcode").value);$("#vcode").onkeydown=e=>{if(e.key==="Enter")$("#vgo").click()};
let saved="";try{saved=localStorage.getItem(K)||""}catch(e){}if(saved)tryCode(saved,true)});

/* ---- photos added from her own phone (never uploaded anywhere) ---- */
safe(()=>{const box=$("#local"),inp=$("#lfile");if(!box)return;$("#lme").textContent=me;
const idb=()=>new Promise((res,rej)=>{const r=indexedDB.open("lovephotos_"+her,1);r.onupgradeneeded=()=>r.result.createObjectStore("s");r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
const put=async v=>{const d=await idb();return new Promise((res,rej)=>{const t=d.transaction("s","readwrite");t.objectStore("s").put(v,"set");t.oncomplete=res;t.onerror=()=>rej(t.error)})};
const get=async()=>{const d=await idb();return new Promise((res,rej)=>{const q=d.transaction("s").objectStore("s").get("set");q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)})};
const showAll=blobs=>{box.dataset.done="1";$$(".ph").forEach((b,i)=>{if(!blobs[i])return;let im=b.querySelector("img");if(!im){im=document.createElement("img");im.alt=CONFIG.photos[i].cap;b.insertBefore(im,b.querySelector("span"))}im.src=URL.createObjectURL(blobs[i])});box.classList.add("hide")};
const shrink=async f=>{const bm=await createImageBitmap(f,{imageOrientation:"from-image"}),k=Math.min(1,1400/Math.max(bm.width,bm.height)),c=document.createElement("canvas");c.width=Math.round(bm.width*k);c.height=Math.round(bm.height*k);c.getContext("2d").drawImage(bm,0,0,c.width,c.height);return new Promise(r=>c.toBlob(r,"image/jpeg",.85))};
$("#lpick").onclick=()=>inp.click();
inp.onchange=async()=>{const fs=[...inp.files].sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true})).slice(0,CONFIG.photos.length);if(!fs.length)return;toast("Adding our photos…");
try{const blobs=[];for(const f of fs)blobs.push(await shrink(f));showAll(blobs);try{await put(blobs)}catch(e){}toast("Our photos are here ♥");love(24)}catch(e){toast("Could not read those photos. Please try again.")}};
get().then(v=>{if(v&&v.length)showAll(v)}).catch(()=>{});
setTimeout(()=>{if(window.PHOTOS_ENC||box.dataset.done)return;if(![...$$(".ph img")].some(i=>i.complete&&i.naturalWidth>0))box.classList.remove("hide")},3000)});