import React, { Fragment, Component } from 'react'
import Senator from './Senator'
import { getDemocrats, getRepublicans } from './filters'

export default class extends Component {

  state = {
    query: ''
  }

  renderRepublicans () {
    return getRepublicans()
      .map(senator => <Senator key={senator.person.osid} senator={senator} />)
  }

  renderDemocrats () {
    return getDemocrats()
      .map(senator => <Senator key={senator.person.osid} senator={senator} />)
  }

  render () {

    const republicans = this.renderRepublicans()
    const democrats = this.renderDemocrats()

    return (
      <Fragment>
        <form>
          <input type="search"
                 placeholder="Search"
                 value={this.state.query}
                 onChange={e => this.setState({ query: e.target.value })}
          />
        </form>
        <div>
          <h1>Republicans</h1>
          {republicans}
        </div>
        <div>
          <h1>Democrats</h1>
          {democrats}
        </div>
      </Fragment>
    )

  }

}