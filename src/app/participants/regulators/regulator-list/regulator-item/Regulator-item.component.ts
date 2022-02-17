import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../../../../shared/notification.service';

@Component({
  selector: 'app-regulator-item',
  templateUrl: './Regulator-item.component.html',
  styleUrls: ['./Regulator-item.component.css']
})
export class RegulatorItemComponent implements OnInit {
  @Input() regulator
  @Input() index: string;

  from = 'top';
  align = 'right';
  message = 'Regulator Management Feature Coming Soon... ';

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
  }

  showNotification() {
    this.notificationService.showNotification(this.from, this.align, this.message)
  }

  Employees() {
		return this.regulator.Employees.length > 0
	}
}
