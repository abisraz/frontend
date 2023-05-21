import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup';
import Swal from 'sweetalert2';

const Login = () => {

  const navigate = useNavigate();
  const LoginSchema = yup.object().shape({
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
    });

    const Login= useFormik({
      initialValues: {
        email: '',
        password: '',
      
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
          const data = await res.json();
          if(data.role === 'admin'){
            sessionStorage.setItem('admin', JSON.stringify(data));
            navigate('/admin/AddEquipment');
          }else{
            sessionStorage.setItem('user', JSON.stringify(data));
            navigate('/main/home');
          }
        } else {
          Swal.fire({
            icon: "error",
            title: 'oopps',
            text: 'something went wrong'
          })
  
        }
      },
  
  
      validationSchema: LoginSchema
    });
  return (
    <section className="vh-100" style={{ backgroundColor: "white" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>




            <div className="card-body p-5 text-center">
            
            <form onSubmit={Login.handleSubmit}>

              <h2 className="mb-5">Login</h2>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                
                  value={Login.values.email}
                  onChange={Login.handleChange}
                  className={"form-control" + (Login.errors.email ? " border-danger" : '')}
                  placeholder='email'
                />
                
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  value={Login.values.password}
                  onChange={Login.handleChange}
                  className={"form-control" + (Login.errors.password ? " border-danger" : '')}
                  placeholder='password'
                />
               
              </div>
          
            
              <button className="btn btn-primary btn-lg btn-block" type="submit" id="submit">
                Login
              </button>
              <hr className="my-4" />
              <button
                className="btn btn-lg btn-block btn-primary"
                style={{ backgroundColor: "#dd4b39" }}
                type="submit"
              >
                <i className="fab fa-google me-2" /> Sign in with google
              </button>
              <button
                className="btn btn-lg btn-block btn-primary mb-2"
                style={{ backgroundColor: "#3b5998" }}
                type="submit"
              >
                <i className="fab fa-facebook-f me-2" />
                Sign in with facebook
              </button>
           </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Login

