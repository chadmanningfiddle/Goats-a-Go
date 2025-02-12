import React, { useState } from 'react';

export default function PrivateLessons() {
  const [bookings, setBookings] = useState([]);

  function bookLesson() {
    const newBooking = { date: new Date().toISOString() };
    setBookings([...bookings, newBooking]);
  }

  return (
    <div>
      <h2>Private Lessons</h2>
      <button onClick={bookLesson}>Book a Lesson</button>
      <ul>
        {bookings.map((b, i) => <li key={i}>{b.date}</li>)}
      </ul>
    </div>
  );
}