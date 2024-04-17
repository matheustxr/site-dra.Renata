import banner from '../../../../assets/images/banner-especialidade.webp'
import Button from '../../../../components/Button/Button'

export default function SectionTwoEspecialidade(){
    return (
        <section className="mt-[100px] md:mt-[300px] mb-16">
            <div className="px-5 md:px-16 xl:px-28 flex flex-col items-center gap-5 ">
                <div>
                    <h1 className="font-title text-[40px] md:text-[70px] text-center text-[#1d3273] uppercase">
                        minha
                    </h1>
                    <h1 className="w-fit p-2 font-title text-[40px] md:text-[70px] text-[#ffd78f] uppercase bg-[#1d3273] ">
                        especialidade
                    </h1>
                </div>
                <img src={banner} alt="" />
                <div className='max-w-[980px] flex flex-col gap-5'>
                    <p>
                        A Geriatria é o ramo da medicina focado no cuidado integral dos idosos, abordando não apenas as
                        questões médicas, mas também sociais, emocionais e funcionais que afetam essa população. Seu
                        objetivo é promover o envelhecimento saudável e a qualidade devida, garantindo que os idosos possam
                        desfrutar ao máximo de suas vidas.
                    </p>

                    <p>
                        A importância da Geriatria reside na compreensão das necessidades únicas dos idosos, que muitas
                        vezes enfrentam uma série de desafios de saúde devido ao envelhecimento. Desde condições crônicas
                        até questões de mobilidade e saúde mental, os geriatras são especialistas treinados para lidar com uma
                        ampla gama de preocupações médicas que afetam os idosos.
                    </p>

                    <p>
                        O acompanhamento regular com um geriatra é fundamental para garantir uma abordagem holística e
                        personalizada para o cuidado dos idosos
                    </p>

                    <div className='mx-auto'>
                        <Button />
                    </div>

                    
                </div>

            </div>
        </section>
    )
}