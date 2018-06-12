import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import InputField from '../../helperComponents/InputField/InputField';
import Button from '../../helperComponents/Button/Button';
import SIGN_UP_MUTATION from '../../toServer/mutations/signUp';


class LogIn extends Component {
  state = {
    fullname: '',
    username: '',
    email: '',
    password1: '',
    password2: '',
  }

  clearState = () => {
    this.setState({
      username: '',
      email: '',
      fullname: '',
      password1: '',
      password2: ''
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.signUp({ variables: this.state })
      .then(res => {
        console.log(res);
        this.clearState();
      })
      .catch(console.log)
  }


  render() {
    const { fullname, username, email, password1, password2 } = this.state;
    return (
      <form action="POST" onSubmit={this.handleSubmit}>
        <InputField label="Fullname" name="fullname" value={fullname} handleChange={(e) => this.setState({ fullname: e.target.value })} id="fullname" />
        <InputField label="Username" name="username" value={username} handleChange={(e) => this.setState({ username: e.target.value })} id="name" />
        <InputField label="Email" name="email" email value={email} handleChange={(e) => this.setState({ email: e.target.value })} id="email" />
        <InputField label="Password" name="password1" value={password1} handleChange={(e) => this.setState({ password1: e.target.value })} id="password1" />
        <InputField label="Repeat password" name="password2" value={password2} handleChange={(e) => this.setState({ password2: e.target.value })} id="password2" />
        <Button type="submit" label="Sign up!" />
      </form>

    )
  }
}
export default graphql(SIGN_UP_MUTATION, { name: 'signUp' })(LogIn);