import React from 'react'
import "./App.css";
import Btn from "./Btn";

function Properties() {

  const handleBtn = (value) => {
    alert(value);
  };
  
   return (
     <div className="App">
       <Btn btnName="Music" color="red" handleBtn={handleBtn} />
       <Btn btnName="Cars" color="blue" handleBtn={handleBtn} />
       <Btn btnName="bikes" color="pink" handleBtn={handleBtn} />
       <Btn btnName="Movies" handleBtn={handleBtn} />
       <Btn btnName="Books" handleBtn={handleBtn} />
       <Btn btnName="Drama" handleBtn={handleBtn} />
       <Btn btnName="Songs" handleBtn={handleBtn} />
       <Btn btnName="Photo" handleBtn={handleBtn} />
       <Btn btnName="Table" handleBtn={handleBtn} />
     </div>
   );
}

export default Properties
