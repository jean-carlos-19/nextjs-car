import {  MouseEventHandler } from "react";

interface CustomButtonProps {
    title:string;
    containerStyles? :string;
    textStyles?:string;
    rightIcon:string;
    btnType?:"button" | "submit";
    isDisabled?:boolean;
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
  car:{
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
}

interface CarDetailsProps{
  car:CarProps;
  isOpen:boolean;
  closeModal:()=>void;
}

interface SearchButtonProps {
  handleSubmit:any;
  otherClass:string; 
}
export type {
  CustomButtonProps, 
  CustomFilterProps,
  searchManuFacturerProps, 
  CarProps, 
  CarDetailsProps,
  SearchButtonProps
} 