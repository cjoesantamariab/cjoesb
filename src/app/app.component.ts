import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PiePaginaComponent } from "./componente/pie-pagina/pie-pagina.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, PiePaginaComponent]
})
export class AppComponent {
  title = 'cjoesb';
}
