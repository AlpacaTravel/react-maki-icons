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

var gaming15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M13.1,12.5c-0.6,0.3-1.4,0.1-1.8-0.5l-1.1-1.4H4.8L3.7,12l0,0c-0.5,0.7-1.4,0.8-2.1,0.3c-0.5-0.4-0.7-1-0.6-1.5l0.7-3.7l0,0 C1.9,5.9,3,5,4.2,5v0H7V3.5C7,2.7,7.6,2,8.4,2h3.1C11.8,2,12,2.2,12,2.5S11.8,3,11.5,3h-3C8.2,3,8,3.2,8,3.4c0,0,0,0.1,0,0.1V5h2.8 v0c1.2,0,2.3,0.9,2.5,2.1l0,0l0.7,3.7l0,0C14.1,11.5,13.8,12.2,13.1,12.5z M6,7.5C6,6.7,5.3,6,4.5,6S3,6.7,3,7.5S3.7,9,4.5,9 S6,8.3,6,7.5z M12,7.5C12,7.2,11.8,7,11.5,7H11V6.5C11,6.2,10.8,6,10.5,6S10,6.2,10,6.5V7H9.5C9.2,7,9,7.2,9,7.5S9.2,8,9.5,8H10v0.5 C10,8.8,10.2,9,10.5,9S11,8.8,11,8.5V8h0.5C11.8,8,12,7.8,12,7.5z' })], 'Gaming15');

export default gaming15;
