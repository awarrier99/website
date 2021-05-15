import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import type { ReactNode } from 'react';
import type { TypographyProps } from '@material-ui/core';
import '../stylesheets/GradientFadeTypography.css';

class GradientFadeTypography extends Component<TypographyProps, {}> {
  buildAnimatedSections = (): Array<ReactNode> => {
    const { children } = this.props;

    if (children instanceof Array) {
      const groupedTextChildren = children.map((c, i) => ({ index: i, value: c }))
        .filter(c => typeof c.value === 'string')
        // @ts-ignore (doesn't pick up on filtering values to be only strings)
        .map(c => ({ index: c.index, value: c.value!.match(/.{1,7}/g) }));

      const textChildren = Array.from(children);
      let insertCount = 0;
      groupedTextChildren.forEach(gtc => {
        textChildren.splice(gtc.index + insertCount, 1, ...gtc.value);
        insertCount += gtc.value.length - 1;
      });

      return textChildren.map((tc: ReactNode | string, i: number) => {
        if (typeof tc === 'string') {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <span key={i} style={{ animation: `fadeIn 1s linear ${i * 0.1 + 0.5}s`, animationFillMode: 'both' }}>
              {tc}
            </span>
          );
        }
        return tc;
      });
    }

    return Array.of(children);
  };

  render(): ReactNode {
    return (
      <Typography {...this.props}>
        {this.buildAnimatedSections()}
      </Typography>
    );
  }
}

export default GradientFadeTypography;
