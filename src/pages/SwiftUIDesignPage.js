//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import components
import SwiftUIDesignHeader from "../components/SwiftUIDesignHeader";


export default function MathStudentPage() {
  useEffect(()=>{document.title = "SwiftUI Design"})
  return (
    <main>
      <div className={'main-background main-blue'}>
        <div className="main-margin">
          <SwiftUIDesignHeader/>
        </div>
      </div>
    </main>
  );
}
