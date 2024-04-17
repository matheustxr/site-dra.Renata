

import banner from '../../../../assets/images/banner-evento.webp'
import Header from '../../../../components/Header/Header'

export default function SectionOneCelebre(){
    return ( 
      <>
        <section className="bg-[#1d3273] ">
          <Header />
          <img src={banner} alt="" className='w-full' />
        </section>
      </>
    )
}