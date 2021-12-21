import React, { lazy, Suspense } from 'react';

const LazyPastFixtures = lazy(() => import('./PastFixtures'));

const PastFixtures = props => (
  <Suspense fallback={null}>
    <LazyPastFixtures {...props} />
  </Suspense>
);

export default PastFixtures;
