import React, { Suspense, lazy } from 'react';
import generateVariantMap from '../../utils/generateVariantMap.js';

const variants = import.meta.glob('./variants/*.jsx');
const variantMap = generateVariantMap(variants);

const DefaultInput = lazy(() => import('./Default.jsx')); // Fallback

function InputSelector({ variant, ...props }) {
  const SpecificInput = variantMap[variant] || DefaultInput;
  return (
    <Suspense fallback={props.fallback || <div>Loading...</div>}>
      <SpecificInput {...props} />
    </Suspense>
  );
}
export default InputSelector;
