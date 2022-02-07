# Tip Splitter App

## General description

The app receives user inputs of bill total amount, tip rate and the number of customers
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
    - Contains states for user input, calculated amounts, input validation error, as well as the clicked button
    - Contains several instances of input component which, in turn, contains input state
    - Contains several instances of button component, as well as the large button component
    - Uses the useRef hook for referencing the input component for resetting user input
3. The components are located in the src/components folder with a separate subfolder for each
   corresponding component .tsx and .scss file.
4. A CSS reset file is provided in the src/utils folder.

---

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

### Evaluation Criteria

-   **TypeScript** best practices
-   Completeness: did you complete the features?
-   Correctness: does the functionality act in sensible, thought-out ways?
-   Maintainability: is it written in a clean, maintainable way?
-   Testing: is the system adequately tested?
-   Documentation: is the API well-documented?

### CodeSubmit

Please organize, design, test and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

**Have fun building!** 🚀
