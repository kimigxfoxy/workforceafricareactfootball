import React, { lazy, Suspense } from 'react';

const LazyFutureFixtures = lazy(() => import('./FutureFixtures'));

const FutureFixtures = props => (
  <Suspense fallback={null}>
    <LazyFutureFixtures {...props} />
  </Suspense>
);

export default FutureFixtures;
