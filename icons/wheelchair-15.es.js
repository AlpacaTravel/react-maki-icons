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

var wheelchair15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M12,1.5C12,2.3284,11.3284,3,10.5,3S9,2.3284,9,1.5S9.6716,0,10.5,0S12,0.6716,12,1.5z M2.82,4.87l1.74-1.71l1.85,1.29 L5.67,5.7c1.0747,0.3341,2.0207,0.9904,2.71,1.88l0.88-1.5c0.2295-0.4158,0.0785-0.939-0.3373-1.1685 C8.9218,4.911,8.9209,4.9105,8.92,4.91L8.3,4.54L4.79,2.1C4.5927,1.9594,4.3231,1.9805,4.15,2.15l-2,2 C1.9852,4.3716,2.0312,4.6848,2.2528,4.8496C2.4193,4.9735,2.645,4.9816,2.82,4.87z M8.13,10.94 c-0.0143,1.2308-0.5794,2.3904-1.54,3.16c-0.7118,0.5804-1.6016,0.8982-2.52,0.9C1.8261,15,0.0055,13.1839,0,10.94 c0.0023-0.9231,0.3238-1.8169,0.91-2.53c0.1868-0.232,0.398-0.4432,0.63-0.63c0.7131-0.5862,1.6069-0.9077,2.53-0.91 C6.3139,6.8755,8.13,8.6961,8.13,10.94z M6,12.21C6.7679,11.2051,6.5758,9.7679,5.5709,9C4.7501,8.3727,3.6109,8.3727,2.79,9 C2.5283,9.151,2.311,9.3683,2.16,9.63c-0.6923,1.0584-0.3956,2.4777,0.6628,3.17c0.7615,0.4981,1.7457,0.4981,2.5072,0 C5.5805,12.6365,5.8061,12.4378,6,12.21z M14.2,13.21l-2.49-5C11.5906,7.9251,11.3088,7.7425,11,7.75H8.51 c0.3293,0.4578,0.5856,0.9638,0.76,1.5h1.26l2.29,4.58c0.185,0.3728,0.6372,0.525,1.01,0.34c0.3728-0.185,0.525-0.6372,0.34-1.01 L14.2,13.21z' })], 'Wheelchair15');

export default wheelchair15;
