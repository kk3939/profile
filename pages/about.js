import React from 'react'
import Navigation from '../components/navigation'
import Image from 'next/image'
import Tab from '../components/Tab'
import Footer from '../components/Footer'

const about = () => {
    return (
        <>
            <Navigation />
            <div className='flex items-center flex-wrap justify-center py-5 '>
                <Tab />
            </div>
            <div className='flex items-center justify-center pt-5 pb-1'>
                <div className='mx-24 p-2'>
                    <p className='block font-serif text-4xl border-b-2 border-gray text-center'>About</p>
                </div>
            </div>
            <div className='my-10 mx-5 flex items-center flex-wrap justify-center'>
                    <Image src={"/pinPicture.jpg"} width={'200'} height={'266'} className='rounded-full' priority={true} />
                    <div className='justify-center'>
                        <p className='pt-5 pb-2 px-2 text-center text-xl font-serif'>
                            名前 : 久保 京介
                        </p>
                        <p className='text-left py-1 px-10 text-sm font-serif'>
                            生まれ :   千葉
                        </p>
                        <p className='text-left py-1 px-10 text-sm font-serif'>
                            出身 : 横浜市、現在は湘南在住
                        </p>
                        <p className='text-left py-1 px-10 text-sm font-serif'>
                            出身大学 : 早稲田大学商学部（経済トラック）
                        </p>
                        <p className='text-left py-1 px-10 text-sm font-serif'>
                            スキル :  プログラミング
                        </p>
                        <p className='text-left py-1 px-10 text-sm font-serif'>
                            趣味 : ギター、筋トレ、読書、ラジオ、お笑い、カメラ
                        </p>
                    </div>

                </div>
            <Footer />
        </>
    )
}

export default about
