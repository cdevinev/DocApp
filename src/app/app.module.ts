import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { DocDetailsComponent } from './doc-details/doc-details.component';
import { DocDetailFormComponent } from './doc-details/doc-detail-form/doc-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailFormComponent } from './user-details/user-detail-form/user-detail-form.component';
import { ReactiveFormsModule} from '@angular/forms' 

const routes: Routes = [
  
  { path: 'doc', component: DocDetailFormComponent },
  { path: 'doc2', component: DocDetailsComponent },
  { path: 'user', component: UserDetailsComponent },  
  { path: 'user2', component: UserDetailFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DocDetailsComponent,
    DocDetailFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(routes),    
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
