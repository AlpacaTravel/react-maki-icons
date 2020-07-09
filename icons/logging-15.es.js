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

var logging15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M13.91,3.41,13.5,3l.2-.28c.02-.03.04-.05.06-.08A.969.969,0,0,0,14,1.99a1,1,0,0,0-1.62-.77c-.03.02-.06.05-.09.07L12,1.5l-.386-.386a.354.354,0,0,0-.525.475l.417.417-.5.5-.392-.392a.354.354,0,0,0-.525.475L10.5,3l-.5.5-.381-.381a.354.354,0,1,0-.528.472h0l.028.028L9.5,4,9,4.5l-.395-.395a.354.354,0,0,0-.517.483L8.5,5,8,5.5l-.365-.365a.354.354,0,0,0-.556.439h0C7.1,5.6,7.508,6,7.508,6L7,6.5l-.394-.392a.392.392,0,0,0-.5-.028.384.384,0,0,0-.028.5L6.1,6.6l.4.4L6,7.5l-.4-.4a.37.37,0,0,0-.5,0L6.248,8.244,12.09,2.41,12.5,2H13v.5l-.41.41L6.751,8.749,7.9,9.9a.355.355,0,0,0,0-.5l-.008-.009L7.5,9,8,8.5l.384.384a.354.354,0,0,0,.528-.472L8.5,8,9,7.5l.38.38a.354.354,0,0,0,.528-.472l-.02-.02L9.5,7l.5-.5.377.377A.35.35,0,0,0,10.64,7a.347.347,0,0,0,.252-.6L10.5,6l.5-.5.38.38a.354.354,0,0,0,.528-.472L11.88,5.38,11.5,5l.5-.5.381.381a.354.354,0,0,0,.528-.472l-.025-.025L12.5,4l.5-.5.382.382a.354.354,0,0,0,.528-.472ZM4.39,7.916C3.893,7.419,3.641,7,3,7H1.5a.5.5,0,0,0-.5.5v3A2.19,2.19,0,0,0,1.5,12l.815.811A2.251,2.251,0,0,0,5.493,13h0L7.5,11ZM3.5,10,2.262,11.238A1.3,1.3,0,0,1,2,10.5V8H3a.545.545,0,0,1,.335.194.455.455,0,0,1,.165.418Z' })], 'Logging15');

export default logging15;
