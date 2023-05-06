import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup';
import Swal from 'sweetalert2';


const Signup = () => {

  const navigate = useNavigate();
  const SignupSchema = yup.object().shape({
    name: yup.string()

      .min(8, 'Too Short!')
      .max(15, 'Too Long!')
      .required('*Required'),


    password: yup.string()

      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),
    cpassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Must match "password" field value'),

    email: yup.string()
      .min(8, 'email must be 8 characters long')
      .matches(/[0-9]/, 'email requires a number')
      .matches(/[a-z]/, 'email requires a lowercase letter')
      .matches(/[^\w]/, 'email requires a symbol'),

  });

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      registered: '',
    },
    onSubmit: async (values) => {
      console.log(values);


      //making request to backend
      //1 address url
      //2 request method
      //3 data
      //4 data format to be send

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      console.log(await res.text());

      console.log('Form Submitted');

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: 'Nice',
          text: 'user regesterd successfully'
        });
        navigate('/main/login');
      } else {
        Swal.fire({
          icon: "error",
          title: 'oopps',
          text: 'something went wrong'
        })

      }
    },


    validationSchema: SignupSchema
  });
  return (
    <>
      {/* Section: Design Block */}
      <section className="text-center text-lg-start">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .cascading-right {\n     margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
          }}
        />
        {/* Jumbotron */}
        <div className="container h-50">
          <div className="row g-0 align-items-center ">
            <div className="col-md-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)"
                }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <form onSubmit={signupForm.handleSubmit}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    
                      <div className="mb-4">
                        <div className="">
                        </div>
                        <input
                          type="text"
                          id="name"
                          value={signupForm.values.name}
                          onChange={signupForm.handleChange}
                          className={"form-control" + (signupForm.errors.name ? " border-danger" : '')}
                          placeholder='your name'
                        />

                      </div>

                    

                    {/* Email input */}
                    <div className=" mb-4">
                      <input
                        type="email"
                        id="email"

                        value={signupForm.values.email}
                        onChange={signupForm.handleChange}
                        className={"form-control" + (signupForm.errors.email ? " border-danger" : '')}
                        placeholder='email address'
                      />

                    </div>
                    {/* Password input */}
                    <div className=" mb-4">
                      <input
                        type="password"
                        id="password"

                        value={signupForm.values.password}
                        onChange={signupForm.handleChange}
                        className={"form-control" + (signupForm.errors.password ? " border-danger" : '')}
                        placeholder='password'
                      />

                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="save it"
                        defaultChecked=""
                      />
                      <label className="form-check-label" htmlFor="form2Example33">
                        save it
                      </label>
                    </div>
                    {/* Submit button */}
                    <button
                      type="submit"
                      id="submit"

                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign up
                    </button>
                    {/* Register buttons */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://solares.com.sg/wp-content/uploads/2023/01/About-Us.jpg"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>




        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </>

  )
}

export default Signup