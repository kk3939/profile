import Image from 'next/image'
import Link from 'next/link'
const Tab = () => {
    const pages = [
        { id: 1, link: '/about' ,displayName: 'about'},
        { id: 2, link: '/todo', displayName: 'what I work on' }
    ]
    return (
        <div className='relative'>
            <Image src="/DSC00722.jpg" width={600} height={400} className='bg-cover' priority={true}/>
            <nav className='flex justify-end absolute top-2 right-0 text-white'>
                <ul className='flex'>
                    {
                        pages.map((page) =>
                            <Link href={page.link} key={page.id}>
                                <li
                                    className='block m-3 font-serif text-base border-b-2 border-white cursor-pointer hover:border-transparent'>
                                    {page.displayName}
                                </li>
                            </Link>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Tab