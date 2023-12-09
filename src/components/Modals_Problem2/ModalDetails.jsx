import React from 'react'
import { Link } from 'react-router-dom'

const ModalDetails = ({ setShowDetails, country }) => {
  return (
    <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-primary">{country.country.name} Details</h5>
            <Link onClick={() => setShowDetails(null)} to="/problem-2" className="btn-close" aria-label="Close"></Link>
          </div>
          <div className="modal-body d-flex justify-content-center">
            <div className="card" style={{ width: '18rem' }}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Name: {country.country.name}</li>
                <li className="list-group-item">Phone: {country.phone}</li>
                <li className="list-group-item">This is a dummy text for the Mediusware Coding Test</li>
              </ul>
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center gap-3">
              <Link onClick={() => setShowDetails(null)} to="/problem-2" className="btn btn-lg btn-outline-danger" type="button" >Close</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDetails