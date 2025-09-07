import { User } from "../models/user.model"; // User modelini kendin oluşturmalısın

export const USERS: User[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    password: 'password123',
    role: 'User',
    createdAt: new Date('2025-01-01'),
    todoLabels: ['high', 'medium'],
    todoCategories: ['work', 'personal']
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    password: 'password123',
    role: 'Admin',
    createdAt: new Date('2025-02-15'),
    todoLabels: ['low'],
    todoCategories: ['personal']
  },
  {
    id: '3',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    password: 'password123',
    role: 'User',
    createdAt: new Date('2025-03-20'),
    todoLabels: ['work'],
    todoCategories: ['work']
  },
];
