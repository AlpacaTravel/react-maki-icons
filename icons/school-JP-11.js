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

var schoolJP11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.25,2.25h-3V1.5a.75.75,0,1,0-1.5,0v.75h-3a.75.75,0,0,0,0,1.5h.4031a9.1387,9.1387,0,0,0,1.66,2.9668c.2183.2743.429.5208.6357.7544a6.09,6.09,0,0,1-1.9,1.3062A.75.75,0,0,0,2.94,10.2253,6.7273,6.7273,0,0,0,5.4976,8.5531,6.722,6.722,0,0,0,8.061,10.2253a.7364.7364,0,0,0,.188.0244.7464.7464,0,0,0,.7173-.5507.7557.7557,0,0,0-.5152-.9219,6.024,6.024,0,0,1-1.905-1.3064c.2066-.2335.4173-.48.6355-.7542A9.1929,9.1929,0,0,0,8.845,3.75H9.25a.75.75,0,0,0,0-1.5ZM6.0078,5.7829c-.177.2223-.3431.41-.51.6011-.1675-.1915-.3336-.3785-.5108-.6011A8.514,8.514,0,0,1,3.75,3.75H7.2469A8.574,8.574,0,0,1,6.0078,5.7829Z' })], 'SchoolJp11');

module.exports = schoolJP11;
