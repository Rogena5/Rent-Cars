import '../../Styles/FindCarForm.css'
import React from 'react'
import { Form, FormGroup } from 'reactstrap'

function FindCarForm() {
  return (
    <Form className='form'>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <FormGroup className='form_group'>
          <input type="text" placeholder='Form address' required/>
        </FormGroup>

        <FormGroup className='form_group'>
          <input type="text" placeholder='To address' required/>
        </FormGroup>

        <FormGroup className='form_group'>
          <input type="date" placeholder='journey date' required/>
        </FormGroup>

        <FormGroup className='select_group'>
          <select>
            <option value="ac">AC Car</option>
             <option value="non ac">NON AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className='form_group'>
          <input type="time" placeholder='journey time' required/>
        </FormGroup>

        <FormGroup className='form_group'>
          <button className="btn found_car-btn">Find Car</button>
        </FormGroup>
      </div>

    </Form>
  )
}

export default FindCarForm