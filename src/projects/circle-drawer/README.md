# Circle Drawer project

Practising the coordinates and state variables management (useState). 

## Portfolio Page Stack
    -HTML
    -CSS,SCSS
    -Javascript - React
    -Typescript


### App

Coordinates interface: x, y, id fields
clickCoordinates: state variable that contains the clicked coordinates (array). 
deletedCoordinates: state variable that contains the deleted coordinates (array).

clickHandler function: Creating a new Coordinate variable (newClicking) where we store the event.client coordinates and append the newClicking variable to the clickCoordinates with spread operator.

undoCoorditaneHandler function: Store tha last item of the clickCoordinates state variable array. Then filtering this item from the clickCoordinates array and append to the deletedCoordinates.

redoCoordinateHandler function: Store tha last item of the deletedCoordinates state variable array. Then filtering this item from the deletedCoordinates array and append to the clickCoordinates.

JSX: 
    -Undo button that fire the undoCoorditaneHandler function (disabled if clickCoordinates' length equals 0).
    -Redo button that fire the redoCoordinateHandler function (disabled if eletedCoordinates' length equals 0).
    -Circledrawer field with the clickHandler function. In this field we are mapping through the clickCoordinates array.