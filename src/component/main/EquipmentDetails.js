import React from 'react'

const EquipmentDetails = () => {
  return (
    <div>
        <div className="super_container">
  <header className="header" style={{ display: "none" }}>
    <div className="header_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
            <div className="header_search">
              <div className="header_search_content">
                <div className="header_search_form_container">
                  <form action="#" className="header_search_form clearfix">
                    <div className="custom_dropdown">
                      <div className="custom_dropdown_list">
                        {" "}
                        <span className="custom_dropdown_placeholder clc">
                          All Categories
                        </span>{" "}
                        <i className="fas fa-chevron-down" />
                        <ul className="custom_list clc">
                          <li>
                            <a className="clc" href="#">
                              All Categories
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="single_product">
    <div
      className="container-fluid"
      style={{ backgroundColor: "#fff", padding: 11 }}
    >
      <div className="row">
        <div className="col-lg-2 order-lg-1 order-2">
          <ul className="image_list">
            <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg"
                alt=""
              />
            </li>
            <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg"
                alt=""
              />
            </li>
            <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="col-lg-4 order-lg-2 order-1">
          <div className="image_selected">
            <img
              src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6 order-3">
          <div className="product_description">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Products</a>
                </li>
                <li className="breadcrumb-item active">Accessories</li>
              </ol>
            </nav>
            <div className="product_name">
              Acer Aspire 3 Celeron Dual Core - (2 GB/500 GB HDD/Windows 10
              Home) A315-33 Laptop (15.6 inch, Black, 2.1 kg)
            </div>
            <div className="product-rating">
              <span className="badge badge-success">
                <i className="fa fa-star" /> 4.5 Star
              </span>{" "}
              <span className="rating-review">35 Ratings &amp; 45 Reviews</span>
            </div>
            <div>
              {" "}
              <span className="product_price">₹ 29,000</span>{" "}
              <strike className="product_discount">
                {" "}
                <span style={{ color: "black" }}>
                  ₹ 2,000<span> </span>
                </span>
              </strike>{" "}
            </div>
            <div>
              {" "}
              <span className="product_saved">You Saved:</span>{" "}
              <span style={{ color: "black" }}>
                ₹ 2,000<span> </span>
              </span>
            </div>
            <hr className="singleline" />
            <div>
              {" "}
              <span className="product_info">
                EMI starts at ₹ 2,000. No Cost EMI Available
                <span>
                  <br />{" "}
                  <span className="product_info">
                    Warranty: 6 months warranty
                    <span>
                      <br />{" "}
                      <span className="product_info">
                        7 Days easy return policy
                        <span>
                          <br />{" "}
                          <span className="product_info">
                            7 Days easy return policy
                            <span>
                              <br />{" "}
                              <span className="product_info">
                                In Stock: 25 units sold this week<span> </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div>
              <div className="row">
                <div className="col-md-5">
                  <div className="br-dashed">
                    <div className="row">
                      <div className="col-md-3 col-xs-3">
                        {" "}
                        <img src="https://img.icons8.com/color/48/000000/price-tag.png" />{" "}
                      </div>
                      <div className="col-md-9 col-xs-9">
                        <div className="pr-info">
                          {" "}
                          <span className="break-all">
                            Get 5% instant discount + 10X rewards @ RENTOPC
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7"> </div>
              </div>
              <div className="row" style={{ marginTop: 15 }}>
                <div className="col-xs-6" style={{ marginLeft: 15 }}>
                  {" "}
                  <span className="product_options">RAM Options</span>
                  <br />{" "}
                  <button className="btn btn-primary btn-sm">4 GB</button>{" "}
                  <button className="btn btn-primary btn-sm">8 GB</button>{" "}
                  <button className="btn btn-primary btn-sm">16 GB</button>{" "}
                </div>
                <div className="col-xs-6" style={{ marginLeft: 55 }}>
                  {" "}
                  <span className="product_options">Storage Options</span>
                  <br />{" "}
                  <button className="btn btn-primary btn-sm">
                    500 GB
                  </button>{" "}
                  <button className="btn btn-primary btn-sm">1 TB</button>{" "}
                </div>
              </div>
            </div>
            <hr className="singleline" />
            <div className="order_info d-flex flex-row">
              <form action="#"></form>
            </div>
            <div className="row">
              <div className="col-xs-6" style={{ marginLeft: 13 }}>
                <div className="product_quantity">
                  {" "}
                  <span>QTY: </span>{" "}
                  <input
                    id="quantity_input"
                    type="text"
                    pattern="[0-9]*"
                    defaultValue={1}
                  />
                  <div className="quantity_buttons">
                    <div
                      id="quantity_inc_button"
                      className="quantity_inc quantity_control"
                    >
                      <i className="fas fa-chevron-up" />
                    </div>
                    <div
                      id="quantity_dec_button"
                      className="quantity_dec quantity_control"
                    >
                      <i className="fas fa-chevron-down" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6">
                {" "}
                <button type="button" className="btn btn-primary shop-button">
                  Add to Cart
                </button>{" "}
                <button type="button" className="btn btn-success shop-button">
                  Buy Now
                </button>
                <div className="product_fav">
                  <i className="fas fa-heart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-underline">
        <div className="col-md-6">
          {" "}
          <span className=" deal-text">Combo Offers</span>{" "}
        </div>
        <div className="col-md-6">
          {" "}
          <a href="#" data-abc="true">
            {" "}
            <span className="ml-auto view-all" />{" "}
          </a>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="row padding-2">
            <div className="col-md-5 padding-0">
              <div className="bbb_combo">
                <div className="bbb_combo_image">
                  <img
                    className="bbb_combo_image"
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-row justify-content-start">
                  {" "}
                  <strike style={{ color: "red" }}>
                    {" "}
                    <span className="fs-10" style={{ color: "black" }}>
                      ₹ 32,000<span> </span>
                    </span>
                  </strike>{" "}
                  <span className="ml-auto">
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                  </span>{" "}
                </div>
                <div
                  className="d-flex flex-row justify-content-start"
                  style={{ marginBottom: 13 }}
                >
                  {" "}
                  <span style={{ marginTop: "-4px" }}>₹30,000</span>{" "}
                  <span className="ml-auto fs-10">23 Reviews</span>{" "}
                </div>{" "}
                <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
              </div>
            </div>
            <div className="col-md-2 text-center">
              {" "}
              <span className="step">+</span>{" "}
            </div>
            <div className="col-md-5 padding-0">
              <div className="bbb_combo">
                <div className="bbb_combo_image">
                  <img
                    className="bbb_combo_image"
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-row justify-content-start">
                  {" "}
                  <strike style={{ color: "red" }}>
                    {" "}
                    <span className="fs-10" style={{ color: "black" }}>
                      ₹ 32,000<span> </span>
                    </span>
                  </strike>{" "}
                  <span className="ml-auto">
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                  </span>{" "}
                </div>
                <div
                  className="d-flex flex-row justify-content-start"
                  style={{ marginBottom: 13 }}
                >
                  {" "}
                  <span style={{ marginTop: "-4px" }}>₹30,000</span>{" "}
                  <span className="ml-auto fs-10">23 Reviews</span>{" "}
                </div>{" "}
                <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12" style={{ marginLeft: 36 }}>
              <div className="boxo-pricing-items">
                <div className="combo-pricing-item">
                  {" "}
                  <span className="items_text">1 Item</span>{" "}
                  <span className="combo_item_price">₹13,200</span>{" "}
                </div>
                <div className="combo-plus">
                  {" "}
                  <span className="plus-sign">+</span>{" "}
                </div>
                <div className="combo-pricing-item">
                  {" "}
                  <span className="items_text">1 Add-on</span>{" "}
                  <span className="combo_item_price">₹500</span>{" "}
                </div>
                <div className="combo-plus">
                  {" "}
                  <span className="plus-sign">=</span>{" "}
                </div>
                <div className="combo-pricing-item">
                  {" "}
                  <span className="items_text">Total</span>{" "}
                  <span className="combo_item_price">₹13,700</span>{" "}
                </div>
                <div className="add-both-cart-button">
                  {" "}
                  <button type="button" className="btn btn-primary shop-button">
                    Add to Cart
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 text-center">
          {" "}
          <span className="vertical-line" />{" "}
        </div>
        <div className="col-md-5" style={{ marginLeft: "-27px" }}>
          <div className="row padding-2">
            <div className="col-md-5 padding-0">
              <div className="bbb_combo">
                <div className="bbb_combo_image">
                  <img
                    className="bbb_combo_image"
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-row justify-content-start">
                  {" "}
                  <strike style={{ color: "red" }}>
                    {" "}
                    <span className="fs-10" style={{ color: "black" }}>
                      ₹ 32,000<span> </span>
                    </span>
                  </strike>{" "}
                  <span className="ml-auto">
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating p-rating" />
                    <i className="fa fa-star p-rating" />
                  </span>{" "}
                </div>
                <div
                  className="d-flex flex-row justify-content-start"
                  style={{ marginBottom: 13 }}
                >
                  {" "}
                  <span style={{ marginTop: "-4px" }}>₹30,000</span>{" "}
                  <span className="ml-auto fs-10">23 Reviews</span>{" "}
                </div>{" "}
                <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
              </div>
            </div>
            <div className="col-md-2 text-center">
              {" "}
              <span className="step">+</span>{" "}
            </div>
            <div className="col-md-5 padding-0">
              <div className="bbb_combo">
                <div className="bbb_combo_image">
                  <img
                    className="bbb_combo_image"
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-row justify-content-start">
                  {" "}
                  <strike style={{ color: "red" }}>
                    {" "}
                    <span className="fs-10" style={{ color: "black" }}>
                      ₹ 32,000<span> </span>
                    </span>
                  </strike>{" "}
                  <span className="ml-auto">
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                    <i className="fa fa-star p-rating" />
                  </span>{" "}
                </div>
                <div
                  className="d-flex flex-row justify-content-start"
                  style={{ marginBottom: 13 }}
                >
                  {" "}
                  <span style={{ marginTop: "-4px" }}>₹30,000</span>{" "}
                  <span className="ml-auto fs-10">23 Reviews</span>{" "}
                </div>{" "}
                <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12" style={{ marginLeft: 36 }}>
              <div className="boxo-pricing-items">
                <div className="combo-pricing-item">
                  {" "}
                  <span className="items_text">1 Item</span>{" "}
                  <span className="combo_item_price">₹13,200</span>{" "}
                </div>
                <div className="combo-plus">
                  {" "}
                  <span className="plus-sign">+</span>{" "}
                </div>
                <div className="combo-pricing-item">
                  {" "}
                  <span className="items_text">1 Add-on</span>{" "}
                  <span className="combo_item_price">₹500</span>{" "}
                </div>
                <div className="combo-plus">
                  {" "}
                  <span className="plus-sign">=</span>{" "}
                </div>
                <div className="combo-pricing-item">
                  {" "}
                  <span className="items_text">Total</span>{" "}
                  <span className="combo_item_price">₹13,700</span>{" "}
                </div>
                <div className="add-both-cart-button">
                  {" "}
                  <button type="button" className="btn btn-primary shop-button">
                    Add to Cart
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-underline">
        <div className="col-md-6">
          {" "}
          <span className=" deal-text">Specifications</span>{" "}
        </div>
        <div className="col-md-6">
          {" "}
          <a href="#" data-abc="true">
            {" "}
            <span className="ml-auto view-all" />{" "}
          </a>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="col-md-12">
            <tbody>
              <tr className="row mt-10">
                <td className="col-md-4">
                  <span className="p_specification">Sales Package :</span>{" "}
                </td>
                <td className="col-md-8">
                  <ul>
                    <li>
                      2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User
                      Guide, Warranty Documents
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="row mt-10">
                <td className="col-md-4">
                  <span className="p_specification">Model Number :</span>{" "}
                </td>
                <td className="col-md-8">
                  <ul>
                    <li> 14-dh0107TU </li>
                  </ul>
                </td>
              </tr>
              <tr className="row mt-10">
                <td className="col-md-4">
                  <span className="p_specification">Part Number :</span>{" "}
                </td>
                <td className="col-md-8">
                  <ul>
                    <li>7AL87PA</li>
                  </ul>
                </td>
              </tr>
              <tr className="row mt-10">
                <td className="col-md-4">
                  <span className="p_specification">Color :</span>{" "}
                </td>
                <td className="col-md-8">
                  <ul>
                    <li>Black</li>
                  </ul>
                </td>
              </tr>
              <tr className="row mt-10">
                <td className="col-md-4">
                  <span className="p_specification">Suitable for :</span>{" "}
                </td>
                <td className="col-md-8">
                  <ul>
                    <li>Processing &amp; Multitasking</li>
                  </ul>
                </td>
              </tr>
              <tr className="row mt-10">
                <td className="col-md-4">
                  <span className="p_specification">Processor Brand :</span>{" "}
                </td>
                <td className="col-md-8">
                  <ul>
                    <li>Intel</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

        <main className="mt-5 pt-4">
  <div className="container dark-grey-text mt-5">
    {/*Grid row*/}
    <div className="row wow fadeIn">
      {/*Grid column*/}
      <div className="col-md-6 mb-4">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-md-6 mb-4">
        {/*Content*/}
        <div className="p-4">
          <div className="mb-3">
            <a href="">
              <span className="badge purple mr-1">Category 2</span>
            </a>
            <a href="">
              <span className="badge blue mr-1">New</span>
            </a>
            <a href="">
              <span className="badge red mr-1">Bestseller</span>
            </a>
          </div>
          <p className="lead">
            <span className="mr-1">
              <del>$200</del>
            </span>
            <span>$100</span>
          </p>
          <p className="lead font-weight-bold">Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor
            suscipit libero eos atque quia ipsa sint voluptatibus! Beatae sit
            assumenda asperiores iure at maxime atque repellendus maiores quia
            sapiente.
          </p>
          <form className="d-flex justify-content-left">
            {/* Default input */}
            <input
              type="number"
              defaultValue={1}
              aria-label="Search"
              className="form-control"
              style={{ width: 100 }}
            />
            <button className="btn btn-primary btn-md my-0 p" type="submit">
              Add to cart
              <i className="fas fa-shopping-cart ml-1" />
            </button>
          </form>
        </div>
        {/*Content*/}
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
    <hr />
    {/*Grid row*/}
    <div className="row d-flex justify-content-center wow fadeIn">
      {/*Grid column*/}
      <div className="col-md-6 text-center">
        <h4 className="my-4 h4">Additional information</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          suscipit modi sapiente illo soluta odit voluptates, quibusdam officia.
          Neque quibusdam quas a quis porro? Molestias illo neque eum in
          laborum.
        </p>
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
    {/*Grid row*/}
    <div className="row wow fadeIn">
      {/*Grid column*/}
      <div className="col-lg-4 col-md-12 mb-4">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-4 col-md-6 mb-4">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-4 col-md-6 mb-4">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
  </div>
</main>

    </div>
  )
}

export default EquipmentDetails