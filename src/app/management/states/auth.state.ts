import { User } from '../../models/user.model';

export type AuthStatus = 'anonymous' | 'registering' | 'awaitingVerification' | 'verifying' | 'authenticated' | 'error';

export interface VerificationState {
  verificationId: string;
  email: string;
  resendInSec: number;
  attemptsLeft?: number;
}

export interface AuthState {
  status: AuthStatus;
  error: string | null;
  currentUser: User | null;

  // UI/flow flags
  loading: {
    registering: boolean;
    verifying: boolean;
    resending: boolean;
  };

  // Register flow
  verification: VerificationState | null;
}