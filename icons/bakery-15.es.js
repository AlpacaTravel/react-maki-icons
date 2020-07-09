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

var bakery15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path5230', d: 'M5.2941,4.3824L6,9.5 c0,0,0,1,1,1h1c1,0,1-1,1-1l0.7059-5.1176C9.7059,3,7.5,3,7.5,3S5.291,3,5.2941,4.3824z M3.5,5C2,5,2,6,2,6l1,4h1.5 c0.755,0,0.7941-0.7647,0.7941-0.7647L4.5,5H3.5z M1.5,7.5c0,0-0.6176-0.0294-1.0588,0.4118C0,8.3529,0,8.7941,0,8.7941V11h0.8824 C2,11,2,10,2,10L1.5,7.5z' }), React.createElement('path', { key: 's-1', id: 'path5230-2', d: 'M11.5,5C13,5,13,6,13,6l-1,4h-1.5 c-0.755,0-0.7941-0.7647-0.7941-0.7647L10.5,5H11.5z M13.5,7.5c0,0,0.6176-0.0294,1.0588,0.4118C15,8.3529,15,8.7941,15,8.7941V11 h-0.8824C13,11,13,10,13,10L13.5,7.5z' })], 'Bakery15');

export default bakery15;
