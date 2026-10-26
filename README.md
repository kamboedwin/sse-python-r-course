# SSE+ 0003 — Introduction to Programming with Python and R

**Complete student-facing GitHub Pages course | Version 0.8 | Units 1–8 available**

This is a complete replacement package for Version 0.7. It preserves the existing Units 1–7, their original slide decks and downloadable teaching files. It adds a full Unit 8 capstone with notes, an editable presentation, activities, resource files and a final independent assessment. The course overview retains its **permanent** buttons: **Browse all units**, **How to study**, **Submit assignments**. All eight units are now marked **Available**.

## Unit 8 — Mini-project and presentation

**Campus Week Insights** uses five fictional weekdays of spending in TZS and study hours. Students develop a simple Python analysis and an equivalent base-R analysis, compare output, test different cases and explain the results. The independent task is purposely beginner-friendly: no extra R packages, online data, APIs or graphical application are needed.

- **27 comprehensive notes sections:** project scoping, one shared dataset, problem–algorithm–implementation–test–communication workflow, meaningful Python functions, R data frame, base-R bar chart, consistency checking, validation and limitations.
- **46 self-contained browser slides** and **46-slide editable PowerPoint**: `downloads/SSE_Unit_8_Slides.pptx`.
- Interactive *six-stage workflow tracer* with colour changes, selectable test scenarios, side-by-side Python/R mathematical comparison, expense bars and five-slide presentation planner. **These browser tools use JavaScript demonstrations and do not execute or test arbitrary Python/R files.**
- **24 explained review questions**, glossary, personal Unit 8 checklist and practical guided exercises.
- **Activity U8 (20 raw marks):** Campus Week Insights in Python and R, five required tests, comparison table, labelled chart, short report and five-slide presentation. Task requirements and marking criteria are provided on the Activity U8 page.

### Student resources included

- `downloads/u8_sample_week.csv` — shared five-day dataset.
- `downloads/u8_python_guided.py` — runnable *guided* three-day example, separate from independent project.
- `downloads/u8_r_guided.R` — base-R guided three-day example and chart output.
- `downloads/u8_campus_project_starter.py` — incomplete Python assignment scaffold; the TODOs must be filled in.
- `downloads/u8_campus_project_starter.R` — incomplete R assignment scaffold; the TODOs must be filled in.
- `downloads/U8_test_report_template.csv` — five specified cases with independently established expected outcomes and blank actual-result fields.
- `downloads/U8_submission_notes.txt` — problem description, implementation, comparison, testing and assistance declaration template.
- `downloads/SSE_Unit_8_Student_Presentation_Template.pptx` — editable five-slide outline for the student's own demonstration.

The new Unit 8 presentation (`SSE_Unit_8_Slides.pptx`) is a full teaching/revision deck; the student presentation template is a **different** file for students to complete with their own work.

## Assignment submission

All Activity U1–U8 pages and the permanent submission page link to the user's official form:

https://forms.gle/AWESk9LvvpUV2CEX6

This is an external link and requires internet access. Follow its current permissions, upload formats and instructions. Submission deadlines remain **To be announced**. The website itself does not accept uploads, issue submission receipts or assess student work.

## Publish to the same GitHub Pages repository

1. Extract the ZIP file.
2. Copy the **contents of the ZIP**, not an enclosing directory, into the folder deployed by the existing GitHub Pages repository.
3. Replace matching `index.html`, `assets/`, `downloads/` and `README.md` files, preserving the folder layout. Commit and push to the same publishing branch.
4. Visit the published site and verify **Browse all units**, Unit 8 notes/slides/lab/review/activity/checklist/glossary and the assignment submission link. Check an existing unit as well.

The ZIP is a local artifact and does **not** modify the live GitHub repository.

## Offline use and programmes

Notes, browser slides, interactive illustrations and the downloadable source/starter files work from an extracted local website. The official Google Form needs the internet. Python code requires an installed Python interpreter; R scripts require an installed R interpreter. RStudio is optional. The site itself does not run code from `.py` or `.R` uploads.

Progress checklists are stored only in the current browser and are not grades, official completion or Google Form submission confirmations. The teaching dataset is fictional; never publish confidential student spending records in a public repository.

## Version 0.8 changes

- Updated `index.html` navigation: Unit 8 pages are accessible and labelled Available; the footer now says all 8 units available.
- Updated `assets/app.js`: Unit 8 routes and card, assignment submission listing, final availability and permanent overview wording. The older generic project page now points to the complete Unit 8 project brief.
- Updated `assets/course-settings.js`: version `0.8`, Unit 8 deadline placeholder.
- Updated `assets/styles.css`: styles for capstone learning diagrams, compare board and responsive lab.
- Added `assets/unit8-content.js`, `assets/unit8-module.js` and new `downloads` listed above.
- Original Unit 1–7 content/modules and original PowerPoints retained.

## Verification and limitations

- Parsed all 8 unit routes and Unit 8 subpages using a JavaScript runtime with simulated browser elements; no route-generation errors.
- JavaScript syntax checked for all scripts. Checked source assets and the ZIP's file references.
- Executed the guided Python example successfully and checked the specified test arithmetic.
- Validated that the new PowerPoint contains 46 editable slides with the updated Unit 8 teaching text.
- **Visual browser QA was not available in this environment** and **R was not installed**, so the final live GitHub Pages layout and the R guided/independent scripts must be run on a suitable device. The independent starter files intentionally do not run successfully until students complete their TODOs.
