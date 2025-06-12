import MainPage from './Mainpage.jsx'
import Bottomcards from './Bottomcards.jsx'
import Languages from './Languages.jsx'
import Lang from './Lang.jsx'
import Reach from './Reach.jsx'
import Three from './Three.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
export default function Homepage(){
    return(
        <>
        <Navbar />
        <MainPage/>
        <Three/>
        <Bottomcards/>
        <Lang/>
        <Languages/>
        <Reach/>
        <Footer/>
        </>
    )
}