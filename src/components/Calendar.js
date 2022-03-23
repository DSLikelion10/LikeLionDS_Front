import React from 'react';
import '../css/ResetCSS.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Calendar() {
  const apikey = new FullCalendar(process.env.DSLL_CALENDAR_API_KEY);

  const eventSources = [
    {
      googleCalendarId:
        'https://calendar.google.com/calendar/embed?src=duksung%40likelion.org&ctz=Asia%2FSeoul',
      className: 'dsll',
      color: '#00a178',
    },
  ];
  return (
    <FullCalendar
      googleCalendarApikey={apikey}
      eventSources={eventSources}
      defaultView="dayGridMonth"
      plugins={[
        dayGridPlugin,
        //  googleCalendarPlugin
      ]}
    />
  );
}
