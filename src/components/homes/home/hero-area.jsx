import Link from "next/link";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { FaCalendarAlt, FaTimes, FaClock, FaCheck } from "react-icons/fa";

const HeroArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();

  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const [showWarningModal, setShowWarningModal] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const availableDates = [
    // September 2026

    "2026-09-05",
    "2026-09-10",
    "2026-09-11",
    "2026-09-12",
    "2026-09-15",
    "2026-09-18",
    "2026-09-19",
    "2026-09-22",
    "2026-09-25",
    "2026-09-29",

    // October 2026
    "2026-10-01",
    "2026-10-02",
    "2026-10-06",
    "2026-10-08",
    "2026-10-09",
    "2026-10-13",
    "2026-10-15",
    "2026-10-16",
    "2026-10-20",
    "2026-10-22",
    "2026-10-23",
    "2026-10-27",
    "2026-10-29",
    "2026-10-30",
  ];

  const bookedDates = [
    // September 2026

    "2026-09-04",
    "2026-09-07",
    "2026-09-13",
    "2026-09-14",
    "2026-09-20",
    "2026-09-21",
    "2026-09-27",
    "2026-09-28",

    // October 2026
    "2026-10-03",
    "2026-10-04",
    "2026-10-10",
    "2026-10-11",
    "2026-10-17",
    "2026-10-18",
    "2026-10-24",
    "2026-10-25",
    "2026-10-31",
  ];

  const unavailableDates = [
    // September 2026
    "2026-09-06",
    "2026-09-08",
    "2026-09-09",
    "2026-09-16",
    "2026-09-17",
    "2026-09-23",
    "2026-09-24",
    "2026-09-26",
    "2026-09-30",

    // October 2026
    "2026-10-05",
    "2026-10-07",
    "2026-10-12",
    "2026-10-14",
    "2026-10-19",
    "2026-10-21",
    "2026-10-26",
    "2026-10-28",
  ];

  const handleDateChange = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");

    setSelectedDate(formattedDate);
    setSelectedTime(null);

    if (availableDates.includes(formattedDate)) {
      setTimeSlots([
        {
          time: "10:00 AM - 11:00 AM",
          available: true,
        },
        {
          time: "11:00 AM - 02:00 PM",
          available: true,
        },
        {
          time: "02:00 PM - 05:00 PM",
          available: true,
        },
        {
          time: "07:00 PM - 08:00 PM",
          available: true,
        },
      ]);

      setShowBookingModal(true);
      setShowWarningModal(false);
    } else if (bookedDates.includes(formattedDate)) {
      setWarningMessage(
        "This date is already fully booked. Please select another available date.",
      );

      setShowWarningModal(true);
      setShowBookingModal(false);
    } else if (unavailableDates.includes(formattedDate)) {
      setWarningMessage(
        "This date is unavailable. Sundays and other unavailable dates cannot be booked.",
      );

      setShowWarningModal(true);
      setShowBookingModal(false);
    } else {
      setWarningMessage(
        "No booking slots are available for this date. Please select an available date.",
      );

      setShowWarningModal(true);
      setShowBookingModal(false);
    }
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) return;

    const whatsappNumber = "919789655455";

    const whatsappMessage = `


    Hello Speaksure Academy, I would like to book a free consultation for your courses.

    Date: ${selectedDate}
    Time: ${selectedTime}

    Please confirm my appointment slot. Thank you!
`.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setShowBookingModal(false);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    setSelectedTime(null);
  };
  const closeWarningModal = () => {
    setShowWarningModal(false);
  };

  const tileClassName = ({ date }) => {
    const formattedDate = format(date, "yyyy-MM-dd");

    if (bookedDates.includes(formattedDate)) {
      return "booked-date";
    }

    if (availableDates.includes(formattedDate)) {
      return "available-date";
    }

    if (unavailableDates.includes(formattedDate)) {
      return "unavailable-date";
    }

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
                    <div className="booking-header">
                      <div className="booking-icon">
                        <FaCalendarAlt />
                      </div>

                      <div>
                        <h5 className="heading">Book a Free Consultation</h5>

                        <p>
                          Select an available date to choose your time slot.
                        </p>
                      </div>
                    </div>

                    <div className="calendar-container">
                      <Calendar
                        onChange={handleDateChange}
                        minDate={new Date()}
                        tileClassName={tileClassName}
                        prev2Label={null}
                        next2Label={null}
                        showNeighboringMonth={false}
                      />

                      <div className="legend-container">
                        <span className="legend available">
                          <i></i>
                          Available
                        </span>

                        <span className="legend booked">
                          <i></i>
                          Booked
                        </span>

                        <span className="legend unavailable">
                          <i></i>
                          Unavailable
                        </span>
                      </div>
                    </div>
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

      {showBookingModal && (
        <div className="booking-modal-overlay" onClick={closeBookingModal}>
          <div
            className="booking-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeBookingModal}
              aria-label="Close booking popup"
            >
              <FaTimes />
            </button>

            <div className="modal-icon">
              <FaClock />
            </div>

            <h3>Select Your Time</h3>

            <p className="modal-date">
              Appointment Date:
              <strong>{selectedDate}</strong>
            </p>

            <div className="modal-slots">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  type="button"
                  className={`modal-slot ${
                    selectedTime === slot.time ? "active" : ""
                  }`}
                  onClick={() => setSelectedTime(slot.time)}
                >
                  <span>
                    <FaClock /> {slot.time}
                  </span>

                  <small>
                    <FaCheck /> Available
                  </small>
                </button>
              ))}
            </div>

            <button
              type="button"
              className="confirm-booking-btn"
              disabled={!selectedTime}
              onClick={handleBooking}
            >
              {selectedTime ? (
                <>
                  <FaCheck /> Confirm Booking
                </>
              ) : (
                "Select a Time Slot"
              )}
            </button>

            <button
              type="button"
              className="cancel-booking-btn"
              onClick={closeBookingModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {showWarningModal && (
        <div className="booking-modal-overlay" onClick={closeWarningModal}>
          <div
            className="warning-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeWarningModal}
              aria-label="Close warning popup"
            >
              <FaTimes />
            </button>

            <div className="warning-icon">
              <FaTimes />
            </div>

            <h3>Date Not Available</h3>

            <p>{warningMessage}</p>

            <button
              type="button"
              className="warning-btn"
              onClick={closeWarningModal}
            >
              Choose Another Date
            </button>
          </div>
        </div>
      )}

      <div className="shape-7">
        <img src="/assets/images/about/h-1-shape-01.png" alt="Shape" />
      </div>
    </div>
  );
};

export default HeroArea;
