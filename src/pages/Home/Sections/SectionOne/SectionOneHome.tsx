import balao from '../../../../assets/images/Home/balao.svg'
import renata from '../../../../assets/images/Home/renata.webp'
import Header from '../../../../components/Header/Header'
import ModalVideo from '../../../../components/ModalVideo/ModalVideo'

export default function SectionOneHome(){
    return ( 
      <>
        <section className="bg-banner ">
          <Header />

          <div className="relative conteiner mx-auto px-5 flex flex-col md:flex-row justify-center">

            <div className='max-w-[600px] flex flex-col  gap-6 md:pb-10'>
              <h1 className='font-title text-[70px] md:text-[90px] lg:text-[130px] text-[#ffd892] '>
                Saúde & Bem-estar
              </h1>
              <h3 className='text-xl font-semibold !text-white'>Transformando a terceira na melhor idade</h3>
              <p className=' !text-white'>
                A geriatria vai além de tratamentos médicos convencionais - é sobrenutrir a mente, o
                corpo e o espírito dos nossos idosos.
              </p>

              <div className='flex flex-col md:flex-row gap-5 md:gap-10 '>
                <a 
                  target='_blank'
                  href='https://wa.me/5534992075771?text=Ol%C3%A1%21+Vim+pelo+Site+e+gostaria+de+marcar+uma+consulta'
                  className='w-fit px-5 py-2 text-[#1d3273] bg-[#fbf8e7]  font-black rounded-3xl '
                >
                  Fale conosco
                </a>

                <ModalVideo />
              </div>
            </div>

            <div className='flex mt-5 md:mt-0'>
              <img src={renata} alt="" className='w-full' />
            </div>
            
            <a 
              href="https://www.instagram.com/dra.renatacaldeira/" 
              target="_blank" 
            >
              <img 
                src={balao} 
                alt="" 
                className='absolute bottom-[-50px] md:bottom-0 md:right-0 lg:right-[10%] xl:right-[30%] '
              />
            </a>
            
          </div>
        </section>
      </>
    )
}