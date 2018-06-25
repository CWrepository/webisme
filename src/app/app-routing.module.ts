import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { AboutComponent } from './page/about/about.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ContactComponent } from './page/contact/contact.component';
import { HelpComponent } from './page/help/help.component';
import { NewComponent } from './page/new/new.component';
import { PriceComponent } from './page/price/price.component';
import { NewdetailComponent } from './page/newdetail/newdetail.component';
import { FunctionComponent } from './page/function/function.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { ThemeComponent } from './page/theme/theme.component';
import { LeftmenuComponent } from './page/leftmenu/leftmenu.component';
import { OptionsComponent } from './page/options/options.component';
import { AppToolComponent } from './page/app-tool/app-tool.component';

const routes: Routes = [/* 
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'page', loadChildren: './page/laout/laout.module#LaoutModule'},
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' } */
    { path: '', component: IndexComponent },
    { path: 'home', component: IndexComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'help', component: HelpComponent },
    { path: 'new', component: NewComponent },
    { path: 'price', component: PriceComponent },
    { path: 'newdetail', component: NewdetailComponent },
    { path: 'function', component: FunctionComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'theme', component: ThemeComponent },
    { path: 'leftmenu', component: LeftmenuComponent },
    { path: 'options', component: OptionsComponent },
    { path: 'app-tool', component: AppToolComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
