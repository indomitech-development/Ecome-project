import React from 'react'

export const Footer = () => {
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row d-flex" >
          <div className="col-md-2 d-flex-1 d-flex flex-column">
         <p className='fs-5  '>Categories</p>
          <span className='text-muted'>Women</span>
          <span className='text-muted'>Men</span>
          <span className='text-muted'>Stores</span>
          <span className='text-muted'>Accessories</span>
          <span className='text-muted'>New Arivals</span>
          </div>
          <div className="col-md-2 d-flex-1 d-flex flex-column">
            <p className='fs-5'>Links</p>
            <span className='text-muted'>FAQ</span>
          <span className='text-muted'>Pages</span>
          <span className='text-muted'>Stores</span>
          <span className='text-muted'>Compare</span>
          <span className='text-muted'>COOKIES</span>
            </div>
            <div className="col-md-4 d-flex-1 d-flex flex-column">
            <p className='fs-5'>About</p>
           <span className="text-muted" style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </span>
            </div>
            <div className="col-md-4 d-flex-1 d-flex flex-column">
            <p className='fs-5'>Contact</p>
            <span className="text-muted" style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 d-flex align-items-center">
          <span className='fs-4 text-primary '> HASEEB STORE</span>
          <span className='ms-5 text-muted '>	&#169; Copyright 2023,All Right Reserved </span>
        </div>
        <div className="col-md-6">
          <img src='images/payment.png' width={400} style={{marginLeft:'70px'}} />
        </div>
      </div>
    </div>
    </div>
  )
}
