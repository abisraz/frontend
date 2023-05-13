import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup';
import Swal from 'sweetalert2';

const AddEquipment = () => {

  const navigate = useNavigate();
  const AddEquipmentSchema = yup.object().shape({
    title: yup.string()

      .min(8, 'Too Short!')
      .max(15, 'Too Long!')
      .required('*Required'),


    // discription: yup.string()

    //   .min(25, 'Password must be 25 characters long')
    //   .matches(/[0-9]/, 'Password requires a number')
    //   .matches(/[a-z]/, 'Password requires a lowercase letter')
    //   .matches(/[A-Z]/, 'Password requires an uppercase letter')
    //   .matches(/[^\w]/, 'Password requires a symbol'),
    // price: yup
    //   .string()
    //   .oneOf([yup.ref('price'), null], 'Must match "price" field value'),

    // category: yup.string()
    //   .min(8, 'email must be 8 characters long')
    //   .matches(/[0-9]/, 'email requires a number'),
    


    //   image: yup.string()
    //   ,
      

  });

  const equipmentForm = useFormik({
    initialValues: {
      title: '',
      discription: '',
      price: '',
      category: '',
      features: '',
      image: '',
    },
    onSubmit: async (values) => {
      console.log(values);


      //making request to backend
      //1 address url
      //2 request method
      //3 data
      //4 data format to be send

      const res = await fetch('http://localhost:5000/equipment/add', {
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
        // navigate('/main/login');
      } else {
        Swal.fire({
          icon: "error",
          title: 'oopps',
          text: 'something went wrong'
        })

      }
    },


    validationSchema: AddEquipmentSchema
  });
  return (
    <section className="vh-100" style={{ backgroundColor: "white" }}>

    <div className="container h-100">
    
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-9">
          <h1 className="text-black mb-4  align-items-center">Admin page</h1>
            <form onSubmit={equipmentForm.handleSubmit}>
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body">
              <div className="row align-items-center pt-4 pb-3">
                <div className="col-md-3 ps-5">
                  <h6 className="mb-0">Title</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input type="text" id="title" value={equipmentForm.values.title} onChange={equipmentForm.handleChange} className="form-control form-control-lg"
                  placeholder="@title"
                  />
                  <span className='text-danger'>{equipmentForm.errors.title}</span>
              </div>
                </div>
              </div>
              <hr className="mx-n3" />
              <div className="row align-items-center py-3">
                <div className="col-md-3 ps-5">
                  <h6 className="mb-0">Discription</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input
                    type="text"
                    id="discription"
                    value={equipmentForm.values.discription}
                    onChange={equipmentForm.handleChange}
                    className={"form-control" + (equipmentForm.errors.discription ? " border-danger" : '')}
                    
                    placeholder="example@example.com"
                  />
                  <span className='text-danger'>{equipmentForm.errors.discription}</span>
                </div>
              </div>
              <hr className="mx-n3" />
              <div className="row align-items-center py-3">
                <div className="col-md-3 ps-5">
                  <h6 className="mb-0">Price</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input
                    type="number"
                    id="price"
                    value={equipmentForm.values.price}
                    onChange={equipmentForm.handleChange}
                    className={"form-control" + (equipmentForm.errors.price ? " border-danger" : '')}
                    
                  />
                  <span className='text-danger'>{equipmentForm.errors.price}</span>
                </div>
                </div>
                <hr className="mx-n3" />
              <div className="row align-items-center py-3">
                <div className="col-md-3 ps-5">
                  <h6 className="mb-0">Category</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input
                    type="string"
                    id="category"
                    value={equipmentForm.values.category}
                          onChange={equipmentForm.handleChange}
                          className={"form-control" + (equipmentForm.errors.category ? " border-danger" : '')}
                  />
                  <span className='text-danger'>{equipmentForm.errors.category}</span>
                </div>
              </div>
              <hr className="mx-n3" />
              <div className="row align-items-center py-3">
                <div className="col-md-3 ps-5">
                  <h6 className="mb-0">Features</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input
                    type="Array, default: []"
                    id="features"
                    value={equipmentForm.values.features}
                    onChange={equipmentForm.handleChange}
                    className={"form-control" + (equipmentForm.errors.category? " border-danger" : '')}
                  />
                  <span className='text-danger'>{equipmentForm.errors.features}</span>
                </div>
              </div>
              <hr className="mx-n3" />
              <div className="row align-items-center py-3">
                <div className="col-md-3 ps-5">
                  <h6 className="mb-0">Image</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input
                    type="file"
                    id="image"
                    value={equipmentForm.values.Image}
                    onChange={equipmentForm.handleChange}
                    className={"form-control" + (equipmentForm.errors.image ? " border-danger" : '')}
                  />
                 <>
  {/*Image*/}
  <div>
    <div className="mb-4 d-flex justify-content-center">
      <img
        src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
        alt="example placeholder"
        style={{ width: 300 }}
      />
    </div>
    <div className="d-flex justify-content-center">
      <div className="btn btn-primary btn-rounded">
        <label className="form-label text-white m-1" htmlFor="customFile1">
          Choose file
        </label>
        <input type="file" className="form-control d-none" id="customFile1" />
      </div>
    </div>
  </div>
</>

                </div>
              </div>
              <hr className="mx-n3" />
              <div className="px-5 py-4">
              <button className="btn btn-primary btn-lg btn-block" type="submit" id="submit">
                Send Application
              </button>
              </div>
              </div>
        </form>
            </div>
          </div>
          </div>
      
      
  </section>
   
  
  )
}

export default AddEquipment