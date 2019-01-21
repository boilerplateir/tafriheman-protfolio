import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router(); // eslint-disable-line new-cap

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.status(403).send('no login');
}

router.route('/')
  /** GET /api/users - Get list of users */
  .get(isAuthenticated, userController.list);

router.route('/:userId')
  /** GET /api/users/:userId - Get user */
  .get(isAuthenticated, userController.get);

/** Load user when API with userId route parameter is hit */
router.param('userId', userController.load);

export default router;