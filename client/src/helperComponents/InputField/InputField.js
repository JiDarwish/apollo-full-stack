import React, { Component, Fragment } from 'react'

export default class InputField extends Component {
  render() {
    const { type, value, handleChange, label, name, id } = this.props;
    const inputType = type || 'text';
    return (
      <Fragment>
        <label htmlFor={id}>{label}</label>
        <input name={name} id={id} type={inputType} onChange={handleChange} value={value} />
      </Fragment>
    )
  }
}
