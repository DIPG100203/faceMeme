import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";
import { RegistroComponent } from "./registro/registro.component";
import { FeedComponent } from "./feed/feed.component";
import { PerfilComponent } from "./perfil/perfil.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioSesionComponent, RegistroComponent, FeedComponent, PerfilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'faceMeme';
}
