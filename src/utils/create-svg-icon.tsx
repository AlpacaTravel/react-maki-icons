import React, { FunctionComponent, ReactNode } from "react";

export default function createSvgIcon(children: React.ReactNode, name: string) {
  // Props
  const size = Number(name.replace(/[^\d]+/, ""));

  // Build the component to return
  const Component: FunctionComponent<SvgIconProps> = props => {
    return (
      <SvgIconComponent {...props} size={size}>
        {children}
      </SvgIconComponent>
    );
  };

  if (process.env.NODE_ENV !== "production") {
    Component.displayName = name;
  }

  return React.memo(Component);
}

const SvgIcon: React.FunctionComponent<SvgIconProps> = props => {
  const { size = 11 } = props;

  const {
    style = null,
    className,
    htmlColor,
    viewBox = `0 0 ${size} ${size}`,
    children,
    titleAccess,
    ...other
  } = props;

  return (
    <svg
      className={className}
      style={style}
      viewBox={viewBox}
      focusable={false}
      aria-hidden={titleAccess ? undefined : true}
      role={titleAccess ? "img" : undefined}
      color={htmlColor}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </svg>
  );
};

type SvgIconProps = {
  size?: number;
  style?: any;
  className?: string;
  htmlColor?: string;
  viewBox?: string;
  titleAccess?: string;
  children?: ReactNode;
};

const SvgIconComponent = SvgIcon;
