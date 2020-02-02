import styled from 'styled-components';

const Galery = styled.div`
  margin: 0.5vw;
  font-size: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-flow: row wrap;

  a {
    box-flex: auto;
    flex: auto;
    width: 300px;
    margin: 0.3vw;
    display: flex;

    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
  }
`;

export default Galery;
