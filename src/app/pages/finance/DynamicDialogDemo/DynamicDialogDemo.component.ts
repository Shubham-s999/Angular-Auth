
import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductListDemo } from '../ProductListDemo/ProductListDemo.component';

@Component({
  templateUrl: './dynamicdialogdemo.component.html',
  providers: [DialogService]
})
export class DynamicDialogDemo implements OnDestroy {

  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService, public messageService: MessageService) { }

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
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}