import React, { CSSProperties, ReactElement } from "react";

import { animated } from "react-spring";

interface Slide {
  key?: string;
  content: ReactElement;
  style?: CSSProperties;
}

const Slide = ({ content, style }: Slide) => {
  return <animated.div style={style}>{content}</animated.div>;
};

export default Slide;
