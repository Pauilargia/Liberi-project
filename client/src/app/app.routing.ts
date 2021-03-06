import { Routes } from '@angular/router';

import { EventComponent } from './event/event.component';
import { SingleEventComponent } from './single-event/single-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { EditEventComponent } from './edit-event/edit-event.component';

// USER Routes
import { UserSignupComponent } from './signup/signup.component';
import { UserLoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

// MAP ROUTES
import { MapEventsComponent } from './map-events/map-events.component';

export const routes: Routes = [
  { path: '', component: CategoriesPageComponent },
  { path: 'events/:category', component: EventComponent },
  { path: 'add', component: AddEventComponent },
  { path: 'event/:id', component: SingleEventComponent },
  { path: 'event/:id/edit', component: EditEventComponent },
  { path: 'map/now', component: MapEventsComponent },
  { path: 'signup', component: UserSignupComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'user', component: UserComponent},
  { path: 'user/edit', component: EditUserComponent},
  { path: '**', component: CategoriesPageComponent }
];
