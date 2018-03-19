import React from 'react'

export default class Table extends React.Component {
  render() {
    let
      { data } = this.props,
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
    )
  }
}
