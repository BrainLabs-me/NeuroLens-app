import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AssistantIcon(props: { opacity?: number }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      //@ts-expect-error
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.59 12.26a5.13 5.13 0 100-10.26 5.13 5.13 0 000 10.26zM6.36 19.44a3.08 3.08 0 100-6.16 3.08 3.08 0 000 6.16zM16.62 22a2.56 2.56 0 100-5.12 2.56 2.56 0 000 5.12z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default AssistantIcon;
