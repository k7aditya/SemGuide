import React from 'react';

const SubjectsInfo3 = () => (
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
    {/* Fundamentals of Electrical Engineering */}
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
        Fundamentals of Electrical Engineering
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
        This course introduces the basic concepts of electrical engineering, including circuit
        analysis, electrical components, and power systems. It provides the foundation for
        understanding how electrical circuits and devices function in various applications.
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
          <strong>Basic Electrical Concepts:</strong> Voltage, Current, Resistance, Power
        </li>
        <li>
          <strong>Circuit Analysis:</strong> Ohm’s Law, Kirchhoff’s Laws, Thevenin & Norton Theorems
        </li>
        <li>
          <strong>AC & DC Circuits:</strong> Capacitors, Inductors, Impedance
        </li>
        <li>
          <strong>Transformers & Power Systems:</strong> Transmission, Distribution, Load Flow
        </li>
        <li>
          <strong>Electric Machines:</strong> DC Motors, Induction Motors, Synchronous Machines
        </li>
        <li>
          <strong>Semiconductor Devices:</strong> Diodes, Transistors, Operational Amplifiers
        </li>
        <li>
          <strong>Electromagnetism & Applications:</strong> Magnetic Circuits, Maxwell’s Equations
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
        <li>Analyze and solve basic electrical circuits.</li>
        <li>Understand and apply Kirchhoff’s Laws and circuit theorems.</li>
        <li>Work with AC/DC circuit behavior and transient analysis.</li>
        <li>Understand power distribution and transmission concepts.</li>
        <li>Gain hands-on experience with electrical lab experiments.</li>
        <li>Understand the working principles of motors and transformers.</li>
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
          <strong>Weekly Assignments:</strong> Circuit analysis problems, theorem applications.
        </li>
        <li>
          <strong>Hands-on Labs:</strong> Building and testing electrical circuits.
        </li>
        <li>
          <strong>Simulation Work:</strong> Using MATLAB/PSpice for circuit modeling.
        </li>
        <li>
          <strong>Final Project:</strong> Design and implement a small electrical system.
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
        Electrical Engineering is crucial in various fields, including:
      </p>
      <ul
        style={{
          paddingLeft: '20px',
          color: '#4B5563',
          fontSize: '16px',
          lineHeight: '1.7',
        }}
      >
        <li>Power Generation & Distribution</li>
        <li>Consumer Electronics & Embedded Systems</li>
        <li>Robotics & Automation</li>
        <li>Renewable Energy Systems</li>
        <li>Communication Systems & Signal Processing</li>
      </ul>
    </section>
  </div>
);

export default SubjectsInfo3;
