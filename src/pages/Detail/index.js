import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import api from '../../services/api';

// import { Container } from './styles';

export default class Detail extends Component {
  state = {
    image: {},
  };

  async componentDidMount() {
    const { match } = this.props;

    const imageId = match.params.id;

    const response = await api.get(`&id=${imageId}`);

    this.setState({ image: response.data.hits[0] });
  }

  render() {
    const { image } = this.state;

    console.log(image);
    return <h1>{image.likes}</h1>;
  }
}
