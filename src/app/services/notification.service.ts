import { Injectable } from "@angular/core";
import { NzNotificationService } from "ng-zorro-antd/notification";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor(private notification: NzNotificationService) {}

  showSuccess(message: string, content: string): void {
    this.notification.create("success", message, content, { nzDuration: 3000 , nzPlacement: 'bottomRight' });
  }

  showError(message: string, content: string): void {
    this.notification.create("error", message, content, { nzDuration: 3000 , nzPlacement: 'bottomRight' });
  }
}
