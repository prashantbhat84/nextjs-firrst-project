import EventItem from "./EventItem"
import styles from './EventList.module.css'
const EventList = ({ items }) => {

    return (
        <ul className={styles.list}>
            {items.map(item => {

                return <EventItem key={item.id} item={item} />
            })}
        </ul>
    )
}

export default EventList