import React from 'react';
import ReactDOM from 'react-dom';
import TeamHome from './TeamHome';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamHome />, div);
  ReactDOM.unmountComponentAtNode(div);
});