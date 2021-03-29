const Footer = ({ showSns, setshowSns }) => {
  return (
    <footer className='flex justify-center py-10 px-10 items-center bg-gray-100 bg-opacity-25'>
      <div className='justify-center'>
        <div className='text-center py-2'>
          <p className='block border-b-2 m-1 border-gray text-xl font-serif'>SNS</p>
          <p className='font-serif py-1'>insta</p>
          <p className='font-serif py-1'>twitter</p>
          <p className='font-serif py-1'>facebook</p>
          <p className='font-serif py-1'>qiita</p>
          <p className='font-serif py-1'>zenn.</p>
        
        </div>
        <p className='text-center font-serif text-base py-2'>&copy; 2021 Kyosuke Kubo</p>
      </div>
    </footer>
  )
}

export default Footer