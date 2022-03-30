# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](images/intro-component-screenshot.png)

### Links

- Solution URL: (https://github.com/chanelmarshall/intro-component-signup-form)
- Live Site URL: (https://chanelmarshall.github.io/intro-component-signup-form)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

Two major things I learned with this challenge was how to make an image appear inside of an input field by using relative positioning and using JavaScript to alert when an input was empty or an email wasn't valid.

I got a little stuck on the JavaScript but kept trying different things with my code until it finally worked. I did do some Googling to help, but most of it came from me using what I've learned. It might be a little messy, but I'm proud of figuring out a solution.

```html
<fieldset>
  <input class="field" type="text" name="first-name" value="" placeholder="First Name">
  <img class="error-icon" src="images/icon-error.svg" alt="error-icon">
  <small class="empty-error">First Name cannot be empty</small>
</fieldset>
```
```css
.error-icon {
  position: relative;
  right: -170px;
  top: -35px;
  z-index: -1;
}
```
```js
function checkInputField() {
  var input = document.querySelectorAll(".field");

  var field = [];

  for (var i = 0; i < input.length; i++) {
    field[i] = input[i].value;
    // rest of the code goes here
  }
}
```

### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/23518999/how-to-embed-svg-image-icon-in-input-tag) - This helped me with making the error icon appear inside the input field.
- [Grepper](https://www.codegrepper.com/code-examples/javascript/conditional+rendering+alert+if+input+fields+are+empty) - This helped with the initial function to target and check if the input fields were empty.

## Author

- Chanel Marshall
- Frontend Mentor - [@chanelmarshall](https://www.frontendmentor.io/profile/chanelmarshall)
