import React from 'react';
import ReactDOM from 'react-dom';
import Allplayers from './Allplayers';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Allplayers />, div);
  ReactDOM.unmountComponentAtNode(div);
});