import Tab from './Tab'
import Link from 'next/link'
const IndexMain = () => {
    return (
        <>
            <div className='flex-grow my-2'>

                <div className='flex items-center flex-wrap justify-center'>
                    <Tab />

                    <div className='mobile:bg-gray-200 mobile:bg-opacity-25 tablet:bg-white'>
                        <p className='m-12 font-serif text-8xl items-center'>
                            Happy Hacking Life!
                    </p>
                        <p className='m-12 font-serif text-xl'>
                            Thank you for visiting my site.
                    </p>
                    </div>
                </div>

                <div className='flex items-center flex-wrap justify-center py-10'>
                    <Link href='/about'>
                        <div className='mx-24 p-5 hover:bg-gray-200 cursor-pointer'>
                            <p className='py-2 font-serif text-4xl border-b-2 border-gray text-center'>About</p>
                            <p className='text-center font-serif py-5 text-base'>Profile,<br />carrer,etc.</p>
                        </div>
                    </Link>
                    <Link href='/todo'>
                        <div className='mx-24 p-5 hover:bg-gray-200 cursor-pointer'>
                            <p className='block py-2 font-serif text-4xl border-b-2 border-gray text-center'>what I work on.</p>
                            <p className='text-center font-serif py-5 text-base'>My favorite things.</p>
                        </div>
                    </Link>
                    <Link href='publish'>
                        <div className='mx-24 p-5 hover:bg-gray-200 cursor-pointer'>
                            <p className='block py-2 font-serif text-4xl border-b-2 border-gray text-center'>Publish</p>
                            <p className='text-center font-serif py-5 text-base'>Article I publish.</p>
                        </div>
                    </Link>
                </div>
                
            </div>
        </>

    )
}

export default IndexMain
