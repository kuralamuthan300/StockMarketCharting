import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ErrorComponent } from './error/error.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ClientlandingComponent } from './clientlanding/clientlanding.component';
import { CompaniesComponent } from './companies/companies.component';
import { IposComponent } from './ipos/ipos.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { UploadComponent } from './upload/upload.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { MenuClientComponent } from './menu-client/menu-client.component';
import { CompareSectorsComponent } from './compare-sectors/compare-sectors.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { ListIposComponent } from './list-ipos/list-ipos.component';
import { ClientLogoutComponent } from './client-logout/client-logout.component';
import { ClientMenuComponent } from './client-menu/client-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    ClientLoginComponent,
    ErrorComponent,
    AdminlandingComponent,
    ClientlandingComponent,
    CompaniesComponent,
    IposComponent,
    ExchangesComponent,
    UploadComponent,
    MenuComponent,
    FooterComponent,
    AdminLogoutComponent,
    MenuClientComponent,
    CompareSectorsComponent,
    CompareCompanyComponent,
    ListIposComponent,
    ClientLogoutComponent,
    ClientMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
