import React from 'react';
import PropTypes from 'prop-types';
import styles from './TeamHome.module.css';

import {AllPlayers} from '../Allplayers/Allplayers'
import {InjuredPlayers} from '../InjuredPlayers/InjuredPlayers'
import {PastFixtures} from '../PastFixtures/PastFixtures'
import {FutureFixtures} from '../FutureFixtures/FutureFixtures'


export class TeamHome extends React.Component {
  render() {
        if(this.state.component==1){
           return(
            <AllPlayers dataFromParent = {this.state.teamSelectedId}/> 
            )
        }
        if(this.state.component==2){
          return(
           <InjuredPlayers dataFromParent = {this.state.teamSelectedId}/> 
           )
        }
        if(this.state.component==3){
          return(
           <PastFixtures dataFromParent = {this.state.teamSelectedId}/> 
           )
        } 
        if(this.state.component==4){
          return(
           <FutureFixtures dataFromParent = {this.state.teamSelectedId}/> 
           )
        }                 
        else{
          return(
            <div>
            <ul>
              <li key='1' onClick={() => this.onItemClicked(1)}>
                  All Players
              </li>
              <li key='2' onClick={() => this.onItemClicked(2)}>
                  Injured Players
              </li>
              <li key='3' onClick={() => this.onItemClicked(3)}>
                  Past fixtures
              </li>
              <li key='4' onClick={() => this.onItemClicked(4)}>
                  Future fixtures
              </li>
              <li key='5' onClick={() => this.onItemClicked(5)}>
                  Position on table
              </li>
            </ul>
            </div>
        )
    }
  }


    constructor(props) {
      super(props);
      this.state = {
        component: 0,
        teamSelectedId:this.props.dataFromParent
      };
    }
  
    onItemClicked = (componentNumber) => {
      this.setState({
        component: componentNumber,
      });
    }
    
}
