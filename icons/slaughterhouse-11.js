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

var slaughterhouse11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M11,5.75v.241C11,7,10,6.5,10,6.5H8A3.081,3.081,0,0,1,7,8a2.848,2.848,0,0,1-.416.9.26.26,0,0,0-.05.242l.458,1.55A.227.227,0,0,1,7,10.75a.25.25,0,0,1-.25.25.259.259,0,0,1-.244-.173L6,9V8.5H2.75l-.21.42a.25.25,0,0,0-.02.168L3,10.75a.25.25,0,0,1-.25.25.26.26,0,0,1-.237-.172L2,9V8.5a4.013,4.013,0,0,1-.843-.139,1.383,1.383,0,0,1-.5,1.045.242.242,0,0,0-.094.282l.414.99a.213.213,0,0,1,.011.072.25.25,0,0,1-.25.25.253.253,0,0,1-.228-.148L0,9.5a6.031,6.031,0,0,0,0-2v-2A1.486,1.486,0,0,1,2,4.1s.768.132,1.1.154A2.457,2.457,0,0,0,4,4.087,1.666,1.666,0,0,1,4.5,4a1.648,1.648,0,0,1,.844.257,3.166,3.166,0,0,0,.9.23L7,4.5s.966-.484,1-.5V3.5l.5.5A1.474,1.474,0,0,1,10,3.5.914.914,0,0,0,9,4l1,1,.68.529a.425.425,0,0,1,.07-.029A.238.238,0,0,1,11,5.75Z' })], 'Slaughterhouse11');

module.exports = slaughterhouse11;
