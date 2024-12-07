import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = (props: { opacity?: number }) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    //@ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.07 2.81997L3.13999 8.36997C2.35999 8.98997 1.85999 10.3 2.02999 11.28L3.35999 19.24C3.59999 20.66 4.95999 21.81 6.39999 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
      stroke="#fff"
      strokeOpacity={props.opacity === undefined ? 0.5 : props.opacity}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeIcon;
