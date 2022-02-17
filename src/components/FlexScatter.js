import React from 'react';
import PropTypes from 'prop-types';
import { create } from 'random-seed';
import { Box, Flex } from '@codeday/topo/Atom';

export default function FlexScatter({
  children, seed, gapMin, gapMax, yOffsetMin, yOffsetMax, ...props
}) {
  const rand = create(seed);
  const offsetChildren = children.map((c) => {
    const offset = rand.intBetween(yOffsetMin, yOffsetMax);
    return (
      <Box
        position="relative"
        marginTop={`${offset}px`}
        key="s-c.key"
      >
        {c}
      </Box>
    );
  });

  const gaps = (new Array(children.length + 1)).fill(undefined).map((_, i) => (
    <Box
      flexBasis={`${rand.intBetween(gapMin, gapMax)}px`}
      flexGrow={rand.intBetween(1, 8)}
      flexShrink={rand.intBetween(1, 8)}
      // eslint-disable-next-line react/no-array-index-key
      key={`flex-gap-${i}`}
    />
  ));
  const zipper = (new Array(children.length * 2)).fill(undefined).map((_, i) => (
    i % 2 === 0 ? gaps : offsetChildren)[Math.floor(i / 2)]);
  zipper.push(gaps[gaps.length - 1]);

  return (
    <Flex justify="space-around" alignContent="space-around" wrap="wrap" {...props}>
      {zipper}
    </Flex>
  );
}
FlexScatter.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  seed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  gapMin: PropTypes.number.isRequired,
  gapMax: PropTypes.number.isRequired,
  yOffsetMin: PropTypes.number.isRequired,
  yOffsetMax: PropTypes.number.isRequired,
};
