const Footer = () => {
  const snsArray = [
    {id: 1 ,name:'Instagram',link: 'https://www.instagram.com/kyo9bo/?hl=ja'},
    {id: 2 ,name:'Twitter',link: 'https://twitter.com/kyo9bonnn'},
    {id: 3 ,name:'Facebook',link: 'https://www.facebook.com/kyousuke.kubo.7'},
    {id: 4 ,name:'Qiita',link: 'https://qiita.com/kyo51310'},
    {id: 5 ,name:'Zenn.',link: 'https://zenn.dev/kyo9bo'},
    {id: 6 ,name:'Github',link: 'https://github.com/kk3939'},
    {id: 6 ,name:'note',link: 'https://note.com/kyo9bo_note'},
  ]

  return (
    <footer className='flex justify-center py-10 px-10 items-center bg-gray-100 bg-opacity-25'>
      <div className='justify-center'>
        <div className='text-center py-2'>
          <p className='block border-b-2 m-1 border-gray text-xl font-serif'>SNS</p>
          {
            snsArray.map((sns) =>
              <a key={sns.id} href={sns.link} className='block font-serif py-1 hover:underline'> 
                {sns.name}
              </a>
            )
          }
        </div>
        <p className='text-center font-serif text-base py-2'>&copy; 2021 Kyosuke Kubo</p>
      </div>
    </footer>
  )
}

export default Footer