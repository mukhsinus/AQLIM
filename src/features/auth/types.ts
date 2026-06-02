export interface User {
  id: string;
  name: string;
  phone: string;
  avatar?: string;
  plan?: string;
  planExpires?: string;
  joinedDate?: string;
}

export interface LoginDto {
  phone: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  phone: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
