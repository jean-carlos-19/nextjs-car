import Image from 'next/image'
import React from 'react'
import { SearchButtonProps } from '@/types'

const SearchButton = (props:SearchButtonProps) => {
  const {otherClass,handleSubmit} = props;
  return (
    <button
        onClick={handleSubmit}
        type='button'
        className={`-ml-3 z-10 ${otherClass}`}
    >
      <Image 
        src={"/magnifying-glass.svg"}
        alt='maginifying glass'
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  )
}

export {SearchButton}