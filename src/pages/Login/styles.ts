import AccountIcon from '@mui/icons-material/AccountCircleOutlined'
import { Grid, styled } from '@mui/material'
import { MATERIAL_SHADOW } from '../../utils/constants'

export const StyledCard = styled(Grid)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(2),
  borderRadius: 10,
  boxShadow: MATERIAL_SHADOW,
}))

export const StyledAccountIcon = styled(AccountIcon)(({ theme }) => ({
  margin: theme.spacing(2),
  fontSize: theme.spacing(5),
}))
