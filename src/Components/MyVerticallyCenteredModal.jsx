import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Enterprise Filling System
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Documentation and Library Digitization</h5>
          <p>
            It is a database of Documents and library files, properly labelelled, indexed and arranged to reduce document location hastle and refrencing
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  


export default MyVerticallyCenteredModal