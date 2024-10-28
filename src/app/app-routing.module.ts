import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddvoyageComponent } from "./addvoyage/addvoyage.component";
import { ListvoyageComponent } from "./listvoyage/listvoyage.component";


const routes: Routes = [
    { path: 'addvoyage', component: AddvoyageComponent },
    { path: 'list', component: ListvoyageComponent },
    { path: '**', redirectTo: '/list' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export default class AppRoutingModule {}