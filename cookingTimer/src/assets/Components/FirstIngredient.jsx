import React from 'react';

const FirstIngredient = () => {
  return (
    <>
    <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lf:items-start items-center'>
        <h1 className='mt-32 text-2xl text:4xl font-bold text-slate-500'>
            Enter your main ingredient</h1>
    </div>
    
    <div className='flex flex-col'>
        <input className='border-4 rounded-full p-4 mt-6 m-10 flex border-orange-400' type='text' required />
    </div>
    
    </>
  )
}

export default FirstIngredient;
