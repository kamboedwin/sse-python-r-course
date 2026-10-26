'use strict';
(function(){
 const U=window.UNIT8_CONTENT,S=window.COURSE_SETTINGS;
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const heading=(k,t,s='')=>`<div class="eyebrow">${k}</div><h1>${t}</h1>${s?`<p class="lead">${s}</p>`:''}`;
 const submit=()=>`<a class="button primary" href="${esc(S.submissionUrl)}" target="_blank" rel="noopener noreferrer">Open official assignment Google Form ↗</a><p class="muted">The form requires internet access. This website does not upload files, verify submissions or set form permissions.</p>`;
 const toc=U.notes.map((x,i)=>`<a href="#u8-section-${i}" data-section="u8-section-${i}">${i+1}. ${esc(x[0])}</a>`).join('');
 const notes=U.notes.map((x,i)=>`<section id="u8-section-${i}" class="u8-note"><span class="eyebrow">${String(i+1).padStart(2,'0')}</span><h2>${esc(x[0])}</h2>${x[1]}</section>`).join('');
 const q=[
 ['What makes an exercise into a mini-project?','A project addresses a stated problem, explains input and method, runs as a usable solution, includes evidence of correctness and communicates limitations.'],
 ['Why keep the Python and R datasets identical?','Only the same inputs permit a meaningful cross-language consistency comparison.'],
 ['What inputs are needed?','Five weekdays, five non-negative expenses in TZS, five non-negative study-hour values and a non-negative allowance.'],
 ['Why is the sample dataset fictional?','It makes the work reproducible without exposing personal financial information.'],
 ['What is the total expenditure for the baseline week?','2000 + 3000 + 0 + 4000 + 1000 = TZS 10,000.'],
 ['What is the five-day average?','TZS 10,000 divided by five days is TZS 2,000 per day. The zero expense remains part of the average.'],
 ['Which is the peak day in the baseline data?','Thursday is first and uniquely highest at TZS 4,000.'],
 ['How many study hours are in the baseline data?','2 + 1 + 3 + 2 + 2 = 10 hours.'],
 ['What is the baseline budget result?','With an allowance of TZS 15,000 and expenses of TZS 10,000, the week is Within budget with TZS 5,000 remaining.'],
 ['Why is a negative expense rejected?','This specific project requires non-negative daily expenditures; a negative violates the stated input rules.'],
 ['Why must the lengths of the lists match?','Every expense and hour value must refer to the same day so calculated labels are meaningful.'],
 ['What is the use of a function?','It packages a named reusable operation, which reduces duplication and makes targeted testing easier.'],
 ['How is a first maximum located in Python?','Find max(expenses), then expenses.index(maximum). That index retrieves the matching day.'],
 ['How is the first maximum located in R?','which.max(expenses) returns its one-based position; use that position to select the matching day.'],
 ['What happens if total expenditure equals the allowance?','The exact-equality state must be reported as Exactly on budget.'],
 ['What does a data frame provide in R?','A table of equal-length named columns such as day, expense and study hours.'],
 ['What should a readable chart include?','A meaningful title, day labels and a clear expense axis unit such as Amount (TZS).'],
 ['Does matching Python and R output guarantee truth?','No. Both scripts can share a mistaken assumption or bad data; independent expected outcomes and tests are also necessary.'],
 ['Why test all-zero observations?','They verify that zero is accepted as real data and that budget equality and ties are handled correctly.'],
 ['Why run a negative-value test?','The expected outcome is rejection rather than an apparently valid financial summary.'],
 ['What belongs in a test report?','Test identifier, input, independently calculated expected value, actual output, and PASS or FAIL.'],
 ['What is a reasonable limitation to report?','The analysis describes five fictional days and cannot reliably predict a future week.'],
 ['Why are units important in a presentation?','They tell the audience whether a value means TZS, hours, or something else.'],
 ['What should you disclose when external assistance is used?','Explain whether people, websites or AI tools helped, and verify code and conclusions yourself.']
 ];
 const terms=[
 ['Algorithm','A planned sequence of processing steps independent of a specific programming language.'],
 ['Allowance','Amount of money allocated for the five-day period.'],
 ['Bar chart','A plot whose separate bars represent quantities for categories such as weekdays.'],
 ['Baseline','The first fixed example dataset used for an agreed comparison.'],
 ['Boundary case','Input near a decision threshold, such as exact budget equality.'],
 ['Cross-language validation','Comparing numerical results for identical input in two programming languages.'],
 ['Data frame','Tabular data structure in R, with named equal-length columns.'],
 ['Evidence','Recorded observations and tests supporting a stated result.'],
 ['Finite number','A numeric value that is neither infinity nor NaN.'],
 ['First maximum','First occurrence of the greatest value in the input order.'],
 ['Input validation','Checking values against explicit rules before processing.'],
 ['Logic error','A mistake causing wrong output even though code can run.'],
 ['Mini-project','A small coherent task with problem, implementation, verification and communication.'],
 ['Reproducibility','Another person can follow the documented steps to obtain the same results.'],
 ['Test case','Specific input with an independently established expected outcome.'],
 ['Test report','Record of expected and actual outcomes and PASS/FAIL results.'],
 ['Vector','An R object holding a sequence of values in one atomic type.'],
 ['Visualisation','A display such as a bar chart used to communicate a pattern in data.']
 ];
 const checks=[
 'I can state my problem, target audience and five-day scope.',
 'I can explain the sample dataset and independently calculate the expected outputs.',
 'I can show a clear input–process–output algorithm.',
 'My Python script validates input and uses at least two reusable functions.',
 'My R script uses the identical dataset, creates a data frame and a labelled bar chart.',
 'I have compared corresponding Python and R summaries.',
 'I have run and recorded the four valid scenarios plus the invalid-value test.',
 'I have written a concise report including test evidence, limitations and help received.',
 'I have prepared five readable presentation slides.',
 'I have prepared the requested files and checked the official submission form.'
 ];
 let saved=[]; try{const x=JSON.parse(localStorage.getItem('sse-python-r-unit8-v08')||'[]');if(Array.isArray(x))saved=x.filter(n=>Number.isInteger(n)&&n>=0&&n<checks.length);}catch{}
 let slideIdx=0,workflowIdx=0,pitchIdx=0,caseIdx=0;
 const weekdays=['Mon','Tue','Wed','Thu','Fri'];
 const samples=[
 {id:'T01 · Normal',e:[2000,3000,0,4000,1000],h:[2,1,3,2,2],a:15000,expected:'Total 10,000; mean 2,000; peak Thu; study 10 hours; Within budget'},
 {id:'T02 · All zero',e:[0,0,0,0,0],h:[0,0,0,0,0],a:0,expected:'Total 0; mean 0; first peak Mon; study 0 hours; Exactly on budget'},
 {id:'T03 · Exact',e:[1000,2000,3000,4000,5000],h:[1,1,1,1,1],a:15000,expected:'Total 15,000; mean 3,000; peak Fri; study 5 hours; Exactly on budget'},
 {id:'T04 · Above',e:[5000,6000,7000,3000,1000],h:[2,2,2,2,2],a:20000,expected:'Total 22,000; mean 4,400; peak Wed; study 10 hours; Over budget'},
 {id:'T05 · Invalid',e:[2000,-100,1000,3000,500],h:[2,1,3,2,2],a:15000,expected:'REJECT: a daily expense is negative; do not report a valid summary'}
 ];
 const workflow=[
 ['1. Define the question','Identify the student need, timeframe, intended user and explicit outputs.'],
 ['2. Record and validate data','Use five aligned observations. Reject invalid lengths or non-finite or negative amounts.'],
 ['3. Calculate with Python','Use named functions to compute, label and classify the summaries.'],
 ['4. Check with R','Create the matching data frame, repeat summaries and plot daily expenses.'],
 ['5. Test and compare','Document expected versus actual results across all five scenarios.'],
 ['6. Explain and present','Report results, one limitation, test evidence and the assistance declaration.']
 ];
 const pitches=[
 ['Slide 1 · Problem','Who benefits? What small question does the project answer? Say that five fictional days are analysed.'],
 ['Slide 2 · Data and method','Show the day, expenses and study-hours structure and the simple validation → processing → output sequence.'],
 ['Slide 3 · Implementation','Explain how Python and R use the same input; identify one reusable Python function and one R data-frame operation.'],
 ['Slide 4 · Verified results','Include the labelled R chart, baseline expenditure total, average, peak day and at least one test observation.'],
 ['Slide 5 · Limitations and lessons','State why a fictional five-day analysis is not a prediction. Prepare to run the script and answer a question.']
 ];
 const testRows=samples.map((x,i)=>`<tr><td>${esc(x.id)}</td><td>${esc(x.e.join(', '))}</td><td>${esc(x.a)}</td><td>${esc(x.expected)}</td></tr>`).join('');
 const pages={
 unit8:()=>heading('Unit 08 · Final unit','Mini-project and presentation','Bring Python and R together in a small, reproducible project with a short evidence-based presentation.')+`<div class="actions"><a class="button primary" href="#slides8">View Unit 8 slides</a><a class="button" href="downloads/SSE_Unit_8_Slides.pptx" download>Download PowerPoint</a><a class="button" href="#practice8">Interactive practice</a><a class="button" href="#activity8">Activity U8</a></div><div class="card"><h2>Learning outcomes</h2><p>By the end, you can <strong>define</strong> a small problem, <strong>implement</strong> equivalent analyses in Python and R, <strong>validate</strong> the input, <strong>test</strong> required cases and <strong>present</strong> a supported conclusion with stated limitations.</p><p>All core tasks use language features introduced in Units 1–7. No online API, extra R package, paid software, machine-learning library or real private data is required.</p></div><div class="card"><h2>Find a section</h2><div class="u8-toc">${toc}</div></div><div class="paper u8-notes">${notes}</div><div class="actions"><a class="button primary" href="#practice8">Begin guided project lab</a><a class="button" href="#review8">Review questions</a><a class="button" href="#activity8">Independent activity</a></div>`,
 slides8:()=>heading('Unit 08','Presentation and revision',`${U.slides.length} self-contained browser slides and a downloadable editable PowerPoint.`)+`<div class="actions"><a class="button primary" href="downloads/SSE_Unit_8_Slides.pptx" download>Download PowerPoint</a><button id="u8-fullscreen">Full screen</button></div><div id="u8-slide" class="slide" aria-live="polite"></div><div class="slidenav"><button id="u8-prev">Previous</button><span id="u8-slidecount"></span><button id="u8-next">Next</button></div><p class="muted">Slides are readable independently. The examples are teaching demonstrations; run actual code in Python and R to verify your project.</p><div class="slideshow-list">${U.slides.map((s,i)=>`<section class="printed-slide"><p>Unit 8 · ${i+1}/${U.slides.length}</p><h2>${esc(s[0])}</h2><p>${esc(s[1])}</p><pre>${esc(s[2])}</pre></section>`).join('')}</div>`,
 practice8:()=>heading('Unit 08','Project workshop and interactive practice','Explore the problem-solving stages, cross-check results, test tricky cases and rehearse your presentation.')+`
 <div class="card"><h2>A. Six-stage project workflow</h2><p>Select a stage to highlight it and read how it contributes to a complete project.</p><div class="u8-flow" id="u8-flow"></div><div class="feedback" id="u8-flow-explain" aria-live="polite"></div><div class="actions"><button id="u8-flow-back">Previous stage</button><button class="primary" id="u8-flow-next">Next stage</button></div></div>
 <div class="card"><h2>B. Compare Python and R on the same week</h2><p>Choose a required scenario or enter your own five-day values. This browser illustration computes equivalent mathematical summaries in JavaScript. <strong>It does not run your Python or R source files</strong> and is not submission evidence.</p><div id="u8-case-buttons" class="u7-choice-grid"></div><form id="u8-data-form" class="u8-lab-form"><label>Five expenses in TZS (comma separated)<input name="expenses" value="2000,3000,0,4000,1000" required></label><label>Five study hours (comma separated)<input name="hours" value="2,1,3,2,2" required></label><label>Allowance in TZS<input name="allowance" type="number" step="any" min="0" value="15000" required></label><div class="actions"><button class="primary" type="submit">Calculate and compare</button><button type="button" id="u8-reset">Restore normal case</button></div></form><p id="u8-error" class="feedback" role="status"></p><div id="u8-cross-summary" class="u8-comparison" aria-live="polite"></div><div id="u8-bars" class="u8-bars" aria-label="Five daily expense bars"></div><p class="muted">The same observation data should produce equal summaries. Actual Python and R execution still needs to be tested separately.</p></div>
 <div class="card"><h2>C. Required test-case explorer</h2><p>Each case has an expected result established from the specified inputs. Compare it with your own programme output. For the invalid case, a clear rejection is the only acceptable outcome.</p><div class="u7-scroll"><table><tr><th>Case</th><th>Expenses (TZS)</th><th>Allowance</th><th>Expected result</th></tr>${testRows}</table></div><div class="feedback" id="u8-test-detail" aria-live="polite"></div><a href="downloads/U8_test_report_template.csv" download>Download test-report CSV</a></div>
 <div class="card"><h2>D. Five-slide presentation planner</h2><p>Use the prompts to prepare a short explanation of your own verified results. These prompts are an outline, not a presentation recording.</p><div id="u8-pitch" class="u8-pitch" aria-live="polite"></div><div class="actions"><button id="u8-pitch-back">Previous slide</button><button class="primary" id="u8-pitch-next">Next slide</button></div><a href="downloads/SSE_Unit_8_Student_Presentation_Template.pptx" download>Download editable five-slide student presentation template</a></div>
 <div class="paper"><h2>Guided exercises</h2><ol><li>Open the shared CSV and verify its five rows and three columns.</li><li>Run <code>u8_python_guided.py</code> in Python and compare its total and budget result to hand calculations.</li><li>Run <code>u8_r_guided.R</code> in R and inspect its data frame and output; find the saved demonstration chart.</li><li>Select the exact-budget scenario. Explain why it differs from the normal case.</li><li>Enter one negative expense and describe the validation failure before attempting a calculation.</li><li>Use the presentation planner to explain a finding, a check and one data limitation.</li></ol><div class="actions"><a class="button" href="downloads/u8_python_guided.py" download>Python guided file</a><a class="button" href="downloads/u8_r_guided.R" download>R guided file</a><a class="button" href="downloads/u8_sample_week.csv" download>Sample CSV</a></div></div>`,
 review8:()=>heading('Unit 08','Review questions','Try to answer before opening the explanations. These questions prepare you for a project demonstration.')+`<div class="paper">${q.map(([a,b],i)=>`<details><summary>${i+1}. ${esc(a)}</summary><p>${esc(b)}</p></details>`).join('')}</div><div class="card"><h2>Quick reflection</h2><p>If Python and R agree but your manual expected result differs, which steps should you check?</p><details><summary>See a suggested reasoning path</summary><p>First verify the original observations, units, and expected arithmetic; then examine whether both scripts copied a shared logic or indexing error. Language agreement alone is insufficient.</p></details></div>`,
 activity8:()=>heading('Independent mini-project · 20 raw marks','Activity U8 · Campus Week Insights','Build and defend a consistent five-day analysis in Python and R, with evidence of tests and a short presentation.')+`<div class="paper"><p><strong>Due date:</strong> ${esc(S.unit8DueDate||'To be announced')}.</p><h2>Scenario and data</h2><p>A fictional student wants to understand five days of daily expenditure (TZS) and study hours. Start with Monday to Friday amounts <code>2000,3000,0,4000,1000</code>, hours <code>2,1,3,2,2</code> and a weekly allowance of <code>15000</code> TZS. The same input must be used by both programmes. The supplied CSV is an optional reference.</p><h2>Required solution</h2><ol><li>Write a short problem statement, define inputs and outputs, and supply a simple algorithm or pseudocode.</li><li>Create <strong>StudentID_U8.py</strong> that checks five matched days and finite non-negative values, uses at least two named reusable functions, and reports total expense, five-day average, first highest-spend day, study hours and correct three-state budget status.</li><li>Create <strong>StudentID_U8.R</strong> with the identical data, a three-column data frame, the same numerical summaries and budget decision, sensible validation and a labelled base-R bar chart.</li><li>Show a comparison table demonstrating whether the Python and R results agree for the baseline dataset.</li><li>Test <strong>T01–T05</strong> as specified below; document expected versus actual behaviour. Four valid cases should be reproducible in both languages. T05 must be rejected, not summarised.</li><li>Write a concise report with one meaningful limitation and a declaration of human, web or AI help. Prepare a clear <strong>five-slide presentation</strong> explaining the purpose, data, method, verified results and limitations.</li></ol><h2>Required test scenarios</h2><div class="u7-scroll"><table><tr><th>ID</th><th>Expenses (TZS)</th><th>Allowance (TZS)</th><th>Expected output</th></tr>${testRows}</table></div><p>The matching study-hour inputs and detailed expected outcomes are shown in <a href="#practice8">Unit 8 practice</a> and the downloadable test template. Record the actual values produced by running your own scripts.</p><h2>Student files</h2><div class="actions"><a class="button" href="downloads/u8_campus_project_starter.py" download>Python independent starter</a><a class="button" href="downloads/u8_campus_project_starter.R" download>R independent starter</a><a class="button" href="downloads/U8_submission_notes.txt" download>Report/notes template</a><a class="button" href="downloads/SSE_Unit_8_Student_Presentation_Template.pptx" download>Student slides template</a></div><p>Independent starter scripts intentionally contain unfinished <code>TODO</code> sections; completing and testing them is part of the assignment. <strong>No optional extension is required</strong> to earn full marks.</p><h2>Marking criteria · 20 marks</h2><table><tr><th>Criterion</th><th>Marks</th></tr><tr><td>Problem, dataset and understandable algorithm</td><td>3</td></tr><tr><td>Python solution, reusable functions and validation</td><td>4</td></tr><tr><td>R analysis, reproducible results and labelled chart</td><td>4</td></tr><tr><td>Clear Python–R results comparison</td><td>2</td></tr><tr><td>Five documented tests with expected/actual outcomes</td><td>4</td></tr><tr><td>Short report, five-slide presentation, limitation and assistance declaration</td><td>3</td></tr><tr><th>Total</th><th>20</th></tr></table><p>Raw marks are shown for this assignment only. The programme's official assessment weighting, submission deadlines and permitted formats are determined by the course administration and live form.</p><h2>Submission</h2><p>Prepare Python and R scripts, report/test table, R chart and five-slide presentation. Replace StudentID placeholders with your required identifier. You may submit a ZIP if the official form allows it. Keep the files in your own backup location.</p>${submit()}</div>`,
 progress8:()=>heading('Personal record','My Unit 8 checklist','A personal reminder saved only in this browser, not an official record.')+`<div class="paper"><progress id="u8-progress" value="${saved.length}" max="${checks.length}"></progress><p id="u8-progress-label"></p>${checks.map((x,i)=>`<label class="checkitem"><input type="checkbox" data-u8-check="${i}" ${saved.includes(i)?'checked':''}><span>${esc(x)}</span></label>`).join('')}<div class="actions"><button id="u8-download-checklist">Download checklist</button><button id="u8-clear-checklist">Reset</button></div><p id="u8-checkstatus" class="muted" aria-live="polite"></p><p><strong>Reminder:</strong> this checklist does not confirm an official submission or grade.</p></div>`,
 glossary8:()=>heading('Reference','Unit 8 glossary')+`<div class="paper">${terms.map(([a,b])=>`<h3>${esc(a)}</h3><p>${esc(b)}</p>`).join('')}</div>`
 };
 function drawSlide(){const e=document.getElementById('u8-slide');if(!e)return;const s=U.slides[slideIdx];e.innerHTML=`<small>UNIT 08 · ${slideIdx+1} / ${U.slides.length}</small><h2>${esc(s[0])}</h2><div class="columns"><p>${esc(s[1])}</p>${s[3]==='code'?`<pre><code>${esc(s[2])}</code></pre>`:`<p class="example">${esc(s[2])}</p>`}</div>`;document.getElementById('u8-slidecount').textContent=`${slideIdx+1} / ${U.slides.length}`;document.getElementById('u8-prev').disabled=slideIdx===0;document.getElementById('u8-next').disabled=slideIdx===U.slides.length-1;}
 function drawFlow(){const e=document.getElementById('u8-flow');if(!e)return;e.innerHTML=workflow.map((x,i)=>`<button class="u8-flow-step ${i===workflowIdx?'u8-active':i<workflowIdx?'u8-done':''}" data-u8-workflow="${i}" aria-pressed="${i===workflowIdx}"><span>${String(i+1).padStart(2,'0')}</span><strong>${esc(x[0].replace(/^\d+\. /,''))}</strong></button>`).join('');document.getElementById('u8-flow-explain').textContent=workflow[workflowIdx][1];}
 const fmt=n=>n.toLocaleString('en-GB',{maximumFractionDigits:2});
 function compare(e,h,a,expected){const err=document.getElementById('u8-error'),out=document.getElementById('u8-cross-summary'),bars=document.getElementById('u8-bars');if(!err)return;const valid=e.length===5&&h.length===5&&e.every(n=>typeof n==='number'&&Number.isFinite(n)&&n>=0)&&h.every(n=>typeof n==='number'&&Number.isFinite(n)&&n>=0)&&Number.isFinite(a)&&a>=0&&Number.isFinite(e.reduce((s,n)=>s+n,0))&&Number.isFinite(h.reduce((s,n)=>s+n,0));
 if(!valid){err.textContent='REJECTED: provide exactly five finite, non-negative expenses and study-hour values plus a finite, non-negative allowance. No valid summary should be produced.';out.innerHTML='';bars.innerHTML='';return;}
 err.textContent='Input accepted: five matched weekdays with valid non-negative values.';
 const t=e.reduce((s,n)=>s+n,0),hours=h.reduce((s,n)=>s+n,0),avg=t/5,idx=e.indexOf(Math.max(...e)),status=t>a?'Over budget':t===a?'Exactly on budget':'Within budget';
 const data=[['Total expenses',`TZS ${fmt(t)}`],['Daily average',`TZS ${fmt(avg)}`],['Peak day',`${weekdays[idx]} · TZS ${fmt(e[idx])}`],['Study hours',`${fmt(hours)} hours`],['Allowance status',status],['Allowance minus expenses',`TZS ${fmt(a-t)}`]];
 out.innerHTML=`<div class="u8-match-title"><span>Metric</span><strong>Python</strong><strong>R</strong><span>Check</span></div>${data.map(([lab,val])=>`<div class="u8-compare-row"><small>${esc(lab)}</small><strong>${esc(val)}</strong><strong>${esc(val)}</strong><span class="u8-match">MATCH</span></div>`).join('')}`;
 const max=Math.max(1,...e);bars.innerHTML=e.map((v,i)=>`<div class="u8-barcol"><strong>${esc(fmt(v))}</strong><div class="u8-track"><div style="height:${(v/max*100).toFixed(2)}%" class="u8-bar"></div></div><small>${weekdays[i]}</small></div>`).join('');
 }
 function showCase(i){caseIdx=i;const item=samples[i];const area=document.getElementById('u8-case-buttons');if(area)area.innerHTML=samples.map((x,j)=>`<button data-u8-case="${j}" class="${j===i?'u7-selected':''}" aria-pressed="${i===j}">${esc(x.id)}</button>`).join('');const form=document.getElementById('u8-data-form');if(form){form.elements.expenses.value=item.e.join(',');form.elements.hours.value=item.h.join(',');form.elements.allowance.value=item.a;}compare(item.e,item.h,item.a,item.expected);const d=document.getElementById('u8-test-detail');if(d)d.textContent=`${item.id} expected: ${item.expected}. Run both scripts to capture actual output; the browser demo is not a test receipt.`;}
 function drawPitch(){const e=document.getElementById('u8-pitch');if(!e)return;e.innerHTML=`<span class="eyebrow">${pitchIdx+1} / 5</span><h3>${esc(pitches[pitchIdx][0])}</h3><p>${esc(pitches[pitchIdx][1])}</p>`;}
 function drawProgress(){const e=document.getElementById('u8-progress');if(!e)return;e.value=saved.length;document.getElementById('u8-progress-label').textContent=`${saved.length} of ${checks.length} items ticked in this browser.`;}
 function persist(){try{localStorage.setItem('sse-python-r-unit8-v08',JSON.stringify(saved));}catch{document.getElementById('u8-checkstatus').textContent='Browser storage is unavailable. Download a checklist copy.';}}
 function download(name,content){const a=document.createElement('a'),u=URL.createObjectURL(new Blob([content],{type:'text/plain;charset=utf-8'}));a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1500);}
 function afterRender(v){if(v==='slides8'){slideIdx=0;drawSlide();}if(v==='practice8'){workflowIdx=pitchIdx=caseIdx=0;drawFlow();drawPitch();showCase(0);}if(v==='progress8')drawProgress();}
 document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
 if(b.dataset.u8Workflow!==undefined){workflowIdx=Number(b.dataset.u8Workflow);drawFlow();return;}
 if(b.dataset.u8Case!==undefined){showCase(Number(b.dataset.u8Case));return;}
 switch(b.id){
 case 'u8-prev':slideIdx=Math.max(0,slideIdx-1);drawSlide();break;
 case 'u8-next':slideIdx=Math.min(U.slides.length-1,slideIdx+1);drawSlide();break;
 case 'u8-fullscreen':{const x=document.getElementById('u8-slide');if(x?.requestFullscreen)x.requestFullscreen().catch(()=>{});break;}
 case 'u8-flow-back':workflowIdx=(workflowIdx+workflow.length-1)%workflow.length;drawFlow();break;
 case 'u8-flow-next':workflowIdx=(workflowIdx+1)%workflow.length;drawFlow();break;
 case 'u8-pitch-back':pitchIdx=(pitchIdx+4)%5;drawPitch();break;
 case 'u8-pitch-next':pitchIdx=(pitchIdx+1)%5;drawPitch();break;
 case 'u8-reset':showCase(0);break;
 case 'u8-download-checklist':download('SSE_Unit8_Checklist.txt',checks.map((x,i)=>(saved.includes(i)?'[x] ':'[ ] ')+x).join('\n')+'\nPersonal record only, not an official grade or submission.\n');break;
 case 'u8-clear-checklist':saved=[];persist();document.querySelectorAll('[data-u8-check]').forEach(x=>x.checked=false);drawProgress();break;
 }});
 document.addEventListener('submit',e=>{if(e.target.id!=='u8-data-form')return;e.preventDefault();const f=e.target;const parse=name=>f.elements[name].value.split(',').map(s=>{const trimmed=s.trim();return trimmed===''?NaN:Number(trimmed)});const a=f.elements.allowance.value.trim();compare(parse('expenses'),parse('hours'),a===''?NaN:Number(a));});
 document.addEventListener('change',e=>{const x=e.target;if(x.dataset.u8Check===undefined)return;const i=Number(x.dataset.u8Check);saved=saved.filter(v=>v!==i);if(x.checked)saved.push(i);persist();drawProgress();});
 document.addEventListener('keydown',e=>{if(location.hash!=='#slides8'||['INPUT','TEXTAREA'].includes(document.activeElement.tagName))return;if(e.key==='ArrowRight'){slideIdx=Math.min(U.slides.length-1,slideIdx+1);drawSlide();}if(e.key==='ArrowLeft'){slideIdx=Math.max(0,slideIdx-1);drawSlide();}});
 window.UNIT8={titles:{unit8:'Mini-project and presentation',slides8:'Unit 8 slides',practice8:'Unit 8 practice',review8:'Unit 8 review',activity8:'Activity U8',progress8:'Unit 8 checklist',glossary8:'Unit 8 glossary'},pages,afterRender};
})();
