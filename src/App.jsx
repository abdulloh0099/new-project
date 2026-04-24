import React from 'react';
import './App.css';
import rasm from './assets/rasm.png';
import rasm1 from './assets/rasm1.png';
import rasm2 from './assets/rasm2.png';
import rasm3 from './assets/rasm3.png';
import rasm4 from './assets/rasm4.png';
import rasm5 from './assets/rasm5.png';
import rasm6 from './assets/rasm6.png';
import rasm7 from './assets/rasm7.png';
import mountain from './assets/mountain.png';
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
        <Card
          name2="Takumi Sato"
          position2="HR Specialist"
          department2="Human Resources"
          rasm2={rasm4}
        />
        <Card
          name2="Chen Wei"
          position2="Data Analyst"
          department2="Data science"
          rasm2={rasm5}
        />
        <Card
          name2="Emma Dubois"
          position2="Sales Manager"
          department2="Sales"
          rasm2={rasm6}
        />
        <Card
          name2="Igor Sokolov"
          position2="Quality Assurence"
          department2="Quality Control"
          rasm2={rasm7}
        />
      </div>
      <h1>Info Card</h1>
      <div className="card-i">
      <div className="card-1">
        <img src={mountain} alt="" className="card-1-img" />
          <h1 className="card-1-h1">Unraveling the Mysteries of the Ocean</h1>
        <p className="card-1-p">
          From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration.
        </p>
        <button className="card-1-btn">Read More</button>
      </div>
      <div className="card-1">
        <img src={mountain} alt="" className="card-1-img" />
          <h1 className="card-1-h1">Unraveling the Mysteries of the Ocean</h1>
        <p className="card-1-p">
          From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration.
        </p>
        <button className="card-1-btn">Read More</button>
      </div>
      <div className="card-1">
        <img src={mountain} alt="" className="card-1-img" />
          <h1 className="card-1-h1">Unraveling the Mysteries of the Ocean</h1>
        <p className="card-1-p">
          From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration.
        </p>
        <button className="card-1-btn">Read More</button>
      </div>
      <div className="card-1">
        <img src={mountain} alt="" className="card-1-img" />
          <h1 className="card-1-h1">Unraveling the Mysteries of the Ocean</h1>
        <p className="card-1-p">
          From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration.
        </p>
        <button className="card-1-btn">Read More</button>
      </div>
      <div className="card-1">
        <img src={mountain} alt="" className="card-1-img" />
          <h1 className="card-1-h1">Unraveling the Mysteries of the Ocean</h1>
        <p className="card-1-p">
          From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration.
        </p>
        <button className="card-1-btn">Read More</button>
      </div>

      </div>
    </div>
  );
};

export default App;
