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

var bus11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path8043', d: 'M3,0C2,0,1,0.5312,1,2v4v3.5c0,0,0,0.5,0.5,0.5L2,10.0156V10.5 c0,0,0,0.5,0.5,0.5H3c0,0,0.5,0,0.5-0.5v-0.4844L7.5,10v0.5c0,0,0,0.5,0.5,0.5h0.5C9,11,9,10.5,9,10.5v-0.4844L9.5,10 c0,0,0.5,0,0.5-0.5V6V2c0-1.5-1-2-2-2H3z M3.75,1h3.5C7.3885,1,7.5,1.1115,7.5,1.25S7.3885,1.5,7.25,1.5h-3.5 C3.6115,1.5,3.5,1.3885,3.5,1.25S3.6115,1,3.75,1z M3,2h5c1,0,1,1,1,1v2c0,0,0,1-1,1H3C2,6,2,5,2,5V3C2,3,2,2,3,2z M2.75,7.5 c0.4142,0,0.75,0.3358,0.75,0.75C3.5,8.6642,3.1642,9,2.75,9S2,8.6642,2,8.25C2,7.8358,2.3358,7.5,2.75,7.5z M8.25,7.5 C8.6642,7.5,9,7.8358,9,8.25C9,8.6642,8.6642,9,8.25,9C7.8358,9,7.5,8.6642,7.5,8.25C7.5,7.8358,7.8358,7.5,8.25,7.5z' })], 'Bus11');

module.exports = bus11;
