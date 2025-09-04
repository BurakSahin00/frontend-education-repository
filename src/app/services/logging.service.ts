import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  info(message: string, data?: any) {
    console.info('INFO:', message, data || '');
  }

  warn(message: string, data?: any) {
    console.warn('WARNING:', message, data || '');
  }

  error(message: string, data?: any) {
    console.error('ERROR:', message, data || '');
  }

}