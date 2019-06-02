const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'addstaff', component: AddStaffComponent, canActivate: [AuthGuard] },
	{ path: 'displaystaff', component: DisplayStaffComponent, canActivate: [AuthGuard] }
	]}
  ];
  
  @NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
  })
  export class AppRoutingModule { }


//in html
<a routerLink="/"/>