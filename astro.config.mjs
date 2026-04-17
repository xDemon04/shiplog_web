// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.VERCEL ? 'https://shiplog-web.vercel.app' : 'https://xDemon04.github.io',
  base: process.env.VERCEL ? '/' : '/shiplog_web',
});