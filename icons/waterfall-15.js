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

var waterfall15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M12.9,3H15V1H5c0,0-4,0-4,4v5.5h0c-1.1,0.8-1.3,2.4-0.5,3.5s2.4,1.3,3.5,0.5c1,0.8,2.5,0.6,3.4-0.4C8,14.7,8.9,15,9.8,15 c2.1,0,3.7-1.6,3.8-3.7c0-1.6-1-3-2.5-3.5V5C11,3.9,11.8,3,12.9,3z M10,8v0.5c1.5,0.1,2.6,1.5,2.5,3c-0.1,1.4-1.3,2.5-2.7,2.5 c-1.1,0.1-1.8-0.6-2.1-1H6.9c-0.1,0.2-0.4,1-1.4,1s-1.3-0.6-1.4-1H3.9c-0.2,0.4-0.5,0.8-0.9,0.9c-0.9,0.3-1.7-0.2-1.9-1 c-0.2-0.8,0.2-1.6,0.9-1.8V6c0-0.5,0.4-1,1-1c0,0,0,0,0,0h0c0.5,0,1,0.4,1,1c0,0,0,0,0,0c0,0,0,0,0,0v4.5C4,10.8,4.2,11,4.5,11 S5,10.8,5,10.5V7c0-0.6,0.4-1,1-1s1,0.4,1,1v3.5C7,10.8,7.2,11,7.5,11S8,10.8,8,10.5V6c0-0.6,0.4-1,1-1s1,0.4,1,1V8z' })], 'Waterfall15');

module.exports = waterfall15;
