import React from 'react';
import BookingForm from '../components/Forms/BookingForm';

const BookingPage = () => {
  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <div className="page-title">Book Your Session</div>
        <div className="page-subtitle">Choose a program and fill your details</div>
      </div>
      <div className="booking-container">
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;
