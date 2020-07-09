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

var heliport15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path10415', d: 'M4,2C3,2,3,3,4,3h4v1C7.723,4,7.5,4.223,7.5,4.5V5H5H3.9707H3.9316 C3.7041,4.1201,2.9122,3.5011,2,3.5c-1.1046,0-2,0.8954-2,2s0.8954,2,2,2c0.3722-0.001,0.7368-0.1058,1.0527-0.3027L5.5,10.5 C6.5074,11.9505,8.3182,12,9,12h5c0,0,1,0,1-1v-0.9941C15,9.2734,14.874,8.874,14.5,8.5l-3-3c0,0-0.5916-0.5-1.2734-0.5H9.5V4.5 C9.5,4.223,9.277,4,9,4V3h4c1,0,1-1,0-1C13,2,4,2,4,2z M2,4.5c0.5523,0,1,0.4477,1,1s-0.4477,1-1,1s-1-0.4477-1-1 C1,4.9477,1.4477,4.5,2,4.5z M10,6c0.5,0,0.7896,0.3231,1,0.5L13.5,9H10c0,0-1,0-1-1V7C9,7,9,6,10,6z' })], 'Heliport15');

module.exports = heliport15;
