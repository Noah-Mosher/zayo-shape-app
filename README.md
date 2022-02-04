# Zoya Shape-App

## Tasks

- [x] A user inputs a shape type
- [x] This input results in minimal input boxes for calculating area.
  - [x] Validation Errors to Help user
- [x] A user inputs a shape type (square, triangle, circle, rectangle)
- [x] Bonus for returning a shape object as well as text with dimensions shown on the axis of the object or in the case of a circle, show the radius.


### TO RUN PROJECT 
```javascript
npm install
npm start 
```
This should stand code up on localhost:3000

### Thoughts

If given more time on the project, or asked to refactor one thing. I would use clsx or classnames and condense all of the styling for the individual calc components into one styling sheet. There is a decent amount a repeat currently. As far as adding new shapes it should be as easy as adding them to ./helpers/constants/ShapeOptions.js then creating the calculation component for that individual shape. With the aforementioned styling changes it would be easy to integrate a new component and inherit all of the repeated styles.