
/**
 * Enum for Task Status
 */
export enum TaskStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress', 
  COMPLETED = 'completed',
  BLOCKED = 'blocked'
}

/**
 * Enum for Task Priority
 */
export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high', 
  CRITICAL = 'critical'
}

/**
 * User Interface representing database user table
 */
export interface User {
  /** Unique identifier for the user */
  id: string;
  
  /** Username with length constraints (3-50 characters) */
  username: string;
  
  /** User's email address (RFC 5322 compliant) */
  email: string;
  
  /** User's role in the system */
  role: string;
  
  /** Timestamp of user creation */
  created_at: Date;
  
  /** Timestamp of last login */
  last_login?: Date;
}

/**
 * Task Interface representing database tasks table
 */
export interface Task {
  /** Unique identifier for the task */
  id: string;
  
  /** Task title (max 200 characters) */
  title: string;
  
  /** Optional task description */
  description?: string;
  
  /** Current status of the task */
  status: TaskStatus;
  
  /** Priority of the task */
  priority: TaskPriority;
  
  /** ID of the user assigned to the task */
  assigned_user_id?: string;
  
  /** ID of the project this task belongs to */
  project_id?: string;
  
  /** Timestamp of task creation */
  created_at: Date;
  
  /** Timestamp of last task update */
  updated_at: Date;
  
  /** Due date for the task */
  due_date?: Date;
}

/**
 * Project Interface representing database projects table
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;
  
  /** Project name */
  name: string;
  
  /** Optional project description */
  description?: string;
  
  /** ID of the project owner */
  owner_id: string;
  
  /** Current status of the project */
  status: string;
  
  /** Timestamp of project creation */
  created_at: Date;
  
  /** Timestamp of last project update */
  updated_at: Date;
}

/**
 * Notification Interface for system notifications
 */
export interface Notification {
  /** Unique identifier for the notification */
  id: string;
  
  /** User ID who receives the notification */
  user_id: string;
  
  /** Content of the notification */
  message: string;
  
  /** Timestamp of notification creation */
  created_at: Date;
  
  /** Whether the notification has been read */
  is_read: boolean;
}
