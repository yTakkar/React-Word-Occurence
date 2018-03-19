import React from 'react'
import { post } from 'axios'
import Table from './table'

export default class App extends React.Component {

  state = {
    value: '',
    data: {}
  }

  valueChange = e =>
    this.setState({ value: e.target.value })

  clicked = async () => {
    let { data } = await post('/get-occurence')
    this.setState({ data })
  }

  render() {
    let { value, data } = this.state

    return (
      <div>

        <div>
          <input
            type='text'
            placeholder='Type something..'
            value={value}
            onChange={this.valueChange}
          />
          <input type='button' onClick={this.clicked} value='Click' />
        </div>

        <Table data={data} />

      </div>
    )
  }
}
