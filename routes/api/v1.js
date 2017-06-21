const UserController = require('../../app/http/controllers/api/v1/userController');
const JudgeController = require('../../app/http/controllers/api/v1/judgeController');
const HubController = require('../../app/http/controllers/api/v1/hubController');
const auth = require('../../app/http/middlewares/auth');

const API_PREFIX = '/api/v1';

/**
 * Set the routes defined inside
 * @param {object}  router  koa router object
 */
function routeSetter(router) {
    // Users
    router.get(`${API_PREFIX}/users`, auth, UserController('fetch'));
    // judges
    router.get(`${API_PREFIX}/judges`, auth, JudgeController('fetch'));
    router.put(`${API_PREFIX}/judges/link`, auth, JudgeController('link'));
    // Hubs
    router.post(`${API_PREFIX}/hubs`, auth, HubController('create'));
    router.patch(`${API_PREFIX}/hubs/:hub_id/link`, auth, HubController('link'));
}

module.exports = routeSetter;
