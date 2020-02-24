import React from 'react';
//import { Link } from 'react-router-dom';

import './styles/Badge.css';
import './styles/BadgesList.css';
import Gravatar from './Gravatar';
import FontAwesome from 'react-fontawesome'

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />
          <span className="BadgeList-twitter"><FontAwesome className="fab fa-twitter" name="logoTwitter" />@{this.props.badge.twitter}</span>
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

export default BadgesListItem