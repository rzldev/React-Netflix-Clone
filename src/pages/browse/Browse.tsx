import React, { useEffect, useState } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { authAction } from '../../store/slices/auth-slice';
import { uiAction, NavbarType, BackgroundColorType } from '../../store/slices/uiSlice';
import { SubAccount } from '../../store/slices/auth-slice';
// Styles
import { Container, TransitionFade } from './Browser.styles';
// Components
import ChooseSubAccount from '../../components/choose-sub-account/ChooseSubAccount';

function Browse() {
    const dispatch = useDispatch();
    const subAccount = useSelector((state: RootState) => state.auth.subAccount);

    const [showSubAccounts, setShowSubAccounts] = useState(true);

    useEffect(() => {
        dispatch(uiAction.setNavbarType(NavbarType.ONLY_LOGO));
        dispatch(uiAction.setBackgroundType(BackgroundColorType.DARK));
    })

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null;
        if (subAccount !== null) {
            timer = setTimeout(() => {
                setShowSubAccounts(false);
                dispatch(uiAction.setNavbarType(NavbarType.AFTER_LOGIN));
            }, 500);
        }

        return () => {
            if (timer !== null) clearTimeout(timer);
        }
    }, [showSubAccounts, subAccount, dispatch]);

    function setSubAccount(subAccount: SubAccount | null) {
        if (subAccount !== null) dispatch(authAction.setSubAccount(subAccount));
    }

    return (
        <React.Fragment>
            <Container>
                <h1 onClick={() => setSubAccount(null)}>Browser Page</h1>
                {
                    showSubAccounts && (
                        <TransitionFade show={subAccount === null} duration=".5">
                            <ChooseSubAccount onSetSubAccount={setSubAccount} />
                        </TransitionFade>
                    )
                }
            </Container>
        </React.Fragment>
    )
}

export default Browse