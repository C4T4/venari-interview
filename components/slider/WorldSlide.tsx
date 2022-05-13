import React, { CSSProperties } from "react";

import styles from "./Slider.module.scss";

interface Assets {
  video: string;
  image: string;
  stream: string;
}

interface UnlockRequirement {
  level: number;
  type: string;
}

interface World {
  id: string;
  name: string;
  assets: Assets;
  description: string;
  creatures: Array<Object>;
  unlockRequirement: UnlockRequirement;
}

interface WorldSlideProps {
  world: World;
  style?: CSSProperties;
}
const WorldSlide = ({ world, style }: WorldSlideProps) => {
  const truncate = (text: string, length: number) => {
    return text.length > 10 ? text.substring(0, length) + "..." : text;
  };

  return (
    <>
      <div>
        <div
          style={{
            background: "black",
            height: "100%",
            padding: "10px",
            minHeight: "400px",
          }}
        >
          <div className={styles.row}>
            <div>
              <img
                alt={world.name}
                className={styles.worldAvatar}
                src={world.assets.image}
              />
            </div>
            <h2 className={styles.title}>{world.name}</h2>
            <p
              style={{
                float: "right",
                color: "white",
                width: "100%",
                textAlign: "right",
              }}
            >
              You are here
            </p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.row}>
            <div className={styles.column}>
              <h2 className={styles.subTitle}>About</h2>
              <p className={styles.description}>
                {truncate(world.description, 140)}
              </p>
            </div>
            <div className={styles.column}>
              <h2 className={styles.subTitle}>To Unlock</h2>
              <p className={styles.description}>
                {"Reach LVL " + world.unlockRequirement.level + " to Unlock"}
              </p>
            </div>
            <div className={styles.column}>
              <h2 className={styles.subTitle}>Creatures</h2>
              <div className={styles.description}>
                {[...Array(5)].map((creature, index) => {
                  return (
                    <div
                      style={{ margin: "3px" }}
                      key={index}
                      className={styles.creature}
                    >
                      <span>
                        <svg
                          width="17"
                          height="24"
                          viewBox="0 0 17 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="#99ACC2">
                            <path d="M8.46875 0C4.71875 0 2.28125 1.54688 0.359375 4.3125C0.03125 4.78125 0.125 5.48438 0.640625 5.8125L2.65625 7.35938C3.125 7.73438 3.82812 7.64062 4.20312 7.17188C5.375 5.71875 6.26562 4.875 8.09375 4.875C9.54688 4.875 11.3281 5.76562 11.3281 7.17188C11.3281 8.25 10.4375 8.76562 9.03125 9.5625C7.34375 10.5 5.14062 11.6719 5.14062 14.5781V15C5.14062 15.6562 5.65625 16.125 6.26562 16.125H9.6875C10.2969 16.125 10.8125 15.6562 10.8125 15V14.7656C10.8125 12.75 16.6719 12.6562 16.6719 7.21875C16.6719 3.14062 12.4062 0 8.46875 0ZM8 17.5312C6.17188 17.5312 4.71875 18.9844 4.71875 20.7656C4.71875 22.5469 6.17188 24 8 24C9.78125 24 11.2344 22.5469 11.2344 20.7656C11.2344 18.9844 9.78125 17.5312 8 17.5312Z"></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div className={styles.line}></div>
            <p className={styles.moreText + " " + styles.center}>See More</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldSlide;
