"use client";

import { CarProps } from "@/types";

class Cars {
    private static cars: Cars;


    public calculateCarRent = (city_mpg: number, year: number) => {
        const basePricePerDay = 50; // Base rental price per day in dollars
        const mileageFactor = 0.1; // Additional rate per mile driven
        const ageFactor = 0.05; // Additional rate per year of vehicle age

        // Calculate additional rate based on mileage and age
        const mileageRate = city_mpg * mileageFactor;
        const ageRate = (new Date().getFullYear() - year) * ageFactor;

        // Calculate total rental rate per day
        const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

        return rentalRatePerDay.toFixed(0);
    }

    public updateSearchParams = (type: string, value: string) => {
        // Get the current URL search params
        const searchParams = new URLSearchParams(window.location.search);

        // Set the specified search parameter to the given value
        searchParams.set(type, value);

        // Set the specified search parameter to the given value
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        return newPathname;
    }
    public deleteSearchParams = (type: string) => {
        // Set the specified search parameter to the given value
        const newSearchParams = new URLSearchParams(window.location.search);

        // Delete the specified search parameter
        newSearchParams.delete(type.toLocaleLowerCase());

        // Construct the updated URL pathname with the deleted search parameter
        const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

        return newPathname;
    }
    public generateCarImage = (car: CarProps, angle?: string): string => {

        const url = new URL("https://cdn.imagin.studio/getimage");
        const { make, model, year } = car.car;
        
        url.searchParams.append("customer", "hrjavascript-mastery")
        url.searchParams.append('make', make);
        url.searchParams.append('modelFamily', model.split(" ")[0]);
        url.searchParams.append('zoomType', 'fullscreen');
        url.searchParams.append('modelYear', `${year}`);
        // url.searchParams.append('zoomLevel', zoomLevel);
        url.searchParams.append('angle', `${angle}`);
        return `${url}`;
    }
    public static get_cars = (): Cars => {
        if (this.cars === undefined) this.cars = new Cars();
        return this.cars;
    }
    private constructor() { }
}
export { Cars }