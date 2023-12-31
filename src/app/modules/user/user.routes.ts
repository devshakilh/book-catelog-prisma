import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validations';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
);
router.delete('/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.deleteUser);
router.get('/',
  // auth(ENUM_USER_ROLE.ADMIN),
  UserController.getAllUsers);

router.get('/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.getSingleUser);

export const UserRoutes = router;
