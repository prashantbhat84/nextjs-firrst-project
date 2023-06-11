import React from 'react'
import { useRouter } from 'next/router';
import EventList from '@/components/events/EventList';
import EventSearch from '@/components/events/EventSearch';
import { getAllEvents } from '../../dummy-data'


const events = () => {
    const router = useRouter();
    const events = getAllEvents();
    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <>
            <EventSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </>
    )
}

export default events