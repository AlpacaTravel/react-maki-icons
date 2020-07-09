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

var florist11 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M1,2.5a3.1,3.1,0,0,0-1-2A3.9,3.9,0,0,1,2,2l.526-2,.437,2a3.9,3.9,0,0,1,2-1.5,3.1,3.1,0,0,0-1,2A1.307,1.307,0,0,1,2.662,4H2.409A1.36,1.36,0,0,1,1,2.5ZM9,8.982l2-.437L9,8.018a3.9,3.9,0,0,0,1.5-2,3.1,3.1,0,0,1-2,1A1.36,1.36,0,0,0,7,8.427V8.68a1.307,1.307,0,0,0,1.5,1.3,3.1,3.1,0,0,1,2,1A3.9,3.9,0,0,0,9,8.982ZM3.4,7.9,6.113,5.181a1.382,1.382,0,0,1-.436-.271L3.044,7.543l-.279-.279A11.045,11.045,0,0,0,3,4.5H2.5a15.272,15.272,0,0,1-.161,2.338L2.251,6.75a.247.247,0,0,0-.4.071L.059,10.657a.27.27,0,0,0-.026.108.25.25,0,0,0,.25.25.27.27,0,0,0,.089-.021L.378,11l3.8-1.85a.247.247,0,0,0,.068-.4l-.063-.063A12.768,12.768,0,0,1,6.5,8.5V8a10.381,10.381,0,0,0-2.724.275ZM7.243,2.522a.75.75,0,0,1,.018-1.5.739.739,0,0,1,.561.266.75.75,0,1,1,1.383,0,.739.739,0,0,1,.561-.266.75.75,0,0,1,.014,1.5.748.748,0,1,1-.561,1.26A.728.728,0,0,1,9.263,4a.75.75,0,1,1-1.5,0,.737.737,0,0,1,.05-.238.739.739,0,0,1-.558.26.75.75,0,0,1-.012-1.5ZM7.761,2.5a.75.75,0,1,0,.75-.75A.75.75,0,0,0,7.761,2.5Z' })], 'Florist11');

export default florist11;
