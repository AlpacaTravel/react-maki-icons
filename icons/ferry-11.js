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

var ferry11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M11,9.45v0.77c-0.2167,0.0089-0.4213,0.1022-0.57,0.26c-0.2266,0.2196-0.5054,0.3779-0.81,0.46 c-0.5149,0.1365-1.0639,0.0296-1.49-0.29L7.8,10.38c-0.2669-0.2313-0.6631-0.2313-0.93,0c-0.12,0.09-0.23,0.2-0.35,0.28 c-0.6333,0.452-1.4889,0.4316-2.1-0.05l-0.33-0.27c-0.2457-0.185-0.5843-0.185-0.83,0c-0.16,0.11-0.3,0.25-0.46,0.36 c-0.601,0.4185-1.399,0.4185-2,0l-0.26-0.21C0.4009,10.3346,0.2078,10.238,0,10.22V9.45c0.2162-0.0231,0.4345,0.015,0.63,0.11 C0.8642,9.6894,1.0882,9.8365,1.3,10c0.1841,0.1814,0.4478,0.2567,0.7,0.2c0.093-0.0244,0.181-0.0651,0.26-0.12 c0.13-0.09,0.25-0.2,0.38-0.3c0.616-0.4518,1.454-0.4518,2.07,0l0.4,0.31c0.2416,0.1752,0.5684,0.1752,0.81,0l0.4-0.31 c0.6181-0.4567,1.4619-0.4567,2.08,0l0.38,0.3c0.2437,0.18,0.5763,0.18,0.82,0L10,9.77C10.2882,9.5546,10.6403,9.4419,11,9.45z M2.61,7.61L1,5l1-0.91V1.15C2.0163,0.5061,2.546-0.0057,3.19,0h4.62C8.454-0.0057,8.9837,0.5061,9,1.15v2.94L10,5L8.39,7.62 C7.5729,7.0755,6.4952,7.1324,5.74,7.76L5.5,8l0,0L5.3,7.82C4.5536,7.1506,3.4512,7.0646,2.61,7.61z M2.81,3.61L5.5,2l2.69,1.63 V1.15c0.0114-0.1985-0.1403-0.3686-0.3388-0.38c-0.0137-0.0008-0.0275-0.0008-0.0412,0H3.19 C2.9915,0.7586,2.8214,0.9103,2.81,1.1088c-0.0008,0.0137-0.0008,0.0275,0,0.0412v2.48V3.61z' })], 'Ferry11');

module.exports = ferry11;
