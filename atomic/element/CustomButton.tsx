"use client";

import React from 'react'
import {CustomButtonProps} from '@/types'

const  CustomButton = (props:CustomButtonProps) => {
    const {title,containerStyles, btnType,handleClick} = props;
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
      <span className="flex-1">
        {title}
      </span>
    </button>
  )
}

export {CustomButton}
