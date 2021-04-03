import '../styles/globals.css'
import nprogress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { useEffect } from 'react'

nprogress.configure({ showSpinner: true, speed: 400, minimum: 0.25 })
function MyApp({ Component, pageProps }) {
   
    if (process.browser) {
        nprogress.start()
    }

    useEffect(() => {
        nprogress.done()
    })

    return <Component {...pageProps } />
}

export default MyApp