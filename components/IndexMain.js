import Image from 'next/image';

const IndexMain = () => {
    return (
        <div className='bg-gray-200 bg-opacity-25 flex-grow my-2'>
            <div className='flex items-center flex-wrap justify-center'>
                <Image src="/umi.jpg" width="1200" height="800" className='bg-cover' />
                <div>
                    <p className='m-12 font-serif text-3xl '>
                        ITに関わる創作物（モノ）で生活を豊かに
                    </p>
                    <p className='m-12 font-serif text-xl '>
                        そんな想いを持って、
                        <br/>
                        好きなことに取り組んでいます。  
                    </p>
                </div>

            </div>
        </div>


    )
}

export default IndexMain
