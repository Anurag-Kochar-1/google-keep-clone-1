import React, { useContext } from 'react'
import { AuthUserDetailsContext, IAuthUserDetailsContext } from '../../context/AuthUserDetailsContext'
import { SearchBarDiv, SearchInput } from "./SearchBar.styles"


const SearchBar = () => {
  const {  searchInput , setSearchInput } = useContext(AuthUserDetailsContext) as IAuthUserDetailsContext

  return (
    <SearchBarDiv>
      <SearchInput
        placeholder='Search'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyUp={(e) => {
          if(e.key == "Enter") {
            setSearchInput('')
          }
        }}
      />
    </SearchBarDiv>
  )
}

export default SearchBar