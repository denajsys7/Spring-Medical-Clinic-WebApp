import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, NgbModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: []
} as NgModule)
export class HomeModule {
}
