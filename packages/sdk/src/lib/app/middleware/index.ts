import { sequence } from 'astro:middleware';
import errorPages from './error-pages';
import stores from './stores';

export const onRequest = sequence(errorPages(), stores());
