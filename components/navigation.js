import Image from 'next/image';

const Navigation = () => {
  return (
    <>
    <header className='flex items-center  flex-wrap justify-center'>
      <Image src="/myLogo.png" width="60" height="60" />
      <div className='my-5 mx-5 py-2 border-b-2 border-black'>
        <p className='font-serif text-3xl'>Kyosuke Kubo</p>
      </div>
    </header>
    <nav className='flex justify-end'>
      <ul className='flex'>
        <li className='block p-3 font-serif text-sm hover:underline'>
          About
        </li>
        <li className='block p-3 font-serif text-sm hover:underline'>
          To do
        </li>
        <li className='block p-3 font-serif text-sm hover:underline'>
          Publish
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navigation
