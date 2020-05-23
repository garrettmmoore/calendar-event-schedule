import React, { useEffect, useState, useContext } from "react";
import { Global } from "@emotion/core";
import axios from "axios";
import { MyThemeContext } from "../contexts/theme-context";
import EventList from "../components/event-list";

const HomePage = () => {
  const [events, setEvents] = useState(null);
  const streamerName = process.env.STREAMER_NAME;
  const { theme } = useContext(MyThemeContext);

  useEffect(() => {
    const fetchCal = async () => {
      const parsed = await axios.post("/.netlify/functions/get-calendar", {
        ical: `${process.env.CALENDAR_URL}`,
      });

      const events = Object.values(parsed.data);

      const eventList = events.map((event) => {
        return {
          id: event.uid,
          title: event.summary,
          date: new Date(event.start),
          description: event.description,
        };
      });

      setEvents(eventList);
    };

    fetchCal();
  }, []);

  return (
    <>
      <Global styles={{ body: { backgroundColor: theme.colors.background } }} />
      <main>
        <h1>{streamerName}'s Calendar</h1>
        {events ? <EventList events={events} /> : <p>Loading...</p>}
      </main>
    </>
  );
};

export default HomePage;
