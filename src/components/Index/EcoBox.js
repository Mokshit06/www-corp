import React from 'react';
import { Content } from '@codeday/topo/Molecule';
import { Box, Grid, Link } from '@codeday/topo/Atom';
import Eco from '@codeday/topocons/Icon/Eco';
import { useQuery } from '../../query';
import StaticContent from '../StaticContent';

export default function EcoBox() {
  const { eco, learnMore } = useQuery().cms;

  return (
    <StaticContent>
      <Content color="current.textLight" mt={16} mb={-12}>
        <Grid borderWidth={1} rounded="md" p={8} gap={8} templateColumns="1fr 100%" alignItems="center">
          <Box float="left" fontSize="2xl">
            <Eco />
          </Box>
          <Box pr={8}>
            {eco?.items[0]?.value}{' '}
            <Link href="/eco">{learnMore?.items[0]?.value || 'Learn more.'}</Link>
          </Box>
        </Grid>
      </Content>
    </StaticContent>
  );
}
