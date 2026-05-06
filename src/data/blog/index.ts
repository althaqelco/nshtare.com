import { b_1 } from './b_1';
import { b_2 } from './b_2';
import { b_3 } from './b_3';
import { b_4 } from './b_4';

export const blogPosts: any[] = [
  b_1,
  b_2,
  b_3,
  b_4
];

// Helper functions for easy access
export const getPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllPosts = () => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
