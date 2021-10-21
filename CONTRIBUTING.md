# Project Magic Kebab

## Files Structure

The structure of the project is quite simple, in the `src` folder, you will find a `component` folder that contains each step of creating your kebab as well as the checkout component and the waiting page. The `images` folder is also in `src`.

## Where to start

You can start by the `App.js` file where all the main functions and the states are. In this file you will see functions that are used or passed on to other components that need them. There is a state for each component which is a boolean and determines what component is visible and what is not.

### Components

The components are all the steps for creating your kebab except for `Waiting.js` and `Checkout.js`. They are fairly simple and mostly basic HTML and reading the props that has been passed down by `App.js`. Each component get to use the functions created in `App.js` to be able to moddify the states in `App.js`. These functions are activated by clicking the cards that make your choices. Each card is a button and in the steps of adding ingredients and sauces, a function that disables the button you have clicked once is available.

The `Checkout.js` files use an array state created in `App.js` and map it to show each kebab the user has ordered. A button is available to order all the kebabs and it activates the function to load the waiting page.

`Ingredients.css` applies to all the different steps and the waiting page.