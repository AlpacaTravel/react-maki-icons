import React from "react";

export default function createSvgIcon(children, name) {
  // Props
  const size = Number(name.replace(/[^\d]+/, ""));

  // Build the component to return
  const Component = (props, ref) => {
    return (
      <SvgIconComponent ref={ref} {...props} size={size}>
        {children}
      </SvgIconComponent>
    );
  };

  if (process.env.NODE_ENV !== "production") {
    Component.displayName = name;
  }

  return React.memo(React.forwardRef(Component));
}

import PropTypes from "prop-types";

const SvgIcon = (props, ref) => {
  const { size = 11 } = props;

  const {
    style,
    className,
    htmlColor,
    component: Component = "svg",
    viewBox = `0 0 ${size} ${size}`,
    children,
    titleAccess,
    ...other
  } = props;

  return (
    <Component
      className={className}
      style={style}
      viewBox={viewBox}
      focusable={false}
      aria-hidden={titleAccess ? undefined : true}
      role={titleAccess ? "img" : undefined}
      color={htmlColor}
      ref={ref}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  );
};

const SvgIconComponent = React.forwardRef(SvgIcon);

SvgIcon.propTypes = {
  style: PropTypes.any,
  className: PropTypes.string,
  component: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
  children: PropTypes.any,
};

SvgIcon.defaultProps = {
  style: null,
  children: null,
  component: null,
  className: null,
};
