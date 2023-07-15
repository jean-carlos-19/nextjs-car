import { MouseEventHandler } from "react";

interface CustomButtonProps {
    title:string;
    containerStyles? :string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}

export type {CustomButtonProps}