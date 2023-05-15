import { useField, ErrorMessage } from 'formik'
import React from 'react'
import { HiCheck } from "react-icons/hi";

export default function File({label, ...props}) {

    const [field, meta, helpers] = useField(props)

    // const changeHandle = e => {
    //     helpers.setValue(e.target.files[0])
    // }

    async function fileOpen() {
       try {
        const [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        helpers.setValue(file)
       } catch (e) {
        helpers.setValue('')
       }
    }

  return (
    <>
    <div className='text-sm text-gray-600 block mb-1.5'>{label}</div>
    {/* <input type="file" className='hidden' onChange={changeHandle} {...props} /> */}
    <button type="button" onClick={fileOpen} className='d-flex items-center gap-x-2 px-5 rounded bg-blue-500 text-white h-10'>
        {field.value && <>File is Choosen <HiCheck/></>}
        {!field.value && 'Choose File'}
    </button>
    {field.value && <button type='button' onClick={() => helpers.setValue('')} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 mb-2'>Delete File</button>}
    <ErrorMessage name={field.name} component='small' className='text-xs mt-2 block text-red-600'/>
    </>
  )
}
