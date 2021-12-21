import React from 'react';
import PropTypes from 'prop-types';
import styles from './PastFixtures.module.css';

export class PastFixtures extends React.Component {
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div>
              <ul>
                {items.map(item => (
                  <li key={item.id}>
                      DatePlayed: {item.datePlayed}, homeTeamName: {item.teamAway.name},awayTeamName: {item.teamHome.name}, homeTeamScore: {item.homeTeamScore}, awayTeamScore: {item.awayTeamScore} 
                  </li>
                ))}
              </ul>
            
          </div>
      );
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/team/"+this.state.teamSelectedId+"/fixturesplayed")
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
      teamSelectedId:this.props.dataFromParent
    };
  }

}