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

var bbq11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M4,1.75c0,0,0-1,1-1c0,0,0.5,0,0.5-0.5C5.5,0.1119,5.6119,0,5.75,0S6,0.1119,6,0.25c0,0,0,1-1,1c0,0-0.5,0-0.5,0.5 C4.5,1.8881,4.3881,2,4.25,2S4,1.8881,4,1.75z M2.25,2C2.3881,2,2.5,1.8881,2.5,1.75c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1 C4,0.1119,3.8881,0,3.75,0S3.5,0.1119,3.5,0.25c0,0.5-0.5,0.5-0.5,0.5c-1,0-1,1-1,1C2,1.8881,2.1119,2,2.25,2z M6.25,2 C6.3881,2,6.5,1.8881,6.5,1.75c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C8,0.1119,7.8881,0,7.75,0S7.5,0.1119,7.5,0.25 c0,0.5-0.5,0.5-0.5,0.5c-1,0-1,1-1,1C6,1.8881,6.1119,2,6.25,2z M9.75,0C9.6119,0,9.5,0.1119,9.5,0.25c0,0.5-0.5,0.5-0.5,0.5 c-1,0-1,1-1,1C8,1.8881,8.1119,2,8.25,2S8.5,1.8881,8.5,1.75c0-0.5,0.5-0.5,0.5-0.5c1,0,1-1,1-1C10,0.1119,9.8881,0,9.75,0z M6.6746,5.865C6.6745,5.8654,6.6741,5.8657,6.674,5.866l2.3,4.782v0.009c0.055,0.1215,0.0014,0.2646-0.12,0.32 c-0.1237,0.0574-0.2705,0.0037-0.328-0.12L7.845,9.5H4c0,0.2029-0.0411,0.4036-0.1209,0.5901 C3.5532,10.8518,2.6717,11.205,1.91,10.8792c-0.7617-0.3259-1.115-1.2074-0.7891-1.9691C1.4468,8.1484,2.3283,7.7952,3.09,8.121 c0.0531,0.0208,0.1048,0.0449,0.155,0.072L4.278,5.85C2.9692,5.5125,2.0408,4.351,2,3h7C9,3,8.9985,5.2823,6.6746,5.865z M3.25,9.5 c0-0.4142-0.3358-0.75-0.75-0.75S1.75,9.0858,1.75,9.5s0.3358,0.75,0.75,0.75S3.25,9.9142,3.25,9.5z M6.1731,5.9562 C5.9635,5.9829,5.7419,6,5.5,6C5.2147,6,4.787,5.953,4.787,5.953l-1.144,2.58C3.7659,8.6688,3.8607,8.8275,3.922,9h3.673 L6.1731,5.9562z' })], 'Bbq11');

module.exports = bbq11;
