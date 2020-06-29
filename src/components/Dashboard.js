import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    render() {
        console.log('tweetsId : ', this.props);
        return (
            <div>
                <h3 className="center">Your Timeline</h3>
                <ul className="dashboard-list">
                    {this.props.tweetsId.map((id) => (
                        <li key={id}>
                            <div>TWEET ID: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ tweets }) {
    return {
        tweetsId: Object.keys(tweets).sort(
            (a, b) => tweets[b].timestap - tweets[a].timestamp
        ),
    };
}

export default connect(mapStateToProps)(Dashboard);
