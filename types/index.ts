import {  MouseEventHandler } from "react";


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
    value:string;
    handleChangue:any;
}

interface CarProps{
    city_mpg:number
    class:string
    combination_mpg:number
    cylinders:number
    displacement:number
    drive:string
    fuel_type:string
    highway_mpg:number
    make:string
    model:string
    transmission:string
    year:number
}
export type {CustomButtonProps, CustomFilterProps,searchManuFacturerProps, CarProps} 