import React from 'react';
import { Hints } from '../constants';
import { EAppStates } from '../types';

const Hint: React.FC<{ appState: EAppStates }> = ({ appState }) => {
  return (
    <div
      className="hint-container"
      dangerouslySetInnerHTML={{ __html: Hints[appState] }}
    />
  );
};

export default Hint;
