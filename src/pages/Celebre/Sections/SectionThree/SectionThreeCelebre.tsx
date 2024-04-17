import banner from '../../../../assets/images/banner-evento2.webp'
import Button from '../../../../components/Button/Button'

export default function SectionThreeCelebre(){

    return (
        <section className="bg-[#fbf8e7] pb-24">
            <div className="px-5 md:px-16 xl:px-28 flex flex-col items-center gap-5 ">
                <img src={banner} alt="" />

                <div className='max-w-[990px] mt-5 flex flex-col gap-5'>
                    <p>
                        O projeto "Celebre a Idade" surgiu com a necessidade de desafiarpreconceitos e estereótipos relacionados
                        ao envelhecimento ecelebrar a riqueza que cada ano nos traz. E um convite para celebrara maturidade,
                        destacando a sabedoria, a experiência e a vitalidadeque os anos nos proporcionam.
                    </p>

                    <p>
                        Paraconcretizar essa missão, realizaremos anualmente o grande evento"Celebre a Idade". Um momento d
                        elebraçao, aprendizado econexào, reunindo idosos e suas famílias.
                    </p>

                    <p>
                        Contaremoscom atrações artísticas, palestras enriquecedoras e rodas deconversa, em parceria com outros
                        profissionais da saúde, comonutricionistas, psicólogos, educadores físicos, fisioterapeutastentre outros.
                    </p>

                    <p>
                        Junte-sea nós nessa jornada de celebração da vida e fiquem atentos que, embreve, teremos mais
                        informações!
                    </p>
                </div>

                <div className='max-w-[990px] mt-20 flex flex-col md:flex-row gap-10'>
                    <div className='w-full'>
                        <h1 className='font-title text-[40px] md:text-[60px]  text-[#1d3273] uppercase'>
                            PROMOVA <br className='hidden md:block' />
                            UMA VIDA ATIVA <br className='hidden md:block' />
                            E SAUDÁVEL!
                        </h1>
                    </div>
                    <div className='w-full md:w-[65%] flex flex-col justify-between gap-5'>
                        <p className='p-3 font-bold bg-[#d9d9d9] rounded-2xl'>
                            Com o auxílio de profissionais, unindo as
                            diversas áreas da saúde, você pode promover
                            um envelhecimento mais pleno e completo.
                        </p>

                        <Button />
                    </div>
                </div>

            </div>
        </section>
    )
}