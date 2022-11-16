import { ReactNode, useState } from 'react'
import NavBar from './components/header'

interface Props {
  children?:ReactNode
  // any props that come into the component
}

function App({children}:Props) {
  const [isStickyNavBar, setStickyNavBar] = useState(false);

  const changeNavBarBgColor = (event: {currentTarget: { scrollTop : number }}) => {
    event.currentTarget.scrollTop > 0 ? setStickyNavBar(true) : setStickyNavBar(false);
  };

  return (
    <div onScroll={changeNavBarBgColor} className='relative bg-[#141414] text-white w-full h-screen overflow-x-hidden overflow-y-auto'>
      <header>
        <NavBar changeBgOnScroll={isStickyNavBar}/>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default App
