import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModalRight(props) {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Enterprise Land Portal
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h5>One Stop Solution to Land Data Management</h5>
      <p>
            Enterprise Land Portal (ELP) is a one-stop shop system that manages lands title lifecycle with robust data capture feature for input of land data and attributes.
      </p>
      <p>It is a database of land related issues, acquisitions, spills notification, demand notification, land owners/landlords, communities, right of way, leases, damages, natural disaster, encroachment, restoration, records maintenance, payments, etc that supports critical land management decisions/processes</p>
    </Modal.Body>
    <Modal.Footer>
      <Button className='btn' onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default MyVerticallyCenteredModalRight