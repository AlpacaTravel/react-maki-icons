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

var rail11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9,10.5C9,10.7761,8.7761,11,8.5,11c-0.1824-0.0029-0.3481-0.107-0.43-0.27l0,0L7.69,10H3.31l-0.37,0.74l0,0 C2.8537,10.9023,2.6838,11.0027,2.5,11C2.2239,11,2,10.7761,2,10.5c0.0022-0.0847,0.0263-0.1674,0.07-0.24l0,0l1-2l0,0 C3.1546,8.1008,3.3198,8.001,3.5,8c0.2751-0.0235,0.5172,0.1805,0.5407,0.4556C4.0479,8.5392,4.0339,8.6233,4,8.7L3.81,9h3.38L7,8.7 C6.8991,8.443,7.0256,8.1528,7.2826,8.0518C7.514,7.9609,7.7771,8.0539,7.9,8.27l0,0l1,2l0,0C8.9527,10.3367,8.9872,10.416,9,10.5z M8,0H3C2.4477,0,2,0.4477,2,1v5c0,0.5523,0.4477,1,1,1h5c0.5523,0,1-0.4477,1-1V1C9,0.4477,8.5523,0,8,0z M3.5,6 C3.2239,6,3,5.7761,3,5.5S3.2239,5,3.5,5S4,5.2239,4,5.5S3.7761,6,3.5,6z M3.5,4C3.2239,4,3,3.7761,3,3.5v-2 C3,1.2239,3.2239,1,3.5,1h1.79v3H3.5z M7.5,6C7.2239,6,7,5.7761,7,5.5S7.2239,5,7.5,5S8,5.2239,8,5.5S7.7761,6,7.5,6z M8,3.5 C8,3.7761,7.7761,4,7.5,4H5.69V1H7.5C7.7761,1,8,1.2239,8,1.5V3.5z' })], 'Rail11');

module.exports = rail11;
