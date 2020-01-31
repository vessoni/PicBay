import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    find: '',
  };

  handleInputChange = e => {
    this.setState({ find: e.target.value });
  };

  handleSubmit = async e => {
    alert('oi');
    e.preventDefault();

    const response = await api.get('');
    console.log(response.data);
  };

  render() {
    const { find } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Find
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositorio"
            value={find}
            onChange={this.handleInputChange}
          />

          <SubmitButton>
            <FaPlus color="#fff" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
