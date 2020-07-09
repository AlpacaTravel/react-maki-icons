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

var ferry15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M5.33,11c0.6745,0.009,1.3262,0.245,1.85,0.67l0.26,0.23h0.05l0.31-0.28c0.9817-0.8115,2.379-0.8846,3.44-0.18L13.5,7L12,6 V2.45c-0.0466-0.8-0.6989-1.4305-1.5-1.45H10c0.0343-0.518-0.3579-0.9657-0.8759-1C9.0828-0.0027,9.0413-0.0027,9,0H6 C5.482-0.0343,5.0343,0.3579,5,0.8759C4.9973,0.9172,4.9973,0.9587,5,1H4.5C3.6989,1.0195,3.0466,1.65,3,2.45V6L1.5,7l2.25,4.53 C4.2143,11.2041,4.7631,11.02,5.33,11z M4,2.45c0.0105-0.2594,0.2293-0.4611,0.4886-0.4506C4.4924,1.9996,4.4962,1.9998,4.5,2h6 c0.259-0.0171,0.4829,0.1789,0.5,0.4379c0.0014,0.0207,0.0014,0.0414,0,0.0621v3l-3.5-2L4,5.45C4,5.45,4,2.45,4,2.45z M14,13v1 c-0.2626,0.0194-0.5069,0.1416-0.68,0.34c-0.2717,0.2883-0.6178,0.4959-1,0.6c-0.6147,0.1815-1.2795,0.0425-1.77-0.37l-0.39-0.35 c-0.3043-0.3026-0.7957-0.3026-1.1,0c-0.14,0.12-0.27,0.25-0.42,0.37c-0.7328,0.5856-1.7814,0.556-2.48-0.07l-0.39-0.35 c-0.2864-0.2502-0.7136-0.2502-1,0c-0.19,0.15-0.36,0.32-0.55,0.47c-0.7043,0.5215-1.6732,0.4968-2.35-0.06l-0.31-0.27 C1.4153,14.1443,1.2172,14.0346,1,14v-1c0.2585-0.032,0.5205,0.0169,0.75,0.14c0.2782,0.1722,0.5424,0.3661,0.79,0.58 c0.2051,0.2235,0.5147,0.319,0.81,0.25c0.1125-0.0333,0.2177-0.0876,0.31-0.16c0.16-0.12,0.29-0.26,0.45-0.39 c0.7106-0.5888,1.7394-0.5888,2.45,0c0.16,0.13,0.31,0.28,0.47,0.41c0.2864,0.2502,0.7136,0.2502,1,0c0.16-0.13,0.31-0.28,0.47-0.41 c0.7123-0.5943,1.7477-0.5943,2.46,0c0.15,0.13,0.29,0.27,0.44,0.39c0.2864,0.2502,0.7136,0.2502,1,0l0.47-0.41 C13.1895,13.1408,13.5886,12.9995,14,13z' })], 'Ferry15');

export default ferry15;
