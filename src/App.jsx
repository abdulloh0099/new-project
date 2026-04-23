import React from 'react';
import './App.css';
import rasm from './assets/rasm.png';
import rasm1 from './assets/rasm1.png';
import rasm2 from './assets/rasm2.png';
import rasm3 from './assets/rasm3.png';
import Card from './Card';
const App = () => {
  return (
    <div>
      <h1>Card Users</h1>
      <div className="container">

        <Card
          name="Emily Johnson"
          position="Product Manager"
          department="Product Development"
          rasm={rasm}
        />
        <Card
          name="Arjum Patel"
          position="Software Engineer"
          department="Technology"
          rasm={rasm1}
        />
        <Card
          name="Carlos Hernández"
          position="UI Designer"
          department="Design"
          rasm={rasm2}
        />
        <Card
          name="Emily Johnson"
          position="Marketing Specialist"
          department="Marketing"
          rasm={rasm3}
        />
      </div>
    </div>
  );
};

export default App;
