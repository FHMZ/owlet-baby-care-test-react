import KeyOffRoundedIcon from '@mui/icons-material/KeyOffRounded'
import KeyRoundedIcon from '@mui/icons-material/KeyRounded'
import MuiIconButton from '@mui/material/IconButton'
import React from 'react'

interface IPasswordIconProps {
  visible: boolean
}

interface IPasswordIconButtonProps {
  onClick: () => void
  isVisible: boolean
}

const PasswordIcons: React.FC<IPasswordIconProps> = ({ visible }) => (
  <>
    {visible ? (
      <KeyRoundedIcon fontSize="small" />
    ) : (
      <KeyOffRoundedIcon fontSize="small" />
    )}
  </>
)

const PasswordIconButton: React.FC<IPasswordIconButtonProps> = ({
  onClick,
  isVisible,
}) => (
  <MuiIconButton edge="end" onClick={onClick}>
    <PasswordIcons visible={isVisible} />
  </MuiIconButton>
)

export default PasswordIconButton
