//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import components
import MathStudentHeader from "../components/MathStudentHeader";


export default function MathStudentPage() {
  useEffect(()=>{document.title = "Math Student"})
  return (
    <main>
      <div className={'main-background main-blue'}>
        <div className="main-margin">
          <MathStudentHeader/>
        </div>
      </div>
    </main>
  );
}
