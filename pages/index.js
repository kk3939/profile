
import Navigation from '../components/Navigation'
import IndexMain from '../components/IndexMain'
import Footer from '../components/Footer'
import {useState} from 'react'

const Home = () => {
    const [showSns, setshowSns] = useState(false)
    console.log(showSns);
    return (
        <>
            <div>
                <Navigation />
                <div className='flex flex-col min-h-screen'>
                    <IndexMain />
                    <Footer showSns={showSns} setshowSns={() => setshowSns(!showSns)} />
                </div>

            </div>
        </>
    )
}


export default Home