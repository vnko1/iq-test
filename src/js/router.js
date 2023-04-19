import { router, globalListener } from './functions';

window.addEventListener('click', globalListener);
window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);
