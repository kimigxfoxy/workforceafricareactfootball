import React, { lazy, Suspense } from 'react';

const LazyTeams = lazy(() => import('./Teams'));

const Teams = props => (
  <Suspense fallback={null}>
    <LazyTeams {...props} />
  </Suspense>
);

export default Teams;
