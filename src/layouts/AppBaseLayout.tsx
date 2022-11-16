import { ReactNode } from "react"
interface Props {
    children?:ReactNode
    // any props that come into the component
}
const AppBaseLayout = ({children}:Props) => {
    return(
        <>
            <header></header>
            <main>{children}</main>
            <footer></footer>
        </>
    )
}
export default AppBaseLayout;