import lines2 from '../../../../assets/images/Home/lines2.webp'

export default function SectionTwoCelebre(){
    return (
        <section className="py-20 md:py-0 md:pb-20 bg-[#fbf8e7] ">
            <div className="container relative px-5 lg:px-10 xl:px-20 mx-auto flex flex-col gap-10 md:gap-20 items-center justify-center">
                <div className='w-full hidden md:block'>
                    <img src={lines2} alt="" className='absolute md:right-[-20px] lg:right-5 top-5 w-22 md:w-28 xl:w-[180px] ' />
                </div>
                <div className="w-full md:w-[90%] relative z-50">
                    <iframe
                        className="w-full h-[200px] md:h-[515px] xl:h-[620px] rounded-3xl"
                        src="https://www.youtube.com/embed/W9tJcj3lqbc?si=-sbnu_L4gsjIldoe"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                </div>
            </div>
        </section>
    )
}