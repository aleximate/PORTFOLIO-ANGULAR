import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
toAbout(){
  document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
}
toHome(){
  document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
}
toProjects(){
  document.getElementById("projects")?.scrollIntoView({behavior:"smooth"});
}
toContact(){
  document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
}

}
