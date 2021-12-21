import React, { lazy, Suspense } from 'react';

const LazyAllplayers = lazy(() => import('./Allplayers'));

const Allplayers = props => (
  <Suspense fallback={null}>
    <LazyAllplayers {...props} />
  </Suspense>
);

export default Allplayers;
