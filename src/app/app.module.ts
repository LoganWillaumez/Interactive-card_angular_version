import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntermapModule } from './intermap/intermap.module';
import { HeaderComponent } from './header/header.component';
import { MenuFriendsComponent } from './header/menu-friends/menu-friends.component';
import { BurgerMenuComponent } from './header/burger-menu/burger-menu.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuFriendsComponent, BurgerMenuComponent],
  imports: [BrowserModule, HttpClientModule, IntermapModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
