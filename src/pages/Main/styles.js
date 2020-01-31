import styled from 'styled-components';
import headerImage from '../../styles/images/new.jpg';

export const MainHeader = styled.header`
  height: 45px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  nav ul li {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #667590;
    font-weight: bold;
    margin-left: 30px;
    &:first-child {
      margin: 0px;
    }
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 65vh;
  height: 65vh;
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
    padding: 10px 5px;
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
