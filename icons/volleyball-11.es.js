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

var volleyball11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.99,5.73a3.6572,3.6572,0,0,1-.1.74A6.3224,6.3224,0,0,0,7.44,5.05a5.9537,5.9537,0,0,0-1.32-.27c-.03,0-.07-.01-.11-.01A4.6052,4.6052,0,0,1,5.5,3.64a1.0563,1.0563,0,0,1-.06-.24h.12a4.8784,4.8784,0,0,1,1.01.11,5.0388,5.0388,0,0,1,1.14.36,4.8341,4.8341,0,0,1,.94.53A5.1356,5.1356,0,0,1,9.99,5.73ZM9.33,7.31a5.1964,5.1964,0,0,0-1.36-.97c-.05.1-.11.19-.17.29a5.8645,5.8645,0,0,1-.59.82,7.1807,7.1807,0,0,1-.78.78,6.72,6.72,0,0,1-.93.65,6.3643,6.3643,0,0,1-1.86.72,4.524,4.524,0,0,0,3.72,0,4.1584,4.1584,0,0,0,1.25-.86,3.1983,3.1983,0,0,0,.43-.47,3.7473,3.7473,0,0,0,.48-.76A1.1915,1.1915,0,0,0,9.33,7.31ZM8.68,2.32a4.5077,4.5077,0,0,0-1.24-.88,3.979,3.979,0,0,0-.75-.28,4.3423,4.3423,0,0,0-1.03-.15,1.2787,1.2787,0,0,0-.32,0A5.3628,5.3628,0,0,0,5.25,2c0,.14.01.28.02.41a1.6165,1.6165,0,0,1,.22-.01,1.9237,1.9237,0,0,1,.24.01,6.6508,6.6508,0,0,1,1,.11,5.6947,5.6947,0,0,1,1,.28,6.7814,6.7814,0,0,1,1.02.47,6.6645,6.6645,0,0,1,.98.69A4.5655,4.5655,0,0,0,8.68,2.32ZM3.03,6.34a5.808,5.808,0,0,1-.4-.92,5.7849,5.7849,0,0,1-.28-1.03,6.86,6.86,0,0,1-.1-1.12V3.25a5.656,5.656,0,0,1,.07-.93A4.3939,4.3939,0,0,0,1.27,3.97,4.3206,4.3206,0,0,0,1,5.5a1.7671,1.7671,0,0,0,.01.23,4.4161,4.4161,0,0,0,.09.73,4.0749,4.0749,0,0,0,.31.91,1.0685,1.0685,0,0,0,.27-.07A5.0679,5.0679,0,0,0,3.2,6.63C3.14,6.53,3.08,6.44,3.03,6.34Zm3.88-.4a5.4992,5.4992,0,0,0-1.35-.19c-.02.03-.04.05-.06.08a6.2466,6.2466,0,0,1-.91,1.01,5.8334,5.8334,0,0,1-.8.61,6.5727,6.5727,0,0,1-1.83.82,3.1983,3.1983,0,0,0,.43.47,5.1724,5.1724,0,0,0,2.18-.51,5.4146,5.4146,0,0,0,.93-.55,5.5958,5.5958,0,0,0,.91-.84A4.8049,4.8049,0,0,0,7,6.01a.0517.0517,0,0,0,.02-.04A.2283.2283,0,0,0,6.91,5.94ZM4.88,4.78a5.6391,5.6391,0,0,1-.45-1.27,6.3861,6.3861,0,0,1-.16-.99c-.01-.17-.02-.35-.02-.52a5.83,5.83,0,0,1,.06-.84,3.9815,3.9815,0,0,0-.75.28A5.5806,5.5806,0,0,0,3.27,2.8c-.01.15-.02.3-.02.45a4.2153,4.2153,0,0,0,.04.62,4.7107,4.7107,0,0,0,.27,1.18,5.0984,5.0984,0,0,0,.42.92A.0517.0517,0,0,0,4,6.01a.1778.1778,0,0,0,.08-.07h.01a5.6817,5.6817,0,0,0,.84-1.06A.3131.3131,0,0,1,4.88,4.78Z' })], 'Volleyball11');

export default volleyball11;
