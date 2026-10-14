(function(){try{const A='apple-touch-icon-180.png',B='icon-192.png',C='icon-512.png';document.querySelectorAll('link[rel*=icon]').forEach(l=>l.remove());const add=(r,h,x)=>{const l=document.createElement('link');l.rel=r;l.href=h;if(x)l.sizes=x;document.head.appendChild(l)};add('apple-touch-icon',A,'180x180');add('icon',B,'192x192');const mf={name:'AI Tutor',short_name:'AI Tutor',start_url:location.href,scope:location.href,display:'standalone',background_color:'#fff5f8',theme_color:'#e8587f',icons:[{src:B,sizes:'192x192',type:'image/png',purpose:'any'},{src:C,sizes:'512x512',type:'image/png',purpose:'any'}]};add('manifest','data:application/manifest+json,'+encodeURIComponent(JSON.stringify(mf)))}catch(e){}})();
const SUBJ={Mathematics:'🧮',Science:'🔬',English:'📖','Social Studies':'🌍','Computer Science':'💻',EVS:'🌳',Hindi:'अ',Gujarati:'ગ','General Knowledge':'💡','Art & Craft':'🎨','Moral Science':'🤝','Physical Education':'⚽',Sanskrit:'📜',History:'🏛️',Geography:'🗺️',Civics:'⚖️',Physics:'⚛️',Chemistry:'🧪',Biology:'🧬',Economics:'📈',Commerce:'🏪',Accountancy:'🧾','Business Studies':'💼',Statistics:'📊','Environmental Science':'♻️'};
const GR={Mathematics:[1,12],Science:[1,10],English:[1,12],'Social Studies':[3,10],'Computer Science':[1,12],EVS:[1,5],Hindi:[1,12],Gujarati:[1,12],'General Knowledge':[1,8],'Art & Craft':[1,8],'Moral Science':[1,8],'Physical Education':[1,12],Sanskrit:[6,12],History:[6,12],Geography:[6,12],Civics:[6,10],Physics:[9,12],Chemistry:[9,12],Biology:[9,12],Economics:[9,12],Commerce:[9,12],Accountancy:[11,12],'Business Studies':[11,12],Statistics:[11,12],'Environmental Science':[6,12]};
const avail=u=>u.grade?Object.keys(SUBJ).filter(s=>u.grade>=GR[s][0]&&u.grade<=GR[s][1]):Object.keys(SUBJ);
const QB={
Mathematics:[['What is 12 × 8?',['86','96','108','88'],1,'12 × 8 = 96 (10×8 + 2×8).'],['Solve: 2x + 6 = 14',['x=3','x=4','x=5','x=10'],1,'Subtract 6 → 2x = 8, divide by 2 → x = 4.'],['Area of a rectangle 5 by 7?',['12','24','35','70'],2,'Area = length × width = 35.']],
Science:[['Which gas do plants absorb for photosynthesis?',['Oxygen','Nitrogen','Carbon dioxide','Helium'],2,'Plants take in CO₂ and release oxygen.'],['What is the closest star to Earth?',['Moon','Sun','Mars','Sirius'],1,'The Sun is our nearest star.'],['Water boils at what °C (sea level)?',['50','90','100','120'],2,'Water boils at 100 °C.']],
English:[['Pick the noun: "The cat sleeps."',['The','cat','sleeps','.'],1,'A noun names a person, place or thing: cat.'],['Past tense of "go"?',['goed','went','gone','going'],1,'"Went" is the simple past of "go".'],['Opposite of "happy"?',['Sad','Glad','Joyful','Loud'],0,'Sad is the antonym of happy.']],
'Social Studies':[['How many continents are there?',['5','6','7','8'],2,'There are 7 continents.'],['Who wrote the Indian national anthem?',['Tagore','Gandhi','Nehru','Bose'],0,'Rabindranath Tagore wrote Jana Gana Mana.'],['Capital of India?',['Mumbai','New Delhi','Kolkata','Chennai'],1,'New Delhi is India’s capital.']],
'Computer Science':[['What does CPU stand for?',['Central Processing Unit','Computer Power Unit','Core Program Unit','Central Print Unit'],0,'The CPU is the computer’s brain.'],['Which is an input device?',['Monitor','Speaker','Keyboard','Printer'],2,'A keyboard sends data in.'],['Binary uses which digits?',['0–9','0 and 1','1–2','A–F'],1,'Binary is base 2: only 0 and 1.']],
EVS:[['Which animal gives us milk?',['Cow','Lion','Eagle','Snake'],0,'Cows give us milk.'],['Where should we throw waste?',['River','Dustbin','Road','Park'],1,'A dustbin keeps places clean.'],['Which is a source of light?',['Moon','Sun','Stone','Cloud'],1,'The Sun makes its own light; the Moon only reflects it.']],
Hindi:[['पहला स्वर कौन-सा है?',['क','अ','ग','म'],1,'हिंदी का पहला स्वर ‘अ’ है।'],['‘सूर्य’ का पर्यायवाची कौन-सा है?',['रवि','चाँद','तारा','धरती'],0,'रवि का अर्थ सूर्य है।'],['‘दिन’ का विलोम शब्द क्या है?',['सुबह','रात','शाम','धूप'],1,'दिन का विलोम रात है।']],
Gujarati:[['ગુજરાતી વર્ણમાલાનો પહેલો સ્વર કયો છે?',['અ','ક','મ','ત'],0,'પહેલો સ્વર ‘અ’ છે.'],['ગુજરાતની રાજધાની કઈ છે?',['સુરત','ગાંધીનગર','રાજકોટ','વડોદરા'],1,'રાજધાની ગાંધીનગર છે.'],['‘દિવસ’નો વિરોધી શબ્દ કયો?',['સવાર','રાત','સાંજ','બપોર'],1,'દિવસનો વિરોધી શબ્દ રાત છે.']],
'General Knowledge':[['National bird of India?',['Peacock','Sparrow','Crow','Parrot'],0,'The peacock is India’s national bird.'],['Which is the largest planet?',['Earth','Jupiter','Mars','Venus'],1,'Jupiter is the largest planet.'],['Days in a leap year?',['365','366','364','360'],1,'A leap year has 366 days.']],
'Art & Craft':[['Red + yellow makes?',['Green','Orange','Purple','Brown'],1,'Red and yellow mix to orange.'],['Which is a primary colour?',['Green','Blue','Pink','Orange'],1,'Red, blue and yellow are primary.'],['A tool used to paint?',['Brush','Spoon','Ruler','Scissors'],0,'A brush applies paint.']],
'Moral Science':[['You find a lost wallet. What do you do?',['Keep it','Give it to a teacher or police','Throw it','Hide it'],1,'Returning lost things is honest.'],['Telling the truth is called?',['Honesty','Laziness','Anger','Greed'],0,'Honesty means telling the truth.'],['Good manners include saying?',['Please and thank you','Nothing','Only no','Go away'],0,'Polite words show respect.']],
'Physical Education':[['Players on field in a cricket team?',['9','11','12','15'],1,'Each team fields 11 players.'],['What should you do before exercise?',['Warm up','Sleep','Eat a lot','Nothing'],0,'Warming up prevents injury.'],['Which sport uses a shuttlecock?',['Badminton','Tennis','Hockey','Football'],0,'Badminton uses a shuttlecock.']],
Sanskrit:[['‘जलम्’ का अर्थ क्या है?',['अग्नि','पानी','हवा','धरती'],1,'जलम् का अर्थ पानी है।'],['‘पुस्तकम्’ का अर्थ?',['पुस्तक','पेन','कलम','बस्ता'],0,'पुस्तकम् यानी पुस्तक।'],['‘गच्छति’ का अर्थ?',['आता है','जाता है','खाता है','पढ़ता है'],1,'गच्छति का अर्थ जाता है।']],
History:[['First Prime Minister of India?',['Nehru','Gandhi','Patel','Bose'],0,'Jawaharlal Nehru was the first PM.'],['India became independent in?',['1942','1947','1950','1935'],1,'Independence came on 15 August 1947.'],['Who built the Taj Mahal?',['Akbar','Shah Jahan','Babur','Ashoka'],1,'Shah Jahan built it for Mumtaz Mahal.']],
Geography:[['Longest river flowing in India?',['Ganga','Yamuna','Godavari','Narmada'],0,'The Ganga is the longest river in India.'],['Largest ocean?',['Atlantic','Pacific','Indian','Arctic'],1,'The Pacific is the largest.'],['The Tropic of Cancer passes through?',['Gujarat','Kerala','Punjab','Assam'],0,'It crosses Gujarat, among other states.']],
Civics:[['Head of state in India?',['President','Prime Minister','Chief Justice','Speaker'],0,'The President is the head of state.'],['Minimum voting age in India?',['16','18','21','25'],1,'Citizens can vote from age 18.'],['Supreme law of India?',['Constitution','Vedas','Atlas','Budget'],0,'The Constitution is the supreme law.']],
Physics:[['SI unit of force?',['Joule','Newton','Watt','Pascal'],1,'Force is measured in newtons.'],['Speed of light is about?',['3×10⁸ m/s','3×10⁶ m/s','300 m/s','3×10³ m/s'],0,'Light travels about 3×10⁸ m/s.'],['Formula for speed?',['Distance / Time','Time / Distance','Mass × Time','Force / Mass'],0,'Speed = distance ÷ time.']],
Chemistry:[['Chemical symbol of sodium?',['So','Na','S','Sn'],1,'Na comes from the Latin natrium.'],['pH of pure water?',['0','7','14','10'],1,'Pure water is neutral: pH 7.'],['Formula of water?',['CO₂','H₂O','O₂','NaCl'],1,'Water is H₂O.']],
Biology:[['Powerhouse of the cell?',['Nucleus','Mitochondria','Ribosome','Vacuole'],1,'Mitochondria produce energy (ATP).'],['Which blood cells carry oxygen?',['Red cells','White cells','Platelets','Plasma'],0,'Red cells carry oxygen using haemoglobin.'],['DNA stands for?',['Deoxyribonucleic acid','Dynamic nucleic acid','Double nitrogen acid','None of these'],0,'DNA is deoxyribonucleic acid.']],
Economics:[['Law of demand: if price falls, demand usually?',['Rises','Falls','Stays zero','Doubles always'],0,'Lower prices usually raise demand.'],['GDP stands for?',['Gross Domestic Product','General Domestic Price','Gross Daily Profit','Global Demand Plan'],0,'GDP is Gross Domestic Product.'],['Inflation is a general rise in?',['Prices','Jobs','Rainfall','Savings'],0,'Inflation means rising prices.']],
Commerce:[['Buying and selling of goods is?',['Trade','Farming','Teaching','Mining'],0,'Trade is the exchange of goods and services.'],['Who sells goods to consumers?',['Retailer','Banker','Auditor','Insurer'],0,'Retailers sell to the final customer.'],['GST stands for?',['Goods and Services Tax','General Sales Tax','Government Service Tax','Goods Saving Tax'],0,'GST is Goods and Services Tax.']],
Accountancy:[['Assets = Liabilities + ?',['Capital','Sales','Tax','Stock only'],0,'Accounting equation: Assets = Liabilities + Capital.'],['Debit is on which side of a ledger account?',['Left','Right','Top','Bottom'],0,'Debit is the left side.'],['Daily transactions are first recorded in?',['Journal','Balance sheet','Invoice','Budget'],0,'The journal is the book of original entry.']],
'Business Studies':[['Which is a function of management?',['Planning','Painting','Swimming','Singing'],0,'Planning is a core management function.'],['A business owned by one person is?',['Sole proprietorship','Partnership','Company','Cooperative'],0,'One owner means sole proprietorship.'],['Profit = Revenue − ?',['Costs','Capital','Loan','Stock'],0,'Profit is revenue minus costs.']],
Statistics:[['Mean of 2, 4, 6?',['3','4','5','6'],1,'(2+4+6) ÷ 3 = 4.'],['The middle value of sorted data is the?',['Median','Mode','Range','Mean'],0,'That is the median.'],['Mode of 1, 2, 2, 3?',['1','2','3','4'],1,'2 appears most often.']],
'Environmental Science':[['Which gas mainly causes global warming?',['Carbon dioxide','Helium','Neon','Argon'],0,'CO₂ traps heat in the atmosphere.'],['Which energy is renewable?',['Solar','Coal','Petrol','Diesel'],0,'Sunlight never runs out.'],['The 3 Rs: Reduce, Reuse and?',['Recycle','Remove','Rest','Repeat'],0,'Recycle completes the 3 Rs.']]};
let mem=null;const store={get(){try{return JSON.parse(localStorage.getItem('aitutor')||'null')}catch(e){return mem}},set(v){mem=v;try{localStorage.setItem('aitutor',JSON.stringify(v))}catch(e){}}};
let D=store.get()||{users:{},cur:null,seen:false};
const save=()=>store.set(D);
const U=()=>D.users[D.cur];
let v=D.cur?'home':(D.seen?'auth':'welcome'),ui={slide:0,mode:'signup',err:'',chat:[],quiz:null,subj:null,busy:false};
const today=()=>new Date().toISOString().slice(0,10);
function touch(){const u=U(),t=today();if(!u.days.includes(t)){const y=new Date(Date.now()-864e5).toISOString().slice(0,10);u.streak=u.days.includes(y)?u.streak+1:1;u.days.push(t)}}
const avg=a=>a.length?Math.round(a.reduce((x,y)=>x+y,0)/a.length):0;
const comp=(u,s)=>Math.min(100,(u.prog[s]||[]).length*20);
const perf=(u,s)=>avg((u.prog[s]||[]).map(x=>x.pct));
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const bar=p=>`<div class="bar" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i></div>`;
const NAV=[['home','🏠','Home'],['chat','🦉','AI Tutor'],['subjects','📚','Subjects'],['progress','📊','Progress'],['profile','🧑','Profile']];
function go(x){v=x;ui.err='';render()}
function render(){const m=document.getElementById('m'),n=document.getElementById('nav');
 const main=NAV.some(a=>a[0]===v)||v==='quiz';
 n.style.display=main?'flex':'none';
 n.innerHTML=NAV.map(([k,i,l])=>`<button data-go="${k}" class="${(v===k||(v==='quiz'&&k==='subjects'))?'on':''}" aria-label="${l}"><b>${i}</b>${l}</button>`).join('');
 const pv=m.dataset.v,sc=m.scrollTop;m.dataset.v=v;m.innerHTML=({welcome,auth,home,chat,subjects,quiz,progress,profile})[v]();m.scrollTop=pv===v?sc:0;
 const c=document.getElementById('log');if(c)c.scrollTop=c.scrollHeight;if(v==='chat')m.scrollTop=m.scrollHeight}
