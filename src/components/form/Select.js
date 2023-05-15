import { useField, ErrorMessage } from 'formik'
import React from 'react'

export default function Select({label, options, original = false, ...props}) {

    const [field, meta, helpers] = useField(props)

    const changeHandle = e => {
      let selected = options.find(option => option.key === +e.target.value)
      helpers.setValue(original ? selected : e.target.value)
    }
    
  return (
    <>
        <div className='text-sm text-gray-600 block mb-1.5'>{label}</div>
        <select onChange={changeHandle} defaultValue={field.value} {...props} className='form-control border-b focus:border-black'>
          <option value=''>Choose</option>
          {
            options.map((option, key) => (
              <option value={option.key} key={key}>{option.value}</option>
            ))
          }
        </select>
        <ErrorMessage name={field.name} component='small' className='text-xs mt-2 block text-red-600'/>
    </>
  )
}
