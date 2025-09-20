import { User } from '../../features/todo/model/user.model';

export type AuthStatus = 'anonymous' | 'registering' | 'loggingIn' | 'loggingOut' | 'updating' | 'deleting' | 'awaitingVerification' | 'verifying' | 'authenticated' | 'error';

export interface VerificationState {
  verificationId: string;
  email: string;
  resendInSec: number;
  attemptsLeft?: number;
}

export interface AuthState {
  status: AuthStatus;
  error: string[] | null;
  currentUser: User | null;
  accessToken: string | null;

  // UI/flow flags
  loading: {
    registering: boolean;
    verifying: boolean;
    resending: boolean;
    deleting: boolean;
    updating: boolean;
    loggingIn: boolean;
    loggingOut: boolean;
  };
}