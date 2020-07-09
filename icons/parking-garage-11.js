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

var parkingGarage11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M7.25,7.44C6.8067,7.7602,6.2657,7.9158,5.72,7.88H4.45V10H3.19V4H5.8c0.5201-0.0279,1.0324,0.1358,1.44,0.46 c0.3847,0.372,0.5828,0.8966,0.54,1.43C7.8557,6.4611,7.6596,7.0348,7.25,7.44z M6.25,5.28c-0.1946-0.1475-0.4365-0.2186-0.68-0.2 H4.45v1.76H5.6c0.246,0.0129,0.4882-0.0654,0.68-0.22c0.1746-0.1813,0.2621-0.4293,0.24-0.68c0.023-0.2449-0.0651-0.4871-0.24-0.66 L6.25,5.28z M10.41,3.28c0.1349-0.2403,0.0499-0.5444-0.19-0.68l-4.5-2.5c-0.1521-0.0855-0.3379-0.0855-0.49,0l-4.5,2.5 C0.4972,2.7485,0.4288,3.0576,0.5773,3.2904C0.7144,3.5054,0.9913,3.5828,1.22,3.47l4.28-2.4l4.26,2.37 c0.2421,0.1328,0.546,0.0442,0.6789-0.1979C10.4392,3.2414,10.4396,3.2407,10.44,3.24L10.41,3.28z' })], 'ParkingGarage11');

module.exports = parkingGarage11;
