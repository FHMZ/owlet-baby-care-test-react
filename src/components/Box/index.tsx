import { Box, Link, Typography } from '@mui/material'
import React from 'react'

export const Copyright = () => (
  <Box mt={4}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">Owlet</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Box>
)
