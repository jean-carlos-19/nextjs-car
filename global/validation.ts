import {string,object, ObjectSchema} from 'yup'

const Validation_Search =  object({
    make:string().required("field is requeried"),
    model:string().required("field is requeried"),
    year:string(),
    fuel_type:string()
})
export {Validation_Search}