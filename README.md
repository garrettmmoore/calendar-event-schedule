# calendar-event-schedule

A web application that displays upcoming events from a calendar

## Run in development

Start Backend - (http://localhost:8888/.netlify/functions/get-calendar)

- `netlify dev`

Start Frontend - (http://localhost:8080/)

- Make sure the following is set in src/pages/index.js: "http://localhost:8888/.netlify/functions/get-calendar"

- `yarn develop`

## Deploy to production

- Make sure the following is set in src/pages/index.js: ".netlify/functions/get-calendar"

- `netlify deploy --prod`
