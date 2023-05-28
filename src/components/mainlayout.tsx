import { ReactElement, ReactNode } from "react"
import Footer from "./footer"
import Header from "./header"

interface mainlayoutprops {
    children: ReactNode
}

const MainLayout = ({ children }: mainlayoutprops): ReactElement => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout;