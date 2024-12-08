import React from 'react'
import Image from 'next/image'

function Logos() {
  return (
    <div className='md:flex items-center justify-center hidden'>
    <div className='h-32 w-[80vw] flex items-center justify-around px-8'>
      <Image src={"/logo1.png"} alt='' width={90} height={50} ></Image>
      <Image src={"/logo2.png"} alt='' width={90} height={50}></Image>
      <Image src={"/logo3.png"} alt='' width={90} height={50}></Image>
      <Image src={"/logo4.png"} alt='' width={90} height={50}></Image>
      <Image src={"/logo5.png"} alt='' width={90} height={50}></Image>
      <Image src={"/logo6.png"} alt='' width={90} height={50}></Image>
      <Image src={"/logo7.png"} alt='' width={90} height={50}></Image>
    </div>
    </div>
  )
}

export default Logos
