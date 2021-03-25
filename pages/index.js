import Head from 'next/head'
import Navigation from '../components/Navigation'
import IndexMain from '../components/IndexMain'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <Navigation />
                <IndexMain />
                <Footer />
            </div>
        </>
    )
}


export default Home