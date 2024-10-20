import { CommonModule } from "@angular/common";
import { ApplicationConfig } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

export const appConfig: ApplicationConfig = {
    providers:[
        BrowserModule,
        CommonModule,
        AppRoutingModule
    ]
}