import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import {
  Kategori
} from './models/kategori';
import {
  ServisService
} from './servis/servis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'busenurHaberportali';

  kategoriler: Kategori;

  constructor(public servis: ServisService,public router:Router) {}

  ngOnInit() {
    this.servis.kategoriliste().subscribe((d: Kategori) => {
      this.kategoriler = d
    })
  }
  CikisYap(){
    localStorage.removeItem("token");
    this.router.navigate(['girisyap']);
  }
}
