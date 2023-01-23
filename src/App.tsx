import { ReactNode, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changeNavBarBgColor } from './reducers/headerEventsOnScroll/changeNavBarBgOnScrollSlice';
import { stickySubHeader } from './reducers/headerEventsOnScroll/stickySubHeaderToTheTopSlice';

interface Props {
  children?:ReactNode
  // any props that come into the component
}

function App({children}:Props) {
  const dispatch = useDispatch();
  const [isStickyNavBar, setStickyNavBar] = useState<boolean>(false);
  const [isSubHeaderPin, setSubHeaderPin] = useState<boolean>(false);

  useEffect(() => {
    const pageScroll = () => {
      window.scrollY > 0 ? setStickyNavBar(true) : setStickyNavBar(false);
      window.scrollY > 76 ? setSubHeaderPin(true) : setSubHeaderPin(false);
    }
    window.addEventListener("scroll", pageScroll);

    return ()=> {
      window.removeEventListener("scroll", pageScroll);
    }
  },[])
  useEffect(() => {
    dispatch(changeNavBarBgColor(isStickyNavBar));
    dispatch(stickySubHeader(isSubHeaderPin));
  },[isStickyNavBar, isSubHeaderPin])

  return (
    <div className={`relative bg-[#141414] text-white w-full min-h-screen overflow-hidden`}>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default App

