import React from 'react';

const SubjectsInfo5 = () => (
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
    {/* Communication Skills */}
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
        Communication Skills
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
        Communication Skills focus on enhancing verbal, non-verbal, and written communication
        abilities. This course helps in building effective interpersonal skills, public speaking,
        professional writing, and active listening techniques essential for academic and
        professional success.
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
          <strong>Verbal Communication:</strong> Effective speaking & articulation
        </li>
        <li>
          <strong>Non-Verbal Communication:</strong> Body language & gestures
        </li>
        <li>
          <strong>Written Communication:</strong> Emails, reports, and formal writing
        </li>
        <li>
          <strong>Listening Skills:</strong> Active listening & comprehension
        </li>
        <li>
          <strong>Presentation Skills:</strong> Public speaking & confidence building
        </li>
        <li>
          <strong>Interpersonal Skills:</strong> Team communication & conflict resolution
        </li>
        <li>
          <strong>Professional Communication:</strong> Workplace etiquette & networking
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
        <li>Develop strong verbal and written communication skills.</li>
        <li>Enhance presentation and public speaking confidence.</li>
        <li>Understand the importance of body language in communication.</li>
        <li>Improve active listening and comprehension abilities.</li>
        <li>Gain proficiency in professional and workplace communication.</li>
      </ul>
    </section>
  </div>
);

export default SubjectsInfo5;
