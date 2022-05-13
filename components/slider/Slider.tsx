import React, {
  useState,
  useEffect,
  CSSProperties,
  useImperativeHandle,
  forwardRef,
  cloneElement,
  ReactElement,
  Ref,
} from "react";
import { useTransition, useSpringRef } from "react-spring";
import { useGesture } from "react-use-gesture";
import styles from "./Slider.module.scss";

interface Slides {
  slides: Array<ReactElement>;
}

interface RefObject {
  setIndex: (index: number) => void;
  index: number;
}

const Slider = forwardRef(({ slides }: Slides, ref) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<string>("");

  useImperativeHandle(
    ref,
    () => ({
      setIndex: (index: number) => {
        if (index < slides.length) {
          setSlideIndex(index);
        } else {
          setSlideIndex(0);
        }
      },
      index: slideIndex,
    }),
    [slideIndex, slides]
  );

  const transRef = useSpringRef();
  const transitions = useTransition(slideIndex, {
    key: slideIndex,
    leave: {
      opacity: 1,
      transform: (function () {
        switch (slideDirection) {
          case "right":
            return "translate3d(-100%,0,0)";
          case "left":
            return "translate3d(100%,0,0)";
          default:
            return "translate3d(0,0,0)";
        }
      })(),
    },
    from: {
      opacity: 1,
      transition:
        "all 100ms cubic-bezier(0.320, 0.000, 0.320, 1.000)" /* ease-in-out */,
      transform: (function () {
        switch (slideDirection) {
          case "right":
            return "translate3d(100%,0,0)";
          case "left":
            return "translate3d(-100%,0,0)";
          default:
            return "translate3d(0,0,0)";
        }
      })(),
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)",
    },
    //exitBeforeEnter: false,

    // order: ['leave', 'enter', 'update', 'from'],
  });

  const handleClick = (direction: string) => {
    if (direction == "left" && slideIndex - 1 >= 0) {
      setSlideIndex(slideIndex - 1);
      setSlideDirection(direction);
    }

    if (direction == "right" && slideIndex + 1 < slides.length) {
      setSlideIndex(slideIndex + 1);
      setSlideDirection(direction);
    }
  };

  useEffect(() => {
    transRef.start();
  });

  return (
    <>
      <div className={styles.sliderContainer}>
        <div
          onClick={() => {
            handleClick("left");
          }}
          className={styles.arrow + " " + styles.arrowLeft}
        >
          <div className={styles.dirction}>
            <span>‹</span>
          </div>
        </div>

        <div className={styles.sliderContent}>
          <div>
            {transitions((style, i) => {
              const Slide = slides[i];

              return (
                <div className={styles.test}>
                  {cloneElement(Slide, { style: style })}
                </div>
              );
            })}
          </div>
        </div>

        <div
          onClick={() => {
            handleClick("right");
          }}
          className={styles.arrow + " " + styles.arrowRight}
        >
          <div className={styles.dirction}>
            <span>›</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default Slider;
