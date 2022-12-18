import PropTypes from 'prop-types';
import MenuBar from '../components/menu/MenuBar'
import { Grid } from "@mui/material"


const MainLayout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <MenuBar />
      </Grid>
      <Grid item xs={8}>
      <main style={{
        margin: '100px auto',
        maxWidth: '1440px',
        padding: '0px 30px',
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