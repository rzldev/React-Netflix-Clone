import styled from "styled-components";

interface WrapperProps {
    showInputBar?: boolean,
}

export const Wrapper = styled.span<WrapperProps>`
    border: solid 1px;
    border-color: ${props => props.showInputBar ? 'white' : 'transparent'};
    display: flex;
    align-items: center;
    gap: ${props => props.showInputBar ? '6px' : '0'};
    padding: 4px;
    transition: all .2s;

    .search-icon {
        width: 24px;
        color: white;
        cursor: pointer;
    }
`

interface SearchInputProps {
    show?: boolean,
}

export const SearchInput = styled.input<SearchInputProps>`
    width: ${props => props.show ? '200px' : '0'};
    background-color: transparent;
    border: none;
    max-lines: 1;
    color: white;
    letter-spacing: .5px;
    transition: all .5s;
    outline: none;
    padding: ${props => !props.show && '0'};

    &:focus {
        outline: none;
    }
`

interface ClearIconWrapperProps {
    show?: boolean,
}

export const ClearIconWrapper = styled.span<ClearIconWrapperProps>`
    display: flex;
    align-items: center;
    height: ${props => props.show ? '24px' : 0};
    width: ${props => props.show ? '24px' : 0};
    transition: all .2s;
    cursor: pointer;

    .clear-icon {
        color: white;
    }
`