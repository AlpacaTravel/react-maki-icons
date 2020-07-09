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

var wetland15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M1.48,4.5C1.905,4.1467,2.4483,3.968,3,4c1.2273-0.0869,2.3154,0.7836,2.5,2l0.78,4.68c-0.6394-0.2893-1.3759-0.2709-2,0.05 L3.48,6C3.1874,5.1347,2.3926,4.5387,1.48,4.5z M7.48,11.24c0.3816-0.3076,0.825-0.5293,1.3-0.65L10,3 c0.2926-0.8653,1.0874-1.4613,2-1.5c-0.4198-0.3485-0.955-0.5269-1.5-0.5C9.2727,0.9131,8.1846,1.7836,8,3l-1.3,7.79 C6.9786,10.9052,7.2408,11.0565,7.48,11.24z M11.8,10.74L11.8,10.74c0.1565-0.1277,0.3238-0.2414,0.5-0.34L13,6 c0.2926-0.8653,1.0874-1.4613,2-1.5c-0.4198-0.3485-0.955-0.5269-1.5-0.5c-1.2273-0.0869-2.3154,0.7836-2.5,2l-0.67,4 C10.8731,10.123,11.3778,10.377,11.8,10.74z M14,12L14,12c-0.4346-0.01-0.8579,0.1394-1.19,0.42l-0.47,0.41 c-0.2847,0.2546-0.7153,0.2546-1,0c-0.15-0.12-0.29-0.26-0.44-0.39c-0.7076-0.5968-1.7424-0.5968-2.45,0 c-0.16,0.13-0.31,0.28-0.47,0.41c-0.2847,0.2546-0.7153,0.2546-1,0c-0.16-0.13-0.31-0.28-0.47-0.41 c-0.7059-0.5912-1.7341-0.5912-2.44,0c-0.15,0.13-0.29,0.27-0.44,0.39c-0.0892,0.0715-0.1909,0.1258-0.3,0.16 c-0.2922,0.0652-0.5969-0.0301-0.8-0.25c-0.2475-0.214-0.5117-0.4079-0.79-0.58C1.5336,12.0421,1.2974,11.9865,1.06,12H1 c-0.2761,0-0.5,0.2239-0.5,0.5S0.7239,13,1,13l0,0c0.246,0.0145,0.4762,0.126,0.64,0.31L2,13.57 c0.6717,0.55,1.6308,0.5747,2.33,0.06c0.19-0.14,0.36-0.32,0.55-0.47c0.2847-0.2546,0.7153-0.2546,1,0l0.39,0.35 c0.6937,0.6189,1.7322,0.6484,2.46,0.07c0.15-0.11,0.27-0.25,0.42-0.37c0.2976-0.3038,0.7851-0.3087,1.0889-0.0111 c0.0037,0.0037,0.0074,0.0074,0.0111,0.0111l0.39,0.35c0.4866,0.4124,1.1485,0.5516,1.76,0.37c0.3825-0.1036,0.7286-0.3113,1-0.6 c0.1549-0.1772,0.3674-0.294,0.6-0.33l0,0c0.2761,0,0.5-0.2239,0.5-0.5S14.2761,12,14,12z' })], 'Wetland15');

export default wetland15;