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

var hardware15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M13.7919,3.2619c0,0-1.676,1.675-2.1163,2.1208c-0.085,0.0861-0.1688,0.1135-0.282,0.0961 c-0.1481-0.0226-0.2974-0.038-0.4462-0.0558c-0.4072-0.0485-0.8145-0.0966-1.2292-0.1458C9.649,4.6852,9.5787,4.1049,9.5177,3.5236 C9.512,3.4689,9.5509,3.3943,9.5925,3.3522c0.5071-0.5134,1.9261-1.9287,2.134-2.136c-0.4508-0.2129-1.2243-0.2968-1.8007-0.2031 c-2.1801,0.3543-3.5112,2.534-2.8206,4.625C7.1432,5.753,7.1194,5.8201,7.0374,5.902C5.1891,7.7454,3.3436,9.5914,1.498,11.4374 c-0.0616,0.0616-0.1231,0.124-0.1779,0.1913c-0.5264,0.6473-0.3873,1.6264,0.2974,2.102c0.6044,0.4197,1.3658,0.3442,1.9053-0.1948 c1.8534-1.8519,3.7059-3.7047,5.556-5.5598C9.1707,7.884,9.2437,7.8526,9.3779,7.8983c0.6189,0.2109,1.2524,0.2354,1.8884,0.0884 c1.9386-0.4478,3.1251-2.3732,2.6549-4.3034C13.8895,3.5532,13.843,3.4244,13.7919,3.2619z' })], 'Hardware15');

module.exports = hardware15;
