import styled from 'styled-components';

export const Wrapper = styled.span`
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
    cursor: pointer;

    .avatar-img {
        width: 32px;
        height: 32px;
        object-fit: cover;
        border-radius: 4px;
    }

    .extend-arrow {
        width: 24px;
        color: white;
        transition: all .7s;
    }

    &:hover + .extend-arrow {
        transform: rotate(180deg);
    }
`

export const AccountManagementContainer = styled.div`
    position: absolute;
    bottom: -216px;
    right: 0;
    width: 120px;
    height: 200px;
    background-color: gray;
    animation: loading-fade .7s 1 ease both;
    z-index: 1;

    @keyframes loading-fade {
        from {
            opacity: .3;
            transform: translateY(-16px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    &:before {
        content: '';
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-top: 0;
        border-bottom: 8px solid red;
        position: absolute;
        top: -8px;
        right: 36px;
        z-index: -1;
    }
`