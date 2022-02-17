import { Injectable } from '@angular/core';
import 'rxjs';

declare var $: any;

@Injectable()
export class NotificationService {

  // from = 'top';
  // align = 'right';
  // message = 'This Feature Coming Soon ... ';

  showNotification(from, align, message) {
    const type = ['', 'info', 'success', 'warning', 'danger'];
    const color = Math.floor(Math.random() * 4 + 1);

    $.notify(
      {
        icon: 'notifications',
        message: message
      },
      {
        type: type[color],
        timer: 4000,
        placement: {
          from: from,
          align: align
        }
      }
    );
  }
}
