'use strict';
(function () {
 const U = window.UNIT2_CONTENT;
 const settings = window.COURSE_SETTINGS;
 const fmt = n => Number(n).toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2});
 const escapeHTML = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const head=(k,t,sub='')=>`<div class="eyebrow">${k}</div><h1>${t}</h1>${sub?`<p class="lead">${sub}</p>`:''}`;
 const sectionLinks=U.notes.map((x,i)=>`<a data-section="u2-section-${i}" href="#u2-section-${i}">${i+1}. ${x[0]}</a>`).join('');
 const notesHTML=U.notes.map((x,i)=>`<section id="u2-section-${i}"><span class="eyebrow">${String(i+1).padStart(2,'0')}</span><h2>${x[0]}</h2>${x[1]}</section>`).join('');
 const checkItems=[
  'I can distinguish int, float and str values.',
  'I can use the arithmetic operators and parentheses correctly.',
  'I have read the Unit 2 notes and worked through the examples.',
  'I can explain why input() returns text and how to convert it.',
  'I have completed the three guided practice exercises.',
  'I have attempted the review questions and checked the explanations.',
  'I have built and tested my weekly expenditure calculator.',
  'I have submitted Activity U2 using the published course submission link.'
 ];
 let saved=[];
 try {let s=JSON.parse(localStorage.getItem('sse-python-r-unit2-v02')||'[]');if(Array.isArray(s))saved=s.filter(x=>Number.isInteger(x)&&x>=0&&x<checkItems.length);} catch(e){}
 let slideIndex=0;
 function validURL(value){try{return new URL(value).protocol==='https:'}catch(e){return false;}}
 function submission(){let u=settings.submissionUrl;return validURL(u)?`<a href="${escapeHTML(u)}" class="button primary" target="_blank" rel="noopener">Submit Activity U2</a><p class="muted">Submission opens in another tab. Files are not uploaded to this website.</p>`:`<button disabled>Submit Activity U2</button><p class="muted">The submission link is not yet configured. Save your work until an official link is announced.</p>`;}
 const glossary=[
 ['Arithmetic expression','A combination of values, variables and operators that produces a result.'],
 ['Concatenation','Joining strings, such as "12" + "3" becoming "123".'],
 ['Conversion','Changing a value from one type to another, such as int("6").'],
 ['Data type','A category of value; beginner examples include int, float and str.'],
 ['Float','A floating-point number used for decimal-capable arithmetic.'],
 ['F-string','A string beginning with f that can include expressions in braces.'],
 ['Input prompt','Text that appears to ask a user for a value.'],
 ['Integer','A whole-number value represented by the int type.'],
 ['Operator','A symbol such as +, *, / or % that performs an operation.'],
 ['Precedence','The rules that decide which operations are evaluated first.'],
 ['String','Text represented by the str type.'],
 ['TypeError','An exception arising from an operation on incompatible types.'],
 ['ValueError','An exception that may arise when a value cannot be converted as requested.']
 ];
 const pages={
  unit2:()=>head('Unit 02','Values, input and calculations','Turning fixed Python examples into interactive programmes with keyboard input and clear results.')+`<div class="actions"><a class="button primary" href="#slides2">View Unit 2 slides</a><a class="button" href="downloads/SSE_Unit_2_Slides.pptx" download>Download PowerPoint</a><a class="button" href="#practice2">Practice lab</a><a class="button" href="#activity2">Activity U2</a></div><div class="paper"><p><strong>Learning outcomes:</strong> recognise <code>int</code>, <code>float</code> and <code>str</code>; perform arithmetic; use <code>input()</code> and numeric conversions; format output; develop and test a simple cost calculator.</p><p class="muted">Suggested learning sequence: read the explanations, reproduce the worked code in a Python environment, explore the browser illustrations, complete the exercises and prepare your independent activity.</p><div class="toc">${sectionLinks}</div>${notesHTML}<section class="readings"><h2>Further reading</h2><p>The official <a href="https://docs.python.org/3/tutorial/introduction.html" target="_blank" rel="noopener">Python tutorial: Using Python as a calculator</a> explains numbers, text and basic variables. <a href="https://docs.python.org/3/library/functions.html#input" target="_blank" rel="noopener">Python documentation for input()</a> provides the formal behaviour of keyboard input. External reading requires internet access; all essential course materials are included here.</p></section></div><div class="actions"><a class="button primary" href="#practice2">Try the practice lab</a><a class="button" href="#review2">Review questions</a></div>`,
  slides2:()=>head('Unit 02','Presentation and revision','Twenty-eight self-contained browser slides, also available as a PowerPoint file.')+`<div class="actions"><a class="button primary" href="downloads/SSE_Unit_2_Slides.pptx" download>Download PowerPoint</a><button id="u2fullscreen">Full screen</button></div><div id="u2slidehost" class="slide" aria-live="polite"></div><div class="slidenav"><button id="u2prev">Previous</button><span id="u2slidecount"></span><button id="u2next">Next</button></div><p class="muted">Use the Previous and Next buttons or the left and right arrow keys. Esc leaves full screen. The slide viewer does not execute Python.</p><div class="slideshow-list">${U.slides.map((x,i)=>`<section class="printed-slide"><p>Unit 2 · ${i+1}/${U.slides.length}</p><h2>${escapeHTML(x[0])}</h2><p>${escapeHTML(x[1])}</p><pre>${escapeHTML(x[2])}</pre></section>`).join('')}</div>`,
  practice2:()=>head('Unit 02','Guided practice lab','Predict the result, inspect the calculation and then reproduce it in your Python editor.')+`
  <div class="card"><h2>Illustration A · Text versus numeric addition</h2><p>Type two whole numbers. The browser displays how <em>string concatenation</em> differs from <em>integer addition</em>. This is a JavaScript illustration of these two Python concepts, not a Python interpreter.</p>
  <form id="u2-convert"><div class="inputs"><label>First whole number<input name="first" value="12" inputmode="numeric" required></label><label>Second whole number<input name="second" value="3" inputmode="numeric" required></label></div><div class="actions"><button type="submit" class="primary">Compare results</button></div></form><div id="u2-convert-result" class="feedback" aria-live="polite">Text: "12" + "3" = "123". Numbers: 12 + 3 = 15.</div>
  <p>Equivalent Python:</p><pre><code>a = input("First whole number: ")
b = input("Second whole number: ")
print("Joined text:", a + b)
print("Numeric sum:", int(a) + int(b))</code></pre></div>
  <div class="card"><h2>Illustration B · Weekly expenditure</h2><p>Predict the weekly cost and remaining allowance. Change the inputs to examine an ordinary week, no campus days and a negative balance. Values are calculated in this browser using the same stated formulas; it does not run Python.</p>
  <form id="u2-budget"><div class="inputs"><label>Food per day (TZS)<input name="food" type="number" min="0" max="1000000" step="0.01" value="4000" required></label><label>Transport per day (TZS)<input name="transport" type="number" min="0" max="1000000" step="0.01" value="2500" required></label><label>Campus days<input name="days" type="number" min="0" max="7" step="1" value="5" required></label><label>Weekly allowance (TZS)<input name="allowance" type="number" min="0" max="10000000" step="0.01" value="40000" required></label></div><div class="actions"><button type="submit" class="primary">Calculate weekly budget</button><button type="button" id="u2-example-overspend">Use overspend example</button><button type="button" id="u2-example-zero">Use zero-day example</button></div></form><div id="u2-budget-result" class="feedback" aria-live="polite">Daily cost: TZS 6,500.00; weekly cost: TZS 32,500.00; remaining allowance: TZS 7,500.00.</div></div>
  <div class="paper"><h2>Exercise 1 · Fix a string calculation</h2><p>A student types <code>10</code> and <code>5</code> into this code. Explain why the output is <code>105</code> and change the program so it displays <code>15</code>.</p><pre><code>a = input("First value: ")
b = input("Second value: ")
print(a + b)</code></pre><details><summary>Hint and answer check</summary><p>Both values are strings. Convert each with <code>int()</code> before using <code>+</code>, for example <code>int(a) + int(b)</code>.</p></details>
  <h2>Exercise 2 · Shopping with delivery</h2><p>A student buys three exercise books at TZS 2,500 each and pays TZS 1,000 for delivery. Write a program that asks for quantity, price and delivery fee, then reports the final total. For those inputs, the expected total is TZS 8,500.</p><a href="downloads/u2_shopping_starter.py" download>Download shopping starter</a><details><summary>Hint</summary><p>Convert the quantity with <code>int()</code> and prices with <code>float()</code>. Calculate <code>quantity * price + delivery</code>. Format the result with <code>:.2f</code>.</p></details>
  <h2>Exercise 3 · Change the budget example</h2><p>Start with the weekly-expenditure example in the notes. Run all three test cases shown in Section 14 and compare your displayed values with the independently calculated answers. Make a note of any difference before correcting the code.</p><a href="downloads/u2_transport_calculator.py" download>Download completed transport example</a><details><summary>Independent thinking</summary><p>Which statement changes when the number of campus days becomes zero? Why can the balance be negative without the program crashing?</p></details>
  <h2>Optional extension</h2><p>Try a daily food cost of TZS 3750.50. Use decimal-capable input and display the weekly total and balance to two decimal places.</p></div><div class="actions"><a class="button primary" href="#activity2">Continue to Activity U2</a></div>`,
  review2:()=>head('Unit 02','Review questions','Explain an answer yourself first. Expand the explanation only after making an attempt.')+`<div class="paper">${[
 ['What is the difference between the values 4500 and "4500"?','4500 is an integer. "4500" is a string containing four digit characters.'],
 ['What does type(2.5) report?','It reports the float class because 2.5 is a decimal-capable floating-point number.'],
 ['Why does input() usually require a conversion before arithmetic?','input() returns a string; int() or float() converts suitable text into a numeric value.'],
 ['What are the results of 17 // 5 and 17 % 5?','3 and 2 respectively: three complete groups of five and two left over.'],
 ['Why does 5000 + 2000 * 5 differ from (5000 + 2000) * 5?','Multiplication has higher precedence than addition. The first is 15000 and the second is 35000.'],
 ['What happens when you calculate "12" + "3"?','Two strings are joined, producing the string "123".'],
 ['What does int("2.5") do?','It raises ValueError. The string is not a valid integer literal; use float("2.5") if a decimal is required.'],
 ['What does int(input("Trips: ")) achieve?','It displays the prompt, receives typed text and converts a valid whole-number response into an integer.'],
 ['How can you display a currency calculation with two decimal places?','Use an f-string such as print(f"Total: TZS {total:.2f}").'],
 ['Why can the budget balance be negative?','The formula is allowance - weekly_cost. If the cost is larger than the allowance, the subtraction gives a negative result.'],
 ['What is a logic error?','A program may run but implement the wrong formula or reasoning, producing incorrect results.'],
 ['Why should expected results be calculated independently?','If expected results are merely copied from the program output, the tests may fail to detect a wrong calculation.'],
 ['A student has daily food cost 4000, transport 2500 and 5 campus days. What is the weekly cost?','(4000 + 2500) × 5 = 32500 TZS.'],
 ['What comes next after a sequential calculator?','Unit 3 introduces if, elif and else to make decisions depending on conditions.']
 ].map((q,i)=>`<details><summary>${i+1}. ${escapeHTML(q[0])}</summary><p>${escapeHTML(q[1])}</p></details>`).join('')}<h2>Quick numerical check</h2><p>A notebook costs TZS 2,000. Four notebooks and a TZS 500 delivery fee cost:</p><div class="actions"><button type="button" data-u2-answer="6500">TZS 6,500</button><button type="button" data-u2-answer="8500">TZS 8,500</button><button type="button" data-u2-answer="10000">TZS 10,000</button></div><p id="u2-quiz-result" class="feedback" aria-live="polite">Select your answer.</p></div><div class="actions"><a class="button primary" href="#activity2">Independent activity</a></div>`,
  activity2:()=>head('Unit 02','Independent Activity U2','Build a weekly expenditure calculator and demonstrate its calculations with test evidence.')+`<div class="paper"><div class="eyebrow">Assessment · 20 raw marks</div><h2>Problem brief</h2><p>A student wants a small Python program to estimate weekly food and transport spending for the days they attend campus and compare that total with their weekly allowance.</p><p><strong>Required inputs:</strong> food cost per campus day (TZS), transport cost per campus day (TZS), number of campus days (a whole number) and weekly allowance (TZS). <strong>Required outputs:</strong> estimated weekly cost and the allowance balance, each clearly labelled in TZS and displayed to two decimal places.</p><p><strong>Assumptions:</strong> costs are constant across the selected days, days are non-negative whole numbers and the input follows the prompts. No loops, conditions or exception handling are required in Unit 2.</p><h2>Required work</h2><ol><li>Describe the problem; identify all inputs, processing steps and outputs.</li><li>Write a short, ordered algorithm, independently of Python syntax.</li><li>Create a runnable Python file that uses <code>input()</code>, correct numeric conversions, arithmetic operators and descriptive variable names.</li><li>Calculate <code>weekly_cost = (food + transport) * days</code> and <code>balance = allowance - weekly_cost</code>.</li><li>Display both outputs using a clear TZS label and two decimal places.</li><li>Run the three required test cases below. For each, record expected and actual values and whether they match.</li><li>Briefly explain the difference between text input and numeric input, and declare any assistance used.</li></ol><h2>Required tests</h2><table><tr><th>Food/day</th><th>Transport/day</th><th>Days</th><th>Allowance</th><th>Expected weekly cost</th><th>Expected balance</th></tr><tr><td>4000</td><td>2500</td><td>5</td><td>40000</td><td>32500</td><td>7500</td></tr><tr><td>3500</td><td>2000</td><td>4</td><td>20000</td><td>22000</td><td>-2000</td></tr><tr><td>5000</td><td>3000</td><td>0</td><td>10000</td><td>0</td><td>10000</td></tr></table><p>These are expected values; you must record the results actually produced by your program. The zero-day and negative-balance cases have been chosen deliberately.</p><h2>Files to submit</h2><p>Save the Python program as <code>StudentID_U2.py</code>. Include a short TXT, DOCX or PDF notes file containing the problem description, algorithm, completed test table, explanation and assistance declaration. Screenshots can support your notes but do not replace your runnable <code>.py</code> file.</p><div class="actions"><a class="button" href="downloads/u2_budget_starter.py" download>Download activity starter</a><a class="button" href="downloads/U2_submission_notes.txt" download>Download notes template</a></div><p><strong>Due date:</strong> ${escapeHTML(settings.unit2DueDate||'To be announced')}.</p><h2>Assessment criteria</h2><table><tr><th>Criterion</th><th>Raw marks</th></tr>${[['Problem, inputs and outputs',3],['Clear algorithm',3],['Correct interactive Python program and numeric conversions',6],['Correct and readable TZS output',2],['Three recorded tests and comparison',4],['Explanation and assistance declaration',2],['Total',20]].map(x=>`<tr><td>${x[0]}</td><td>${x[1]}</td></tr>`).join('')}</table><p>The task is marked out of 20. Its contribution to the overall course grade depends on the officially announced assessment scheme. Optional improvements do not replace the requirements.</p><p>Assistance can be from peers, websites or AI tools. Declare it and be able to explain and modify the submitted code.</p><h2>Submission</h2>${submission()}</div>`,
  progress2:()=>head('Personal record','My Unit 2 checklist','A local self-check, not an official record of attendance, marks or submission.')+`<div class="paper"><p>This checklist stays in the browser where you use it. Data is not synchronised or submitted. On shared computers another person may see saved selections.</p><progress id="u2progress" max="${checkItems.length}" value="${saved.length}"></progress><p id="u2progress-text">${saved.length} of ${checkItems.length} items checked by you</p>${checkItems.map((x,i)=>`<label class="checkitem"><input type="checkbox" data-u2-check="${i}" ${saved.includes(i)?'checked':''}><span>${x}</span></label>`).join('')}<div class="actions"><button id="u2export">Download checklist</button><button id="u2reset">Reset checklist</button></div><p class="muted" id="u2-status" aria-live="polite"></p></div>`,
  glossary2:()=>head('Reference','Unit 2 glossary')+`<div class="paper">${glossary.map(x=>`<h3>${escapeHTML(x[0])}</h3><p>${escapeHTML(x[1])}</p>`).join('')}</div>`
 };
 function showSlide(){let el=document.getElementById('u2slidehost');if(!el)return;const s=U.slides[slideIndex];el.innerHTML=`<small>UNIT 02 · ${slideIndex+1} / ${U.slides.length}</small><h2>${escapeHTML(s[0])}</h2><div class="columns"><p>${escapeHTML(s[1])}</p>${s[3]==='code'?`<pre><code>${escapeHTML(s[2])}</code></pre>`:`<p class="example">${escapeHTML(s[2])}</p>`}</div>`;document.getElementById('u2slidecount').textContent=`${slideIndex+1} / ${U.slides.length}`;document.getElementById('u2prev').disabled=slideIndex===0;document.getElementById('u2next').disabled=slideIndex===U.slides.length-1;}
 function updateProgress(){let p=document.getElementById('u2progress');if(p){p.value=saved.length;document.getElementById('u2progress-text').textContent=`${saved.length} of ${checkItems.length} items checked by you`;}}
 function persist(){try{localStorage.setItem('sse-python-r-unit2-v02',JSON.stringify(saved));}catch(e){let p=document.getElementById('u2-status');if(p)p.textContent='This browser could not save the selection. Download a checklist copy before leaving.';}}
 function download(name,text){const url=URL.createObjectURL(new Blob([text],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 function afterRender(view){if(view==='slides2'){slideIndex=0;showSlide();}if(view==='progress2')updateProgress();}
 document.addEventListener('click',e=>{
  let b=e.target.closest('button');if(!b)return;
  if(b.id==='u2prev'){slideIndex=Math.max(0,slideIndex-1);showSlide();}
  if(b.id==='u2next'){slideIndex=Math.min(U.slides.length-1,slideIndex+1);showSlide();}
  if(b.id==='u2fullscreen'){let host=document.getElementById('u2slidehost');if(host&&host.requestFullscreen)host.requestFullscreen().catch(()=>{});}
  if(b.dataset.u2Answer){document.getElementById('u2-quiz-result').textContent=b.dataset.u2Answer==='8500'?'Correct: 4 × 2000 + 500 = TZS 8500.':'Not yet. Calculate four notebooks at TZS 2000 each, then add delivery of TZS 500.';}
  if(b.id==='u2example' || b.id==='u2-example-overspend' || b.id==='u2-example-zero'){
   const f=document.getElementById('u2-budget');if(!f)return;
   const values=b.id==='u2-example-zero'?[5000,3000,0,10000]:[3500,2000,4,20000];
   ['food','transport','days','allowance'].forEach((name,i)=>f.elements[name].value=values[i]);
   f.requestSubmit();
  }
  if(b.id==='u2reset'){if(confirm('Clear this browser’s Unit 2 checklist?')){saved=[];persist();window.location.hash='#progress2';updateProgress();document.querySelectorAll('[data-u2-check]').forEach(el=>el.checked=false);}}
  if(b.id==='u2export')download('SSE_Unit2_Checklist.txt',checkItems.map((x,i)=>(saved.includes(i)?'[x] ':'[ ] ')+x).join('\n')+'\n\nPersonal checklist only; not a submission record.');
 });
 document.addEventListener('submit',e=>{
  if(e.target.id==='u2-convert'){
   e.preventDefault();let f=e.target;let a=f.elements.first.value.trim(),b=f.elements.second.value.trim();let out=document.getElementById('u2-convert-result');
   if(!/^[+-]?\d+$/.test(a)||!/^[+-]?\d+$/.test(b)){out.textContent='Enter two whole numbers using digits, for example 12 and 3.';return;}
   const n1=Number(a),n2=Number(b);
   if(!Number.isSafeInteger(n1)||!Number.isSafeInteger(n2)||!Number.isSafeInteger(n1+n2)){out.textContent='Use smaller whole numbers for this illustration.';return;}
   out.textContent=`Text: "${a}" + "${b}" = "${a+b}". Numbers: ${n1} + ${n2} = ${n1+n2}.`;
  }
  if(e.target.id==='u2-budget'){
   e.preventDefault();let f=e.target;let values=['food','transport','days','allowance'].map(n=>Number(f.elements[n].value));let [food,travel,days,allowance]=values;
   if(values.some(v=>!Number.isFinite(v)||v<0)||!Number.isInteger(days)||days>7||food>1e6||travel>1e6||allowance>1e7)return;
   const daily=food+travel,weekly=daily*days,balance=allowance-weekly;
   document.getElementById('u2-budget-result').textContent=`Daily cost: TZS ${fmt(daily)}; weekly cost: TZS ${fmt(weekly)}; remaining allowance: TZS ${fmt(balance)}.`;
  }
 });
 document.addEventListener('change',e=>{const el=e.target;if(el.matches('[data-u2-check]')){const n=Number(el.dataset.u2Check);saved=saved.filter(x=>x!==n);if(el.checked)saved.push(n);persist();updateProgress();}});
 document.addEventListener('keydown',e=>{if(location.hash!=='#slides2'||['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;if(e.key==='ArrowRight'){slideIndex=Math.min(U.slides.length-1,slideIndex+1);showSlide();}if(e.key==='ArrowLeft'){slideIndex=Math.max(0,slideIndex-1);showSlide();}});
 window.UNIT2={titles:{unit2:'Values, input and calculations',slides2:'Unit 2 slides',practice2:'Unit 2 practice',review2:'Unit 2 review',activity2:'Activity U2',progress2:'Unit 2 checklist',glossary2:'Unit 2 glossary'},pages,afterRender};
})();
