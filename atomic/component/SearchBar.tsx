"use client";
import React from "react";
import Image from 'next/image'
import { useSearchBar } from "./hooks";
import { Formik } from "formik";
import { SearchButton, SearchManuFacturer, CustomFilter } from "@/atomic/element";
import { Validation_Search } from "@/global/validation";
import { SearchBarProps } from '@/types'
import {fuels, yearsOfProduction} from '@/global/data'


const SearchBar = (props: SearchBarProps) => {

  const { searchCar } = props;
  const { entity } = useSearchBar();
  return (
    <Formik
      validateOnMount={true}
      initialValues={entity}
      validationSchema={Validation_Search}
      onSubmit={(values, formikActions) => {
        formikActions.resetForm();
        formikActions.setSubmitting(false);
        const { model, make } = values;
        searchCar(model, make);
      }}
    >
      {(props) => {
        const { values, errors, touched, handleChange, setFieldValue, handleSubmit } = props;
        return (
          <>
            <div className="searchbar">
              <div className="searchbar__item">
                <SearchManuFacturer
                  value={values.make}
                  handleChangue={handleChange("make")}
                />
              </div>
              <div className="flex-col space-y-[.5rem]">

              </div>
              <div className="searchbar__item">
                <Image
                  src="/model-icon.png"
                  width={25}
                  height={25}
                  className="absolute w-[20px] h-[20px] ml-4"
                  alt="car model"
                />
                <input
                  type="text"
                  placeholder="Tiguan"
                  value={values.model}
                  onChange={handleChange("model")}
                  className="searchbar__input"
                />
              </div>
              
            </div>
            <div className="home__filter-container">
              <CustomFilter 
                title="fuel" 
                options={fuels} 
                value={values.fuel_type} 
                setFieldValue={setFieldValue}
                id="fuel_type"
              />
              <CustomFilter 
                title="year" 
                options={yearsOfProduction} 
                value={values.year} 
                setFieldValue={setFieldValue}
                id="year"
              />
              <SearchButton handleSubmit={handleSubmit} otherClass="max-sm:visible ml-2" />
            </div>
          </>
        );
      }}
    </Formik>
  );
};

export { SearchBar };
