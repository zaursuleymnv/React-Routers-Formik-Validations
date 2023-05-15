import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { Formik, Field, Form } from 'formik';
import InputForm from '../../components/form/InputForm';
import { LoginSchema } from '../../validations';

function Login() {

    const navigate = useNavigate()
    const location = useLocation()

    const {setUser} = useAuth()

    const loginHandle = () => {
        setUser({
            id: 1,
            username: 'zaursuleymanov'
        })
        navigate(location?.state?.return_url || '/', {
            replace: true,
            state: {
                name: 'zaursuleymanov'
            }
        })
    }

    // const {handleSubmit, handleChange, values} = useFormik({
    //   initialValues: {
    //     username: '',
    //     password: ''
    //   },
    //   onSubmit: values => {
    //     setUser(values)
    //     navigate(location?.state?.return_url || '/', {
    //       replace: true
    //   })
    // }
    // });


  return (
    <div className="container">
      <div className="row mt-5 flex items-center justify-center">
        <div className="col-lg-6">
        <h1 className='mb-5'>Login Page</h1>
        <Formik initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values, actions) => {

          setUser(values)
          navigate(location?.state?.return_url || '/', {
            replace: true
          })
        //  console.log(actions); 

          // setTimeout(() => {
          //   actions.setSubmitting(false)
          //   actions.resetForm()
          // }, 3000)

        }}
        validationSchema={LoginSchema}
        >
          {({values, isSubmitting}) => (
            <Form className='grid gap-y-3 p-4 shadow-lg'>
              <h1 className='text-2xl font-bold mb-3'>Login</h1>
              <div className="mb-3">
                <InputForm label='Username' name='username' className='form-control' placeholder="Username" />
              </div>
              <div className="mb-3">
                <InputForm label='Password' name='password' type='password' className='form-control' placeholder="Password" />
              </div>
              <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-3">Reset</button>
              <button disabled={isSubmitting} type="submit" className="disabled:opacity-40 text-white rounded-lg px-5 py-2.5 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium">Log In</button>
            </Form>
          )}
        </Formik>


        {/* <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" value={values.username} onChange={handleChange} className="form-control" id="username" placeholder="Username"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" value={values.password} onChange={handleChange} className="form-control" id="password" placeholder="Password"></input>
          </div>
          <button type="submit" className="btn btn-dark">Log in</button>
        </form> */}
        </div>
      </div>
    </div>
  )
}

export default Login
