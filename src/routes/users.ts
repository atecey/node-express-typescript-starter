import { Request, Response } from "express";
import * as data from "../data/users.json";

const userData: any = data;

/**
 * Get all users.
 */
export async function getUsers(request: Request, response: Response) {
  const email = request.query.email;
  console.log(email ? `Getting users by email: ${email}` : `Getting users`);

  response.send(
    email ? userData.filter((user) => user.email === email) : userData
  );
}

/**
 * Gets user by Id.
 */
export async function getUsersById(request: Request, response: Response) {
  const userId: number = Number(request.params.userId);

  console.log(`Getting users by userId: ${userId}`);
  response.send(userData.filter((user) => user.id === userId));
}

/**
 * Add user
 */
export async function addUser(request: Request, response: Response) {
  const user = request.body;
  console.log(`Adding user ${user}`);

  user.id = user.id
    ? user.id
    : (user.id =
        Math.max.apply(
          Math,
          userData.map((user) => {
            return user.id;
          })
        ) + 1);

  userData.push(user);
  response.send(user);
}
