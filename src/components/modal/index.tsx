import { ReactNode } from 'react'
import ReactDOM from "react-dom";
import { HiOutlineX } from "react-icons/hi";
interface Props {
    children?:ReactNode
  }
const AppModal = ({children}:Props) => {
    return(
        <div className='fixed w-full h-screen overflow-y-auto bg-[#14141467] top-0 right-0 left-0 z-30'>
            <div className='relative w-8/12
                h-auto
                bg-[#141414]
                shadow-lg
                top-8
                mx-auto
                pb-2
                overflow-y-auto
                rounded-md'>
                <span className='absolute right-0 rounded-full bg-[#141414] p-px m-4 w-9 h-9 flex justify-center items-center z-10 cursor-pointer'><HiOutlineX className='w-6 h-6 text-white'/></span>
            {children}
          </div>
        </div>
    )
}
const PortalModal = ({children}: Props) => {
    return ReactDOM.createPortal(<AppModal children={children}/>, document.getElementById('modal-root') as HTMLElement)
}
export default PortalModal;