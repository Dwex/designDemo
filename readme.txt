  To see the changes reflected automatically:

   1. Install Dependencies: If you haven't already, run npm install in the root directory of your monorepo
      (C:\Users\david\Development\designDemo). This will install all the necessary packages for both React and
      Angular, including webpack and the Angular CLI.
   2. Start React App: Open a new terminal and navigate to the root directory. Run:
   1     npm run start:react
      This will start the React development server, usually on http://localhost:3000.
   3. Start Angular App: Open another new terminal and navigate to the root directory. Run:

   1     npm run start:angular
      This will start the Angular development server, usually on http://localhost:4200.
   4. Update Tokens: Open a third terminal and navigate to the root directory. Run:
   1     npm run update-tokens
      This script will modify the tokens.json file, changing the primary color.

  You should observe that both your running React and Angular applications automatically update to reflect
  the new primary button color, demonstrating how changes to your design tokens are propagated across your
  monorepo. You might need to refresh your browser if hot-reloading does not pick up the change
  automatically.