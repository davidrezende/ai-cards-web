import './App.css'
import { Theme } from 'react-daisyui'
import cardimg from './assets/background-home.jpg';

function App() {

  return (
    <>
      <Theme dataTheme="dark">
        <body className='bg-cover bg-fixed bg-center flex h-screen min-h-screen ' style={{ backgroundImage: `url(${cardimg})` }}>
          <div className='m-auto'>
            {/* <body className='bg-cover bg-fixed bg-center flex flex-col min-h-screen'> */}
            {/* <NavbarApp></NavbarApp> */}
            {/* {<HomeScreen></HomeScreen>} */}
            {/* <CreateCardScreen></CreateCardScreen> */}
          </div>
        </body>
      </Theme>
    </>
  )
}

export default App
