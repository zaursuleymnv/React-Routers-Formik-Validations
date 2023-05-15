import { Field, Formik, Form, useFormikContext } from 'formik'
import React, { useEffect } from 'react'
import InputForm from '../components/form/InputForm'
import File from '../components/form/File'
import Checkbox from '../components/form/Checkbox'
import Textarea from '../components/form/Textarea'
import Select from '../components/form/Select'
import Radio from '../components/form/Radio'
import { SampleSchema, ContactSchema } from '../validations'

const AutoSubmitToken = () => {

  const {values, submitForm} = useFormikContext()

  useEffect(() => {

    if (values.code.length === 6) {
      submitForm()
    }

  }, [values, submitForm])

  return null
}

function Contact() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-lg-12">
          <h1>Contact Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <Formik initialValues={{
            code: ''
          }}
          onSubmit={values => {
            console.log(values);
          }}
          validationSchema={SampleSchema}
          >
            {({values}) => (
              <Form className='hidden'>
                <div className="mb-3">
                  <InputForm label='Enter the code' name='code'></InputForm>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Send</button>
                <AutoSubmitToken/>
              </Form>
            )}

          </Formik>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <Formik
            initialValues={{
              name: '',
              about: '',
              gender: 1,
              accept: false,
              skills: [],
              level: '',
              avatar: '',
            }}
            onSubmit={values => {
              // alert(JSON.stringify(values, null, 2))
              console.log(values);
            }}
            validationSchema={ContactSchema}
          >
            {({values}) => (
              <Form className='grid gap-y-2 rounded p-5 m-4 shadow-lg'>
                <div className="mb-3">
                  {/* <Field name='name' className='form-control'/> */}
                  <InputForm label='Username' name='name'/>
                </div>
                <div className="mb-3">
                  <Textarea label='About' name='about'/>
                </div>
                <div className="mb-3">
                  <Checkbox label='I agree with all agreements.' name='accept'/>
                </div>
                {/* <div className="mb-3">
                    <div className="form-check">
                      <Field type='checkbox' name='accept' id='rules' className='form-check-input'/>
                      <label className="form-check-label" htmlFor='rules'>
                      I agree with all agreements.
                      </label>
                    </div>
                </div> */}
                {/* <div className="mb-3">
                    <Field component='select' name='gender' className='form-select'>
                      <option selected>Open this select menu</option>
                      <option value={1}>Male</option>
                      <option value={2}>Female</option>
                      <option value="3">Rather not to say</option>
                    </Field>
                </div> */}
                <div className="mb-3">
                  <Select label='Choose gender' name='gender' options={[
                    {key: 1, value: 'Male'},
                    {key: 2, value: 'Female'},
                  ]}/>
                </div>
                <div className="mb-3">
                  <Field component='select' name='skills' className='form-select' multiple={true}>
                      <option value='html'>Html</option>
                      <option value='css'>Css</option>
                      <option value="javascript">JavaScript</option>
                      <option value="react">React</option>
                      <option value="jquery">Jquery</option>
                  </Field>
                </div>
                <div className="mb-3">
                  <File label='Choose a file' name='avatar'/>
                </div>
                <div className="mb-3">
                  <Radio label='Choose your level' name='level' options={[
                    {key: 'jr', value: 'Jr. Developer'},
                    {key: 'sr', value: 'Sr. Developer'},
                    {key: 'ninja', value: 'Ninja'},
                  ]}/>
                </div>
                <button disabled={!values.accept} type="submit" className="text-white rounded-lg px-5 py-2.5 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium">Send</button>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Contact
