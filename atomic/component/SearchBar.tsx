"use client";
import React from "react";
import Image from 'next/image'
import { useSearchBar } from "./hooks";
import { Formik, FormikProps } from "formik";
import { SearchButton, SearchManuFacturer } from "@/atomic/element";
import { Validation_Search } from "@/global/validation";
import {SearchBarProps} from '@/types'
const SearchBar = (props:SearchBarProps) => {

  const {searchCar} = props;
  const { entity } = useSearchBar();
  return (
    <Formik
      validateOnMount={true}
      initialValues={entity}
      validationSchema={Validation_Search}
      onSubmit={(values, formikActions) => {
        formikActions.resetForm();
        formikActions.setSubmitting(false);
        const {model,make} = values;
        searchCar(model,make);
      }}
    >
      {(props) => {
        const { values, errors, touched, handleChange, handleSubmit } = props;
        return (
          <div className="searchbar">
            <div className="searchbar__item">
              <SearchManuFacturer
                value={values.make}
                handleChangue={handleChange("make")}
              />
              <SearchButton handleSubmit={()=>null} otherClass="sm:hidden" />
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
              <SearchButton handleSubmit={()=>null} otherClass="sm:hidden" />
            </div>
            <SearchButton handleSubmit={handleSubmit} otherClass="max-sm:hidden" />
          </div>
        );
      }}
    </Formik>
  );
};

export { SearchBar };
