import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup';
import Swal from 'sweetalert2';

const Login = () => {

  const navigate = useNavigate();
  const LoginSchema = yup.object().shape({
    name: yup.string()

      .min(5, 'Too Short!'),
     


    password: yup.string()

      .min(5, 'Password must be 8 characters long')
     
    });

    const LoginForm= useFormik({
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
  
        const res = await fetch('http://localhost:5000/user/authenticate', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        console.log(res.status);
  
        console.log('Form Submitted');
  
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: 'Nice',
            text: 'user regesterd successfully'
          });
          const data = await res.json();
          console.log(data);
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
            
            <form onSubmit={LoginForm.handleSubmit}>

              <h2 className="mb-5">Login</h2>
              <div className=" mb-4">
                <input
                  type="email"
                  id="email"
                
                  value={LoginForm.values.email}
                  onChange={LoginForm.handleChange}
                  className={"form-control" + (LoginForm.errors.email ? " border-danger" : '')}
                  placeholder='email'
                />
                
              </div>
              <div className=" mb-4">
                <input
                  type="password"
                  id="password"
                  value={LoginForm.values.password}
                  onChange={LoginForm.handleChange}
                  className={"form-control" + (LoginForm.errors.password ? " border-danger" : '')}
                  placeholder='password'
                />
               
              </div>
          
            
              <button 
              type="submit"
              id="submit"
              className="btn btn-primary btn-lg btn-block">
                Login
              </button>
              <hr className="my-4" />
              <button
                className="btn btn-lg btn-block btn-primary"
                style={{ backgroundColor: "#dd4b39" }}
                type="button"
              >
                <i className="fab fa-google me-2" /> Sign in with google
              </button>
              <button
                className="btn btn-lg btn-block btn-primary mb-2"
                style={{ backgroundColor: "#3b5998" }}
                type="button"
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