const LOGO=w=>`<img src='logo.png' alt='AI Tutor logo' width='${w}' style='display:inline-block;max-width:100%;height:auto;border-radius:22%'>`;
const SL=[[LOGO(150),'Meet your AI Tutor','Ask any question and get clear answers made for your grade.'],['🧮','Math, step by step','See every step of a solution, then try another example.'],['⭐','Practice and grow','Take quizzes, earn badges and keep your daily streak going.']];
function welcome(){const s=SL[ui.slide];return `<div style="text-align:center;padding-top:40px"><div class="big" style="font-size:96px">${s[0]}</div><h1>${s[1]}</h1><p>${s[2]}</p><div class="dots">${SL.map((_,i)=>`<i class="${i===ui.slide?'on':''}"></i>`).join('')}</div>
<button class="pri" data-act="next">${ui.slide<2?'Next':'Get started'}</button><p><button data-act="skip" style="background:none;color:var(--mut)">Skip</button></p></div>`}
function auth(){const s=ui.mode==='signup';return `<div style="text-align:center;padding-top:16px"><div style="text-align:center">${LOGO(120)}</div><h1>${s?'Create your account':'Welcome back'}</h1></div><div class="card">
<form id="af" novalidate>${s?'<label>Student name<input name="name" autocomplete="name"></label>':''}<label>Email<input name="email" type="email" autocomplete="email"></label>
<label>Password (6+ characters)<input name="pw" type="password" autocomplete="${s?'new-password':'current-password'}"></label>
<div class="err" role="alert">${esc(ui.err)}</div><button class="pri" type="submit">${s?'Sign up':'Log in'}</button></form>
<p style="text-align:center"><button data-act="mode" style="background:none;color:var(--pk)">${s?'Have an account? Log in':'New here? Sign up'}</button></p></div>
<p style="font-size:13px;text-align:center">Prototype: accounts are saved on this device only. Supabase auth comes in the next stage.</p>`}
function home(){const u=U();return `<h1>Hi, ${esc(u.name)}! 🌸</h1><p>What are you learning today?</p><h2>Select your grade</h2><div class="grid">${Array.from({length:12},(_,i)=>i+1).map(g=>`<button data-grade="${g}" class="${u.grade===g?'sel':''}" aria-pressed="${u.grade===g}">Grade ${g}<br><small>${g<=5?'Primary':g<=8?'Middle':'High'}</small></button>`).join('')}</div>
<div class="card row sp"><div><b>🔥 ${u.streak} day streak</b><p>Keep learning daily.</p></div><button data-go="subjects">Practice</button></div>
<button class="pri" data-go="chat">Ask AI Tutor</button>`}
function parseQ(t){t=t.toLowerCase().replace(/\s/g,'').replace(/²/g,'^2');const p=t.split('=');if(p.length!==2||p[1]!=='0'||!p[0].includes('x^2'))return null;
 let a=0,b=0,c=0;const k=s=>s===''||s==='+'?1:s==='-'?-1:parseFloat(s);const tk=p[0].match(/[+-]?[^+-]+/g);if(!tk||tk.join('')!==p[0])return null;
 for(const x of tk){if(x.endsWith('x^2'))a+=k(x.slice(0,-3));else if(x.endsWith('x'))b+=k(x.slice(0,-1));else c+=parseFloat(x)}
 return [a,b,c].some(isNaN)||a===0?null:[a,b,c]}
