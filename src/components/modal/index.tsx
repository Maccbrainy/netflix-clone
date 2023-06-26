import { ReactNode } from 'react'
import ReactDOM from "react-dom";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
interface Props {
    children?:ReactNode
  }
const AppItemSummary = ({children}:Props) => {
    return(
        <div className='absolute overflow-y-auto z-30 h-auto top-[450px]'>
          {children}
        </div>
    )
}
const AppModal = ({children}:Props) => {
    const navigate = useNavigate();
    let navigateBack = (event: { stopPropagation: any; }) => {
        event.stopPropagation();
        navigate(-1);
    }
    return(
        <div onClick={navigateBack} className='fixed w-full h-screen overflow-y-auto bg-[#14141467] top-0 right-0 left-0 bottom-0 z-40'>
            <div className='relative w-[68%]
                h-auto
                bg-[#141414]
                shadow-lg
                top-8
                mx-auto
                pb-2
                overflow-y-auto
                rounded-md'>
                <button onClick={navigateBack} title='close' type='button' className='absolute right-0 rounded-full bg-[#141414] p-px m-4 w-9 h-9 flex justify-center items-center z-10 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-gray-200'>
                    <HiOutlineX className='w-6 h-6 text-white'/>
                </button>
            {children}
          </div>
        </div>
    )
}
export const PortalModal = ({children}: Props) => {
    return ReactDOM.createPortal(<AppModal children={children}/>, document.getElementById('modal-root') as HTMLElement)
}
export const SummaryModal = ({children}: Props) => {
    return ReactDOM.createPortal(<AppItemSummary children={children}/>, document.getElementById('modal-root') as HTMLElement)
}