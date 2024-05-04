import React, { useState } from 'react';

import AppView from 'src/sections/overview/view/app-view'; 

export default function SemesterSelection() {
  const [selectedSemester, setSelectedSemester] = useState('1');

  return (
    <div>
      <SemesterSelection
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
      />
      <AppView selectedSemester={selectedSemester} />
    </div>
  );
}
