import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { ShoeService } from './services/shoe.service';
import { ScraperService } from './services/scraper.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ShoesComponent } from './shoes/shoes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ShoeCommentsComponent } from './shoe-comments/shoe-comments.component';

import { ArraySortPipe } from './sort.pipe';

import { environment } from '../environments/environment';
import { UserService } from './services/user.service';
import { AlarmComponent } from './alarm/alarm.component';
import { AlarmDialogComponent } from './alarm-dialog/alarm-dialog.component';
import { NotificationService } from './services/notification.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SignupComponent,
    SigninComponent,
    ShoesComponent,
    NavbarComponent,
    ShoeDetailsComponent,
    ResetpasswordComponent,
    ShoeCommentsComponent,
    ArraySortPipe,
    AlarmComponent,
    AlarmDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    ShoeService,
    AuthService,
    ScraperService,
    UserService,
    NotificationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AlarmDialogComponent]
})
export class AppModule { }
