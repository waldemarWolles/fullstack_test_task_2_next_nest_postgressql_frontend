'use client'

import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material'
import { Event } from '../typings'
import Link from 'next/link'

const userData = {
  name: 'John',
  surname: 'Smith',
  email: 'jsmith@gmail.com',
}

const userEvents: Event[] = [
  {
    id: 1,
    name: 'football',
    description: 'Sport invented in England',
    chosen: true,
  },
  {
    id: 2,
    name: 'basketball',
    description: 'Sport invented in USA',
    chosen: true,
  },
  {
    id: 3,
    name: 'tennis',
    description: 'Sport invented in Africa',
    chosen: true,
  },
]

const allEvents: Event[] = [
  {
    id: 1,
    name: 'football',
    description: 'Sport invented in England',
    chosen: true,
  },
  {
    id: 2,
    name: 'basketball',
    description: 'Sport invented in USA',
    chosen: true,
  },
  {
    id: 3,
    name: 'movie',
    description: 'Pirates of the Caribbean',
    chosen: false,
  },
  {
    id: 4,
    name: 'tennis',
    description: 'Sport invented in Africa',
    chosen: true,
  },
  {
    id: 5,
    name: 'dota 2',
    description: 'Cyber sport',
    chosen: false,
  },
]

const User = () => {
  const [editUserEventsMode, setEditUserEventsMode] = React.useState(false)
  const [currentUserEvents, setCurrentUserEvents] = React.useState(userEvents)
  const [currentAllEvents, setCurrentAllEvents] = React.useState(allEvents)

  const handleChooseEvent = (event: Event) => {
    const eventId = currentAllEvents.findIndex((prevEvent) => prevEvent.id === event.id)
    if (event.chosen) {
      setCurrentUserEvents((prevEvents) => prevEvents.filter((prevEvent) => prevEvent.id !== event.id))
      setCurrentAllEvents((prevEvents) => {
        const newEvents = prevEvents
        newEvents[eventId].chosen = false
        return newEvents
      })
    } else {
      setCurrentUserEvents((prevEvents) => [...prevEvents, { ...event, chosen: true }])
      setCurrentAllEvents((prevEvents) => {
        const newEvents = prevEvents
        newEvents[eventId].chosen = true
        return newEvents
      })
    }
  }

  const handleOnSaveClick = () => {
    console.log(currentUserEvents, 'currentUserEvents')
    console.log(currentAllEvents, 'currentAllEvents')
    setEditUserEventsMode(false)
  }

  return (
    <div className="flex align-middle gap-20 pt-10 pl-10">
      <div>
        <h1 className="font-bold">User data</h1>
        <h3 className="font-semibold">User name: {userData.name}</h3>
        <h3 className="font-semibold">User surname: {userData.surname}</h3>
        <h3 className="font-semibold">User email: {userData.email}</h3>
      </div>
      {editUserEventsMode ? (
        <div>
          <h1 className="font-bold">Subscribe to Events</h1>
          <FormGroup>
            {currentAllEvents.map((event) => (
              <FormControlLabel
                key={event.id}
                onChange={() => handleChooseEvent(event)}
                control={<Checkbox checked={event.chosen} />}
                label={event.name}
              />
            ))}
          </FormGroup>
          <Button onClick={handleOnSaveClick} variant="contained" className="bg-black">
            Save
          </Button>
        </div>
      ) : (
        <div>
          <h1 className="font-bold">Subscribed Events</h1>
          {currentUserEvents.map((event) => (
            <div key={event.id}>
              <h3 className="font-semibold">
                Event:
                <Link href={`/eventtype/${event.name}`} className="px-2 py-1 text-blue-500 rounded-lg">
                  {event.name}
                </Link>
              </h3>
              <h3 className="font-semibold">Description: {event.description}</h3>
            </div>
          ))}
          <Button onClick={() => setEditUserEventsMode(true)} variant="contained" className="bg-black">
            Edit Mode
          </Button>
        </div>
      )}
    </div>
  )
}

export default User
