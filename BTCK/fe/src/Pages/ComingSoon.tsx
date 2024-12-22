import { useEffect, useState } from 'react';
import { IoRestaurant } from "react-icons/io5";
import "../styles/comingsoon.css";

import SideBar from "../Components/SideBar";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ComingSoon = () => {
    // Timer function
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`12/01/${year}`) - +new Date();

        let timeLeft: TimeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
    const [year] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents: JSX.Element[] = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval as keyof TimeLeft]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval as keyof TimeLeft]} {interval}{" "}
            </span>
        );
    });

    return (
        <>
            <SideBar />
            <div className="bgimg ml-24">
                <div className="logo-cont">
                    <IoRestaurant className="the-logo" />
                </div>
                <div className="coming-soon-container">
                    <h2>Chuẩn bị khai trương!!</h2>
                    <p className="top-p">Chương trình khai trương nhà hàng T-RESTAURANT, hàng ngàn phần quà sẽ được cập nhật chào đón các khách hàng đến ủng hộ nhà hàng.</p>
                    <hr />
                    <p className="bottom-p">Sớm gặp lại: {timerComponents.length ? timerComponents : <span>Chúng tôi sẽ mở cửa! 🔥</span>}</p>
                    <p className="bottom-p">Hẹn gặp lại các bạn: December {year}</p>
                </div>
                <div className="bottom"> </div>
            </div>
        </>
    );
};

export default ComingSoon;
