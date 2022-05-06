import styled from 'styled-components';
import { colors } from '@mui/material';
import { Link } from 'react-router-dom';
import { BackgroundColorType, NavbarType } from '../../store/slices/uiSlice';

interface NavProps {
    backgroundType?: BackgroundColorType,
}

export const Nav = styled.nav<NavProps>`
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 40px;
    border-bottom: ${props => props.backgroundType === BackgroundColorType.LIGHT && `solid 1px ${colors.grey[300]}`};
    box-shadow: ${props => props.backgroundType === BackgroundColorType.LIGHT && `0 3px ${colors.grey[100]}`};

    @media screen and (max-width: 600px) {
        padding: 20px;
    }
`

interface NavLogoProps {
    type: NavbarType | null,
}

export const NavLogo = styled.img<NavLogoProps>`
    margin-right: 16px;
    width: ${props => {
        let width = 0;
        if (props.type === NavbarType.ONLY_LOGO) width = 144;
        if (props.type === NavbarType.BEFORE_LOGIN || props.type === NavbarType.SIGNUP) width = 120;
        if (props.type === NavbarType.AFTER_LOGIN) width = 100;
        return width
    }}px;
    transition: all .3s;
`

export const DropDown = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
    gap: 4px;
    color: white;
    border: 1px solid ${colors.grey[700]};
    border-radius: 2px;
    padding: 6px;
    margin-left: auto;
    margin-right: 16px;

    .globe-icon {
        width: 14px;
    }

    .arrow-down-icon {
        width: 20px;
        margin-left: auto;
    }

    span {
        font-size: 14px;
    }

    @media screen and (max-width: 991px) {
        padding: 2px 6px;
    }
`

export const SignInButton = styled.button`
    background-color: ${colors.red.A700};
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    padding: 10px 16px;
    cursor: pointer;

    @media screen and (max-width: 600px) {
        border-radius: 4px;
        font-size: 14px;
        padding: 8px 10px;
    }
`

export const NavLeft = styled.div`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: 8px;
    margin-right: auto;
    animation: loading-fade .7s 1 ease both;

    @keyframes loading-fade {
        0% {
            opacity: 0;
            transform: translateX(16px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`

export const NavItem = styled(Link)`
    text-decoration: none;
    font-size: 12px;
    color: ${colors.grey[500]};
    transition: all .2s;

    &:hover {
        color: white;
    }
`

export const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    animation: loading-fade .7s 1 ease both;

    @keyframes loading-fade {
        0% {
            opacity: 0;
            transform: translateX(-16px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .kids {
        text-decoration: none;
        font-size: 12px;
        color: ${colors.grey[500]};
        transition: all .2s;

        &:hover {
            color: white;
        }
    }
`

export const NotificationWrapper = styled.span`
    display: flex;
    align-items: center;
    
    .notification-icon {
        width: 24px;
        height: 24px;
        color: white ;
    }
`

export const SignInText = styled(Link)`
    background: white;
    font-size: 1.25rem;
    color: ${colors.grey[800]};
    font-weight: 700;
    text-decoration: none;
    outline: none;
    border: none;
`