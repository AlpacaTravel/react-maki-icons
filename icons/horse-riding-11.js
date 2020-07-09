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

var horseRiding11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M4,1A1,1,0,1,1,5,2,1,1,0,0,1,4,1Zm6.88,3.5L9,3V2.5L7,5H6L7,6V7.014a.5.5,0,1,1-1,0V6.5L4,5H3a1,1,0,0,0-.8.446A1.189,1.189,0,0,0,1.247,5,1.076,1.076,0,0,0,0,5.988C0,7.3.635,7.471.635,7.471a.33.33,0,0,0,.115.023A.253.253,0,0,0,1,7.25V6a.49.49,0,0,1,.48-.5H1.5A.5.5,0,0,1,2,6V8.014l-.3.6a1.609,1.609,0,0,0-.2.6v1.542A.244.244,0,0,0,1.744,11,.255.255,0,0,0,2,10.756V9.514a.367.367,0,0,1,.1-.3l.9-1.2V9l.467,1.816A.256.256,0,0,0,3.709,11a.25.25,0,0,0,.25-.25v-.016l-.242-1.61a.6.6,0,0,1,.025-.236L3.8,8.714,4,8H6V9l.466,1.816A.256.256,0,0,0,6.709,11a.25.25,0,0,0,.25-.25L6.718,9.124a.6.6,0,0,1,.025-.236L7,8a.877.877,0,0,0,.934-.661L8.5,4.5a.6.6,0,0,0,.71.454.562.562,0,0,0,.143-.07l.9.116a.721.721,0,0,0,.392.1A.331.331,0,0,0,11,4.784.406.406,0,0,0,10.88,4.5ZM6,3.5A.51.51,0,0,0,5.5,3h-1a.482.482,0,0,0-.5.5V5H6Z' })], 'HorseRiding11');

module.exports = horseRiding11;
