"use client";
import React from 'react'
import { useSearchBar } from './hooks'
import { SearchManuFacturer } from '@/atomic/element'
import { Formik, FormikProps } from 'formik'
import { Validation_Search } from '@/global/validation'

const SearchBar = () => {
    const { entity } = useSearchBar();
    return (
        <Formik
            validateOnMount={true}
            initialValues={entity}
            validationSchema={Validation_Search}
            onSubmit={(values, formikActions) => {
                formikActions.resetForm();
                formikActions.setSubmitting(false);
            }}
        >
            {
                (props) => {
                    const { values, errors, touched, handleChange, setFieldValue } = props;
                    return (
                        <div className="searchbar">
                            <div className="searchbar__item">
                                <SearchManuFacturer
                                    value={values.search}
                                    handleChangue={handleChange("search")}
                                />
                            </div>
                        </div>
                    )
                }
            }
        </Formik>
    )
}

export { SearchBar }