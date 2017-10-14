import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';

export default class Senator extends Component {

    render() {

        const senator = this.props.senator;
        const senatorName = `${senator.person.firstname} ${senator.person.lastname}`;

        const picID = senator.person.link.slice(senator.person.link.lastIndexOf('/'));
        // https://www.govtrack.us/data/photos/400013-200px.jpeg
        // https://www.govtrack.us/congress/members/tammy_baldwin/400013

        return (
            <div className="senator">
{/*                 <h4>{senator.person.firstname} {senator.person.lastname}</h4>
                <div>{senator.party}</div>
                <div>{senator.startdate}</div> */}
                <Card>
                    <CardHeader
                        title={senatorName}
                        subtitle={senator.phone}
                        avatar={`https://www.govtrack.us/data/photos${picID}-50px.jpeg`}
                    />
                    <CardMedia overlay={<CardTitle title={senator.description} />} >
                        <img src={`https://www.govtrack.us/data/photos${picID}-200px.jpeg`}
                            alt={senatorName}/>    
                    </CardMedia>
                </Card>
            </div>
        )
    }
}
