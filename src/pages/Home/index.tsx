import { Grid, List, Toolbar } from '@mui/material'
import React from 'react'
import FormDialog from '../../components/Dialog'
import Header from '../../components/Header'
import PhoneBookListItem from '../../components/ListItem'
import { useAppContext } from '../../providers'
import { StyledContainer, StyledTitle } from './styles'

const Home: React.FC = () => {
  const { phoneBookList } = useAppContext()

  return (
    <div>
      <Header />
      <Toolbar />
      <StyledContainer>
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
