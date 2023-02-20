# Color Chooser project

Practising the useState, useEffect and javascript functions (fill, map, join, sort, random, floor). 

## Portfolio Page Stack
    -HTML
    -CSS,SCSS
    -Javascript - React
    -Typescript


### App

Result enum: Correct, Wrong fields
digits array: hexadecimal characters
color: state variable
answers: state variable
result: state variable

colorCreator function: creating a new color with hexadecimal values (random values from the digits). 
generateColors function: generate three color with the colorCreator and sort them in a random order. One color stored in the color state variable. All of the color stored in the answers state variable.
buttonClickHandler function: if the choiced color equals the color state variable value then setResult equals correct and generate new colors else wrong. 

useEffect: generating new colors after the component loaded.

JSX:
   -Set the div backgroundcolor to the color state variable value.
   -Three answer option: Mapping through the answers state variable.
   -Button which triggers the buttonClickHandler function.
   -Correct or Wrong paragraph if the result variable value equals with it.
