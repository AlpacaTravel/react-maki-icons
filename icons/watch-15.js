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

var watch15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M12.5,7H12c-0.0175,0-0.0323,0.0082-0.0494,0.0099C11.8021,5.6575,11.0757,4.4804,10,3.7599V1.4977 C10,1.2228,9.7772,1,9.5023,1H5.4977C5.2228,1,5,1.2228,5,1.4977v2.2621C3.7946,4.5673,3,5.9402,3,7.5s0.7946,2.9327,2,3.7401 v2.2621C5,13.7771,5.2228,14,5.4977,14h4.0045C9.7772,14,10,13.7771,10,13.5022v-2.2621c1.0757-0.7205,1.8021-1.8976,1.9506-3.2501 C11.9677,7.9918,11.9825,8,12,8h0.5C12.7761,8,13,7.7761,13,7.5C13,7.2238,12.7761,7,12.5,7z M7.5,11C5.567,11,4,9.433,4,7.5 S5.567,4,7.5,4S11,5.567,11,7.5S9.433,11,7.5,11z' }), React.createElement('path', { key: 's-1', d: 'M9,7H8V5.5C8,5.2238,7.7761,5,7.5,5S7,5.2238,7,5.5v2C7,7.7761,7.2239,8,7.5,8H9c0.2761,0,0.5-0.2239,0.5-0.5 C9.5,7.2238,9.2761,7,9,7z' })], 'Watch15');

module.exports = watch15;
