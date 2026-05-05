import React from 'react';

/**
 * Chrome Speculation Rules API — Pre-renders pages on hover for instant navigation.
 * Injected once in the root layout. Only affects Chromium browsers (Chrome 121+).
 * Non-Chromium browsers safely ignore this script type.
 * 
 * Reference: Plan 05 §6.1
 */
export default function SpeculationRules() {
  const rules = {
    prerender: [
      {
        source: 'document',
        where: {
          and: [
            {
              href_matches: [
                '/product/*',
                '/electric-scooter/*',
                '/drift-scooter/*',
                '/kids-scooter/*',
                '/smart-scooter/*',
                '/en/product/*',
                '/en/electric-scooter/*',
                '/en/drift-scooter/*',
                '/en/kids-scooter/*',
                '/en/smart-scooter/*',
              ],
            },
            {
              not: {
                href_matches: ['/api/*', '/order/*', '/en/order/*'],
              },
            },
          ],
        },
        eagerness: 'moderate',
      },
    ],
  };

  return (
    <script
      type="speculationrules"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(rules) }}
    />
  );
}
