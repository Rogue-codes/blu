import React from 'react'
import Accordion from 'react-bootstrap/Accordion'





function Accord() {
  return (
<Accordion  defaultActiveKey="0" flush className='accd'>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Dedicated Team</Accordion.Header>
    <Accordion.Body className='bod'>
        In Every IT environment, availability is a very important factor. 
        The Assurance of our clients trust is very important to us and because 
        of this we make sure a 100% satisfacton rate is guaranteed by providing 
        round the clock service.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header>Development + Operations (DevOPs) Approach</Accordion.Header>
    <Accordion.Body className='bod'>
        A Unique method of project development and planning that 
        keys in all parties involved to provide an efficient solution
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>Outstanding Results</Accordion.Header>
    <Accordion.Body className='bod'>
        we ensure a holistic, stress free, fixed price and predetermined completion/target approach.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
  )
}

export default Accord