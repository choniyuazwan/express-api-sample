import CreateRoute from './create';
import ReadRoute from './read';
import UpdateRoute from './update';
import DeleteRoute from './delete';

import NotFound from './not-found';

const routes = [
  CreateRoute,
  ReadRoute,
  UpdateRoute,
  DeleteRoute,
  NotFound
];

export default routes;
