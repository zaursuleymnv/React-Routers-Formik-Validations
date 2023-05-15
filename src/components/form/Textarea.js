import classNames from 'classnames'
import { ErrorMessage, useField } from 'formik'
import React from 'react'

export default function Textarea({label, ...props}) {

    const [field, meta, helpers] = useField(props)
    
  return (
    <>
        <div className='text-sm text-gray-600 block mb-1.5'>{label}</div>
        <textarea {...field} {...props} className={classNames({
          'form-control w-full outline-none border-b': true,
          'focus:border-black': !meta.error || !meta.touched,
          'border-red-600': meta.error || meta.touched
        })}/>
        <ErrorMessage name={field.name} component='small' className='text-xs mt-2 block text-red-600'/>
    </>
  )
}
