
import Navigation from '../components/Navigation'
import IndexMain from '../components/IndexMain'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <div>
                <Navigation />
                <div className='flex flex-col min-h-screen'>
                    <IndexMain />
                    <Footer />
                </div>
            </div>
        </>
    )
}


export default Home