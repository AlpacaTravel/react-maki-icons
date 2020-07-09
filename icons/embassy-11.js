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

var embassy11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M5.5,2C4.6014,2.0766,3.7537,2.4494,3.09,3.06C3.0316,3.1262,2.9995,3.2117,3,3.3v3.32 C2.9889,6.8074,3.1318,6.9684,3.3193,6.9796C3.4115,6.985,3.5021,6.9527,3.57,6.89C4.1239,6.4637,4.8011,6.2286,5.5,6.22 C6.61,6.22,6.85,7,8,7c0.6869-0.0671,1.3313-0.3629,1.83-0.84C9.9401,6.0917,10.0051,5.9695,10,5.84V2.37 c0.0309-0.1908-0.0987-0.3705-0.2896-0.4014C9.6387,1.9569,9.5652,1.9679,9.5,2C9.0686,2.3529,8.5507,2.5842,8,2.67 C6.85,2.67,6.65,2,5.5,2z M1.5,1.5c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1s-1-0.4477-1-1S0.9477,1.5,1.5,1.5z M2,4.5v6 C2,10.7761,1.7761,11,1.5,11S1,10.7761,1,10.5v-6C1,4.2239,1.2239,4,1.5,4S2,4.2239,2,4.5z' })], 'Embassy11');

module.exports = embassy11;
