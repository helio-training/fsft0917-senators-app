import React, { Component } from 'react';

import senatorData from '../data/senatorData.json';
import './Senator.css';
import Senator from './Senator';

export default class Senators extends Component {

    filterByParty(party) {
        return senatorData.filter(senator => senator.party === party)
    }

    renderRepublicans() {
        return this.filterByParty('Republican').map(senator => {
            return <Senator senator={senator} key={senator.person.cspanid}/>
        });
    }

    renderDemocrats() {
        return this.filterByParty('Democrat').map(senator => {
            return <Senator senator={senator} key={senator.person.cspanid}/>
        });
    }

    render() {

        const republicans = this.renderRepublicans();
        const democrats = this.renderDemocrats();

        return (
            <div>
                <form>
                    <input type="search" placeholder="Search" />
                </form>
                <div className="senator-columns">
                    <div className="senator-republicans">
                        <h1>Republicans</h1>
                        <div className="senators">{republicans}</div>
                    </div>
                    <div className="senator-democrats">
                        <h1>Democrats</h1>
                        <div className="senators">{democrats}</div>
                    </div>
                </div>
            </div>
        )
    }
}