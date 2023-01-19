# Landing Page Project

The Project Is About Building A dynamic Navigation Bar For The Page Using JavaScript,CSS and HTML .... 

## Table of Contents


- Instruction 
- Refrences
- Installation
- Usage
- Development 
- Contribute
- License

<hr/>

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Refrences

- [ClassList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Methods)
- [ScrollTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop)
- [getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
- [ScrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)
- [Toggle](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)
- [forEach()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/forEach)
- [Events](https://developer.mozilla.org/en-US/docs/Web/API/Event)


## Installation

you can install this project by cloning to your github account or you can download it as a ZIP File to your PC.

## Usage

after installing you can use the project files by UnZipping the file and open it on a code text editor (VS Code is recommended one).


## Development

JS Version: ES2015/ES6.
JS Standard: ESlint.

The Project Contains Four Files :
```
📦landing-page-main
 ┣ 📂css
 ┃ ┗ 📜styles.css
 ┣ 📂js
 ┃ ┗ 📜app.js
 ┣ 📜README.md
 ┗ 📜index.html
```
Each file contains it's modifications and comment above each step of modify:

     - There's not much modification done in the HTML file just adding more sections (to be 6 sections) to the page and renaming some classes such    (activeBtn and activeOne) and the top button to scroll up inside a new div 

     - In CSS stylesheet there is some changes to the names of classes and  adding new styles for the new classes for also the top button and adding a style to the page for smooth scrolling and adding background color for active section 

     - On app.js alot of work was done in it almost all the work was done there:

        1. defined most global variables we needed in building the navbar then we build the navbar by creating elements and append it.

        2. adding a function to add active class to the section button while scrolling and  using if condition and getBoundingClientRect method to add a special class to identify which section is in the viewport.

        3. added a scroll behavior for the page using eventListener to scroll between sections and add a smooth behavior for this scroll.

        4. Set a Toggle function to the navbar visibility and setTimeOut method for it.

        5. Creating A new button to scroll up to the top of the page without scrolling after a specific move downwards and make id invisible at the top of the page.

        6. asmooth behavior was set for scrolling eventListener while clicking on the section from the navbar to go to a certain section.

        7. Invoking Active section and toggling function.

## Contribute 

- Udacity 
- EgFwd

## Copyright 

© Udacity - Modified By Ahmed Essam.
