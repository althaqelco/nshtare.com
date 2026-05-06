// Taxonomy and pSEO Data - Refactored to Modular Architecture
// All data is maintained in the modular DB at src/data/

import { categories, products, subcategories, cities } from '../data/index';

export { categories, products, subcategories, cities };

// ──── Utility Functions ────

export function getCategoryBySlug(slug: string) {
  return categories.find((c: any) => c.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find((c: any) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p: any) => p.categorySlug === categorySlug);
}

export function getSubcategoriesByParent(parentSlug: string) {
  return subcategories.filter((s: any) => s.parentSlug === parentSlug);
}

export function getSubcategoryBySlug(parentSlug: string, subSlug: string) {
  return subcategories.find((s: any) => s.parentSlug === parentSlug && s.slug === subSlug);
}

export function getProductsBySubcategory(categorySlug: string, subcategorySlug: string) {
  return products.filter((p: any) => p.categorySlug === categorySlug && p.subcategorySlug === subcategorySlug);
}

export function getProductBySlug(slug: string) {
  return products.find((p: any) => p.slug === slug);
}
