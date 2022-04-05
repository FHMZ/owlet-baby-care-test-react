import { Grid } from '@mui/material'
import React from 'react'
import { StyledGridCenter } from './styles'

interface Props {
  children?: React.ReactNode
}

export const GridCenter: React.FC<Props> = ({ children }) => (
  <StyledGridCenter container justifyContent="center" alignItems="center">
    {children}
  </StyledGridCenter>
)

export const GridCenterColumn: React.FC<Props> = ({ children }) => (
  <Grid
    item
    container
    justifyContent="center"
    direction="column"
    alignItems="center"
  >
    {children}
  </Grid>
)
