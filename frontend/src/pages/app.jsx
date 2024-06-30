import React from 'react';
import { Helmet } from 'react-helmet-async';

// import SwitchSem from 'src/layouts/dashboard/common/switch-sem';

import { AppView } from 'src/sections/overview/view';

import './appPage.css';
 
export default function AppPage() {
  // const [selectedSemester, setSelectedSemester] = useState('1');
 const selectedSemester = parseInt(localStorage.getItem('selectedSemester'), 10);
  return (
    <>
      <Helmet>
        <title> Dashboard | SemGuide </title>
      </Helmet>
      <div className="app-page-container">
        {/* <SwitchSem selectedSemester={selectedSemester} setSelectedSemester={setSelectedSemester} /> */}
        <AppView selectedSemester={selectedSemester} />
      </div>
    </>
  );
}
