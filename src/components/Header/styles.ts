import ChildFriendlyOutlinedIcon from '@mui/icons-material/ChildFriendlyOutlined'
import { styled } from '@mui/material/styles'

export const StyledChildFriendlyOutlinedIcon = styled(
  ChildFriendlyOutlinedIcon
)(({ theme }) => ({
  marginRight: theme.spacing(3),
  fontSize: theme.spacing(4),
}))
