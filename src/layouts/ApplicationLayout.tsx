import React from 'react'
import { useSelector } from 'react-redux'
// Components
import Navbar from '../components/navbar/Navbar'
import { RootState } from '../store'
// Styles
import { GlobalStyle, Header, Layout } from './ApplicationLayout.styles'

interface Props {
    children: React.ReactNode
}

function ApplicationLayout({ children }: Props) {
    const backgroundType = useSelector((state: RootState) => state.ui.backgroundColorType);

    return (
        <Layout>
            <GlobalStyle backgroundType={backgroundType} />
            {/* Navbar */}
            <Header>
                <Navbar />
            </Header>

            {children}
        </Layout>
    )
}

export default ApplicationLayout