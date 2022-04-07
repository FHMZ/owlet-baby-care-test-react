import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined'
import { Tooltip } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import FormDialog from '../../components/Dialog'
import { useAppContext } from '../../providers'
import { StyledChildFriendlyOutlinedIcon } from './styles'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const { handleOpenDialog } = useAppContext()
  const history = useHistory()

  function handleLogoutApp() {
    history.push('/login')
  }

  return (
    <MuiAppBar>
      <Toolbar>
        <StyledChildFriendlyOutlinedIcon />
        <Typography variant="h6" color="inherit">
          Owlet
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Tooltip title="Add New Phone Book">
            <IconButton
              edge="start"
              size="medium"
              color="inherit"
              onClick={handleOpenDialog}
            >
              <AddIcCallOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Logout">
            <IconButton
              size="medium"
              color="inherit"
              onClick={handleLogoutApp}
            >
              <LogoutOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
      <FormDialog />
    </MuiAppBar>
  )
}

export default Header
