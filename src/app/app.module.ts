import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AuthService } from './shared/common/services/auth.service';
import { AuthGuard } from './shared/common/services/auth-guard.service';
import { AppRoutinModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoaderComponent } from './shared/common/loader/loader.component';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';


import { DataViewModule } from 'primeng/dataview';
import { FinanceComponent } from './pages/finance/finance.component';
import { DynamicDialogDemo } from './pages/finance/DynamicDialogDemo/DynamicDialogDemo.component';
import { ProductListDemo } from './pages/finance/ProductListDemo/ProductListDemo.component';

@NgModule({
  imports: [
    AppRoutinModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    ToastModule,
    TableModule,
    TagModule,
    ButtonModule,
    DataViewModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoaderComponent,
    FinanceComponent,
    DynamicDialogDemo,
    ProductListDemo
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
