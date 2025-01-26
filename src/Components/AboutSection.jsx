import React from 'react'
import bgImg from './../Images/AboutSectionImgs/BgImage.jpeg'
import mainImg from './../Images/AboutSectionImgs/MainImg.jpeg'

const AboutSection = () => {
  return (
    <div className='w-[100%] h-[120vh] mx-4 grid grid-cols-[30%_70%] border-[1px] border-gray-300 border-t-0'>
      <div className='w-[100%] h-auto p-8 bg-white '>
        <h1 className="antialiased box-border clear-both text-[#143642] font-BebasNeue text-[76.8px] font-medium tracking-[10px] leading-[99.84px] mb-[20px] break-words text-left">About <br />us</h1>
        <p className='antialiased box-border text-[#406163] font-sans text-[18px] font-medium leading-[27.8571px] break-words text-left'>
          Donec vehicula vulputate hendrerit.<br /> Phasellus dictum vitae augue non aliquet.<br /> Aenean sodales magna ac ipsum<br /> sollicitudin, id eleifend lorem dapibus.<br /> Suspendisse id posuere ex. Vestibulum tempus elementum tortor a convallis.<br /> Nam mattis ultricies tincidunt. Ut quis<br /> viverra lorem, vitae sagittis sapien. Nam <br />lacinia consequat est sollicitudin aliquam.<br /> Etiam id elit malesuada, vehicula arcu at,<br /> pellentesque leo.
        </p>
      </div>
      <div className='relative w-[100%] h-auto border-[1px] border-gray-300 border-t-0'>
        <div className=' absolute flex items-start justify-end w-[96%] h-[116vh] my-10 mr-4'>
          <img className='absolute z-10 w-[65%] h-[110vh]' src={mainImg} />
        </div>
        <img className=' absolute mx-4 my-4 w-[96%] h-[116vh]' src={bgImg} />
      </div>
    </div>
  )
}

export default AboutSection
