import Link from "next/link";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

const HeroArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  // Mock Data
  const availableDates = [

    "15-02-2026",
    "16-02-2026",
    "17-02-2026",
    "15-03-2026",
    "16-03-2026",
  ];

  const bookedDates = [
    "18-02-2026",
    "19-02-2026",
    "20-02-2026",
    "05-03-2026",
    "06-03-2026",
  ];

  const unavailableDates = [

    "21-02-2026",
    "22-02-2026",
    "23-02-2026",
    "07-03-2026",
    "08-03-2026",
  ];

  const handleDateChange = (date) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    setSelectedDate(formattedDate);
    setSelectedTime(null);

    if (availableDates.includes(formattedDate)) {
      setTimeSlots([
        { time: "10:00 AM to 11:00 AM", available: true },
        { time: "11:00 AM to 02:00 PM", available: true },
        { time: "02:00 AM to 05:00 PM", available: true },
      ]);
    } else {
      setTimeSlots([]);
    }
  };

  const handleBooking = () => {
    if (selectedTime) {
      const whatsappNumber = "+919789655455";
      const whatsappMessage = `Hello, I would like to book an appointment on ${selectedDate} for the following time slots: ${selectedTime}.`;
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage,
      )}`;
      window.open(whatsappURL, "_blank");
    }
  };

  const tileClassName = ({ date }) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    if (bookedDates.includes(formattedDate)) return "booked-date";
    if (availableDates.includes(formattedDate)) return "available-date";
    if (unavailableDates.includes(formattedDate)) return "unavailable-date";
    return "";
  };

  return (
    <div className="hero-banner hero-style-1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2" offset="2"></div>
          <div className="col-lg-8">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="banner-content">
                  <h2
                    className="title"
                    data-sal-delay="100"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    Get best courses in{" "}
                    <span className="color-secondary">
                      <br />
                      IELTS, PTE, TOEFL{" "}
                    </span>
                    and Spoken English from SpeakSure.
                  </h2>
                  <p
                    data-sal-delay="200"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  ></p>
                  <div
                    className="banner-btn"
                    data-sal-delay="400"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    <Link href="/our-course" legacyBehavior>
                      <a className="edu-btn">
                        Find courses <i className="icon-4"></i>
                      </a>
                    </Link>
                  </div>
                  <ul className="shape-group">
                    <motion.li
                      className="shape-1 scene"
                      data-sal-delay="1000"
                      data-sal="fade"
                      data-sal-duration="1000"
                      animate={{
                        x: mouseReverse(25).x,
                        y: mouseReverse(25).y,
                      }}
                    >
                      <img
                        src="/assets/images/about/shape-13.png"
                        alt="Shape"
                      />
                    </motion.li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 bbc">
                <div className="banner-thumbnail">
                  <div className="booking-container">
                    <div className="calendar-container">
                      <h5 className="heading">Check Availability Online</h5>
                      <Calendar
                        onChange={handleDateChange}
                        minDate={new Date()}
                        tileClassName={tileClassName}
                      />

                      <div className="legend-container">
                        <span className="legend available">Available</span>
                        <span className="legend booked">Booked</span>
                        <span className="legend unavailable">
                          Not Available
                        </span>
                      </div>
                    </div>

                    {selectedDate && (
                      <div className="time-slots-container">
                        <h3 className="slot-title">
                          Time Slots for {selectedDate}
                        </h3>
                        {timeSlots.length > 0 ? (
                          timeSlots.map((slot, index) => (
                            <div key={index} className="time-slot-box">
                              <input
                                type="radio"
                                name="timeSlot"
                                className="rad"
                                onChange={() => setSelectedTime(slot.time)}
                              />
                              <span className="slot-time">{slot.time}</span>
                              <span className="slot-status">Available</span>
                            </div>
                          ))
                        ) : (
                          <p className="no-slots">No time slots available</p>
                        )}
                        {selectedTime && (
                          <button className="book-btn" onClick={handleBooking}>
                            Book Now
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* <div className="thumbnail" data-sal-delay="500" data-sal="slide-left" data-sal-duration="1000">
                                <img src="/assets/images/banner/heroimg.webp" alt="Girl Image" />
                            </div>
                            <div className="instructor-info" data-sal-delay="600" data-sal="slide-up" data-sal-duration="1000">
                                <div className="inner">
                                    <h5 className="title">Instructor</h5>
                                    <div className="media">
                                        <div className="thumb">
                                            <img src="/assets/images/banner/ins-img.jpg" alt="Images" />
                                        </div>
                                        <div className="content">
                                            <span>Top</span> Instructors
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                  <ul className="shape-group">
                    <li
                      className="shape-1"
                      data-sal-delay="1000"
                      data-sal="fade"
                      data-sal-duration="1000"
                    >
                      <img
                        src="/assets/images/about/shape-15.png"
                        alt="Shape"
                      />
                    </li>
                    <motion.li
                      className="shape-2 scene"
                      data-sal-delay="1000"
                      data-sal="fade"
                      data-sal-duration="1000"
                      animate={{
                        x: mouseDirection(25).x,
                        y: mouseDirection(25).y,
                      }}
                    >
                      <img
                        src="/assets/images/about/shape-16.png"
                        alt="Shape"
                      />
                    </motion.li>

                    <motion.li
                      className="shape-3 scene"
                      data-sal-delay="1000"
                      data-sal="fade"
                      data-sal-duration="1000"
                      animate={{
                        x: mouseReverse(20).x,
                        y: mouseReverse(20).y,
                      }}
                    >
                      <span className="circle-shape d-block"></span>
                    </motion.li>

                    <li
                      className="shape-4"
                      data-sal-delay="1000"
                      data-sal="fade"
                      data-sal-duration="1000"
                    >
                      {/* <img src="/assets/images/counterup/shape-02.png" alt="Shape" /> */}
                    </li>
                    <motion.li
                      className="shape-5 scene"
                      data-sal-delay="1000"
                      data-sal="fade"
                      data-sal-duration="1000"
                      animate={{
                        x: mouseReverse(25).x,
                        y: mouseReverse(25).y,
                      }}
                    >
                      <img
                        src="/assets/images/about/shape-13.png"
                        alt="Shape"
                      />
                    </motion.li>
                    {/* <motion.li className="shape-6 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                    animate={ {
                                        x: mouseDirection(20).x,
                                        y: mouseDirection(20).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-18.png" alt="Shape" />
                                </motion.li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2" offset="2"></div>
        </div>
        {/* row1--> */}
      </div>
      <div className="shape-7">
        <img src="/assets/images/about/h-1-shape-01.png" alt="Shape" />
      </div>
    </div>
  );
};

export default HeroArea;
