/**
 * All application routes.
 */
import { getUsers, getUsersById, addUser } from './routes/users';

export const AppRoutes = [
  {
    path: '/users',
    method: "get",
    action: getUsers
  },
  {
    path: '/users/:userId',
    method: 'get',
    action: getUsersById
  },
  {
    path: '/users',
    method: 'post',
    action: addUser
  }
];


