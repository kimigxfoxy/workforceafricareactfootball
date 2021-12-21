import React from 'react';
import ReactDOM from 'react-dom';
import Teams from './Teams';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Teams />, div);
  ReactDOM.unmountComponentAtNode(div);
});