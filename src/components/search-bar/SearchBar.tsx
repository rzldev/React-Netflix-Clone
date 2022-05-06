import React, { useEffect, useRef, useState } from 'react'
// Styles
import { ClearIconWrapper, SearchInput, Wrapper } from './SearchBar.styles'
// Icons
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
// Hooks
import useInput from '../../hooks/use-input';

function SearchBar() {

    const search = useInput([]);

    const [showInputBar, setShowInputBar] = useState(false);
    const [showClearButton, setShowClearButton] = useState(false)

    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (search.value.trim().length > 0) setShowClearButton(true);
        if (search.value.trim().length === 0 && showClearButton) setShowClearButton(false);
    }, [search.value, showClearButton]);

    function showInputHandler() {
        setShowInputBar(true);
        searchRef.current?.focus();
    }

    function searchBlurHandler() {
        if (search.value.trim().length === 0) setShowInputBar(false);
    }

    function clearSearchHandler() {
        search.inputChangeHandler("");
        searchRef.current?.focus();
    }

    return (
        <Wrapper showInputBar={showInputBar}>
            <SearchIcon className="search-icon" onClick={showInputHandler} />
            <SearchInput
                ref={searchRef}
                show={showInputBar}
                value={search.value}
                onChange={e => search.inputChangeHandler(e.target.value)}
                onBlur={searchBlurHandler}
                placeholder="Titles, People, Genres" />
            <ClearIconWrapper show={showInputBar}>
                {
                    showClearButton && (
                        <CloseIcon
                            className="clear-icon"
                            onClick={clearSearchHandler} />
                    )
                }
            </ClearIconWrapper>

        </Wrapper>
    )
}

export default SearchBar