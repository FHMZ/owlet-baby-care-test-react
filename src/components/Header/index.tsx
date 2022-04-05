import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { Tooltip } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import FormDialog from '../../components/Dialog'
import { useAppContext } from '../../providers'
import {
  StyledChildFriendlyOutlinedIcon,
  StyledInputBase,
  StyledSearchIconWrapper,
  StyledSearchInput,
} from './styles'

const Header = () => {
  const { handleShowDialog, openDialog } = useAppContext()

  return (
    <MuiAppBar>
      <Toolbar>
        <StyledChildFriendlyOutlinedIcon />
        <Typography variant="h6" color="inherit">
          Owlet
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <StyledSearchInput>
          <StyledSearchIconWrapper>
            <SearchIcon />
          </StyledSearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </StyledSearchInput>
        <Box>
          <Tooltip title="Add New Phone Book">
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleShowDialog}
            >
              <AddIcCallOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
      <FormDialog onShowDialog={handleShowDialog} open={openDialog} />
    </MuiAppBar>
  )
}

export default Header
