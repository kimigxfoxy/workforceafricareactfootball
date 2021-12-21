import React from 'react';
import ReactDOM from 'react-dom';
import PastFixtures from './PastFixtures';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PastFixtures />, div);
  ReactDOM.unmountComponentAtNode(div);
});