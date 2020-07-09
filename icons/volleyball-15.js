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

var volleyball15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'e086ca83-8703-4df5-a97c-5939eb32113a', d: 'M13.91,7.94a5.9086,5.9086,0,0,1-.13.94,8.8218,8.8218,0,0,0-2.17-1.49,8.89,8.89,0,0,0-1.4-.56,8.6142,8.6142,0,0,0-1.82-.35.221.221,0,0,0-.08-.01A7.32,7.32,0,0,1,7.5,4.59c-.01-.01-.01-.01,0-.02a7.7573,7.7573,0,0,1,1.52.15,7.0987,7.0987,0,0,1,1.56.5,6.8585,6.8585,0,0,1,1.4.78A7.4165,7.4165,0,0,1,13.91,7.94Zm-1.87-5a6.2232,6.2232,0,0,0-1.85-1.27,4.2725,4.2725,0,0,0-.98-.36,5.6412,5.6412,0,0,0-1.55-.23,1.2882,1.2882,0,0,0-.32,0A7.4263,7.4263,0,0,0,7.21,2.5c0,.2.01.39.02.58a2.28,2.28,0,0,1,.26-.01,2.6438,2.6438,0,0,1,.28.01,8.2865,8.2865,0,0,1,1.49.16,8.9879,8.9879,0,0,1,1.35.37,8.7922,8.7922,0,0,1,1.53.7,10.18,10.18,0,0,1,1.39.97A6.4588,6.4588,0,0,0,12.04,2.94ZM4.01,8.76a9.4084,9.4084,0,0,1-.62-1.37,9.1038,9.1038,0,0,1-.37-1.41,9.1748,9.1748,0,0,1-.16-1.67V4.28a8.455,8.455,0,0,1,.1-1.34A6.28,6.28,0,0,0,1.47,5.3a6.2222,6.2222,0,0,0-.4,2.2c0,.15.01.3.02.44a5.9086,5.9086,0,0,0,.13.94,5.7343,5.7343,0,0,0,.41,1.23c.22-.05.44-.11.65-.17a8.0188,8.0188,0,0,0,1.9-.88C4.12,8.96,4.06,8.86,4.01,8.76Zm2.6-2.28a9,9,0,0,1-.63-1.76,9.135,9.135,0,0,1-.24-1.48c-.02-.25-.03-.49-.03-.74a9.3777,9.3777,0,0,1,.08-1.19,4.2725,4.2725,0,0,0-.98.36,7.7038,7.7038,0,0,0-.42,1.94c-.02.22-.03.44-.03.67a7.2659,7.2659,0,0,0,.06.93,7.4258,7.4258,0,0,0,.37,1.63,6.4705,6.4705,0,0,0,.59,1.28A8.0174,8.0174,0,0,0,6.65,6.55.2522.2522,0,0,1,6.61,6.48ZM12.7,9.93s0-.01-.01,0a7.0128,7.0128,0,0,0-1.7-1.16c-.06.1-.11.19-.17.29a8.783,8.783,0,0,1-.88,1.22,8.9125,8.9125,0,0,1-1.06,1.07,10.4181,10.4181,0,0,1-1.38.98,8.9933,8.9933,0,0,1-2.64,1.02,6.2985,6.2985,0,0,0,5.28,0,5.9674,5.9674,0,0,0,2.42-1.89,4.8258,4.8258,0,0,0,.65-1.03A6.0315,6.0315,0,0,0,12.7,9.93Zm-5.17-2c-.01.01-.02.03-.03.04a9.26,9.26,0,0,1-1.25,1.4,9.5925,9.5925,0,0,1-1.19.91,9.2683,9.2683,0,0,1-2.62,1.18,6.0989,6.0989,0,0,0,.53.61,7.7353,7.7353,0,0,0,3.15-.72,7.3839,7.3839,0,0,0,1.38-.82A7.6429,7.6429,0,0,0,8.75,9.37a7.7441,7.7441,0,0,0,.82-1.15A7.3414,7.3414,0,0,0,7.53,7.93Z' })], 'Volleyball15');

module.exports = volleyball15;
