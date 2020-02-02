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

export const Vertical = styled.div`
  margin: 15px;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
export const DivImage = styled.div`
  margin-right: 0.5vw;
  font-size: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-flow: row wrap;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  min-width: 300px;
  flex: 1;
`;

export const Profile = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background: #e6ecf0;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  padding: 20px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #fff;
  }

  span {
    font-size: 14px;
    color: #53626c;
    box-shadow: 0px -2px 0px -1px rgba(0, 0, 0, 0.05);
    width: 60%;
    text-align: center;
    padding: 10px;
    margin-top: 15px;
  }

  a {
    text-decoration: none;
  }

  p {
    display: flex;
    align-items: center;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 25px;
    color: #53626c;
    margin-left: 5px;
  }
`;

export const DescriptionPerfil = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.div`
  p {
    margin-top: 10px;
    background: #0097f0;
    border: 0;
    padding: 10px;
    border-radius: 50px;
    width: auto;
    color: #fff;
    font-size: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
