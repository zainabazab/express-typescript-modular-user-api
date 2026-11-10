import { Request, Response } from "express";

interface User {
  id: number;
  name: string;
  email: string;
  status: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed@gmail.com",
    status: "Active"
  },
  {
    id: 2,
    name: "Sara Mohamed",
    email: "sara@gmail.com",
    status: "Active"
  },
  {
    id: 3,
    name: "Omar Hassan",
    email: "omar@gmail.com",
    status: "Inactive"
  }
];

// GET all users
export const getAllUsers = (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
};

// GET user by ID
export const getUserById = (req: Request, res: Response) => {
  const userId = Number(req.params.id);

  if (!Number.isInteger(userId) || userId <= 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid user ID"
    });
  }

  const user = users.find((item) => item.id === userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  return res.status(200).json({
    success: true,
    data: user
  });
};