const f=n=>Math.round(n*1e4)/1e4;
function solve(a,b,c){const D=b*b-4*a*c;let s=`Equation: ${a}x² + ${b}x + ${c} = 0\n\nStep 1: Find the discriminant\nD = b² − 4ac = ${b}² − 4(${a})(${c}) = ${D}\n\n`;
 if(D<0)return s+'Step 2: D is negative, so there are no real solutions.';
 const r=Math.sqrt(D),x1=f((-b+r)/(2*a)),x2=f((-b-r)/(2*a));
 s+=`Step 2: Use the quadratic formula\nx = (−b ± √D) / 2a = (${-b} ± ${f(r)}) / ${2*a}\n\nStep 3: Solutions\n`;
 return s+(D===0?`x = ${x1} (one repeated solution)`:`x = ${x1} and x = ${x2}`)+'\n✔ Check: put each value back into the equation.'}
function reply(t){const q=parseQ(t);if(q)return solve(...q);
 return 'I can solve quadratic equations right now. Try: x^2 - 5x + 6 = 0\n\nFor other questions, the Gemini AI server must be set up first (next stage). Until then I cannot answer general questions.'}
function chat(){const u=U();return `<h1>🦉 AI Tutor</h1><p>Math helper · Grade ${u.grade||'not set'}</p><div id="log">${ui.chat.length?ui.chat.map(m=>`<div class="msg ${m.r}">${esc(m.t)}</div>`).join(''):'<div class="card"><b>No messages yet.</b><p>Type a quadratic equation like <code>x^2 - 5x + 6 = 0</code> to see it solved step by step.</p></div>'}${ui.busy?'<div class="msg ai" aria-live="polite">Thinking…</div>':''}</div>
<div class="chips"><button data-q="x^2 - 5x + 6 = 0">Example: x²−5x+6=0</button><button data-q="x^2 + 2x + 1 = 0">Example: x²+2x+1=0</button><button data-act="clear">Clear chat</button></div>
<form id="cf" class="row" style="margin-top:10px;position:sticky;bottom:-24px;background:var(--bg);padding:8px 0"><input name="q" placeholder="Type your question" aria-label="Your question" style="margin:0"><button class="sel" style="width:60px">➤</button></form>`}
function subjects(){const u=U();return `<h1>Subjects</h1><p>${ui.all||!u.grade?'All 25 subjects':'Grade '+u.grade+' · '+avail(u).length+' subjects'}</p>${u.grade?`<button data-act="all">${ui.all?'Show my grade only':'Show all 25 subjects'}</button>`:'<p>Pick a grade on Home to see only your subjects.</p>'}${(ui.all||!u.grade?Object.keys(SUBJ):avail(u)).map(s=>`<button class="card" data-subj="${s}" style="display:block;width:100%;text-align:left"><div class="row sp"><b>${SUBJ[s]} ${s}</b><span>${comp(u,s)}%</span></div>${bar(comp(u,s))}<p>${(u.prog[s]||[]).length} quizzes done · tap to practice</p></button>`).join('')}`}
function quiz(){const q=ui.quiz,s=ui.subj,u=U();if(!q)return `<h1>${SUBJ[s]} ${s}</h1><div class="card"><p>3 multiple-choice questions. Use a hint if you get stuck.</p><button class="pri" data-act="start">Start quiz</button></div><button data-go="subjects">Back</button>`;
 if(q.i>=q.qs.length){const pct=Math.round(q.score/q.qs.length*100);return `<div class="big">${pct>=67?'🎉':'💪'}</div><h1 style="text-align:center">${q.score} / ${q.qs.length} correct</h1><p style="text-align:center">Score: ${pct}% · progress saved.</p><button class="pri" data-act="start">Try again</button><p></p><button data-go="progress" style="width:100%">See progress</button>`}
 const [t,o,a,e]=q.qs[q.i];return `<p>Question ${q.i+1} of ${q.qs.length}</p>${bar(q.i/q.qs.length*100)}<h2>${esc(t)}</h2>${o.map((x,i)=>`<button class="opt ${q.p!=null?(i===a?'right':i===q.p?'wrong':''):''}" data-opt="${i}" ${q.p!=null?'disabled':''}>${esc(x)}</button>`).join('')}
${q.hint?`<p>💡 Hint: the answer has ${o[a].length} characters.</p>`:''}${q.p!=null?`<div class="card"><b>${q.p===a?'Correct!':'Not quite.'}</b><p>${esc(e)}</p></div><button class="pri" data-act="nextq">${q.i+1<q.qs.length?'Next question':'See results'}</button>`:'<button data-act="hint">Show hint</button>'}`}
function progress(){const u=U(),ks=Object.keys(SUBJ),ov=avg(avail(u).map(s=>comp(u,s)));const all=ks.flatMap(s=>u.prog[s]||[]);const top=ks.filter(s=>(u.prog[s]||[]).length).sort((a,b)=>perf(u,b)-perf(u,a))[0];
 const w=[];for(let i=6;i>=0;i--){const d=new Date(Date.now()-i*864e5);w.push([d.toLocaleDateString('en',{weekday:'short'}),all.filter(x=>x.d===d.toISOString().slice(0,10)).length])}const mx=Math.max(1,...w.map(x=>x[1]));
 const bd=[['🧮 Math Master',ks.some(s=>s==='Mathematics'&&perf(u,s)>=80&&(u.prog[s]||[]).length)],['⚡ Quick Learner',u.streak>=3],['🏅 First Quiz',all.length>0]];
 return `<h1>Your progress</h1><div class="card"><b>Overall completion: ${ov}%</b>${bar(ov)}<p>🔥 ${u.streak} day streak · ${all.length} quizzes taken</p></div>
<h2>Subject performance</h2><div class="card">${ks.filter(s=>(u.prog[s]||[]).length).map(s=>`<div class="row sp"><span>${s}</span><b>⭐ ${perf(u,s)}%</b></div>${bar(perf(u,s))}`).join('<p></p>')||'<b>No quizzes yet.</b><p>Take a quiz in Subjects to see your scores here.</p>'}</div>
<h2>Weekly activity</h2><div class="card"><div class="wk">${w.map(([d,c])=>`<div><i style="height:${c/mx*50}px"></i>${d}</div>`).join('')}</div><p>${top?'Best subject: '+top:'Take a quiz to see your best subject.'}</p></div>
<h2>Achievements</h2><div class="chips">${bd.map(([n,ok])=>`<button style="opacity:${ok?1:.45}" disabled>${n}${ok?'':' 🔒'}</button>`).join('')}</div>`}
function profile(){const u=U(),all=Object.values(u.prog).flat();return `<h1>Profile</h1><div class="card" style="text-align:center"><div style="text-align:center">${LOGO(110)}</div><b>${esc(u.name)}</b><p>${esc(u.email)} · Grade ${u.grade||'not set'}</p><div class="row sp"><div>⭐<br><b>${all.length*10}</b><br>Stars</div><div>🔥<br><b>${u.streak}</b><br>Streak</div><div>📅<br><b>${u.days.length}</b><br>Days</div></div></div>
<h2>Settings</h2><div class="card"><form id="pf"><label>Name<input name="name" value="${esc(u.name)}"></label><label>Grade<select name="grade">${Array.from({length:12},(_,i)=>`<option value="${i+1}" ${u.grade===i+1?'selected':''}>Grade ${i+1}</option>`).join('')}</select></label><div class="err" role="alert" style="${ui.err[0]==='S'?'color:var(--ok)':''}">${esc(ui.err)}</div><button class="pri">Save profile</button></form></div>
<div class="card"><button data-act="theme">Switch light / dark theme</button> <button data-act="reset" style="color:var(--bad)">Reset my progress</button></div><button class="pri" data-act="logout">Log out</button>`}
document.addEventListener('click',e=>{const t=e.target.closest('button');if(!t)return;const d=t.dataset;
 if(d.go)return go(d.go);
 if(d.grade){const u=U();u.grade=+d.grade;save();return render()}
 if(d.subj){ui.subj=d.subj;ui.quiz=null;return go('quiz')}
 if(d.q){return send(d.q)}
 if(d.opt!=null){const q=ui.quiz;if(q.p==null){q.p=+d.opt;if(q.p===q.qs[q.i][2])q.score++}return render()}
 switch(d.act){
 case 'next':if(ui.slide<2){ui.slide++;render()}else{D.seen=true;save();go('auth')}break;
 case 'skip':D.seen=true;save();go('auth');break;
 case 'mode':ui.mode=ui.mode==='signup'?'login':'signup';ui.err='';render();break;
 case 'clear':ui.chat=[];render();break;
 case 'all':ui.all=!ui.all;render();break;
 case 'start':ui.quiz={qs:QB[ui.subj],i:0,score:0,p:null,hint:false};render();break;
 case 'hint':ui.quiz.hint=true;render();break;
 case 'nextq':{const q=ui.quiz;q.i++;q.p=null;q.hint=false;if(q.i>=q.qs.length){const u=U();touch();(u.prog[ui.subj]=u.prog[ui.subj]||[]).push({pct:Math.round(q.score/q.qs.length*100),d:today()});save()}render();break}
 case 'theme':{const r=document.documentElement;const dk=r.dataset.theme==='dark'||(!r.dataset.theme&&matchMedia('(prefers-color-scheme:dark)').matches);r.dataset.theme=dk?'light':'dark';break}
 case 'reset':if(confirm('Reset all quiz progress?')){const u=U();u.prog={};u.streak=0;u.days=[];save();render()}break;
 case 'logout':D.cur=null;save();ui.chat=[];go('auth');break}});
