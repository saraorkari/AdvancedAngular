import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { Exe1Component } from './Lesson1/exe1/exe1.component';
import { EditUserComponent } from './Lesson2/Redux/edit-user/edit-user.component';
import { AllUsersComponent } from './Lesson2/Redux/all-users/all-users.component';
import { AdultUsersComponent } from './Lesson2/Redux/adult-users/adult-users.component';
import {StoreModule} from '@ngrx/store'
import {UserReducer  } from './Lesson2/appReducer'

//material
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption, MatOptionModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { UsersComponent } from './Lesson2/RoutingSPA/users/users.component';
import { UserDetailsComponent } from './Lesson2/RoutingSPA/user-details/user-details.component';
import { MainCompComponent } from './Lesson2/RoutingSPA/main-comp/main-comp.component';
import { EnterNameComponent } from './Lesson3/SessionStorage/enter-name/enter-name.component';
import { EnterAgeComponent } from './Lesson3/SessionStorage/enter-age/enter-age.component';
import { ShowDataComponent } from './Lesson3/SessionStorage/show-data/show-data.component';
import { MainComponent } from './Lesson3/SessionStorage/main/main.component';
import { LoginComponent } from './Lesson3/Authentication/login/login.component';
import { ProductComponent } from './Lesson3/Authentication/product/product.component';
import { InvoicesComponent } from './Lesson3/Authentication/invoices/invoices.component';
import { MenuComponent } from './Lesson3/Authentication/menu/menu.component';
import { RouteGuardService } from './Lesson3/Authentication/Services/route-guard.service';
import { AuthInterceptorService } from './Lesson3/Authentication/Services/auth-interceptor.service';
import { AuthInterceptor2Service } from './Lesson3/Authentication/Services/auth-interceptor2.service';
import { MainComp2Component } from './Lesson4/ngZone/main-comp2/main-comp2.component';
import { MoviesCompComponent } from './Lesson5/movies-comp/movies-comp.component';
 
const appRoutes : Routes = [{path : 'users', component : UsersComponent},
                            {path : 'userDetails/:id', component : UserDetailsComponent},
                            {path : '', component : LoginComponent},
                            {path : 'enter-name', component : EnterNameComponent},
                            {path : 'enter-age', component : EnterAgeComponent},
                            {path : 'show-data', component : ShowDataComponent},
                            {path : 'login', component : LoginComponent},
                            {path : 'menu', component : MenuComponent},
                            {path : 'product', component : ProductComponent},
                            {path : 'invoices', component : InvoicesComponent, 
                             canActivate : [RouteGuardService]}
                          ]
@NgModule({
  declarations: [
    AppComponent,
    Exe1Component,
    EditUserComponent,
    AllUsersComponent,
    AdultUsersComponent,
    UsersComponent,
    UserDetailsComponent,
    MainCompComponent,
    EnterNameComponent,
    EnterAgeComponent,
    ShowDataComponent,
    MainComponent,
    LoginComponent,
    ProductComponent,
    InvoicesComponent,
    MenuComponent,
    MainComp2Component,
    MoviesCompComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ userState : UserReducer}),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatSelectModule,MatOptionModule
  ],
  providers: [
    // {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptorService, multi : true},
    // {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor2Service, multi : true}
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
