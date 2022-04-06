import { Grid, styled, Typography } from '@mui/material'

export const StyledContainer = styled(Grid)(() => ({
  backgroundColor: '#fff',
}))

export const StyledTitle = styled(Typography)(({ theme }) => ({
  backgroundColor: '#fff',
  margin: theme.spacing(2, 0, 1, 2),
}))

export const StyledSearchWrapper = styled('div')(({ theme }) => ({
  margin: theme.spacing(0, 2, 4, 2),
}))
