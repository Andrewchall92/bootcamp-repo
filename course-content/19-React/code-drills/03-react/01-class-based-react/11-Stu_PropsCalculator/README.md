# Props Calculator

In this activity we will write a component that can perform some arithmetic using passed props and render an element containing the result.

## Instructions

* Run `npm i` to download all the required node modules.

* Start the app by running `npm start` in your terminal, take a moment to study the HTML code being rendered in the browser at [http://localhost:3000](http://localhost:3000).

* Open `src/components/Calculator.jsx` in your editor and take a moment to study the application's code.

* Write a component named "Math" and render one Math component in the place of each "?" mark.

* The Math component should perform some arithmetic using 3 props:

  * `num1` - a number

  * `operator` -  a string representing an arithmetic operator, e.g. "+", "-", "*", "/"

  * `num2` - a number

* The Math component should render the result of problem in a `span` tag. e.g. 19 + 341 = 360

## Hints

* Check out [React's documentation for props](https://facebook.github.io/react/docs/components-and-props.html)

## Bonus

* Using the [style tag](https://facebook.github.io/react/docs/dom-elements.html#style), set the font-size of the `span` rendered by the `Math` component to be the result of the arithmetic problem in pixels. e.g. the font-size of the `span` rendering the result of "19 + 341 = 360" should be 360 pixels.
