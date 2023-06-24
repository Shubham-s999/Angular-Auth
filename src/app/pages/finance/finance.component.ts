import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from './ProductListDemo/ProductListDemo.component';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html'
})
export class FinanceComponent implements OnInit {

  constructor(public dialogService: DialogService, public messageService: MessageService) { }

  ngOnInit() {
  }

  ref: DynamicDialogRef | undefined;

  show() {
    this.ref = this.dialogService.open(ProductListDemo, {
      header: 'Select a Product',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe((product: any) => {
      if (product) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
      }
    });

    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }


}
