import React from "react";
import SvgIcon from "../components/svg-icon";

export default function createSvgIcon(children, name) {
  // Props
  const size = Number(name.replace(/[^\d]+/, ""));

  // Build the component to return
  const Component = (props, ref) => {
    <SvgIcon ref={ref} {...props} size={size}>
      {children}
    </SvgIcon>;
  };

  if (process.env.NODE_ENV !== "production") {
    Component.displayName = name;
  }

  return React.memo(React.forwardRef(Component));
}
