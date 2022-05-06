import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
// Styles
import { Container, NavItem } from './Footer.styles'

interface FooterInterface {
    children: React.ReactElement<FooterNavItemInterface> | React.ReactElement<FooterNavItemInterface>[],
}

function Footer({ children }: FooterInterface) {
    const backgroundType = useSelector((state: RootState) => state.ui.backgroundColorType);

    return (
        <Container backgroundType={backgroundType}>
            <p className="question">Questions? Call xxx-xxx-xxx-xxxx</p>
            <div className="nav">
                {children}
            </div>
            <p className="netflix">Netflix</p>
        </Container>
    )
}

export default Footer

interface FooterNavItemInterface {
    children?: string,
}

export const FooterNavItem: React.FC<FooterNavItemInterface> = ({ children }) => {
    return (
        <NavItem>
            {children}
        </NavItem>
    )
}