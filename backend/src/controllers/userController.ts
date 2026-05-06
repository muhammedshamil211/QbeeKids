import { Request, Response } from 'express';
import asyncHandler from '../utils/asyncHandler';
import { ApiResponse } from '../utils/ApiResponse';

/**
 * @desc    Get all users
 * @route   GET /api/v1/users
 * @access  Public
 */
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  // Logic to fetch users would go here
  const users: any[] = [];
  
  return res.status(200).json(
    new ApiResponse(200, users, "Users fetched successfully")
  );
});
