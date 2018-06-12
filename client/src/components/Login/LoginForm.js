import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Button from '../../helperComponents/Button/Button';
import InputField from '../../helperComponents/InputField/InputField';
import LOGIN_MUTATION from '../../toServer/mutations/logIn';

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.login({ variables: this.state })
      .then(res => {
        console.log(res);
        this.clearState();
      })
      .catch(console.log);
  }

  clearState = () => {
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <InputField label="Username" name="username" value={username} handleChange={(e) => this.setState({ username: e.target.value })} id="name" />
        <InputField label="Password" name="password" value={password} handleChange={(e) => this.setState({ password: e.target.value })} id="password" />
        <Button type="submit" label="Log in!" />
      </form>
    )
  }
}


export default graphql(LOGIN_MUTATION, { name: 'login' })(LoginForm);