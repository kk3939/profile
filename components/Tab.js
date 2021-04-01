import Image from 'next/image';
import Link from 'next/link'
const Tab = () => {
    return (
        <div className='relative'>
            <Image src="/DSC00722.jpg" width="600" height="400" className='bg-cover' loading="lazy" alt='湘南' />
            <nav className='flex justify-end absolute top-2 right-0 text-white'>
                <ul className='flex'>
                    <Link href='/about'>
                        <li className='block m-3 font-serif text-base border-b-2 border-white cursor-pointer hover:border-transparent'>
                            About
                        </li>
                    </Link>

                    <Link href='/todo'>
                        <li className='block m-3 font-serif text-base border-b-2 border-white cursor-pointer hover:border-transparent'>
                            what I work on
                        </li>
                    </Link>
                    {/* <Link href='/publish'>
                        <li className='block m-3 font-serif text-base border-b-2 border-white cursor-pointer hover:border-transparent'>
                            Publish
                        </li>
                    </Link> */}
                </ul>
            </nav>
        </div>
    )
}

export default Tab