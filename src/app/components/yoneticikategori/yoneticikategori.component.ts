import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Kategori
} from 'src/app/models/kategori';
import {
  ServisService
} from 'src/app/servis/servis.service';

@Component({
  selector: 'app-yoneticikategori',
  templateUrl: './yoneticikategori.component.html',
  styleUrls: ['./yoneticikategori.component.css']
})
export class YoneticikategoriComponent implements OnInit {

  kategoriler: Kategori;
  className: string;

  constructor(private servis: ServisService, private router: Router) {}

  ngOnInit(): void {
    this.kategoriliste();
    console.log(this.kategoriler)
  }

  kategoriliste() {
    this.servis.kategoriliste().subscribe((d: Kategori) => {
      this.kategoriler = d;
    })
  }
  kategoriduzenle(k: Kategori) {
    this.router.navigate(['../yoneticikategoriislemleri',  k.key])
  }
  kategorisil(id: string) {
    this.servis.kategorisil(id).subscribe(d => {
      console.log(d);
      this.kategoriliste();
    })
  }
}
