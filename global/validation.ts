import {string,object, ObjectSchema} from 'yup'

const Validation_Search =  object({
    search:string().required("field is requeried")
})
export {Validation_Search}