import PropTypes from 'prop-types'
import { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <p>{this.props.propString}</p>
        <p>{this.props.propBool ? 'true' : 'false'}</p>
        <p>{this.props.propFun(10)}</p>
        <p>{this.props.propNum}</p>
        <p>{this.props.firstName}</p>
      </div>
    )
  }
}

App.propTypes = {
  propString: PropTypes.string,
  propBool: PropTypes.bool.isRequired,
  propFun: PropTypes.func,
  propNum: PropTypes.number,
  firstName: function (props, propName, componentName) {
    if (typeof props[propName] !== 'string') {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      )
    }
  }
}

App.defaultProps = {
  propString: 'Abbas',
  propBool: true,
  propFun: (x) => x * 5,
  propNum: 10,
  firstName: 123
}


export default App
