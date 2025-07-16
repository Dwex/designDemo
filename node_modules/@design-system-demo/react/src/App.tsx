import React from 'react';
import Button from './Button';

const App = () => (
  <div>
    <h1>React Button Demo</h1>
    <div style={{ marginBottom: '16px' }}>
      <Button variant="primary" label="Primary Button" onClick={() => alert('Primary button clicked!')} />
    </div>
    <div>
      <Button variant="secondary" label="Secondary Button" onClick={() => alert('Secondary button clicked!')} />
    </div>
  </div>
);

export default App;
