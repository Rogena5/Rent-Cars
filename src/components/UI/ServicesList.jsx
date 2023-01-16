import React from 'react'
import '../../Styles/ServicesList.css'
import {Col} from 'reactstrap'
import servicesDate from '../../assets/data/serviceData'


function ServicesList() {
  return (
  <>  {servicesDate.map(item => (<ServicesItem item={item} key={item.id}/>))}</>
  )
};



const ServicesItem = ({item}) => (<Col lg="4" md="4" sm="6" className='mb-6'>
<div className="services_item ">
    <span className='mb-3 d-inline-block'>
<i className={item.icon} />
    </span>
    <h6>{item.title}</h6>
    <p className="section_description">{item.desc}</p>
</div>
</Col>)

export default ServicesList