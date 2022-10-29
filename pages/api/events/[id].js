import { apiHandler } from '../../../helpers/api-handler';
import { eventsRepo } from '../../../helpers/events-repo';

export default apiHandler({
  get: getById,
  put: update,
  delete: _delete,
});

function getById(req, res) {
  const event = eventsRepo.getById(req.query.id);

  if (!event) throw 'event Not Found';
  return res.status(200).json(event);
}

function update(req, res) {
  const event = eventsRepo.getById(req.query.id);

  if (!event) throw 'event Not Found';

  eventsRepo.update(req.query.id, req.body);
  return res.status(200).json({});
}

function _delete(req, res) {
  eventsRepo.delete(req.query.id);
  return res.status(200).json({});
}
