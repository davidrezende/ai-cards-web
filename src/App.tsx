import './App.css'
import { Theme } from 'react-daisyui'
import { FooterCopyright } from './components/FooterCopyright'
import { NavbarApp } from './components/NavbarApp'
import { HomeScreen } from './pages/HomeScreen'
import cardimg from './assets/pote.jpg';
import { CreateCardScreen } from './pages/CreateCardScreen'

function App() {

  return (
    <>
      <Theme dataTheme="dark">

        <body className='bg-cover bg-fixed bg-center flex flex-col min-h-screen' style={{ backgroundImage: `url(${cardimg})` }}>
          <NavbarApp></NavbarApp>
          {/* {<HomeScreen></HomeScreen>} */}
          <CreateCardScreen></CreateCardScreen>
          <FooterCopyright></FooterCopyright>
        </body>


      </Theme>
    </>
  )
}

export default App
