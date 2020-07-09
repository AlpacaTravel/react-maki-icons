'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

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

var horseRiding15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M6,1A1,1,0,1,1,7,2,1,1,0,0,1,6,1ZM8,3.5a.484.484,0,0,0,0-.058A.472.472,0,0,0,7.5,3h-1a.484.484,0,0,0-.058,0A.472.472,0,0,0,6,3.5V7H8Zm6.85,3.644L12.8,4.8l.085-.509a.478.478,0,0,0,.008-.063.25.25,0,0,0-.25-.25.346.346,0,0,0-.158.056L9,7H8L9,8V9.5a.5.5,0,0,1-1,0v-1L6,7H4a1.5,1.5,0,0,0-1.243.661A1.466,1.466,0,0,0,1.563,7H1.5A1.449,1.449,0,0,0,0,8.4v.086A3.781,3.781,0,0,0,.559,10.4a.278.278,0,0,0,.191.1A.25.25,0,0,0,1,10.25V9s-.02-.924.753-1c.5-.048.747.253.747.5V11L2,13v1.75a.25.25,0,0,0,.25.25.254.254,0,0,0,.25-.234V13L4,11v1l.5,2.8a.255.255,0,0,0,.246.2A.25.25,0,0,0,5,14.754H5L4.855,12.3,5.5,11H8v1l.508,2.813A.257.257,0,0,0,8.75,15,.25.25,0,0,0,9,14.75V12l.367-1a1.155,1.155,0,0,0,.543-.6l2.161-3.767a.863.863,0,0,0,1.023.4l1.066.818a.591.591,0,0,0,.35.135.487.487,0,0,0,.475-.4A.552.552,0,0,0,14.85,7.144Z' })], 'HorseRiding15');

module.exports = horseRiding15;
