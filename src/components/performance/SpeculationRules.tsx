import React from 'react';

/**
 * Chrome Speculation Rules API — Pre-renders pages on hover for instant navigation.
 * Injected once in the root layout. Only affects Chromium browsers (Chrome 121+).
 * Non-Chromium browsers safely ignore this script type.
 * 
 * Reference: Speculation Rules API
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
                '/electric-scooter/*',
                '/drift-scooter/*',
                '/kids-scooter/*',
                '/smart-scooter/*',
                '/scooter-accessories/*',
                '/spare-parts/*',
                '/en/electric-scooter/*',
                '/en/drift-scooter/*',
                '/en/kids-scooter/*',
                '/en/smart-scooter/*',
                '/en/scooter-accessories/*',
                '/en/spare-parts/*',
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
