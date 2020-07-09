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

var sushi11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path4999', d: 'M3.5,2.5C3.2,2.5,3,2.6,3,2.9l0,0H2.1c-1.1,0-2,0.8-2,1.9c0,0.5,0.3,1,0.7,1.4 C0.3,6.5,0,6.9,0,7.5C0,8.3,0.7,9,1.6,9h1.9h2h1.9C8.3,9,9,8.3,9,7.5c0-0.2,0-0.4-0.1-0.6l1,0.5c0.4,0.2,0.8,0,1-0.3 c0.2-0.4-0.053-0.7941-0.3427-0.9442L9.8,5.8l0.5-0.1c0.4-0.1,0.7-0.4,0.6-0.8c-0.1-0.4-0.4-0.6-0.8-0.6l0,0H10L8.4,4.6 C8,3.9,7.3,3.1,6,3c0,0,0-0.5-0.5-0.5l0,0H3.5z M4,3.5h1v4.4l0,0l0,0H4l0,0l0,0V3.5z M7,5.9c0.2,0,0.3,0.1,0.4,0.3l0.1-0.1 C7.6,5.9,7.8,5.9,8,6s0.2,0.3,0.1,0.5L7.8,7C7.9,7.1,8,7.2,8,7.4c0,0.3-0.2,0.5-0.6,0.5H6v-1h0.7V6.3C6.7,6.1,6.8,5.9,7,5.9z M1.9,6 C2,6,2.2,6,2.3,6.2l0.1,0.2c0.1-0.1,0.2-0.1,0.3-0.1C2.9,6.3,3,6.5,3,6.6v0.8l0,0v0.5H1.6C1.2,7.9,1,7.7,1,7.4s0.2-0.5,0.6-0.5h0.3 L1.7,6.5c-0.1-0.2,0-0.4,0.1-0.5C1.8,6,1.8,6,1.9,6z' })], 'Sushi11');

export default sushi11;
