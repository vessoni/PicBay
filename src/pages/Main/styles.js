import styled from 'styled-components';
import headerImage from '../../styles/images/banner.jpg';

export const MainHeader = styled.header`
  height: 45px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  nav ul li {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #667590;
    font-weight: bold;
    font-size: 20px;
    color: #0097f0;
    a {
      all: unset;
      display: flex;
      align-items: center;
      font-size: 13px;
      color: #667590;
      font-weight: bold;
      font-size: 20px;
      color: #0097f0;
      cursor: pointer;
    }
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 55vh;
  height: 55vh;
  position: relative;
  background: #000;
  background-image: url(${headerImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  color: #fff;
`;

export const BannerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    padding: 10px;
    font-size: 14px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 500px;
  padding: 10px;

  input {
    text-align: center;
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 12px;
    border-radius: 4px 0px 0px 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  border-radius: 0px 4px 4px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Details = styled.div`
  margin: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  a {
    text-decoration: none;
  }

  h2 {
    width: 60%;
    text-align: center;
    text-justify: inter-word;
    margin: 30px;
  }
`;

export const DiscoverButton = styled.div`
  background: #0097f0;
  border: 0;
  padding: 15px;
  border-radius: 50px;
  width: 250px;
  color: #fff;
  font-size: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterPage = styled.footer`
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  nav,
  ul {
    display: flex;
    list-style: none;
  }

  nav ul li {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #667590;
    font-weight: bold;
    margin-left: 30px;
    text-align: center;
    &:first-child {
      color: #0097f0;
    }
    &:last-child {
      margin-right: 15px;
    }
  }
`;
