import React, {useState, useEffect} from 'react';
import logo from '../../images/logo.png';
import {
    Nav, NavbarContainer, NavLogo, NavIcon,
    MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn,
    NavBtnLink, UserLog, NavItemCart, NavShopLogo, UserContainer
} from './Navbar.elements';
import {FaBars, FaTimes, FaOpencart} from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai"
import {IconContext} from "react-icons/lib";
import user from '../../images/user.png';
import shopping from '../../images/shopping.png';


export const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click)
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <IconContext.Provider value={{color: "#fff"}}>
                <Nav>
                    <NavLogo to="/home">
                        <NavIcon src={logo}/>
                    </NavLogo>
                    <NavbarContainer>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>

                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/men-clothes'>
                                    Чоловіки
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/woman-clothes'>
                                    Жінки
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/kids-clothes'>
                                    Діти
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/sale'>
                                    Розпродаж
                                </NavLinks>
                            </NavItem>

                        </NavMenu>

                        <UserContainer>
                            <NavItemBtn>
                                {button ? ( <UserLog><AiOutlineUser/></UserLog> ) : (
                                    <NavBtnLink to='/sign-up'><AiOutlineUser/></NavBtnLink>)}
                            </NavItemBtn>

                            <NavItemCart>
                                <FaOpencart />
                            </NavItemCart>
                        </UserContainer>

                    </NavbarContainer>

                </Nav>
            </IconContext.Provider>
        </>
    );
};
