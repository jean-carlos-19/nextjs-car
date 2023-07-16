import { Dispatch, MouseEventHandler, SetStateAction } from "react";

interface CustomButtonProps {
    title:string;
    containerStyles? :string;
    btnType?:"button" | "submit";
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}

interface CustomFilterProps{
    title:"year" | "fuel"
}

interface searchManuFacturerProps{
    manuFacturer:string;
    setManuFacturer:Dispatch<SetStateAction<string>>;
}
export type {CustomButtonProps, CustomFilterProps,searchManuFacturerProps} 