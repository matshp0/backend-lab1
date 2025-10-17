import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getServerStatus() {
    return { status: 'OK', date: new Date().toISOString() };
  }
}
