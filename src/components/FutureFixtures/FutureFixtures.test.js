import React from 'react';
import ReactDOM from 'react-dom';
import FutureFixtures from './FutureFixtures';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FutureFixtures />, div);
  ReactDOM.unmountComponentAtNode(div);
});