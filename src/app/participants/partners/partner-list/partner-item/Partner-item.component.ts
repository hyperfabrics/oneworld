import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../../../../shared/notification.service';

@Component({
  selector: 'app-partner-item',
  templateUrl: './Partner-item.component.html',
  styleUrls: ['./Partner-item.component.css']
})
export class PartnerItemComponent implements OnInit {
  @Input() partner
  @Input() index: string;

  from = 'top';
  align = 'right';
  message = 'Partner Management Feature Coming Soon... ';

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {}

  showNotification() {
    this.notificationService.showNotification(this.from, this.align, this.message)
  }
}
