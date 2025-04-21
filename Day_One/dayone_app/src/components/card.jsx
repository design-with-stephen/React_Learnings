import React from 'react'

export default function card() {
    const services = [
        {
        title: "Our services",
        descriptions:"hey"
    },
        {
            title: "Our services",
            descriptions:"good"
        }
    ]
    return (
      
        // map the services
        services.map((service, index) => {
            return (
                <div key={index}>
                    <h2>{service.title}</h2>
                    <p>{ service.descriptions}</p>
                </div>)
        })
    // <div className='card'>
    //       <img src=""></img>
    //       <h2>Services</h2>
    //       <p>Our services</p>
    // </div>
  )
}
