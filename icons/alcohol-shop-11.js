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

var alcoholShop11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M7,4v2.5c0.0018,0.6341,0.4021,1.1986,1,1.41V10H7.5C7.2239,10,7,10.2239,7,10.5S7.2239,11,7.5,11h2 c0.2761,0,0.5-0.2239,0.5-0.5S9.7761,10,9.5,10H9V7.91c0.5979-0.2114,0.9982-0.7759,1-1.41V4H7z M9.5,6.5c0,0.5523-0.4477,1-1,1 s-1-0.4477-1-1v-2h2V6.5z M4.21,2.85V2.5c0.1961,0,0.355-0.1589,0.355-0.355S4.4061,1.79,4.21,1.79V1.44 c0.0001-0.1933-0.1566-0.3501-0.3499-0.3501c-0.0034,0-0.0068,0-0.0101,0.0001H3.14C2.9468,1.0845,2.7857,1.2366,2.7801,1.4299 C2.78,1.4332,2.78,1.4366,2.78,1.44v0.35c-0.1961,0-0.355,0.1589-0.355,0.355S2.5839,2.5,2.78,2.5v0.35C2.79,3.87,1,5,1,6v4.25 c-0.0056,0.3866,0.3033,0.7044,0.6899,0.71c0.0067,0.0001,0.0134,0.0001,0.0201,0h3.58c0.3628-0.0329,0.6561-0.3097,0.71-0.67V6 C6,5.09,4.21,3.81,4.21,2.85z M3.5,9C2.6716,9,2,8.3284,2,7.5S2.6716,6,3.5,6S5,6.6716,5,7.5S4.3284,9,3.5,9z' })], 'AlcoholShop11');

module.exports = alcoholShop11;
