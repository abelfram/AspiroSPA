import { NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "../material/material.module";

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    }
];

@NgModule({
    declarations: [MainPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule
    ],
    exports: [RouterModule]
})
export class MainPageModule {}