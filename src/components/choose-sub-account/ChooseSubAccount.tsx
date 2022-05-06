import React from 'react'
// Redux
import { SubAccount } from '../../store/slices/auth-slice'
// Styles
import { Container, SubAccountContainer, SubAccountItem } from './ChooseSubAccount.styles'
// Icons
import AddCircleIcon from '@mui/icons-material/AddCircle';

const subAccounts: SubAccount[] = [
    {
        id: '1',
        name: 'Account 1',
        avatarUrl: '/assets/sub-account-1.png',
    },
    {
        id: '2',
        name: 'Account 2',
        avatarUrl: '/assets/sub-account-2.png',
    },
    {
        id: '3',
        name: 'Account 3',
        avatarUrl: '/assets/sub-account-3.png',
    },
]

interface Props {
    onSetSubAccount: (subAccount: SubAccount) => void,
}

function ChooseSubAccount({ onSetSubAccount }: Props) {
    return (
        <Container>
            <h1 className="heading">Who's Watching?</h1>
            <SubAccountContainer>
                {
                    subAccounts.map((subAccount: SubAccount, index: number) => (
                        <SubAccountItem
                            key={subAccount.id}
                            onClick={() => onSetSubAccount(subAccount)}
                        >
                            <img className="sub-account-avatar" src={subAccount.avatarUrl} alt={subAccount.name} />
                            <span className="sub-account-name">{subAccount.name}</span>
                        </SubAccountItem>
                    ))
                }
                <SubAccountItem>
                    <img className="sub-account-avatar" src="/assets/sub-account-kids.png" alt="Kids" />
                    <span className="sub-account-name">Kids</span>
                </SubAccountItem>
                <SubAccountItem>
                    <AddCircleIcon className="add-sub-account" />
                    <span className="sub-account-name">Add Profile</span>
                </SubAccountItem>
            </SubAccountContainer>
            <button className="manage-profile">Manage Profiles</button>
        </Container>
    )
}

export default ChooseSubAccount