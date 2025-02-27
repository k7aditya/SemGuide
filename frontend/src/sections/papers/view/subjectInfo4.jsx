import React from 'react';

const SubjectsInfo4 = () => (
  <div
    style={{
      padding: '40px',
      fontFamily: "'Inter', sans-serif",
      maxWidth: '850px',
      margin: '40px auto',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e0e0e0',
    }}
  >
    {/* Engineering Physics */}
    <section style={{ marginBottom: '30px' }}>
      <h1
        style={{
          color: '#1E293B',
          fontSize: '28px',
          fontWeight: '600',
          borderBottom: '3px solid #2563EB',
          paddingBottom: '8px',
        }}
      >
        Engineering Physics
      </h1>

      <h2 style={{ color: '#374151', fontSize: '20px', fontWeight: '500', marginTop: '20px' }}>
        Overview
      </h2>
      <p
        style={{
          lineHeight: '1.8',
          fontSize: '16px',
          color: '#4B5563',
          textAlign: 'justify',
        }}
      >
        Engineering Physics bridges the gap between pure physics and engineering applications. This
        course introduces students to fundamental physical principles and their real-world
        applications in technology and innovation.
      </p>

      <h2 style={{ color: '#374151', fontSize: '20px', fontWeight: '500', marginTop: '20px' }}>
        Key Topics
      </h2>
      <ul
        style={{
          paddingLeft: '20px',
          color: '#4B5563',
          fontSize: '16px',
          lineHeight: '1.7',
        }}
      >
        <li>
          <strong>Classical Mechanics:</strong> Newtonian Laws, Work & Energy, Rotational Motion
        </li>
        <li>
          <strong>Electromagnetism:</strong> Maxwell’s Equations, Electric & Magnetic Fields
        </li>
        <li>
          <strong>Modern Physics:</strong> Quantum Mechanics, Relativity, Photoelectric Effect
        </li>
        <li>
          <strong>Optics & Wave Theory:</strong> Interference, Diffraction, Polarization
        </li>
        <li>
          <strong>Solid-State Physics:</strong> Crystal Structures, Semiconductors,
          Superconductivity
        </li>
        <li>
          <strong>Nanotechnology:</strong> Quantum Dots, Graphene, Applications in Engineering
        </li>
        <li>
          <strong>Lasers & Fiber Optics:</strong> Optical Communication, Holography, Industrial
          Applications
        </li>
      </ul>

      <h2 style={{ color: '#374151', fontSize: '20px', fontWeight: '500', marginTop: '20px' }}>
        What You Will Learn
      </h2>
      <ul
        style={{
          paddingLeft: '20px',
          color: '#4B5563',
          fontSize: '16px',
          lineHeight: '1.7',
        }}
      >
        <li>Apply Newtonian mechanics to solve real-world engineering problems.</li>
        <li>Understand the role of electromagnetism in communication and power systems.</li>
        <li>Explore quantum mechanics and its applications in nanotechnology.</li>
        <li>Analyze wave behavior in different physical mediums.</li>
        <li>Understand semiconductor physics and its role in modern electronics.</li>
        <li>Gain hands-on experience with optical instruments and laser technologies.</li>
      </ul>

      <h2 style={{ color: '#374151', fontSize: '20px', fontWeight: '500', marginTop: '20px' }}>
        Evaluation Criteria
      </h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '10px',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#F3F4F6', textAlign: 'left' }}>
            <th style={{ padding: '10px', borderBottom: '2px solid #D1D5DB' }}>Component</th>
            <th style={{ padding: '10px', borderBottom: '2px solid #D1D5DB' }}>Weightage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #E5E7EB' }}>Assignments</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #E5E7EB' }}>20%</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #E5E7EB' }}>Lab Work</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #E5E7EB' }}>25%</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #E5E7EB' }}>Midterm Exam</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #E5E7EB' }}>25%</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #E5E7EB' }}>Final Exam</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #E5E7EB' }}>30%</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ color: '#374151', fontSize: '20px', fontWeight: '500', marginTop: '20px' }}>
        Assignments & Labs
      </h2>
      <ul
        style={{
          paddingLeft: '20px',
          color: '#4B5563',
          fontSize: '16px',
          lineHeight: '1.7',
        }}
      >
        <li>
          <strong>Weekly Assignments:</strong> Numerical problems in mechanics, electromagnetism.
        </li>
        <li>
          <strong>Physics Experiments:</strong> Motion Analysis, Magnetic Fields, Wave Interference.
        </li>
        <li>
          <strong>Optics Lab:</strong> Working with lenses, lasers, and fiber optics.
        </li>
        <li>
          <strong>Quantum Mechanics Project:</strong> Simulating electron behavior in nanomaterials.
        </li>
      </ul>

      <h2 style={{ color: '#374151', fontSize: '20px', fontWeight: '500', marginTop: '20px' }}>
        Applications
      </h2>
      <p
        style={{
          lineHeight: '1.8',
          fontSize: '16px',
          color: '#4B5563',
          textAlign: 'justify',
        }}
      >
        Engineering Physics has wide-ranging applications in:
      </p>
      <ul
        style={{
          paddingLeft: '20px',
          color: '#4B5563',
          fontSize: '16px',
          lineHeight: '1.7',
        }}
      >
        <li>Semiconductor Industry (Transistors, Microchips)</li>
        <li>Optical Communications (Fiber Optics, Lasers)</li>
        <li>Renewable Energy (Solar Cells, Thermoelectrics)</li>
        <li>Medical Imaging (MRI, X-ray, Ultrasound)</li>
        <li>Space Exploration (Satellite Technologies, Aerospace Materials)</li>
      </ul>
    </section>
  </div>
);

export default SubjectsInfo4;
