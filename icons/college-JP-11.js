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

var collegeJP11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.25,2.2491h-3v-.75a.75.75,0,0,0-1.5,0v.75h-3a.75.75,0,0,0,0,1.5h.4031a9.1387,9.1387,0,0,0,1.66,2.9668c.2183.2743.429.5208.6357.7544a6.0883,6.0883,0,0,1-1.9,1.3062A.75.75,0,0,0,2.94,10.2248,6.7275,6.7275,0,0,0,5.4976,8.5525,6.7223,6.7223,0,0,0,8.061,10.2248a.7363.7363,0,0,0,.188.0243.7463.7463,0,0,0,.7173-.5507.7557.7557,0,0,0-.5152-.9219A6.024,6.024,0,0,1,6.5461,7.47c.2066-.2335.4173-.48.6355-.7541A9.1934,9.1934,0,0,0,8.845,3.7491H9.25a.75.75,0,0,0,0-1.5ZM6.0078,5.7823c-.177.2223-.3431.41-.51.6011-.1675-.1915-.3336-.3785-.5108-.6011A8.51,8.51,0,0,1,3.75,3.7491H7.2469A8.574,8.574,0,0,1,6.0078,5.7823Z' })], 'CollegeJp11');

module.exports = collegeJP11;
