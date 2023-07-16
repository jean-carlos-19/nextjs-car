import { MouseEventHandler } from "react";

interface CustomButtonProps {
    title:string;
    containerStyles? :string;
    btnType?:"button" | "submit";
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}

interface CustomFilterProps{
    title:"year" | "fuel"
}

export type {CustomButtonProps, CustomFilterProps}