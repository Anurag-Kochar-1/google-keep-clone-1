import React from 'react'
import { SearchBarDiv, SearchInput } from "./SearchBar.styles"


const SearchBar = () => {
  return (
    <SearchBarDiv>
      <SearchInput
        placeholder='Search'
      />
    </SearchBarDiv>
  )
}

export default SearchBar