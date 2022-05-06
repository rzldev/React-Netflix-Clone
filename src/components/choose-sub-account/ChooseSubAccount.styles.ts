import { colors } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: ${colors.grey[900]};

    .heading {
        font-size: 2.5rem;
        font-weight: 500;
        color: white;
        letter-spacing: 1px;
    }

    .manage-profile {
        border: solid 1px ${colors.grey[600]};
        background-color: transparent;
        font-size: 1.25rem;
        font-weight: 300;
        color: ${colors.grey[600]};
        padding: 8px 16px;
        margin-top: 24px;
        transition: all .2s;
        transition-timing-function: ease;
        cursor: pointer;

        &:hover {
            color: white;
            border-color: white;
        }
    }
`

export const SubAccountContainer = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const SubAccountItem = styled.li`
    max-width: 144px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: ${colors.grey[600]};
    transition: all .2s;
    transition-timing-function: ease;

    .sub-account-avatar {
        width: 100%;
        object-fit: contain;
        border-radius: 8px;
        padding: 4px;
        transition: all .2s;
        transition-timing-function: ease;
    }

    .sub-account-name {
        
    }

    .add-sub-account {
        width: 100%;
        height: 100%;
    }

    &:hover {
        color: white;

        .sub-account-avatar {
            background-color: white;
        }
    }
`