import { Button, Grid, List, Toolbar, Tooltip } from '@mui/material'
import React from 'react'
import FormDialog from '../../components/Dialog'
import Header from '../../components/Header'
import PhoneBookListItem from '../../components/ListItem'
import { useAppContext } from '../../providers'
import { StyledContainer, StyledTitle } from './styles'

const Home: React.FC = () => {
  const { phoneBookList, openDialog, handleShowDialog } = useAppContext()

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
                  Phone Book list is empty...
                </StyledTitle>
              </Grid>
              <Grid container justifyContent="center">
                <Tooltip title="Add New Phone Book">
                  <Button
                    variant="text"
                    size="medium"
                    onClick={handleShowDialog}
                  >
                    Add New
                  </Button>
                </Tooltip>
              </Grid>
            </>
          )}
        </List>
      </StyledContainer>
      <FormDialog onShowDialog={handleShowDialog} open={openDialog} />
    </div>
  )
}

export default Home
