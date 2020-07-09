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

var schoolJP15 = createSvgIcon([React.createElement('path', { key: 's-0', d: 'M12.5,2.9992h-4v-1a1,1,0,0,0-2,0v1h-4a1,1,0,0,0,0,2h.67A10.8169,10.8169,0,0,0,5.15,8.8105c.3331.4313.6594.8248.9785,1.1936a14.3825,14.3825,0,0,1-2.6074,2.117,1,1,0,1,0,.955,1.7581h0A15.65,15.65,0,0,0,7.5,11.4613a15.65,15.65,0,0,0,3.0239,2.4179,1,1,0,1,0,.9551-1.7578,14.3789,14.3789,0,0,1-2.6073-2.1171c.3191-.3688.6453-.7622.9784-1.1935a10.818,10.818,0,0,0,1.98-3.8116h.67a1,1,0,0,0,0-2ZM8.2671,7.5879c-.2614.3385-.5154.6413-.767.937-.2517-.2957-.5057-.5985-.7672-.937A9.5885,9.5885,0,0,1,5.2676,4.9992H9.7319A9.5789,9.5789,0,0,1,8.2671,7.5879Z' })], 'SchoolJp15');

export default schoolJP15;
