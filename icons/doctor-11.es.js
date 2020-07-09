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

var doctor11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.5,5.87c0.0017-0.8174-0.6596-1.4813-1.477-1.483S6.5417,5.0466,6.54,5.864C6.5386,6.54,6.9955,7.131,7.65,7.3v0.42 c0,1.0245-0.8305,1.855-1.855,1.855S3.94,8.7445,3.94,7.72l0,0C3.9776,6.8275,4.3787,5.9893,5.05,5.4H5 c0.718-0.4684,1.1564-1.2628,1.17-2.12V1.79c0-0.613-0.4969-1.11-1.11-1.11c-0.0033,0-0.0067,0-0.01,0H4.5 c-0.2043,0-0.37,0.1657-0.37,0.37S4.2957,1.42,4.5,1.42h0.55c0.2043,0,0.37,0.1657,0.37,0.37v1.49l0,0 c0,1.0178-0.8222,1.8445-1.84,1.85V5.4l0,0V5.13C2.5583,5.1355,1.7255,4.3117,1.72,3.29c0-0.0033,0-0.0067,0-0.01l0,0V1.79 c0-0.2043,0.1657-0.37,0.37-0.37l0,0h0.52c0.2043,0,0.37-0.1657,0.3699-0.3701C2.9799,0.8456,2.8143,0.68,2.61,0.68H2.09 C1.4848,0.6909,0.9999,1.1847,1,1.79v1.49C0.9978,4.1241,1.4086,4.9158,2.1,5.4l0,0c0.6676,0.591,1.065,1.429,1.1,2.32 c0,1.4332,1.1618,2.595,2.595,2.595S8.39,9.1532,8.39,7.72V7.3C9.0424,7.1316,9.4986,6.5438,9.5,5.87z M8,6.61 c-0.4087,0-0.74-0.3313-0.74-0.74S7.5913,5.13,8,5.13s0.74,0.3313,0.74,0.74l0,0C8.74,6.2787,8.4087,6.61,8,6.61z' })], 'Doctor11');

export default doctor11;
