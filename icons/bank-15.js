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

var bank15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'rect5668', d: 'M1,3C0.446,3,0,3.446,0,4v7c0,0.554,0.446,1,1,1h13c0.554,0,1-0.446,1-1V4c0-0.554-0.446-1-1-1H1z M1,4h1.5 C2.7761,4,3,4.2239,3,4.5S2.7761,5,2.5,5S2,4.7761,2,4.5L1.5,5C1.7761,5,2,5.2239,2,5.5S1.7761,6,1.5,6S1,5.7761,1,5.5V4z M7.5,4 C8.8807,4,10,5.567,10,7.5l0,0C10,9.433,8.8807,11,7.5,11S5,9.433,5,7.5S6.1193,4,7.5,4z M12.5,4H14v1.5C14,5.7761,13.7761,6,13.5,6 S13,5.7761,13,5.5S13.2239,5,13.5,5L13,4.5C13,4.7761,12.7761,5,12.5,5S12,4.7761,12,4.5S12.2239,4,12.5,4z M7.5,5.5 c-0.323,0-0.5336,0.1088-0.6816,0.25h1.3633C8.0336,5.6088,7.823,5.5,7.5,5.5z M6.625,6C6.5795,6.091,6.5633,6.1711,6.5449,6.25 h1.9102C8.4367,6.1711,8.4205,6.091,8.375,6H6.625z M6.5,6.5v0.25h2V6.5H6.5z M6.5,7v0.25h2V7H6.5z M6.5,7.5v0.25h2V7.5H6.5z M6.5,8 L6.25,8.25h2L8.5,8H6.5z M6,8.5c0,0,0.0353,0.1024,0.1016,0.25H8.375L8,8.5H6z M1.5,9C1.7761,9,2,9.2239,2,9.5S1.7761,10,1.5,10 L2,10.5C2,10.2239,2.2239,10,2.5,10S3,10.2239,3,10.5S2.7761,11,2.5,11H1V9.5C1,9.2239,1.2239,9,1.5,9z M6.2383,9 C6.2842,9.0856,6.3144,9.159,6.375,9.25h2.2676C8.7092,9.1121,8.75,9,8.75,9H6.2383z M13.5,9C13.7761,9,14,9.2239,14,9.5V11h-1.5 c-0.2761,0-0.5-0.2239-0.5-0.5s0.2239-0.5,0.5-0.5s0.5,0.2239,0.5,0.5l0.5-0.5C13.2239,10,13,9.7761,13,9.5S13.2239,9,13.5,9z M6.5664,9.5c0.0786,0.0912,0.1647,0.1763,0.2598,0.25h1.4199C8.3462,9.6727,8.4338,9.5883,8.5,9.5H6.5664z' })], 'Bank15');

module.exports = bank15;
