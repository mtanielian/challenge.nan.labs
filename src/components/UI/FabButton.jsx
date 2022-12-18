import PropTypes from 'prop-types'
import { Fab } from '@mui/material'

const FabButton = ({ 
  title = '', icon = '', handleClick = () => {},
  variant = "extended", color = 'primary',  style = {}
}) => {
  
  return (
    <Fab 
      onClick={handleClick} 
      variant={variant} 
      color={color} 
      aria-label={title}
      sx={style}
    >
      {title}
      {icon}
    </Fab> 
  )
}

FabButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  handleClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default FabButton