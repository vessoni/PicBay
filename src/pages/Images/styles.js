import styled from 'styled-components';

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
  flex-direction: row;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 600px;
  padding: 10px;

  input {
    text-align: center;
    flex: 1;
    border: 1px solid #eee;
    padding: 8px 10px;
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

export const Galery = styled.div`
  margin: 0.5vw;
  font-size: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-flow: row wrap;
`;

export const ImageContainer = styled.div`
  box-flex: auto;
  flex: auto;
  width: 300px;
  margin: 0.3vw;
  display: flex;

  img {
    width: 100%;
    height: auto;
  }
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
    text-align: center;
    font-size: 13px;
    color: #667590;
    font-weight: bold;
    margin-left: 30px;
    &:first-child {
      color: #0097f0;
    }
    &:last-child {
      margin-right: 15px;
    }
  }
`;
