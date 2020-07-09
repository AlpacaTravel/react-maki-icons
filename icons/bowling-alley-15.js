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

var bowlingAlley15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'icon_concepts:_sports_leisure', d: 'M8.83,5.39a11.0127,11.0127,0,0,0-.96,4.28,11.4686,11.4686,0,0,0,.58,3.69A4.9424,4.9424,0,0,1,6,14,5,5,0,1,1,8.98,4.99C8.94,5.12,8.88,5.25,8.83,5.39ZM4.12,8.5a.62.62,0,1,0-.62.62h0a.6105.6105,0,0,0,.62-.6009C4.12,8.5128,4.12,8.5064,4.12,8.5ZM4.5,7.12a.62.62,0,1,0-.62-.62h0a.6106.6106,0,0,0,.6011.62ZM6.12,8.5a.62.62,0,1,0-.62.62h0a.6105.6105,0,0,0,.62-.6009C6.12,8.5128,6.12,8.5064,6.12,8.5Zm4.8022-5.3341c0-.7222-.1444-.7222-.1444-1.4444a.7222.7222,0,0,1,1.4444-.0007v.0007c0,.7222-.1444.7222-.1444,1.4444,0,2.1667,1.5528,3.6168,1.5528,6.5,0,2.1667-.6861,4.3333-1.4083,4.3333H10.7778c-.7222,0-1.4083-2.1667-1.4083-4.3333C9.3694,6.7826,10.9222,5.3325,10.9222,3.1659Z' })], 'BowlingAlley15');

module.exports = bowlingAlley15;
