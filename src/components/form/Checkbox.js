import {ErrorMessage, useField } from 'formik';
import React from 'react'
import { HiCheck } from "react-icons/hi";
import classNames from "classnames";

export default function Checkbox({label, ...props}) {

    const [field, meta, helpers] = useField(props)
    
  return (
    <>
    {/* <div>{label}</div>
    <input type="checkbox" className='form-check-input' /> */}

    <label className='flex gap-x-2 items-center text-sm cursor-pointer'>
        <button type='button' onClick={() => {
            helpers.setValue(!field.value)
        }} className={classNames({
          'w-5 h-5 rounded border transition-all flex items-center justify-center' : true,
          'border-gray-300 text-transparent': !field.value,
          'border-red-600': meta.error || meta.touched,
          'border-blue-600 bg-blue-600 text-white': field.value && (!meta.error),
        })}>
            <HiCheck size={16}/>
        </button>
        {label}
    </label>
    <ErrorMessage name={field.name} component='small' className='text-xs mt-2 block text-red-600'/>
    </>
  )
}
