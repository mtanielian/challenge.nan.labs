import PropTypes from 'prop-types'
import MenuBar from '../components/menu/MenuBar'
import { Grid } from '@mui/material'
import './style.css'

const MainLayout = ({ children }) => {
  return (
    <Grid container style={{ height: '100%', minHeight: '100vh' }}>
      <Grid className='sidebar' style={{ flex: 1, maxWidth: 380 }} >
        <MenuBar />
      </Grid>
      <Grid item style={{ flex: 2 }}>
        <main style={{
          margin: '100px auto',
          padding: '0px 30px',
          position: 'relative',
          height: '80%'
        }}>
          {children}
        </main>
      </Grid>
    </Grid>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout