import styled from "styled-components";
import {Container} from '../globalStyles'
import {Link} from "react-router-dom";


export const Nav = styled.nav`
  background: #15161f;
  height: 80px;
  display: flex;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  color: white;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  padding-left: 40px;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.img`
  margin-right: 0.5rem;
  width: 90px;
  height: 70px;
  -webkit-user-select: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0d1623;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #dcb021;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: white;
  display: flex;
  height: 100%;
  font-size: 17px;
  letter-spacing: 2px;
  align-items: center;
  justify-self: flex-start;
  text-decoration: none;
  padding: 0.5rem 3rem;

  @media screen and (max-width: 960px) {
    color: #ffffff;
    font-size: 20px;
    text-align: left;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #dcb021;
      transition: all 0.3s ease;
    }
  }
`;


export const NavItemBtn = styled.li`
  display: flex;
  padding: 0 25px;
  align-items: center;
  justify-content: center;
  list-style-type: none;

  :hover {
    color: black;
  }
  @media screen and (max-width: 960px) {
    display: flex;
    text-align: left;
    width: 100%;
    height: 70px;
  }
`;

export const NavItemCart = styled.div`
  display: flex;
  z-index: 10;
  font-size: 2rem;
  color: red;
  user-select: none;
  align-items: center;
  cursor: pointer;
`;

export const NavBtnLink = styled(Link)`
`;

export const UserLog = styled.div`
  font-size: 2rem;
  cursor: pointer;
  color: red;
  -webkit-user-select: none;
  
  :hover {
    color: black;
  }
`;


export const NavShopLogo = styled.img`
  width: 34px;
  height: 34px;
  -webkit-user-select: none;

  &:hover {
    background: #696666;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }
`;


export const UserContainer = styled.div`
  display: flex;
  padding: 25px;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


