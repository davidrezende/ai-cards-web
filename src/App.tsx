import './App.css'
import { Theme, Button } from 'react-daisyui'
import { FooterCopyright } from './components/FooterCopyright'
import { NavbarApp } from './components/NavBarApp'
import { HomeBox } from './components/HomeBox'

function App() {

  return (
    <>
    <Theme dataTheme="dark">
      <NavbarApp></NavbarApp>
      <HomeBox></HomeBox>
      <FooterCopyright></FooterCopyright>
    </Theme>
    </>
  )
}

export default App
