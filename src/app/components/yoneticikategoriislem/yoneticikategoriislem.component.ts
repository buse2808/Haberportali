import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Kategori
} from 'src/app/models/kategori';
import {
  ServisService
} from 'src/app/servis/servis.service';

@Component({
  selector: 'app-yoneticikategoriislem',
  templateUrl: './yoneticikategoriislem.component.html',
  styleUrls: ['./yoneticikategoriislem.component.css']
})
export class YoneticikategoriislemComponent implements OnInit {
  hata: boolean = false;
  mesaj: string;
  yeniKategori: Kategori = new Kategori();
  key: string;
  constructor(private servis: ServisService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.key = this.activeRoute.snapshot.paramMap.get("key")
    if (this.key) {
      this.kategoribykey()
    }
  }

  kategoriEkle() {
    if (this.yeniKategori.id) {
      this.servis.kategoriduzenle(this.yeniKategori).subscribe((d)=>{
        this.router.navigate(['../yoneticikategori'])
      })
    } else {
      this.yeniKategori.key = String(Math.round(Math.random() * 10000000));
      this.servis.kategoriekle(this.yeniKategori).subscribe((d) => {
        this.router.navigate(['../yoneticikategori'])
      })
    }

  }
  kategoribykey() {
    this.servis.kategoribykey(this.key).subscribe((d: Kategori) => {
      this.yeniKategori = d[0];
    })
  }

}
