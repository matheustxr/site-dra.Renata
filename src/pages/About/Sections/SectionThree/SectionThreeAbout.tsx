import lines from '../../../../assets/images/Home/lines.png'
import renata from '../../../../assets/images/About/renata-sobre.webp'

export default function SectionThreeAbout() {
    return (
        <section className="bg-[#fbf8e7] pb-20">
            <div className=' conainer px-5 mx-auto flex flex-col md:flex-row justify-center gap-10'>
                <div className='pt-16 md:py-16 relative w-full flex justify-center '>
                    <img src={lines} alt="" className='absolute left-[-80px] lg:left-[-30px] top-0 w-32 xl:w-[200px] ' />
                    <div className='relative z-20 w-full md:w-[90%] lg:w-[80%] xl:w-[70%] '>
                        <img src={renata} alt="" className='w-full' />
                    </div>
                </div>

                <div className='w-full pb-10 md:pb-0'>
                    <div className='max-w-[600px] flex flex-col justify-center xl:justify-start lg:mt-20 gap-5'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='w-fit mb-2 font-title text-[60px] text-[#243977] '>
                                Sobre mim
                            </h1>
                            
                            <p>
                                Eu sou Renata Caldeira, médica geriatra e apaixonada pela minha
                                profissão e pelos idosos!
                            </p>

                            <p>
                                Em minha abordagem médica, acredito que o envelhecimento não deve
                                ser encarado como um fardo, mas sim como uma celebração da vidar da
                                maturidade e do conhecimento. Minha missão é proporcionar um
                                cuidado médico holístico e compassivo, valorizando a individualidade
                                de cada paciente e promovendo uma qualidade de vida plena e
                                significativa.
                            </p>

                            <p>
                                Estou aqui para oferecer suporte, compartilhar informações e ajudar a
                                todos que buscam viver uma vida saudável e feliz na terceira idade.
                            </p>

                            <ul className='p-4 pl-7 md:pl-10 font-semibold rounded-[20px] bg-[#dadada] list-disc'>
                                <li>Faculdade de Medicina Vale do Aço - Ipatinga MG</li>
                                <li>Residência Clínica Médica - Hospital Socor Belo Horizonte MG</li>
                                <li>Residência Geriatra Hospital Mater Dei</li>
                                <li>Titulo de especialista de Geriatra SBGG</li>
                                <li>Mestrado de Ensino Saúde Unifenas MC</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}