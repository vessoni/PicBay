import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

// import api from '../../services/api';

import { MainHeader, Banner, Form, SubmitButton, BannerForm } from './styles';

export default class Main extends Component {
  state = {};

  render() {
    return (
      <>
        <MainHeader>
          <div />
        </MainHeader>
        <Banner>
          <BannerForm>
            <h1>Find a Image</h1>
            <h3>
              Over 1 million+ high quality stock images and videos shared by our
              talented community.
            </h3>
            <Form>
              <input type="text" placeholder="Adicionar repositorio" />

              <SubmitButton>
                <FaSearch color="#fff" size={14} />
              </SubmitButton>
            </Form>
          </BannerForm>
        </Banner>
      </>
    );
  }
}
