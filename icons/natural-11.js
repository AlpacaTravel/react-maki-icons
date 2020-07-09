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

var natural11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M4.579,9.579h0L3,8H4.4a.25.25,0,0,0,.25-.25.246.246,0,0,0-.079-.179L3,6h.736a.25.25,0,0,0,.25-.25.246.246,0,0,0-.078-.179h0l-1.2-1.253a.253.253,0,0,0-.4-.015c-.02.023-1.21,1.266-1.21,1.266a.245.245,0,0,0-.082.18.25.25,0,0,0,.25.25H2L.425,7.575h0A.249.249,0,0,0,.6,8H2L.434,9.566h0a.244.244,0,0,0-.082.18A.25.25,0,0,0,.6,10H2v1H3V10H4.4a.247.247,0,0,0,.179-.421Zm6.242-.938-2.1-4.2a.248.248,0,0,0-.443,0l-2.1,4.2A.248.248,0,0,0,6.4,9h4.2a.248.248,0,0,0,.221-.359ZM7.5,7l1-2,1,2Zm.279-5.921a.266.266,0,0,1-.049.148A3.513,3.513,0,0,0,7,3,2.141,2.141,0,0,1,5.709,4.911a.475.475,0,0,1-.419,0A2.141,2.141,0,0,1,4,3a3.5,3.5,0,0,0-.726-1.769.271.271,0,0,1-.046-.148.25.25,0,0,1,.25-.25.27.27,0,0,1,.067.009A2.939,2.939,0,0,1,5,2L5.25.224A.25.25,0,0,1,5.744.2L6,2A2.957,2.957,0,0,1,7.453.841.272.272,0,0,1,7.529.829.25.25,0,0,1,7.779,1.079Z' })], 'Natural11');

module.exports = natural11;
