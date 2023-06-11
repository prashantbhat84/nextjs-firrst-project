import React from 'react'
import { getFeaturedEvents } from '../dummy-data';
import EventList from '@/components/events/EventList';

const Home = () => {
    const featuredEvents = getFeaturedEvents();

    return (
        <EventList items={featuredEvents} />
    )
}

export default Home