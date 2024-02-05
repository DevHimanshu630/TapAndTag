import React from 'react'
import Navbar from '../Components/Navbar'
import Classic from '../Components/Classic'
import Tab from '../Components/Tab'
import ClassicCards from '../Components/ClassicCards'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'


function Product() {
    return (
        <>
            <Navbar />
            <div
                style={{
                    padding: '0px 0px 00px',
                    marginTop: '110px',
                }}
            >
                <Classic />
                <Tab />
                <Faq />
                <Footer />
            </div>

        </>
    )
}

export default Product
