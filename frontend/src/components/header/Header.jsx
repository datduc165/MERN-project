
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass, faBusSimple, faPerson, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import format from 'date-fns/format'
import "./header.css"
const Header = () => {
    const [calender, setCalender] = useState('date');
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    useEffect(() => {
        setCalender(format(new Date(), 'dd/MM/yyyy'))
    }, []);
    const handleSelect = (date) => {
        setCalender(format(date, 'dd/MM/yyyy'));
    }
    const [people, setPeople] = useState(
        {adult:1}
    );
    const [openPeople, setOpenPeople] = useState(false);
    const handleOpenPeople = () => {
        setOpenPeople(!openPeople);
    };
    return (
        <div className="header">
            <div className="headerTitle">
                <h1>Lorem ipsum dolor sit.</h1>
                <p>Let us do the transport and you can 100% enjoy the holiday</p>
            </div>
            <div className="headerSearch">
                <div className="searchItem">
                    <FontAwesomeIcon icon={faBusSimple} className="headerIcon" />
                    <input
                        type="text"
                        placeholder="Departure"
                        className="searchInput"
                    />
                </div>
                <div className="searchItem">
                    <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
                    <input
                        type="text"
                        placeholder="Destination"
                        className="searchInput"
                    />
                </div>
                <div className="searchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon calender" onClick={handleOpen} />
                    <span className="searchText">{calender}</span>
                    <Calendar date={new Date()}
                        onChange={handleSelect}
                        className={open ? "date loaded" : "date"}
                    />

                </div>
                <div className="searchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" onClick={handleOpenPeople} />
                    <span className="searchText">{`${people.adult} adult`}</span>
                    <div className="people">
                        <div className={openPeople ? "peopleCount loaded" : "peopleCount"}  >
                            <span className="peopleText">Adult</span>
                            <button className="peopleCountBtn">+</button>
                            <span className="peopleNumber">1</span>
                            <button className="peopleCountBtn">-</button>
                        </div>
                    </div>
                </div>
                <div className="searchItem"><button className="headerBtn">
                    Search
                </button></div>

            </div>
        </div>

    )


}

export default Header