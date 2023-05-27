import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'w4x3t3rq',
  dataset: 'production',
  title: 'The Kapda Project',
  apiVersion: '2023-05-26',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;
