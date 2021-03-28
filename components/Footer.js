const Footer = ({setshowSns}) => {
    return (
        <footer className='flex  tablet:justify-between mobile:justify-center laptop:justify-start py-20 px-10 
        items-center bg-gray-200 bg-opacity-25'>
            
            <p className='p-2'>
                &copy; 2021 Kyosuke Kubo
            </p>

            <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={setshowSns}
      >
        SNS
      </button>
        </footer>
    )
}

export default Footer