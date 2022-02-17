import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../../../../shared/notification.service';

@Component({
  selector: 'app-importer-item',
  templateUrl: './Importer-item.component.html',
  styleUrls: ['./Importer-item.component.css']
})
export class ImporterItemComponent implements OnInit {
  @Input() importer
  @Input() index: string;


  FROM = 'top';
  ALIGHN = 'right';
  MESSAGE = 'Importer Management Feature Coming Soon... ';


  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
  }

  showNotification() {
    this.notificationService.showNotification(this.FROM, this.ALIGHN, this.MESSAGE)
  }
}
