import React from 'react';

const SubjectsInfo2 = () => (
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
    {/* Linear Algebra */}
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
        Linear Algebra
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
        Linear Algebra is a fundamental branch of mathematics that deals with vector spaces,
        matrices, and systems of linear equations. It is widely used in engineering, computer
        science, physics, and data science.
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
          <strong>Systems of Linear Equations:</strong> Gaussian Elimination, Matrix Representation
        </li>
        <li>
          <strong>Matrices and Determinants:</strong> Matrix Operations, Inverse, Rank
        </li>
        <li>
          <strong>Vector Spaces:</strong> Basis, Dimension, Subspaces
        </li>
        <li>
          <strong>Eigenvalues & Eigenvectors:</strong> Diagonalization, Spectral Theorem
        </li>
        <li>
          <strong>Linear Transformations:</strong> Kernel, Range, Applications
        </li>
        <li>
          <strong>Orthogonality & Projections:</strong> Gram-Schmidt Process, Least Squares
        </li>
        <li>
          <strong>Applications in Data Science:</strong> Principal Component Analysis (PCA)
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
        <li>Understand and solve systems of linear equations.</li>
        <li>Work with matrices, determinants, and inverses.</li>
        <li>Use vector spaces and basis transformations.</li>
        <li>Compute eigenvalues and eigenvectors for matrix analysis.</li>
        <li>Apply linear algebra in machine learning and physics.</li>
        <li>Understand transformations and their impact on vector spaces.</li>
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
          <strong>Weekly Assignments:</strong> Problem sets covering equations, matrices, and
          transformations.
        </li>
        <li>
          <strong>Hands-on Labs:</strong> Solving practical problems using Python (NumPy, SciPy).
        </li>
        <li>
          <strong>Graphical Representation:</strong> Visualizing vector spaces and transformations.
        </li>
        <li>
          <strong>Final Project:</strong> Applying linear algebra in machine learning or physics.
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
        Linear Algebra is essential in various fields, including:
      </p>
      <ul
        style={{
          paddingLeft: '20px',
          color: '#4B5563',
          fontSize: '16px',
          lineHeight: '1.7',
        }}
      >
        <li>Machine Learning & Data Science</li>
        <li>Computer Graphics & Image Processing</li>
        <li>Physics & Engineering Simulations</li>
        <li>Economics & Optimization Problems</li>
        <li>Quantum Computing</li>
      </ul>
    </section>
  </div>
);

export default SubjectsInfo2;
