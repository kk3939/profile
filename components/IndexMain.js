import Image from 'next/image';

const IndexMain = () => {
    return (
        <>
        <div className='flex-grow my-2'>

            <div className='flex items-center flex-wrap justify-center'>
                <div className='relative'>
                    <Image src="/DSC00722.jpg" width="600" height="400" className='bg-cover' loading="eager" />
                    <nav className='flex justify-end absolute top-2 right-0 text-white'>
                        <ul className='flex'>
                            <li className='block m-3 font-serif text-base border-b-2 border-white cursor-pointer'>
                                About
                            </li>
                            <li className='block m-3 font-serif text-base border-b-2 border-white cursor-pointer'>
                                To do
                            </li>
                            <li className='block m-3 font-serif text-base  border-b-2 border-white cursor-pointer'>
                                Publish
                            </li>
                        </ul>
                    </nav>
                </div>

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
                <div className='mx-24 p-5 hover:bg-gray-200 cursor-pointer'>
                    <p className='py-2 font-serif text-4xl border-b-2 border-gray text-center'>About</p>
                    <p className='text-center font-serif py-5 text-base'>Profile,<br/>carrer,etc.</p>
                </div>
                <div className='mx-24 p-5 hover:bg-gray-200 cursor-pointer'>
                    <p className='block py-2 font-serif text-4xl border-b-2 border-gray text-center'>To do</p>
                    <p className='text-center font-serif py-5 text-base'>what I work on.</p>
                </div>
                <div className='mx-24 p-5 hover:bg-gray-200 cursor-pointer'>
                    <p className='block py-2 font-serif text-4xl border-b-2 border-gray text-center'>Publish</p>
                    <p className='text-center font-serif py-5 text-base'>Article I publish.</p>
                </div>
            </div>
        </div>
        </>

    )
}

export default IndexMain
