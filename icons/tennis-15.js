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

var tennis15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M13.1284,1.87c-1.5418-1.5406-4.5535-.7759-6.28,1.05a6.8282,6.8282,0,0,0-1.88,4.4,5.7275,5.7275,0,0,1-.57,2.72.6814.6814,0,0,0-.67.17l-2.49,2.5a.6941.6941,0,0,0,0,.98l.07.07a.7051.7051,0,0,0,.98,0l2.5-2.49a.683.683,0,0,0,.18-.66,8.5694,8.5694,0,0,1,3.12-.58,6.5487,6.5487,0,0,0,3.99-1.87C14.1084,6.13,14.579,3.3194,13.1284,1.87Zm-2.2-.04a2.3071,2.3071,0,0,1,1.64.61,2.548,2.548,0,0,1,.5,2.44l-2.95-2.96A3.8648,3.8648,0,0,1,10.9284,1.83Zm-4.57,6.81a2.6485,2.6485,0,0,1-.48-2.55l3.04,3.04A2.8522,2.8522,0,0,1,6.3584,8.64Zm2.88.39-3.26-3.27a5.1623,5.1623,0,0,1,.49-1.08l3.85,3.85A5.5093,5.5093,0,0,1,9.2384,9.03Zm1.34-.66-3.94-3.95a5.2032,5.2032,0,0,1,.74-.9l4.1,4.1A5.6869,5.6869,0,0,1,10.5784,8.37Zm1.11-.96-4.1-4.1a5.5714,5.5714,0,0,1,.84-.65l3.92,3.92A5.7187,5.7187,0,0,1,11.6884,7.41Zm.82-1.09L8.6984,2.5a4.1707,4.1707,0,0,1,1.09-.48l3.2,3.2A5.5656,5.5656,0,0,1,12.5084,6.32Z' })], 'Tennis15');

module.exports = tennis15;