function send(t){t=t.trim();if(!t)return;ui.chat.push({r:'me',t});ui.busy=true;render();setTimeout(()=>{ui.busy=false;ui.chat.push({r:'ai',t:reply(t)});const u=U();touch();save();render()},500)}
document.addEventListener('submit',e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target));
 if(e.target.id==='cf')return send(f.q);
 if(e.target.id==='pf'){if(!f.name.trim())ui.err='Please enter a name.';else{const u=U();u.name=f.name.trim();u.grade=+f.grade;save();ui.err='Saved ✓'}return render()}
 const em=(f.email||'').trim().toLowerCase();
 if(ui.mode==='signup'&&!(f.name||'').trim())ui.err='Enter the student name.';
 else if(!/^\S+@\S+\.\S+$/.test(em))ui.err='Enter a valid email address.';
 else if((f.pw||'').length<6)ui.err='Password must have at least 6 characters.';
 else if(ui.mode==='signup'){if(D.users[em])ui.err='This email already has an account. Log in instead.';else{D.users[em]={name:f.name.trim(),email:em,pw:f.pw,grade:null,prog:{},streak:0,days:[]};D.cur=em;touch();save();return go('home')}}
 else{const u=D.users[em];if(!u||u.pw!==f.pw)ui.err='Email or password is incorrect.';else{D.cur=em;touch();save();return go('home')}}
 render()});
render();
