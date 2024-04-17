import React, { useState,  } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}



export default function ModalVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // COMPONENTE MODAL
  const Modal: React.FC<ModalProps> = ({ isOpen }) => {
  
    return (
      <>
        {isOpen && (
          <div className="pt-20 md:pt-12 fixed z-[10000] inset-0 bg-black bg-opacity-50 flex items-start justify-center">
            <div className=" w-[90%] max-w-[1600px] bg-[#d9d9d9] rounded-[30px]  ">
              <div className='w-full'>
                <div 
                  className='absolute right-5 top-10 md:top-5  cursor-pointer'
                  onClick={closeModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 md:w-10 h-7 md:h-10">
                    <path strokeLinecap="round" className='text-xl text-red-600' strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <iframe
                className="w-full  h-[200px] md:h-[450px] xl:h-[620px] rounded-3xl"
                src="https://www.youtube.com/embed/GHIUUMsZW2s?si=m87DBqi6Wp6NfyPe"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className={ isModalOpen ? " flex items-center justify-center" : "min-h-none"}>
      <button 
        onClick={openModal}
        className=' flex gap-1'
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11">
          <path fillRule="evenodd" fill='#fff' className='bg-white' d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
        </svg>

        <p className='py-2 px-5 text-white border-2 border-white rounded-3xl'>
          Veja o vídeo!
        </p>
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
