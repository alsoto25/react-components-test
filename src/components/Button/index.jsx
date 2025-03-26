import React, { Suspense, lazy } from 'react';
import generateVariantMap from '../../utils/generateVariantMap.js';

const variants = import.meta.glob('./variants/*.jsx');
const variantMap = generateVariantMap(variants);

const DefaultButton = lazy(() => import('./Default.jsx')); // Fallback

function ButtonSelector({ variant, ...props }) {
  const SpecificButton = variantMap[variant] || DefaultButton;
  return (
    <Suspense fallback={props.fallback || <div>Loading...</div>}>
      <SpecificButton {...props} />
    </Suspense>
  );
}
export default ButtonSelector;
