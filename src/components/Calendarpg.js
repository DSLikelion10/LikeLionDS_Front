import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '../css/Calendar.css';

// https://fullcalendar.io/docs/google-calendar
export default function Calendarpg() {
  const apiKey = process.env.REACT_APP_CAL_API_KEY;

  return (
    <div className="cal-container">
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        googleCalendarApiKey={apiKey}
        events={{
          googleCalendarId: 'ds.likelion@gmail.com',
        }}
        eventDisplay={'block'}
        eventTextColor={'#FFF'}
        eventColor={'#F2921D'}
        height={'660px'}
        Toolbar
      />
    </div>
  );
}
