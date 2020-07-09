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

var bank11 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'path5622', d: 'M1,2C0,2,0,3,0,3v5c0,1,1,1,1,1h9c1,0,1-1,1-1V3c0,0,0-1-1-1H1z M1,3h1.5C2.7761,3,3,3.2239,3,3.5 S2.7761,4,2.5,4S2,3.7761,2,3.5L1.5,4C1.7761,4,2,4.2239,2,4.5S1.7761,5,1.5,5S1,4.7761,1,4.5V3z M5.5,3c1.1046,0,2,1.1193,2,2.5 S6.6046,8,5.5,8s-2-1.1193-2-2.5S4.3954,3,5.5,3z M8.5,3H10v1.5C10,4.7761,9.7761,5,9.5,5S9,4.7761,9,4.5S9.2239,4,9.5,4L9,3.5 C9,3.7761,8.7761,4,8.5,4S8,3.7761,8,3.5S8.2239,3,8.5,3z M1.5,6C1.7761,6,2,6.2239,2,6.5S1.7761,7,1.5,7L2,7.5 C2,7.2239,2.2239,7,2.5,7S3,7.2239,3,7.5S2.7761,8,2.5,8H1V6.5C1,6.2239,1.2239,6,1.5,6z M9.5,6C9.7761,6,10,6.2239,10,6.5V8H8.5 C8.2239,8,8,7.7761,8,7.5S8.2239,7,8.5,7S9,7.2239,9,7.5L9.5,7C9.2239,7,9,6.7761,9,6.5S9.2239,6,9.5,6z' }), React.createElement('path', { key: 's-1', id: 'path5835', d: 'M4.9023,4.25C4.8261,4.321,4.7584,4.4051,4.7012,4.5h1.5977c-0.0572-0.0949-0.125-0.179-0.2012-0.25H4.9023z M4.5859,4.75C4.5575,4.8303,4.5359,4.9141,4.5215,5h1.959C6.4661,4.9141,6.4445,4.8303,6.416,4.75H4.5859z M4.5,5.25 C4.4998,5.3339,4.5063,5.4177,4.5195,5.5h1.959C6.4924,5.4178,6.4996,5.334,6.5,5.25H4.5z M4.5859,5.75 C4.6171,5.8387,4.6564,5.9226,4.7031,6h1.5957c0.046-0.0775,0.0847-0.1614,0.1152-0.25H4.5859z M4.9023,6.25 c0.0109,0.0107,0.022,0.0211,0.0332,0.0312L4.5,6.5h2L6.0645,6.2812C6.0757,6.2711,6.0868,6.2607,6.0977,6.25H4.9023z M4.582,6.75 C4.611,6.8289,4.638,6.9091,4.6914,7h1.627c0.0524-0.091,0.0778-0.1711,0.1055-0.25H4.582z M4.8926,7.25 C5.0395,7.3915,5.2332,7.5,5.5,7.5c0.2739,0,0.4701-0.1085,0.6172-0.25H4.8926z' })], 'Bank11');

export default bank11;
