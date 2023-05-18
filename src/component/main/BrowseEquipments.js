import React, { useEffect, useState } from 'react'


const BrowseEquipments = () => {


  const [equipment, setEquipment] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    const res = await fetch('http://localhost:5000/equipment/getall')
    console.log(res.status)
    if (res.status === 200) {
      const data = await res.json()
      console.log(data)
      setEquipment(data)
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchData()
  }, [])



  function DisplayData() {
    if (!loading) {
      return equipment.map((equip) => (

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <div
              className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                className="w-100" />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-dark ms-2">NEW</span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
                </div>
              </a>
            </div>
            <div className="card-body">
              <a href="" className="text-reset">
                <h5 className="card-title mb-2">{equip.title}</h5>
              </a>
              <p>{equip.price}</p>

              {/* <a href="" className="text-reset ">
                          <p>Shirt</p>
                        </a> */}
              <h6 className="mb-3 price">  {equip.price}</h6>
            </div>
          </div>
        </div>

      ))

    }
  }

  return (
    <div>
      <div className='row mt-4'>
        {DisplayData()}
      </div>
    </div>
  )

}
export default BrowseEquipments


