import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../styles/images/logo.svg';

import {
  MainHeader,
  Galery,
  ImageContainer,
  FooterPage,
  Form,
  SubmitButton,
} from './styles';

export default class Main extends Component {
  state = {
    find: '',
    galery: [],
  };

  async componentDidMount() {
    const response = await api.get('', {
      params: {
        per_page: 35,
      },
    });

    this.setState({ galery: response.data.hits });
  }

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
    const { find, galery } = this.state;
    return (
      <>
        <MainHeader>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    <img src={logo} alt="Logo" width="40px" /> PicBay
                  </Link>
                </li>
                <li>
                  <Form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      placeholder="Seach your Pic"
                      value={find}
                      onChange={this.handleInputChange}
                    />

                    <SubmitButton>
                      <FaSearch color="#fff" size={14} />
                    </SubmitButton>
                  </Form>
                </li>
              </ul>
            </nav>
          </div>
        </MainHeader>

        <Galery>
          {galery.map(image => (
            <ImageContainer key={image.id}>
              <img
                src={image.webformatURL}
                width={image.webformatWidth}
                height={image.webformatHeight}
                alt={image.tags}
              />
            </ImageContainer>
          ))}
        </Galery>

        <FooterPage>
          <div>
            <nav>
              <ul>
                <li>
                  <img src={logo} alt="Logo" width="40px" /> PicBay
                </li>
                <li>|</li>
                <li>Made with ♡ - Alexandre Vessoni </li>
                <li>|</li>
                <li>
                  <a href="https://alexandrevessoni.com/">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </FooterPage>
      </>
    );
  }
}
