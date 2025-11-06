
import type { z } from 'zod';

/**
 * Base response structure for all API endpoints
 * @template T - The type of data returned by the API
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

/**
 * Authentication-related interfaces
 */
export interface UserCredentials {
  username: string;
  password: string;
}

export interface AuthTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

/**
 * Pagination interface for list-based API responses
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}

/**
 * Common error interface for API error handling
 */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

/**
 * Generic CRUD operation interfaces
 */
export interface CreateOperation<T> {
  create(item: Partial<T>): Promise<ApiResponse<T>>;
}

export interface ReadOperation<T, ID = string> {
  getById(id: ID): Promise<ApiResponse<T>>;
  list(params?: PaginationParams): Promise<ApiResponse<PaginatedResponse<T>>>;
}

export interface UpdateOperation<T, ID = string> {
  update(id: ID, updates: Partial<T>): Promise<ApiResponse<T>>;
}

export interface DeleteOperation<ID = string> {
  delete(id: ID): Promise<ApiResponse<boolean>>;
}

/**
 * Base CRUD interface combining all operations
 */
export interface CrudRepository<T, ID = string> 
  extends CreateOperation<T>, 
          ReadOperation<T, ID>, 
          UpdateOperation<T, ID>, 
          DeleteOperation<ID> {}
