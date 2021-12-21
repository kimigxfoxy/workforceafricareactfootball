import React from 'react';
import PropTypes from 'prop-types';
import styles from './Teams.module.css';

import {TeamHome} from '../TeamHome/TeamHome'


export class Teams extends React.Component {
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div>
            {this.state.showComponent ?
              <TeamHome dataFromParent = {this.state.teamSelectedId}/> :
              <ul>
                {items.map(item => (
                  <li key={item.id} onClick={() => this.onTeamClicked(item.id)}>
                      {item.name}
                  </li>
                ))}
              </ul>
            }
          </div>
      );
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/teams")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      showComponent: false,
      teamSelectedId:0
    };


  }

  onTeamClicked = (teamId) => {
    this.setState({
          showComponent: true,
          teamSelectedId:teamId
      });
  }
}
