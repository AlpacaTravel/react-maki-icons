import React from 'react';
import PropTypes from 'prop-types';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function createSvgIcon(children, name) {
  // Props
  var size = Number(name.replace(/[^\d]+/, ""));

  // Build the component to return
  var Component = function Component(props, ref) {
    return React.createElement(
      SvgIconComponent,
      _extends({ ref: ref }, props, { size: size }),
      children
    );
  };

  if (process.env.NODE_ENV !== "production") {
    Component.displayName = name;
  }

  return React.memo(React.forwardRef(Component));
}

var SvgIcon = function SvgIcon(props, ref) {
  var _props$size = props.size,
      size = _props$size === undefined ? 11 : _props$size;
  var style = props.style,
      className = props.className,
      htmlColor = props.htmlColor,
      _props$component = props.component,
      Component = _props$component === undefined ? "svg" : _props$component,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === undefined ? "0 0 " + size + " " + size : _props$viewBox,
      children = props.children,
      titleAccess = props.titleAccess,
      other = objectWithoutProperties(props, ["style", "className", "htmlColor", "component", "viewBox", "children", "titleAccess"]);


  return React.createElement(
    Component,
    _extends({
      className: className,
      style: style,
      viewBox: viewBox,
      focusable: false,
      "aria-hidden": titleAccess ? undefined : true,
      role: titleAccess ? "img" : undefined,
      color: htmlColor,
      ref: ref
    }, other),
    children,
    titleAccess ? React.createElement(
      "title",
      null,
      titleAccess
    ) : null
  );
};

var SvgIconComponent = React.forwardRef(SvgIcon);

SvgIcon.propTypes = {
  style: PropTypes.any,
  className: PropTypes.string,
  component: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
  children: PropTypes.any
};

SvgIcon.defaultProps = {
  style: null,
  children: null,
  component: null,
  className: null
};

var fastFood11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M10,8L10,8c0,1.1046-0.8954,2-2,2H3c-1.1046,0-2-0.8954-2-2H10z M10,5H1C0.4477,5,0,5.4477,0,6s0.4477,1,1,1h9 c0.5523,0,1-0.4477,1-1S10.5523,5,10,5z M8.55,1H2.46C1.6537,1,1,1.6536,1,2.46c0,0.0033,0,0.0067,0,0.01V4h9V2.47 C10.0055,1.6637,9.3564,1.0055,8.55,1C8.55,1,8.55,1,8.55,1z M3.55,3C3.2752,3.0276,3.0301,2.8273,3.0025,2.5525 C2.9749,2.2777,3.1753,2.0326,3.45,2.005c0.2748-0.0276,0.5199,0.1727,0.5475,0.4475C3.9991,2.4683,3.9999,2.4841,4,2.5 C4,2.7761,3.7761,3,3.5,3H3.55z M7.55,3C7.2752,3.0276,7.0301,2.8273,7.0025,2.5525S7.1753,2.0326,7.45,2.005 c0.2748-0.0276,0.5199,0.1727,0.5475,0.4475C7.9991,2.4683,7.9999,2.4841,8,2.5C8,2.7761,7.7761,3,7.5,3H7.55z' })], 'FastFood11');

export default fastFood11;
