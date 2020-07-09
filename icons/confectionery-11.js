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

var confectionery11 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0', id: 'confectionary-11' },
  React.createElement('path', { key: 's-0', d: 'M9.2407,2.513a.7461.7461,0,0,0-.7461-.7461.7461.7461,0,1,0-1.4922,0V3.5132A2.4888,2.4888,0,0,0,3.5113,7H1.7485a.7461.7461,0,0,0,0,1.4922.7461.7461,0,0,0,.7461.7461.7461.7461,0,0,0,1.4922,0V7.4778A2.4887,2.4887,0,0,0,7.493,4.0052H9.2407a.7461.7461,0,0,0,0-1.4922ZM5.5,7.2842a1.7824,1.7824,0,0,1-.72-3.4135.8158.8158,0,0,1,.2438.1772A1.6481,1.6481,0,0,1,5.3252,5.124v.7373a1.9718,1.9718,0,0,0,.3877,1.3213,1.1554,1.1554,0,0,0,.0958.07A1.7759,1.7759,0,0,1,5.5,7.2842Zm.72-.1549a.8158.8158,0,0,1-.2438-.1772A1.6481,1.6481,0,0,1,5.6748,5.876V5.1387a1.9718,1.9718,0,0,0-.3877-1.3213,1.1554,1.1554,0,0,0-.0958-.07A1.78,1.78,0,0,1,6.22,7.1293Z' })
)], 'Confectionery11');

module.exports = confectionery11;
