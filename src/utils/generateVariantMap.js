import { lazy } from 'react';

export default function generateVariantMap(variants) {
  const variantMap = {};

  for (const path in variants) {
    // Extract the variant name from the file path
    // e.g., './variants/VariantA.jsx' -> 'VariantA'
    const match = path.match(/variants\/(.+)\.jsx$/);
    if (match) {
      const variantName = match[1];
      // The value from import.meta.glob is already the dynamic import function!
      // We just need to wrap it with React.lazy
      variantMap[variantName] = lazy(variants[path]);
    }
  }

  return variantMap;
}
