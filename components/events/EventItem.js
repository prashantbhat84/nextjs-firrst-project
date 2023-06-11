import Link from "next/link"
import styles from './EventItem.module.css'

const EventItem = (item) => {

    const { date, location, title, id, image } = item.item;

    const humanReadable = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`

    return (
        <li className={styles.item}>
            <img src={'/' + image} alt={title} />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{humanReadable}</time>
                    </div>
                    <div>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>

            </div>
        </li>
    )
}

export default EventItem