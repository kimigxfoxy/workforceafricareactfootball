import React, { lazy, Suspense } from 'react';

const LazyInjuredPlayers = lazy(() => import('./InjuredPlayers'));

const InjuredPlayers = props => (
  <Suspense fallback={null}>
    <LazyInjuredPlayers {...props} />
  </Suspense>
);

export default InjuredPlayers;
