import { Grid, GridItem } from '@chakra-ui/react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import PrivacyPolicy from './PrivacyPolicy'

export default function App() {
  return (
    <Grid
      templateAreas='"header header" "nav main" "nav footer"'
      gridTemplateRows='0.25fr 1fr 30px' // header + content + footer heights
      gridTemplateColumns='0.25fr 1fr' // nav + content widths
      h='100vh'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        Burned Blossoms
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='privacy'>Privacy</Link>
            </li>
          </ul>
        </nav>
      </GridItem>
      <GridItem pl='2' bg='white' area={'main'} style={{ overflowY: 'scroll' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='privacy' element={<PrivacyPolicy />} />
        </Routes>
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  )
}
