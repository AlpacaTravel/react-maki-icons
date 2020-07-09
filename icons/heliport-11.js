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

var heliport11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path10415', d: 'M3,1 C2.723,1,2.5,1.223,2.5,1.5S2.7236,1.9824,3,2h3v2H2.9141h-0.002C2.7004,3.4014,2.1349,3.0009,1.5,3C0.6716,3,0,3.6716,0,4.5 S0.6716,6,1.5,6c0.3794-0.0007,0.7444-0.1452,1.0215-0.4043L4.5,8.5c0.6812,1,1.5,1,2,1h3.5352c0,0,0.9648-0.0008,0.9648-1v-1 c0-0.5-0.5-1-0.5-1l-2-2c0,0-0.5-0.5-1-0.5H7V2h3c0.277,0,0.5-0.223,0.5-0.5S10.277,1,10,1H3z M1.5,4C1.7761,4,2,4.2239,2,4.5 S1.7761,5,1.5,5S1,4.7761,1,4.5S1.2239,4,1.5,4z M7.75,5C7.75,5,8,5,8.5,5.5L10,7H7.5C7.5,7,7,7,7,6.5v-1C7,5.5,7,5,7.5,5H7.75z' })], 'Heliport11');

module.exports = heliport11;
