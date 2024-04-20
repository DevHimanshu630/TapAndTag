

import "../Css/home.css"
import Main from '../Components/Main';
import Cart from '../Components/Cart';
import ScanCart from './ScanCart';
import VisitCart from './VisitCart';
import cart from "../Images/Frame.png"
// import scan from "../Images/scan 1.svg"
import DeginationCard from './DeginationCard';
import DigitalCard from './DigitalCard';
import Navbar from './Navbar';
import Footer from "./Footer";

const Home = () => {
    // State variables to manage scroll behavior



    const mymenu = {
        imageUrl: cart,
        heading: "No more clumsy stacks of paper,",
        heading1: "a mere tap on your smartphone.",
        paragraph: "For people who want to make a great first impression. Tap and share your contact details, gather leads and connect to over 5,000 apps and CRM tools."
    };

    const mymenusec = {
        imageUrl: "scan",
        heading: "Unlock the untapped potential",
        paragraph: "an eco-friendly innovation poised to revolutionize networking and information exchange."
    };


    return (
        <div>
            <Navbar />
            <div
                style={{
                    padding: '0px 0px 00px',
                    marginTop: '100px',
                }}
            >
                <Main />
                <Cart />
                <ScanCart img={mymenusec.imageUrl} menuheading={mymenusec.heading} menusubheading={mymenusec.paragraph} />
                <VisitCart />
                <ScanCart img={mymenu.imageUrl} menuheading={mymenu.heading} menusubheading={mymenu.paragraph} menusubheading1={mymenu.heading1} />
                <DeginationCard />
                <DigitalCard />
                <Footer />
            </div>
        </div>
    );
};
export default Home;