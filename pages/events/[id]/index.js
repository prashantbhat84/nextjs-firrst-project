import React from 'react'
import { useRouter } from 'next/router'
import EventSummary from '@/components/events/eventdetail/event-summary'
import EventLogistics from '@/components/events/eventdetail/event-logistics'
import EventContent from '@/components/events/eventdetail/event-content'

import { getEventById } from '../../../dummy-data'

const EventDetail = () => {
    const router = useRouter();
    const id = router.query.id;
    const event = getEventById(id);
    if (!event) {
        return <p>No Event Found</p>
    }


    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}

export default EventDetail