//Copyright  © 2020-2021  Matt Roberts

//import React
import React, { useEffect } from 'react';

//import components
import FilterArtHeader from "../components/FilterArtHeader";

export default function FilterArtPage() {
  useEffect(()=>{document.title = "Filter Art"})
  return (
    <main>
      <div className={'main-background main-blue'}>
        <div className="main-margin">
          <FilterArtHeader/>
        </div>
      </div>
    </main>
  );
}
