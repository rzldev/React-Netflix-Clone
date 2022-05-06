import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { NavbarType } from '../../store/slices/uiSlice';
// Styles
import { DropDown, Nav, NavItem, NavLeft, NavLogo, NavRight, NotificationWrapper, SignInButton, SignInText } from './Navbar.styles';
// Icons
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
// Components
import SearchBar from '../search-bar/SearchBar';
import Avatar from '../avatar/Avatar';

function Navbar() {
    const ui = useSelector((state: RootState) => state.ui);

    const navigate = useNavigate();

    return (
        <Nav backgroundType={ui.backgroundColorType}>
            <NavLogo type={ui.navbarType} src="/netflix-logo.svg" alt="netflix-logo" />

            {(ui?.navbarType === NavbarType.BEFORE_LOGIN) && (
                <React.Fragment>
                    <DropDown>
                        <LanguageIcon className="globe-icon" />
                        <span>English</span>
                        <KeyboardArrowDownIcon className="arrow-down-icon" />
                    </DropDown>

                    <SignInButton onClick={() => navigate('/signin')}>
                        Sign In
                    </SignInButton>
                </React.Fragment>
            )}

            {(ui?.navbarType === NavbarType.AFTER_LOGIN) && (
                <React.Fragment>
                    <NavLeft>
                        <NavItem to="#">Home</NavItem>
                        <NavItem to="#">TV shows</NavItem>
                        <NavItem to="#">Movies</NavItem>
                        <NavItem to="#">New & Popular</NavItem>
                        <NavItem to="#">My List</NavItem>
                    </NavLeft>
                    <NavRight>
                        <SearchBar />
                        <Link to="#" className="kids">Kids</Link>
                        <NotificationWrapper>
                            <NotificationsIcon className="notification-icon" />
                        </NotificationWrapper>
                        <Avatar />
                    </NavRight>
                </React.Fragment>
            )}

            {(ui?.navbarType === NavbarType.SIGNUP) && (
                <SignInText to="/signin">
                    Sign In
                </SignInText>
            )
            }
        </Nav >
    )
}

export default Navbar;