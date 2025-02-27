import React from 'react';

const SubjectsInfo1 = () => (
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
    {/* Introduction to Programming */}
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
        Introduction to Programming
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
        This course introduces students to the foundational concepts of programming. It focuses on
        problem-solving, logic building, and algorithm development. Students will learn to write,
        debug, and optimize code while understanding software development best practices.
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
          <strong>Programming Basics:</strong> Variables, Data Types, Operators, Input/Output
        </li>
        <li>
          <strong>Control Structures:</strong> If-Else, Loops, Switch Statements
        </li>
        <li>
          <strong>Functions & Modular Programming:</strong> Parameter Passing, Recursion
        </li>
        <li>
          <strong>Data Structures:</strong> Arrays, Strings, Linked Lists
        </li>
        <li>
          <strong>Memory Management:</strong> Pointers, Dynamic Memory Allocation
        </li>
        <li>
          <strong>File Handling:</strong> Reading/Writing Files, File Streams
        </li>
        <li>
          <strong>Debugging & Optimization:</strong> Code Efficiency, Error Handling
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
        <li>Write clean, structured, and optimized code.</li>
        <li>Develop problem-solving skills using algorithms.</li>
        <li>Understand memory allocation and efficient data handling.</li>
        <li>Apply programming concepts in real-world applications.</li>
        <li>Debug and optimize code for better performance.</li>
        <li>Build small-scale applications and projects.</li>
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
          <strong>Weekly Assignments:</strong> Small coding exercises to practice syntax and logic.
        </li>
        <li>
          <strong>Hands-on Labs:</strong> In-class programming tasks for real-time problem-solving.
        </li>
        <li>
          <strong>Mini Projects:</strong> Simple applications like a calculator, text editor, or
          file manager.
        </li>
        <li>
          <strong>Final Project:</strong> A small application integrating multiple concepts.
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
        Knowledge from this course applies to various fields, including:
      </p>
      <ul
        style={{
          paddingLeft: '20px',
          color: '#4B5563',
          fontSize: '16px',
          lineHeight: '1.7',
        }}
      >
        <li>Software Development</li>
        <li>Game Programming</li>
        <li>Embedded Systems</li>
        <li>Data Analysis & Machine Learning</li>
        <li>Cybersecurity</li>
      </ul>
    </section>
  </div>
);

export default SubjectsInfo1;
