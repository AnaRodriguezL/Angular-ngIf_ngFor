import { Component } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
    fillerNav = [
        { name: "Facturas", route: "", icon: "shopping_cart" },
        { name: "Competencias", route: "competencias", icon: "supervised_user_circle" }
    ]
}
