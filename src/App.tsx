import './App.css'
import { Theme } from 'react-daisyui'
import { FooterCopyright } from './components/FooterCopyright'
import { NavbarApp } from './components/NavbarApp'
import { CreateCardScreen } from './pages/CreateCardScreen'
import { HomeScreen } from './pages/HomeScreen'

function App() {

  return (
    <>
    <Theme dataTheme="dark">
      <NavbarApp></NavbarApp>
      <HomeScreen></HomeScreen>
      {/*<CreateCardScreen></CreateCardScreen>*/}
      <FooterCopyright></FooterCopyright>
    </Theme>
    </>
  )
}

export default App
