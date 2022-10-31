import { apiHandler } from '../../../helpers/api-handler';
import { eventsRepo } from '../../../helpers/events-repo';
export default apiHandler({
  get: getEvents,
  post: add,
});

function getEvents(req, res) {
  const response = eventsRepo.getAll();
  return res.status(200).json(response);
}

function add(req, res) {
  const event = req.body;
  eventsRepo.create(event);
  return res.status(200).json({});
}
