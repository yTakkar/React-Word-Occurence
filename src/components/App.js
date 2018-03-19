import React from 'react'
import { post } from 'axios'

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
    let
      { value, data } = this.state,
      map_data = Object.keys(data).sort().map((item, i) => (
        <tbody key={i} >
          <tr>
            <td>{item}</td>
            <td>{item.length}</td>
          </tr>
        </tbody>
      ))

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

        <div>
          <table>
            <tbody>
              <tr>
                <th>Word</th>
                <th>Cccurence</th>
              </tr>
            </tbody>
            { map_data }
          </table>
        </div>

      </div>
    )
  }
}
