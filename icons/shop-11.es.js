import React from 'react';
import PropTypes from 'prop-types';

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

var shop11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M9.6,4H8.49L8.2,2.27C8.0832,1.7303,7.6738,1.3015,7.14,1.16C6.8794,1.0669,6.6064,1.013,6.33,1H4.67 c-0.2721,0.0075-0.5416,0.0547-0.8,0.14C3.3269,1.2815,2.9117,1.7199,2.8,2.27L2.51,4H1.34 C1.1357,4.0055,0.9746,4.1755,0.9801,4.3798C0.9811,4.4173,0.9878,4.4545,1,4.49l1.21,4.7l0,0C2.3454,9.6605,2.7706,9.9885,3.26,10 h4.48C8.2331,9.9928,8.6635,9.6639,8.8,9.19l0,0l1.2-4.7c0.0682-0.1926-0.0326-0.4041-0.2252-0.4723 C9.7188,3.9978,9.6588,3.9918,9.6,4z M3.27,4l0.27-1.61c0.061-0.2688,0.2782-0.4741,0.55-0.52c0.1846-0.0591,0.3763-0.0928,0.57-0.1 h1.67c0.1937,0.0072,0.3854,0.0409,0.57,0.1c0.2718,0.0459,0.489,0.2512,0.55,0.52L7.73,4H3.27z' })], 'Shop11');

export default shop11;
