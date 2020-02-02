import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../styles/images/logo.svg';
import Galery from '../../components/galery';

import {
  MainHeader,
  FooterPage,
  Form,
  SubmitButton,
  Loading,
  PageActions,
} from './styles';

export default class Main extends Component {
  state = {
    find: '',
    galery: [],
    loading: true,
    page: 1,
  };

  async componentDidMount() {
    const response = await api.get('', {
      params: {
        per_page: 35,
      },
    });

    this.setState({
      galery: response.data.hits,
      loading: false,
    });
  }

  apiGetResolution = async () => {
    const { page } = this.state;

    const response = await api.get('', {
      params: {
        webformatURL: '_340',
        per_page: 35,
        page,
      },
    });

    this.setState({
      galery: response.data.hits,
      loading: false,
    });
  };

  handlePage = async action => {
    const { page } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
    });
    this.apiGetResolution();
  };

  handleInputChange = e => {
    this.setState({ find: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.get('');
    console.log(response.data);
  };

  render() {
    const { find, galery, loading, page } = this.state;
    if (loading) {
      return <Loading>Loading</Loading>;
    }
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

        <PageActions>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => this.handlePage('back')}
          >
            Previous
          </button>
          <span>Page {page}</span>
          <button type="button" onClick={() => this.handlePage('next')}>
            Next
          </button>
        </PageActions>

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
