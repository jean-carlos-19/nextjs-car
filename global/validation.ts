import {string,object, ObjectSchema} from 'yup'

const Validation_Search =  object({
    search:string().required("field is requeried"),
    model:string().required("field is requeried"),
    year:string(),
    fuel_type:string()
})
export {Validation_Search}