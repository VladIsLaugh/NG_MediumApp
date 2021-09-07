import { BackendErrorMessagesComponent } from './components/backendErrorMessages/backendErrorMessages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BackendErrorMessagesComponent],
  imports: [CommonModule],
  exports: [BackendErrorMessagesComponent]
})
export class BackendErrorMessagesModule {}
