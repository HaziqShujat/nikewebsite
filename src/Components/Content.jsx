import React from 'react'

const Content = ({ iFexist,endepoint:{title,text,btn, heading,url,img}}) => {
  return (
    <>
    <div className= {`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${iFexist ? 'flex-row-reverse':'flex-row'}`} >
        <div className=' max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center '>
            <h1 className='text-4xl  sm:text-3xl font-bold text-gradient'>{heading} </h1>
            <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-400 filter drop-shadow-lg'>{title} </h1>
            <p className='xl:text-sm my-4 text-slate-900'>{text} </p>
            <a href={url} className='flex items-center' target={'_blank'} role='button'>
                <button type='button' className='button-theme bg-blue-900 text-slate-100 py-1.5 shadow-slate-900'> {btn} </button>
            </a>
        </div>
        <div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full'>
            <img src={img} alt={`img/content ${heading}`} className={`w-auto object-fill transitions-theme ${iFexist ? "h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12":''} `} />
        </div>
    </div>
    </>
  )
}

export default Content