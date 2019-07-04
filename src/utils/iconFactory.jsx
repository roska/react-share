import React from 'react';
import PropTypes from 'prop-types';

export default function iconFactory(network, iconConfig) {
  const Icon = (props) => {
    const {
      className,
      iconBgStyle,
      logoBgFillColor = iconConfig.color,
      logoFillColor,
      borderRadius,
      round,
      size,
    } = props;

    const baseStyle = {
      width: size,
      height: size,
    };

    const classes = `social-icon social-icon--${network} ${className}`;

    return (
      <div style={baseStyle}>
        <svg
          viewBox="0 0 64 64"
          width={size}
          height={size}
          className={classes}>
          <g>
            {(!round ? (
              <rect
                width="64"
                height="64"
                rx={borderRadius}
                ry={borderRadius}
                fill={logoBgFillColor}
                style={iconBgStyle} />
            ) : (
              <circle
                cx="32"
                cy="32"
                r="31"
                fill={logoBgFillColor}
                style={iconBgStyle} />
            ))}
          </g>

          <g>
            <path d={iconConfig.icon} fill={logoFillColor} />
          </g>
        </svg>
      </div>
    );
  };

  Icon.propTypes = {
    className: PropTypes.string,
    iconBgStyle: PropTypes.object,
    logoBgFillColor: PropTypes.string,
    logoFillColor: PropTypes.string,
    round: PropTypes.bool,
    size: PropTypes.number,
    borderRadius: PropTypes.number,
  };

  Icon.defaultProps = {
    className: '',
    iconBgStyle: {},
    logoFillColor: 'white',
    size: 64,
    borderRadius: 0,
  };

  return Icon;
}
