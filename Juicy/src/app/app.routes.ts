import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { StartersComponent } from './pages/starters/starters.component';
import { MainsComponent } from './pages/mains/mains.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { RecipesearchComponent } from './pages/recipesearch/recipesearch.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'starters', component: StartersComponent },
    { path: 'mains', component: MainsComponent },
    { path: 'desserts', component: DessertsComponent },
    { path: 'recipesearch', component: RecipesearchComponent },
];
