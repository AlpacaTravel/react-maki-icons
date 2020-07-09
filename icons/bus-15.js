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

var bus15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path8043', d: 'M4,0C2.6364,0,1,0.7433,1,2.7461v5.4531V12c0,0,0,1,1,1v1c0,0,0,1,1,1s1-1,1-1v-1h7v1c0,0,0,1,1,1s1-1,1-1v-1 c0,0,1,0,1-1V2.7461C14,0.7006,12.764,0,11.4004,0H4z M4.25,1.5h6.5C10.8885,1.5,11,1.6115,11,1.75S10.8885,2,10.75,2h-6.5 C4.1115,2,4,1.8885,4,1.75S4.1115,1.5,4.25,1.5z M3,3h9c1,0,1,0.9668,1,0.9668V7c0,0,0,1-1,1H3C2,8,2,7,2,7V4C2,4,2,3,3,3z M3,10 c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1s-1-0.4477-1-1S2.4477,10,3,10z M12,10c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1s-1-0.4477-1-1 S11.4477,10,12,10z' })], 'Bus15');

module.exports = bus15;
