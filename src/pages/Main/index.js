/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../styles/images/logo.svg';

import Galery from '../../components/galery';

import {
  MainHeader,
  Banner,
  Form,
  SubmitButton,
  BannerForm,
  Details,
  DiscoverButton,
  FooterPage,
} from './styles';

export default class Main extends Component {
  state = {
    find: '',
    galery: [],
  };

  async componentDidMount() {
    const response = await api.get('', {
      params: {
        per_page: 10,
      },
    });

    console.log(response);

    this.setState({ galery: response.data.hits });
  }

  handleInputChange = e => {
    this.setState({ find: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { find } = this.state;

    this.props.history.push(`/search/${find}`);
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
              </ul>
            </nav>
          </div>
        </MainHeader>
        <Banner>
          <BannerForm>
            <h1>Find a Image</h1>
            <h3>
              Over 1 million+ high quality stock images and videos shared by our
              talented community.
            </h3>
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
          </BannerForm>
        </Banner>

        <Galery>
          {galery.map(image => (
            <Link to={`/detail/${image.id}`} key={image.id}>
              <img
                src={image.webformatURL}
                width={image.webformatWidth}
                height={image.webformatHeight}
                alt={image.tags}
              />
            </Link>
          ))}
        </Galery>

        <Details>
          <Link to="/images">
            <DiscoverButton>Discover more </DiscoverButton>
          </Link>

          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h2>
        </Details>

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
