import React from 'react';
import Module from './Module';
import PdfViewer from './PdfViewer';
import QuizChallenge from './QuizChallenge';
import DragDropChallenge from './DragDropChallenge';
import MiniBossChallenge from './MiniBossChallenge';

function App() {
  // Example module structure
  const modules = [
    {
      id: 1,
      title: 'Module 1: Sample PDF',
      content: <PdfViewer file="/path/to/sample.pdf" />,
      challenges: [
        { type: 'quiz', question: 'What is 2+2?', options: ['3','4','5'], answer: '4' },
        { type: 'dragdrop', labels: ['A','B'], dropzones: ['B','A'] }
      ],
      miniBoss: null
    },
  ];

  return (
    <div>
      {modules.map((module) => (
        <Module key={module.id} module={module} isUnlocked={true} />
      ))}
    </div>
  );
}

export default App;
