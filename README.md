# SSE+ 0003 — Introduction to Programming with Python and R

**NM-AIST | Samia Scholarship Extended (SSE+) Boot Camp**  
**Beginner programming course | Eight learning units | Self-study and classroom resources**

## About the course

*Introduction to Programming with Python and R* introduces fundamental programming and problem-solving skills through everyday examples. The course begins with Python, where learners practise writing instructions, performing calculations, making decisions, repeating operations and organising code. It then introduces R for simple data handling, summaries and visualisation. A final mini-project brings together concepts from both languages.

The learning materials are designed for beginners, including students with little or no previous programming experience. Examples use familiar scenarios such as transport costs, personal budgets, study time and small datasets. Monetary examples use Tanzanian shillings (TZS).

The website provides explanations, presentations, guided exercises, interactive illustrations, review questions and independent activities. It can support instructor-led sessions as well as individual revision.

## Learning outcomes

By completing the course and its activities, learners should be able to:

1. Explain basic programming concepts and express simple solutions as algorithms.
2. Write Python programs using variables, input, arithmetic, decisions and loops.
3. Organise data in lists and write reusable Python functions.
4. Identify common programming errors and evaluate programs with meaningful test cases.
5. Use introductory R features to manage data, calculate summaries and create simple charts.
6. Complete, test, document and present a small project using both Python and R.

## Course units

| Unit | Title | Main topics |
| --- | --- | --- |
| **1** | Programming Foundations | Problems, algorithms, inputs, outputs, variables and a first Python program |
| **2** | Values and Calculations | Data types, arithmetic, keyboard input, type conversion and formatted results |
| **3** | Making Decisions in Python | Comparisons, Boolean logic, `if`, `elif`, `else` and boundary cases |
| **4** | Repeating Actions in Python | `for`, `while`, `range()`, counters, accumulators and input validation |
| **5** | Lists and Functions in Python | Lists, indexing, list operations, parameters and return values |
| **6** | Testing and Debugging in Python | Error types, tracebacks, tracing, test cases, assertions and corrections |
| **7** | Introduction to R Programming | R syntax, vectors, one-based indexing, data frames, summaries and base-R plots |
| **8** | Mini-Project and Presentation | A shared dataset, Python and R analysis, testing, documentation and presentation |

Each unit includes student notes, browser slides, a downloadable PowerPoint, practical activities, review questions and an independent assignment. Additional starter files and templates are provided where relevant.

## How to study

A useful learning sequence for each unit is:

1. **Read the notes** to understand the concepts, terminology and worked examples.
2. **Study the slides** in the website or download the PowerPoint for revision.
3. **Try the guided exercises** and run the actual `.py` or `.R` files using the appropriate programming environment.
4. **Answer the review questions** and compare responses with the explanations.
5. **Complete the independent activity**, test the result and prepare the required evidence.
6. **Submit the activity** through the official course submission form, following its current instructions.

A **Browse all units** link on the website provides access to every unit. The **How to study** and **Submit assignments** sections offer course-wide guidance.

### Assignment submission

**Official assignment form:** https://forms.gle/AWESk9LvvpUV2CEX6

The website links to this external form but does not receive assignment files or confirm submissions itself. Submission requirements, permitted file formats and deadlines should be checked against the form and official course announcements. Where the website displays **To be announced**, no deadline has been specified in the published materials.

Learners should submit their own work, test their programs and disclose assistance from other people, websites or AI tools where requested.

## Getting started

### View the course website

- **Online:** Open the GitHub Pages site associated with this repository (when GitHub Pages has been enabled).
- **Offline:** Download or clone the repository, keep the folder structure intact, and open `index.html` in a modern web browser.

Core notes, slides and interactive demonstrations are available locally. The Google Form requires an internet connection.

### Run Python and R examples

The website's interactive diagrams are **browser-based teaching demonstrations**. They do not execute arbitrary Python or R code. To run the downloadable programs, use:

- **Python 3** with an appropriate Python editor, IDE or terminal;
- **R** with an R console or editor; RStudio is optional.

The guided R materials use base R and do not require additional R packages. Independent assignment starters intentionally contain unfinished sections for learners to complete.

## Final project: Campus Week Insights

The Unit 8 project uses a **fictional five-day dataset** of expenditure and study hours. Learners calculate summaries and validate results in Python, reproduce key findings in R, generate a labelled chart and explain their approach in a short presentation. The project includes a shared CSV, language-specific starters, a test-report template and a five-slide presentation template.

This sample information is for teaching and should not be interpreted as actual student financial or study records.

## Repository structure

```text
.
├── index.html                 # Course website entry point
├── assets/
│   ├── styles.css             # Website styling
│   ├── app.js                 # Main navigation and content rendering
│   ├── content.js             # Unit 1 learning content
│   ├── course-settings.js     # Submission URL and displayed deadlines
│   ├── unit2-content.js ... unit8-content.js
│   └── unit2-module.js ... unit8-module.js
├── downloads/                 # Presentations, code, datasets and templates
├── .nojekyll                  # GitHub Pages configuration file
└── README.md                  # This course introduction
```

## Information for course maintainers

The website is a static site suitable for GitHub Pages; no server-side application or database is required.

- The main entry point is `index.html`. Styles and JavaScript are located in `assets/`.
- The submission link and displayed assignment deadlines can be configured in `assets/course-settings.js`.
- Downloadable learning resources are stored in `downloads/`; preserve their paths when updating files.
- For GitHub Pages deployments from a branch, use the repository's **Settings → Pages** configuration and select the publishing branch and **/(root)** folder when the site files are at the repository root.
- After changes, check navigation, mobile readability, downloadable files, the official form link and any interactive learning activities.

Progress checklists are saved in the learner's current browser; they are not official grades or confirmation that an assignment was submitted. Public repositories should not contain students' personal records or confidential datasets.

## Questions and support

For course-specific deadlines, assessment requirements or administrative information, use official SSE+ programme and course communication channels. Technical issues with a published site can be reported to its repository maintainer.
