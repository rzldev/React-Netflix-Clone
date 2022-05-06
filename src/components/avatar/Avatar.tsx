import React, { useState } from 'react'
// Redux
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
// Styles
import { AccountManagementContainer, Wrapper } from './Avatar.styles'
// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Avatar() {
    const subAccount = useSelector((state: RootState) => state.auth.subAccount);

    const [isMouseHover, setIsMouseHover] = useState(false);

    return (
        <Wrapper>
            <img src={subAccount?.avatarUrl} alt={subAccount?.name} className="avatar-img" />
            <ArrowDropDownIcon className="extend-arrow" />

            {
                isMouseHover && (
                    <AccountManagementContainer>
                        Account
                    </AccountManagementContainer>
                )
            }
        </Wrapper>
    )
}

export default Avatar