/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaEye,
  FaCloudDownloadAlt,
  FaArrowsAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Galery from '../../components/galery';
import api from '../../services/api';
import logo from '../../styles/images/logo.svg';

import {
  MainHeader,
  Form,
  SubmitButton,
  Vertical,
  Inner,
  DivImage,
  Content,
  Profile,
  ProfilePicture,
  DescriptionPerfil,
  Tag,
  FooterPage,
  Download,
  Recomend,
  Details,
  DiscoverButton,
} from './styles';

export default class Detail extends Component {
  state = {
    image: {},
    find: '',
    galery: [],
    profile: '',
    id: '',
  };

  async componentDidMount() {
    const { match } = this.props;

    const imageId = match.params.id;

    const response = await api.get('', {
      params: {
        id: imageId,
      },
    });

    const Nresponse = await api.get('', {
      params: {
        per_page: 5,
      },
    });

    this.setState({
      galery: Nresponse.data.hits,
      image: response.data.hits[0],
      id: imageId,
      profile: `https://pixabay.com/users/${response.data.hits[0].user}-${response.data.hits[0].user_id}`,
    });
  }

  async componentDidUpdate() {
    const { id } = this.state;
    const { match } = this.props;
    const imageId = match.params.id;

    if (id !== imageId) {
      window.location.reload();
    }
  }

  handleInputChange = e => {
    this.setState({ find: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { find } = this.state;

    if (find) {
      this.props.history.push(`/search/${find}`);
    } else {
      this.props.history.push(`/search/-`);
    }
  };

  handleTeste = async e => {
    e.preventDefault();

    alert('oi');
  };

  render() {
    const { image, find, profile, galery } = this.state;

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
        <Vertical>
          <Inner>
            <DivImage>
              <img
                src={image.largeImageURL}
                width={image.webformatWidth}
                height={image.webformatHeight}
                alt={image.tags}
              />
            </DivImage>
            <Content>
              <Profile>
                <span>@Photographer</span>
                <a href={profile} target="_blank" rel="noopener noreferrer">
                  <ProfilePicture>
                    <img src={image.userImageURL} alt={image.user} />
                    <DescriptionPerfil>
                      <h1>{image.user}</h1>
                    </DescriptionPerfil>
                  </ProfilePicture>
                </a>
                <span>@Tags</span>
                <Tag>
                  <p>{image.tags}</p>
                </Tag>

                <span>
                  <FaEye color="#53626c" size={25} />
                </span>
                <p>{image.views} views</p>

                <span>
                  <FaCloudDownloadAlt color="#53626c" size={25} />
                </span>
                <p>{image.views} downloads </p>

                <span>
                  <FaArrowsAlt color="#53626c" size={25} />
                </span>
                <p>
                  {' '}
                  {image.imageWidth} x {image.imageHeight}{' '}
                </p>
                <p>Dimension</p>
              </Profile>
              <Download>
                <span>@Download Photography</span>
                <a
                  href={image.pageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tag>
                    <p>
                      <FaCloudDownloadAlt color="#53626c" size={25} />
                      Download Now
                    </p>
                  </Tag>
                </a>
              </Download>
            </Content>
          </Inner>
        </Vertical>

        <Recomend>
          <h2> Maybe you like </h2>
          <Galery>
            {galery.map(images => (
              <Link to={`/detail/${images.id}`} key={images.id}>
                <img
                  src={images.webformatURL}
                  width={images.webformatWidth}
                  height={images.webformatHeight}
                  alt={images.tags}
                />
              </Link>
            ))}
          </Galery>{' '}
          <Details>
            <Link to="/images">
              <DiscoverButton>Discover more </DiscoverButton>
            </Link>
          </Details>
        </Recomend>

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
