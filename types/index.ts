import { MouseEventHandler } from "react";

interface CustomButtonProps {
    title:string;
    containerStyles? :string;
    btnType?:"button" | "submit";
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}

export type {CustomButtonProps}