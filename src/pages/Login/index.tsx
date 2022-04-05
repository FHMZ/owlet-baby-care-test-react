import { CssBaseline, Typography } from '@mui/material'
import React from 'react'
import { Copyright } from '../../components/Box'
import { GridCenter, GridCenterColumn } from '../../components/Grid'
import Form from './components/Form'
import { StyledAccountIcon, StyledCard } from './styles'

const Login: React.FC = () => {
  return (
    <GridCenter>
      <CssBaseline />
      <StyledCard item xs={12} sm={8} md={4}>
        <GridCenterColumn>
          <StyledAccountIcon />
          <Typography variant="h5">Login</Typography>
          <Typography variant="caption">Owlet Baby Care Test</Typography>
        </GridCenterColumn>
        <Form />
        <Copyright />
      </StyledCard>
    </GridCenter>
  )
}

export default Login
