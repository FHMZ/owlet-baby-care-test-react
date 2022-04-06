import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Grid, InputAdornment, List, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import FormDialog from '../../components/Dialog'
import Header from '../../components/Header'
import PhoneBookListItem from '../../components/ListItem'
import { useAppContext } from '../../providers'
import { StyledContainer, StyledTitle, StyledSearchWrapper } from './styles'
import InputSearch from '../../components/Input'

const Home: React.FC = () => {
  const { phoneBookList, handleSearchPhoneBook } = useAppContext()
  const [searchInput, setSearchInput] = useState('')

  function handleSearch(value: string) {
    setSearchInput(value)
    handleSearchPhoneBook(value)
  }

  return (
    <div>
      <Header />
      <Toolbar />
      <StyledContainer>
        <StyledSearchWrapper>
          <InputSearch
            autoFocus={true}
            label="Search"
            value={searchInput}
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <SearchOutlinedIcon />
              </InputAdornment>
            }
          />
        </StyledSearchWrapper>
        <StyledTitle variant="h6" color="inherit">
          Phone Books
        </StyledTitle>
        <List>
          {phoneBookList.length > 0 ? (
            phoneBookList.map((person, i) => (
              <PhoneBookListItem key={i} person={person} />
            ))
          ) : (
            <>
              <Grid container justifyContent="center">
                <StyledTitle variant="h6">
                  No Phone Book was found...
                </StyledTitle>
              </Grid>
            </>
          )}
        </List>
      </StyledContainer>
      <FormDialog />
    </div>
  )
}

export default Home
