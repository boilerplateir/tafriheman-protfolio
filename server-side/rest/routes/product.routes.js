import express from 'express';
import productController from '../controllers/product.controller';

const router = express.Router(); // eslint-disable-line new-cap

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.status(403).send('no login');
}

router.route('/')
  /** GET /api/products - Get list of products */
  .get(isAuthenticated, productController.list);

router.route('/:productId')
  /** GET /api/products/:productId - Get products */
  .get(isAuthenticated, productController.get);

/** Load product when API with productId route parameter is hit */
router.param('productId', productController.load);

export default router;