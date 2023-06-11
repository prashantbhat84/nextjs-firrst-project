import React, { useRef } from 'react'
import styles from './EventSearch.module.css'
import Button from '../ui/Button'

const EventSearch = (props) => {
    const yearInputRef = useRef();
    const monthInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        props.onSearch("2022", "4");
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor='year'>
                        Year
                    </label>
                    <select id='year' ref={yearInputRef}>
                        <options value="2021" >2021</options>
                        <options value="2022">2022</options>

                    </select>
                </div>
                <div className={styles.control}>
                    <label htmlFor='month'>Month</label>
                    <select id='month' ref={monthInputRef}>
                        <options value='1'>Jan</options>
                        <options value='2'>Feb</options>
                        <options value='3'>Mar</options>
                        <options value='4'>Apr</options>
                        <options value='5'>May</options>
                        <options value='6'>Jun</options>
                        <options value='7'>Jul</options>
                        <options value='8'>Aug</options>
                        <options value='9'>Sep</options>
                        <options value='10'>Oct</options>
                        <options value='11'>Nov</options>
                        <options value='12'>Dec</options>


                    </select>
                </div>


            </div>
            <Button>Find Events</Button>
        </form>
    )
}

export default EventSearch