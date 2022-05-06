import styled from "styled-components";

export const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    /* padding-left: 35px; */
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /* Hide the browser's default checkbox */
    > input {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
    }

    /* Create custom checkbox */
    .checkmark {
        color: red;
    }

    /* On Mouse-Over, add background-color */
    &:hover > input ~ .checkmark:after {
        color: blue;
    }

    > input:checked ~ .checkmark:after {
        color: green;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: '';
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    > input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark indicator */
    .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`