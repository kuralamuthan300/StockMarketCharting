import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AdminGuardService } from './service/admin-guard.service';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { CompareSectorsComponent } from './compare-sectors/compare-sectors.component';
import { ListIposComponent } from './list-ipos/list-ipos.component';
import { ClientLogoutComponent } from './client-logout/client-logout.component';
import { ClientGuardService } from './service/client-guard.service';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'adminlogin', component: AdminLoginComponent},
  {path:'clientlogin', component: ClientLoginComponent},
  {path:'adminlanding/:name', component: AdminlandingComponent, canActivate:[AdminGuardService]},
  {path:'clientlanding/:name', component: ClientlandingComponent},
  {path:'companies', component: CompaniesComponent, canActivate:[AdminGuardService]},
  {path:'ipos', component: IposComponent, canActivate:[AdminGuardService]}, 
  {path:'exchanges', component: ExchangesComponent, canActivate:[AdminGuardService]},
  {path:'upload', component:UploadComponent, canActivate:[AdminGuardService]},
  {path:'adminlogout', component:AdminLogoutComponent,canActivate:[AdminGuardService]},
  {path:'compareCompanies', component: CompareCompanyComponent, canActivate:[ClientGuardService]},
  {path:'compareSectors', component: CompareSectorsComponent, canActivate:[ClientGuardService]},
  {path:'listIpos', component:ListIposComponent, canActivate:[ClientGuardService]},
  {path:'clientlogout', component:ClientLogoutComponent, canActivate:[ClientGuardService]},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
