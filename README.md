# About
It's a project develped for the [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer), course "HTML and CSS in depth". It has to meet the specifications regarding the desktop layout. Mobile layout was not part of the assessment.

Personally, I am neither a fan of this layout, nor support the desktop-first practice. I plant to take this project forward (or rather turn it upside-down).

# Features
* meets the specifications
* custom favicon
* sticky nav bar
* animated background
* accordion buttons
* iframe with a minimap

# See it live

[witchdevelops.github.io/lucky-shrub](https://witchdevelops.github.io/lucky-shrub/)

# See the screenshots
Layout requirements:

![Specifications](https://github.com/WitchDevelops/lucky-shrub/blob/main/Layout_specs_optimized.png)

Screenshot of my project:

![Screenshot](https://github.com/WitchDevelops/lucky-shrub/blob/main/Screenshot_1_optimized.png)

# Tech used

* semantic HTML5 markup
* custom CSS
* vanilla JavaScript

# What I learned

1. I learned that for the placeholder text to appear correctly both the opening and closing tags of ``` <textarea></textarea> ``` have to be on the same line in HTML! As if the parser was taking the white spaces between them as input characters and palcing the cursor at the end of the placeholder text, but also in the same time making it invisible. It's an odd behavior but something to keep in mind for the future.
2. That ``` background ``` property is not something to be animated with CSS, yet having a transition on a background image is possible. It works smootly in Firefox, and a bit choppy in Chrome.
3. Working with iframes.
