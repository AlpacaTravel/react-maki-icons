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

var veterinary11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M5.5,4.32C4.2852,4.3446,3.3204,5.3493,3.345,6.5641C3.3464,6.6363,3.3515,6.7083,3.36,6.78l0,0 C2.9264,6.9258,2.5181,7.1384,2.15,7.41C1.5186,7.8752,1.384,8.7642,1.8492,9.3955C1.8528,9.4004,1.8564,9.4052,1.86,9.41 c0.4895,0.6043,1.3633,0.7267,2,0.28C4.3412,9.3542,4.9132,9.1728,5.5,9.17c0.5836-0.006,1.1554,0.1648,1.64,0.49 c0.6009,0.4953,1.4896,0.4096,1.9848-0.1913C9.1299,9.4625,9.135,9.4563,9.14,9.45c0.5003-0.5528,0.4578-1.4065-0.095-1.9068 C9.0084,7.51,8.97,7.4789,8.93,7.45L8.85,7.41C8.4703,7.1575,8.0646,6.9463,7.64,6.78l0,0c0.1438-1.2065-0.7176-2.3011-1.9241-2.445 C5.6442,4.3265,5.5722,4.3215,5.5,4.32z M1.63,3.12C1.0889,3.3737,0.8458,4.0102,1.08,4.56c0.0427,0.5931,0.5567,1.0401,1.15,1 c0.5411-0.2537,0.7842-0.8902,0.55-1.44C2.7373,3.5269,2.2233,3.0799,1.63,3.12z M9.37,3.12c0.5411,0.2537,0.7842,0.8902,0.55,1.44 c-0.0427,0.5931-0.5567,1.0401-1.15,1C8.2289,5.3063,7.9858,4.6698,8.22,4.12C8.2627,3.5269,8.7767,3.0799,9.37,3.12z M3.77,1 C3.257,1.2045,3.0069,1.7862,3.2115,2.2992C3.2142,2.3062,3.2171,2.3131,3.22,2.32c0.0792,0.5925,0.5637,1.0478,1.16,1.09 c0.513-0.2045,0.7631-0.7862,0.5585-1.2992C4.9358,2.1038,4.9329,2.0969,4.93,2.09C4.8508,1.4975,4.3663,1.0422,3.77,1z M7.23,1 c0.513,0.2045,0.7631,0.7862,0.5585,1.2992C7.7858,2.3062,7.7829,2.3131,7.78,2.32C7.7008,2.9125,7.2163,3.3678,6.62,3.41 C6.107,3.2055,5.8569,2.6238,6.0615,2.1108C6.0642,2.1038,6.0671,2.0969,6.07,2.09C6.1492,1.4975,6.6337,1.0422,7.23,1z' })], 'Veterinary11');

export default veterinary11;
