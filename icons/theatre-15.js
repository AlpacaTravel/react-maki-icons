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

var theatre15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path6342-3', d: 'M2,1c0,0-1,0-1,1v5.1582C1,8.8885,1.354,11,4.5,11H5V8L2.5,9c0,0,0-2.5,2.5-2.5V5 c0-0.7078,0.0868-1.3209,0.5-1.7754C5.8815,2.805,6.5046,1.9674,8.1562,2.7539L9,3.3027V2c0,0,0-1-1-1C7.2922,1,6.0224,2,5,2 S2.7865,1,2,1z M3,3c0.5523,0,1,0.4477,1,1S3.5523,5,3,5S2,4.5523,2,4S2.4477,3,3,3z M7,4c0,0-1,0-1,1v5c0,2,1,4,4,4s4-2,4-4V5 c0-1-1-1-1-1c-0.7078,0-1.9776,1-3,1S7.7865,4,7,4z M8,6c0.5523,0,1,0.4477,1,1S8.5523,8,8,8S7,7.5523,7,7S7.4477,6,8,6z M12,6 c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1s-1-0.4477-1-1S11.4477,6,12,6z M7.5,10H10h2.5c0,0,0,2.5-2.5,2.5S7.5,10,7.5,10z' })], 'Theatre15');

module.exports = theatre15;
