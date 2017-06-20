import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import '../rxjs/all-operators';
import { AppComponent } from './app.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleComponent } from '../article/article.component';

const appRoutes: Routes = [{
  path: 'list', component: ArticleListComponent
}, {
  path: 'post/:id', component: ArticleComponent
}, {
  path: '', redirectTo: '/list', pathMatch: 'full'
}];

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
