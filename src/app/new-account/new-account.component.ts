import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { constants } from 'fs';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    const service = new LoggingService();
    service.logStatusChange(accountStatus);
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
