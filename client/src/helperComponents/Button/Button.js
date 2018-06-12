import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { type, label } = this.props;
    return (
      <button type={type}>{label}</button>
    )
  }
}
