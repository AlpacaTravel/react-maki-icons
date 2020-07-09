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

var convenience11 = createSvgIcon([React.createElement(
  'g',
  { key: 's-0', id: 'convenience-store-11' },
  React.createElement('path', { key: 's-0', d: 'M8.8211,4.2685h-.62c-.1554-.6-.28-1.0651-.2826-1.0734l-.0111-.05c0-.0011-.12-.5479-.41-.5479H3.519c-.2889,0-.4091.5468-.41.5523-.008.0333-.136.5119-.293,1.1185h-.62c.1756-.6809.3228-1.2291.3228-1.2291s.1875-1.0417,1-1.0417h.4963a.4932.4932,0,0,1,.4829-.4153h2a.4932.4932,0,0,1,.4829.4153h.5171c.8125,0,1,1.0417,1,1.0417S8.6454,3.5876,8.8211,4.2685ZM2.9189,9.9954a.4945.4945,0,0,1-.4828-.368c-.23-.8736-.8-3.0538-.9379-3.63a.5.5,0,1,1,0-1h8a.5.5,0,0,1,0,1c-.1375.5763-.7156,2.7587-.9487,3.6313a.4948.4948,0,0,1-.4825.3665Zm1.094-3.2968a.5129.5129,0,0,0-1.0235,0V8.51a.5129.5129,0,0,0,1.0235,0Zm1.9971,0a.5129.5129,0,0,0-1.0235,0V8.51a.5129.5129,0,0,0,1.0235,0Zm2.0058,0a.5129.5129,0,0,0-1.0236,0V8.51a.5129.5129,0,0,0,1.0236,0Z' })
)], 'Convenience11');

module.exports = convenience11;
