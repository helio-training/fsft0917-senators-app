import React from 'react'

export default class extends React.Component {


  render() {
    const senator = this.props.senator

    return (
      <div>
        <h4>{senator.person.firstname} {senator.person.lastname}</h4>
        <div>{senator.party}</div>
        <div>{senator.startdate}</div>
      </div>
    )
  }


}