import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ModalDetails from './Modals_Problem2/ModalDetails';
import ModalA from './Modals_Problem2/ModalA';
import ModalB from './Modals_Problem2/ModalB';

const Problem2 = () => {
    const { content } = useParams();
    const [showDetails, setShowDetails] = useState(null);
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                <div className="d-flex justify-content-center gap-3">
                    <Link to="/problem-2/all_content" className="btn btn-lg btn-outline-primary" type="button" data-bs-target="#exampleModal" >All Content</Link>
                    <Link to="/problem-2/us_country" className="btn btn-lg btn-outline-warning" type="button" >US Contacts</Link>
                </div>
            </div>
            {
                showDetails ? <ModalDetails setShowDetails={setShowDetails} country={showDetails} /> :
                    <>
                        {
                            content === 'all_content' &&
                            <ModalA setShowDetails={setShowDetails} />
                        }
                        {
                            content === 'us_country' &&
                            <ModalB setShowDetails={setShowDetails} />
                        }
                    </>
            }
        </div>
    );
};

export default Problem2;