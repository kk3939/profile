import React from 'react'
import Navigation from '../components/navigation'
import Tab from '../components/Tab'
import Footer from '../components/Footer'
export const todo = () => {
    return (
        <>
            <Navigation />

            <div className='flex items-center justify-center py-5 '>
                <Tab />
            </div>

            <div className='flex items-center justify-center pt-5 pb-1'>
                <div className='mx-24 p-2'>
                    <p className='block font-serif text-4xl border-b-2 border-gray text-center'>what I work on.</p>
                </div>
            </div>

            <div className='flex items-center flex-wrap justify-center py-5 px-10'>
                <div className='py-2 px-8'>
                    <p className='py-2 px-5 font-serif text-xl text-center'>Programing</p>
                    <p className='text-left px-5 font-serif py-1 text-sm'>
                        大学1年生（2017）にプログラミングに初めて触れて以来、研鑽してまいりました。
                        アプリ開発が好きでwebアプリのサーバーサイド、フロントエンド、ネイティブアプリ開発と幅広く経験しました。
                        従って、包括的な知識が強みです。<br/><br/>
                        インターン経歴ですが、人材系事業会社、教育系IT企業の両方でエンジニアとして経験させていただきました。
                        主にwebのサーバーサイド7割、その他コーディング作業3割といった具合です。<br/><br/>
                        使用したことのある言語（技術）は Node.js, React.js, Next.js, Firebase, Firestore, Flutter, Dart, Ruby, Rails, PHP, GAS
                        になります。
                    </p>
                    <a href="https://github.com/kk3939" className='block text-center px-5 font-serif py-1 text-sm underline'>
                        Githubはこちら
                    </a>
                </div>

                <div className='py-2 px-8'>
                    <p className='py-1 px-5 font-serif text-xl text-center'>Camera</p>
                    <p className='text-center px-5 font-serif py-1 text-sm'>
                        大学4年前期（2020）に初めてカメラに触れました。
                        写真を撮ることで今見ている世界を正しく捉えられる、本来の「カタチ」が見えたような感覚が得られることからのめり込みました。
                        機材はSony a6400にSIGMA f1.4 16mmをメインで使っています。
                    </p>
                    <a href="https://www.instagram.com/kyo9bo/?hl=ja" className='block text-center px-5 font-serif text-sm underline'>
                        Instagramはこちら
                    </a>
                </div>
                
                <div className='py-2 px-8'>
                    <p className='py-1 px-5 font-serif text-xl text-center'>Training</p>
                    <p className='text-center px-5 font-serif py-1 text-sm'>
                        筋トレ歴約1年半で、主にウェイトトレーニングに取り組んでいます。<br/><br/>
                        2021年3月のMax記録ですが、BP95kg,DL150kg,SQ160kgです。<br/><br/>
                        ※身長175cm,体重68kg
                    </p>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default todo