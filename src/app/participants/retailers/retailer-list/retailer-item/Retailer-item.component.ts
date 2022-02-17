import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../../../../shared/notification.service';

@Component({
  selector: 'app-retailer-item',
  templateUrl: './Retailer-item.component.html',
  styleUrls: ['./Retailer-item.component.css']
})
export class RetailerItemComponent implements OnInit {
  @Input() retailer
  @Input() index: string;

  from = 'top';
  align = 'right';
  message = 'Retailer Management Feature Coming Soon... ';


  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
  }

  showNotification() {
    this.notificationService.showNotification(this.from, this.align, this.message)
  }

  productsExist () {
		return this.retailer.products.length > 0
	}
}
