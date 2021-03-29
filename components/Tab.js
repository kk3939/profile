import Image from 'next/image';

const Tab = () => {
    return (
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
    )
}

export default Tab