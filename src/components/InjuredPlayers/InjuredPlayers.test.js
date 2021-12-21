import React from 'react';
import ReactDOM from 'react-dom';
import InjuredPlayers from './InjuredPlayers';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InjuredPlayers />, div);
  ReactDOM.unmountComponentAtNode(div);
});