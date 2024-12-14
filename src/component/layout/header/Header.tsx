"use client";
import scss from "./Header.module.scss";
import { GiHeartOrgan } from "react-icons/gi";
import { HiCalendarDateRange } from "react-icons/hi2";
import { GiBackwardTime } from "react-icons/gi";

const Header = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h3 className={scss.h1}>
            <span>O</span>ur <span>P</span>hotos
          </h3>
          <h3>
            <span>Y</span>ou
            <span>
              <a>
                <GiHeartOrgan />
              </a>
            </span>
            <span>M</span>e
          </h3>
          <h6>
            <span>
            Date
            <a>

              <HiCalendarDateRange />
            </a>
            </span>
            : 11.07.2024 -
            <span>
              Time
              <a>
                <GiBackwardTime />
              </a>
            </span>
            : 19:09
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Header;
