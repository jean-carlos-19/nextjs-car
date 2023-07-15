"use client";

import React from 'react'
import {CustomButtonProps} from '@/types'

const CustomButton = (props:CustomButtonProps) => {
    const {title,containerStyles,handleClick} = props;
  return (
    <button
        disabled={false}
        type={"button"}
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
