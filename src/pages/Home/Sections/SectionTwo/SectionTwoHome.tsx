import lines from '../../../../assets/images/Home/lines.png'
import idosa from '../../../../assets/images/Home/idosa.webp'
import Button from '../../../../components/Button/Button'

export default function SectionTwoHome(){
    return (
        <section className="bg-[#fbf8e7] ">
            <div className='pt-14 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-center'>
                <div className='py-16 relative w-full flex justify-center '>
                    <img src={lines} alt="" className='absolute left-[-20px] md:left-[-10px] lg:left-0 top-0 w-32 xl:w-[200px] ' />
                    <img src={idosa} alt="" className='w-[70%] xl:w-auto ' />
                </div>

                <div className='px-5 md:px-0 w-full pb-10 md:pb-0'>
                    <div className='max-w-[600px] flex flex-col justify-center xl:justify-start lg:mt-20 gap-5'>
                        <div className=''>
                            <h1 className='w-fit p-2 font-title text-[38px] lg:text-[48px] xl:text-[60px] text-[#ffd892] bg-[#243977]'>
                                SUA JORNADA 
                            </h1>
                            <h1 className='w-fit p-2 font-title text-[38px] lg:text-[48px] xl:text-[60px] text-[#ffd892] bg-[#243977]'>
                                É NOSSO 
                            </h1>
                            <h1 className='w-fit p-2 font-title text-[38px] lg:text-[48px] xl:text-[60px] text-[#ffd892] bg-[#243977]'>
                                COMPROMISSO
                            </h1>
                        </div>
                        

                        <p>
                            Junte-se a nós nessa jornada para uma terceira idade mais
                            vibrante, ativa e saudável!
                        </p>

                        <span className="font-semibold">
                            Agende sua consulta e descubra como podemos ajudá-lo(a).
                        </span>

                        <Button />
                    </div>
                </div>
            </div>
        </section>
    )
}