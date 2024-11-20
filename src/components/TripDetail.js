import React from 'react';
import tripsData from '../tripsData';
import { useParams } from 'react-router';
import { Navigate } from 'react-router';
import Nav from './Nav';
function TripDetail() {

  const trip = tripsData[0];
  const params =useParams();
  let tripId = params.tripId;
  const findTrip = tripsData.find((x) => x.id == tripId);
  if (!findTrip){
  return <Navigate to={'/'}/>
  }

  return (
    <div>
      <Nav/>
    <div className="modal-dialog modal-xl">
           
      <div className="modal-content">
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {findTrip.name}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={findTrip.img}
                  alt="..."
                />
                <p className="mb-4">
                  City : {findTrip.city}
                  <br />
                  Length : {findTrip.length1}Km
                  <br />
                  Rating : {findTrip.rating}
                  <br />
                  Difficulty : {findTrip.difficulty}
                  <br />
                  Details : {findTrip.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default TripDetail;
