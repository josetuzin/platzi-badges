import React from 'react'

import './styles/BadgesList.css'
import FontAwesome from 'react-fontawesome'

class BadgesList extends React.Component {

    render() {
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <div className="container">
                                <div className="row BadgesListItem">
                                        <div className="col-3 badge-container-avatar">
                                            <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="avatar"/>
                                        </div>
                                        <div className="col-9 badge-container-info">
                                            <h4 className="BadgeList-name">{badge.firstName}{badge.lastName}</h4>
                                            <span className="BadgeList-twitter"><FontAwesome className="fab fa-twitter" />{badge.twitter}</span><br/>
                                            <span className="jobTitle">{badge.jobTitle}</span>
                                        </div>

                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            </div>
            
        )
    }
}

export default BadgesList