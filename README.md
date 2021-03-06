# Tip Splitter App

A working project can be found here: https://lejanio.github.io/Tip-Calculator/

![Tip Calculator](tip-calculator-demo.gif)

## General description

The app receives user inputs of the total bill amount, the tip rate and the number of customers
and calculates the tip amount, as well as the total amount per person.
The inputs and results can then be reset using the RESET button which becomes active
after valid inputs have been provided.

The project is implemented using React (with TypeScript) following the responsive design
principles.

## Project structure

1. The entry file is App.tsx:
    - Contains the header section with the logo image
    - Contains the main section component which, in turn, contains the input and button components
2. Main.tsx file:
    - Contains states for user inputs, calculated amounts, input validation error, as well as the currently active button
    - Contains several instances of the input component
    - Contains several instances of the button component
3. The components are located in the src/components folder with a separate subfolder for .tsx and .scss files
   of each corresponding component.

---

## Assignment

### Objective

Your assignment is to build out this tip calculator app and get it looking as close to the design as possible.

### Brief

Your challenge is to build out a tip calculator app.

### Tasks

-   Implement assignment using:

    -   Language: **TypeScript**
    -   Framework: **React**

    Your users should be able to:

    -   View the optimal layout for the app depending on their device's screen size
    -   See hover states for all interactive elements on the page
    -   Calculate the correct tip and total cost of the bill per person

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design.
The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`.
You will find all the required assets in the `/images` folder. The assets are already optimized. There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.
