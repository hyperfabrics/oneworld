import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../../../../shared/notification.service';

@Component({
  selector: 'app-supplier-item',
  templateUrl: './Supplier-item.component.html',
  styleUrls: ['./Supplier-item.component.css']
})
export class SupplierItemComponent implements OnInit {
  @Input() supplier;
  @Input() index: string;

  from = 'top';
  align = 'right';
  message = 'Supplier Management Feature Coming Soon... ';

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {}

  showNotification() {
    this.notificationService.showNotification(this.from, this.align, this.message)
  }
}
