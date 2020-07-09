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

var landuse11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M1,4.749.995,2.057a.251.251,0,0,1,.1-.2L3.344.057A.251.251,0,0,1,3.657.052l2.249,1.8a.251.251,0,0,1,.094.2v2.7A.251.251,0,0,1,5.751,5h-1.5A.251.251,0,0,1,4,4.749V3H3V4.752A.251.251,0,0,1,2.746,5h-1.5A.247.247,0,0,1,1,4.749Zm4.753,2.6h0a.248.248,0,0,0-.173.072L4,9V6.5a.5.5,0,0,0-1,0V9H2V6.5a.5.5,0,0,0-1,0v4.25a.25.25,0,0,0,.25.25h4.5A.249.249,0,0,0,6,10.752V7.6A.25.25,0,0,0,5.753,7.347ZM11,3.253v6.5a.247.247,0,0,1-.247.247H7.247A.247.247,0,0,1,7,9.753v-6.5A.252.252,0,0,1,7.252,3H8V2.248A.248.248,0,0,1,8.248,2H9.754A.246.246,0,0,1,10,2.246V3h.747A.253.253,0,0,1,11,3.253ZM10,8H8V9h2Zm0-2H8V7h2Zm0-2H8V5h2Z' })], 'Landuse11');

module.exports = landuse11;
