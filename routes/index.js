import CreateRoute from './create';
import ReadRoute from './read';
import UpdateRoute from './update';
import DeleteRoute from './delete';
import CustomerRoute from './customer-route';

import NotFound from './not-found';

const routes = [
  CustomerRoute,
  CreateRoute,
  ReadRoute,
  UpdateRoute,
  DeleteRoute,
  NotFound
];

export default routes;
