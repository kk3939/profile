const Footer = () => {
  return (
    <footer className='flex justify-center py-10 px-10 items-center bg-gray-100 bg-opacity-25'>
      <div className='justify-center'>
        <div className='text-center py-2'>
          <p className='block border-b-2 m-1 border-gray text-xl font-serif'>SNS</p>
          <a href="https://www.instagram.com/kyo9bo/?hl=ja" className='block font-serif py-1 hover:underline'>Instagram</a>
          <a href="https://twitter.com/kyo9bo" className='block font-serif py-1 hover:underline'>Twitter</a>
          <a href="https://www.facebook.com/kyousuke.kubo.7" className='block font-serif py-1 hover:underline'>Facebook</a>
          <a href="https://qiita.com/kyo51310" className='block font-serif py-1 hover:underline'>Qiita</a>
          <a href="https://zenn.dev/kyo9bo" className='block font-serif py-1 hover:underline'>Zenn.</a>
          <a href="https://github.com/kk3939" className='block font-serif py-1 hover:underline'>Github</a>
        </div>
        <p className='text-center font-serif text-base py-2'>&copy; 2021 Kyosuke Kubo</p>
      </div>
    </footer>
  )
}

export default Footer