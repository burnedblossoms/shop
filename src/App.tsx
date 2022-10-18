import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'

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
        Header
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        Main
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  )
}
