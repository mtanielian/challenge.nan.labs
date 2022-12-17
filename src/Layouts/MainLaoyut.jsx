import { Grid } from "@mui/material"
import MenuBar from "../components/MenuBar"

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

export default MainLayout