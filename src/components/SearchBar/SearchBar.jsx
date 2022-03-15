import React from 'react'
import { SearchWrapper, SearchContainer, SearchIcon} from './SearchBarElement'
import {FaSearch} from 'react-icons/fa'
function SearchBar() {
  return (
      <>
        <SearchWrapper>
          <SearchContainer>
            <input type="search" name='search' placeholder='Search for your dream house' />
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </SearchContainer>
        </SearchWrapper>
      </>
  )
}

export default SearchBar