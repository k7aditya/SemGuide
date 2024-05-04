import React from 'react';
import { Helmet } from 'react-helmet-async';

// import SwitchSem from 'src/layouts/dashboard/common/switch-sem';

import InfoView from 'src/sections/info/info-view';

// ----------------------------------------------------------------------

export default function InfoPage() {
 const selectedSemester = parseInt(localStorage.getItem('selectedSemester'), 10);
  return (
    <>
      <Helmet>
        <title> Info | SemGuide </title>
      </Helmet>

      <div className="app-page-container">
        {/* <SwitchSem selectedSemester={selectedSemester} setSelectedSemester={setSelectedSemester} /> */}
        <InfoView selectedSemester={selectedSemester} />
      </div>
    </>
  );
}
