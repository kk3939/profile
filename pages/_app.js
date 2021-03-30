import '../styles/globals.css'
import nprogress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
    if (process.browser) {
        // バーの表示開始
        nprogress.start()
    }
    useEffect(() => {
        // バーの表示終了
        nprogress.done()
    })

    return <Component {...pageProps }
    />
}

export default MyApp