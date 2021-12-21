import React, { lazy, Suspense } from 'react';

const LazyTeamHome = lazy(() => import('./TeamHome'));

const TeamHome = props => (
  <Suspense fallback={null}>
    <LazyTeamHome {...props} />
  </Suspense>
);

export default TeamHome;
