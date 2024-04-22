import React from 'react'

function CartShimmer() {
  return (
    <div className='flex w-full h-full py-36 px-[4rem] gap-10'>
    <section className='flex-[0.7] py-[7rem] flex w-full h-full gap-8'>
    <div className='w-full bg-slate-200 h-[21rem]'></div>
    <div className='w-full bg-slate-200 h-[21rem]'></div>
    <div className='w-full bg-slate-200 h-[21rem]'></div>
    </section>
    <div className='flex-[0.3] w-full bg-slate-200 h-[100vh]'></div>

  </div>
  )
}

export default CartShimmer
