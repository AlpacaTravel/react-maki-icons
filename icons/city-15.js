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

var city15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M13.6368,3.9994h-1.6387V1.3608C11.99804,1.16148,11.83642,0.99994,11.6371,1l0,0h-0.278 c-0.19932,0-0.3609,0.16158-0.3609,0.3609l0,0v2.6385H9.36c-0.19932,0-0.3609,0.16158-0.3609,0.3609l0,0l0,0v5.6381h-3.637 c-0.20042,0-0.3629,0.16248-0.3629,0.3629v3.2745c0.00055,0.20003,0.16287,0.3619,0.3629,0.3619h8.2747 c0.19932,0,0.3609-0.16158,0.3609-0.3609l0,0V4.36c0-0.19932-0.16158-0.3609-0.3609-0.3609l0,0L13.6368,3.9994z M6.9989,11.9981h-1 v-1h1V11.9981z M8.9989,11.9981h-1v-1h1V11.9981z M10.9989,11.9981h-1v-1h1V11.9981z M10.9989,9.9981h-1v-1h1V9.9981z M10.9989,7.9981h-1v-1h1V7.9981z M10.9989,5.9981h-1v-1h1V5.9981z M12.9989,11.9971h-1v-1h1V11.9971z M12.9989,9.9971h-1v-1h1 V9.9971z M12.9989,7.9971h-1v-1h1V7.9971z M12.9989,5.9971h-1v-1h1V5.9971z M7.9987,1.3608C7.99864,1.16152,7.83708,1,7.6378,1H5.36 C5.16068,1,4.9991,1.16158,4.9991,1.3609l0,0V3H3.36C3.16138,3.00049,3.00049,3.16138,3,3.36l0,0v0.6394H1.3608 C1.16164,3.99945,1.00017,4.16084,1,4.36l0,0v9.2765c0,0.19932,0.16158,0.3609,0.3609,0.3609h2.6385V8.9986h3.9993V1.3608z M3,11.9981H2v-1h1V11.9981z M3,9.9981H2v-1h1V9.9981z M3,7.9981H2v-1h1V7.9981z M3,5.9981H2v-1h1V5.9981z M5,7.9981H4v-1h1V7.9981z M5,5.9981H4v-1h1V5.9981z M7,7.9981H6v-1h1V7.9981z M7,5.9981H6v-1h1V5.9981z M7,3.9981H6V3h1v1V3.9981z' })], 'City15');

module.exports = city15;
