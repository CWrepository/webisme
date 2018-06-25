import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { SlideComponent } from './page/slide/slide.component';
import { IndexComponent } from './page/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './page/about/about.component';
import { AboutS01Component } from './page/about-s01/about-s01.component';
import { LoginComponent } from './page/login/login.component';
import { NavigatorComponent } from './page/navigator/navigator.component';
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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    IndexComponent,
    AboutComponent,
    AboutS01Component,
    LoginComponent,
    NavigatorComponent,
    RegisterComponent,
    ContactComponent,
    HelpComponent,
    NewComponent,
    PriceComponent,
    NewdetailComponent,
    FunctionComponent,
    PortfolioComponent,
    ThemeComponent,
    LeftmenuComponent,
    OptionsComponent,
    AppToolComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
