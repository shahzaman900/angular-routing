import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { ChildAComponent } from './first/child-acomponent/child-acomponent.component';
import { ChildBComponent } from './first/child-bcomponent/child-bcomponent.component';

export const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
    children: [
      { path: 'child-a', component: ChildAComponent },
      { path: 'child-b', component: ChildBComponent },
    ]
  },
  { path: 'second-component', component: SecondComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full'},
  { path: '**', component: NotfoundcomponentComponent }

];
