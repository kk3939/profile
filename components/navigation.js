import Link from 'next/link'

const Navigation = () => {
  return (
    <header className='flex items-center flex-wrap justify-center'>
      <Link href='/'>
        <div className='my-5 mx-5 py-2 border-b-2 border-black'>
          <p className='font-serif text-3xl'>Kyosuke Kubo</p>
        </div>
      </Link>
    </header>
  )
}

export default Navigation
