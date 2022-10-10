import styled, {createGlobalStyle} from "styled-components";
import user from '../images/user.png'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Sourse Sans Pro', sans-serif;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1920px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
  }
`


export default Global;