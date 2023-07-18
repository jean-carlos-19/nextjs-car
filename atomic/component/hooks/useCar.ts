import {Cars} from '@/models'
import { CarProps } from '@/types';
import { useEffect, useState } from 'react';

const useCar =({car}:CarProps)=>{
    const cars:Cars = Cars.get_cars();
    const [carRent,setCarRent] = useState('');
    const [isOpen,setIsOpen] = useState(false);

    useEffect(()=>{
        const {city_mpg,year} = car;
        const rent:string = cars.calculateCarRent(city_mpg,year);
        setCarRent(rent)
    },[])
    return {carRent, setIsOpen}
}
export {useCar}