# Event logger

This is an application to record events that happen on a construction site

### Dev Note

Please don't update the `data/events.json` as that is where the data lives and changing anything may break the app. Add, update, and delete events through the app instead.

## Run Locally

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Tech Stack

**Client:** React, NextJS, TailwindCSS, React Query

**Server:** This application has no database and is purely run off of a json file and a custom read/write server that modifies to JSON. Making changes to events in the application will update the JSON file accordingly.
