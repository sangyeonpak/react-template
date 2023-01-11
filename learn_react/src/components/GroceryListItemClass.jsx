import React from "react";

class GroceryListItemClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      done: false,
      hover: false
    }
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }

  onListItemEnter() {
    this.setState({
      hover: true
    })
  }

  onListItemLeave() {
    this.setState({
      hover: false
    })
  }

  render() {
    let style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }
    return (
      <li
      style={style}
      onClick={this.onListItemClick.bind(this)}
      onMouseEnter={this.onListItemEnter.bind(this)}
      onMouseLeave={this.onListItemLeave.bind(this)}
      >{this.props.item}</li>
    )
  }
}

export default GroceryListItemClass
