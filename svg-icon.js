import React from "react";
import PropTypes from "prop-types";

function SvgIcon(props, ref) {
  const { size = 11 } = props; 

  const { 
    style,
    className,
    htmlColor,
    component: Component = 'svg',
    viewBox = `0 0 ${size} ${size}`,
    children,
    titleAccess,
    ...other
  }

  return (
    <Component
      className={className}
      style={style}
      viewBox={viewBox}
      focusable={false}
      aria-hidden={titleAccess ? undefined : true}
      role={titleAccess ? 'img' : undefined}
      color={htmlColor}
      ref={ref}
      {...other}
    >
      {children}
      {titleAccess ? (<title>{titleAccess}</title>): null}
    </Component>
  )
}

SvgIcon.propTypes = {
  style: PropTypes.any,
  className: PropTypes.string,
  component: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
  children: PropTypes.any,
}

SvgIcon.defaultProps = {
  style: null,
  children: null,
  component: null,
  className: null,
}

export default React.forwardRef(SvgIcon);