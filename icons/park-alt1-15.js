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

var parkAlt115 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.428,10.429a.269.269,0,0,1-.074-.18A.25.25,0,0,1,9.6,10h1.447a.25.25,0,0,0,.25-.25.258.258,0,0,0-.079-.179L9.07,7.419a.3.3,0,0,1-.063-.17A.249.249,0,0,1,9.257,7H10.4a.251.251,0,0,0,.25-.251.247.247,0,0,0-.077-.178L8.432,4.434,8.418,4.42a.262.262,0,0,1-.066-.17A.25.25,0,0,1,8.6,4h.866a.25.25,0,0,0,.25-.25.246.246,0,0,0-.068-.164h.006L7.7,1.238a.253.253,0,0,0-.042-.044A.249.249,0,0,0,7.5,1.139h0a.249.249,0,0,0-.158.055.253.253,0,0,0-.042.044L5.352,3.586a.246.246,0,0,0-.068.164.25.25,0,0,0,.25.25H6.4a.241.241,0,0,1,.184.42l-.014.014L4.431,6.571a.247.247,0,0,0-.077.178A.251.251,0,0,0,4.6,7H5.745a.249.249,0,0,1,.25.249.3.3,0,0,1-.063.17L3.782,9.571A.258.258,0,0,0,3.7,9.75a.25.25,0,0,0,.25.25H5.4a.25.25,0,0,1,.248.249.269.269,0,0,1-.074.18l-2.14,2.132-.009.009a.248.248,0,0,0,0,.351A.256.256,0,0,0,3.605,13H7v1l1-.008V13h3.391a.263.263,0,0,0,.26-.254.248.248,0,0,0-.071-.177Z' })], 'ParkAlt115');

module.exports = parkAlt115;
