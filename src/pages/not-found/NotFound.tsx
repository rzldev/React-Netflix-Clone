import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { uiAction, NavbarType } from '../../store/slices/uiSlice';
// Styles
import { Wrapper, Container, Tag, Error } from './NotFound.styles';

function NotFound() {
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        dispatch(uiAction.setNavbarType(NavbarType.ONLY_LOGO))
    })

    const navigate = useNavigate();

    function backToHomeHandler() {
        if (!auth.isLoggedIn) {
            navigate(`/`);
        } else {
            navigate('/browse');
        }
    }

    return (
        <Wrapper>
            <Container>
                <h1>Lost your way?</h1>
                <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
                <button onClick={backToHomeHandler}>Netflix Home</button>
                <Error>Error Code <strong>NSES-404</strong></Error>
            </Container>

            <Tag>
                <span>FROM <strong>LOST IN SPACE</strong></span>
            </Tag>
        </Wrapper>
    )
}

export default NotFound