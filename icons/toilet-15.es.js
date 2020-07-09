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

var toilet15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M4.5,3C3.6716,3,3,2.3284,3,1.5S3.6716,0,4.5,0S6,0.6716,6,1.5S5.3284,3,4.5,3z M14,1.5C14,0.6716,13.3284,0,12.5,0 S11,0.6716,11,1.5S11.6716,3,12.5,3S14,2.3284,14,1.5z M8.86,6.64L8.86,6.64L6.38,4.15l0,0C6.2798,4.0492,6.142,3.9949,6,4H3 C2.8697,4.0003,2.7445,4.0503,2.65,4.14l0,0L0.14,6.63c-0.2261,0.177-0.2659,0.5039-0.0889,0.73s0.5039,0.2659,0.73,0.0889 C0.8142,7.423,0.8441,7.3931,0.87,7.36L3,5.2L1,11h2v3.33c-0.0075,0.0497-0.0075,0.1003,0,0.15 c0.0555,0.2761,0.3244,0.455,0.6005,0.3995C3.802,14.839,3.9595,14.6815,4,14.48l0,0V11h1v3.5l0,0 c0.0555,0.2761,0.3244,0.455,0.6005,0.3995C5.802,14.859,5.9595,14.7015,6,14.5c0.0075-0.0497,0.0075-0.1003,0-0.15V11h2L6,5.2 l2.14,2.16l0,0c0.0967,0.1081,0.2349,0.17,0.38,0.17C8.7954,7.5088,9.0061,7.2761,9,7C9.0023,6.8663,8.9521,6.737,8.86,6.64z M14.5,4h-4C10.2239,4,10,4.2239,10,4.5v5c0,0.2761,0.2239,0.5,0.5,0.5S11,9.7761,11,9.5v5c0,0.2761,0.2239,0.5,0.5,0.5 s0.5-0.2239,0.5-0.5v-5h1v5c0,0.2761,0.2239,0.5,0.5,0.5s0.5-0.2239,0.5-0.5v-5c0,0.2761,0.2239,0.5,0.5,0.5S15,9.7761,15,9.5v-5 C15,4.2239,14.7761,4,14.5,4z' })], 'Toilet15');

export default toilet15;
