const fs = require('fs');
const path = require('path');

const tokensPath = path.resolve(__dirname, 'packages', 'tokens', 'tokens.json');

fs.readFile(tokensPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading tokens.json:', err);
    return;
  }

  let tokens;
  try {
    tokens = JSON.parse(data);
  } catch (parseErr) {
    console.error('Error parsing tokens.json:', parseErr);
    return;
  }

  // Modify a token value (e.g., change primary color to a new shade)
  let newPrimaryColor = '#007bff';
  if(tokens.color.primary.value == '#007bff'){
    newPrimaryColor = '#0056b3'; // A darker blue
  }
  tokens.color.primary.value = newPrimaryColor;

  fs.writeFile(tokensPath, JSON.stringify(tokens, null, 2), 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing tokens.json:', writeErr);
      return;
    }
    console.log(`Successfully updated primary color to ${newPrimaryColor} in tokens.json`);
    console.log('Check your running React and Angular apps to see the changes!');
    console.log('You might need to refresh your browser if hot-reloading does not pick up the change automatically.');
  });
});
