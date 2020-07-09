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

var basketball15 = createSvgIcon([React.createElement('path', { key: 's-0', id: 'icon_concepts:_sports_leisure', d: 'M3.66,7.0016H2.03a5.3231,5.3231,0,0,1,1.01-2.71A8.7122,8.7122,0,0,1,3.66,7.0016Zm1.075,0h2.34v-4.97a5.4585,5.4585,0,0,0-3.24,1.44A9.2947,9.2947,0,0,1,4.735,7.0016Zm3.19-4.97v4.97h2.34a9.2947,9.2947,0,0,1,.9-3.53A5.4585,5.4585,0,0,0,7.925,2.0316Zm4.035,2.26a8.7122,8.7122,0,0,0-.62,2.71h1.63A5.3231,5.3231,0,0,0,11.96,4.2916ZM14,8.7516a.7555.7555,0,0,1-.75.75H11.72l-.76,1.52v2.38a.392.392,0,0,1-.24.35.5863.5863,0,0,1-.14.02.3274.3274,0,0,1-.26-.11l-1.02-1.01-1.59,1.06a.3975.3975,0,0,1-.42,0l-1.59-1.06-1.02,1.01a.3709.3709,0,0,1-.4.09.392.392,0,0,1-.24-.35v-2.38l-.76-1.52H1.75a.75.75,0,0,1,0-1.5h11.5A.749.749,0,0,1,14,8.75Zm-7.14.75H4.12l.63,1.27a.3175.3175,0,0,1,.04.16v1.56l.56-.55Zm1.98,2.55L7.5,9.8916l-1.34,2.16,1.34.9Zm2.05-2.55H8.14l1.51,2.44.56.55v-1.56a.3175.3175,0,0,1,.04-.16Z' })], 'Basketball15');

module.exports = basketball15;
