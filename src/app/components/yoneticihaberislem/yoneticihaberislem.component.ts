import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Haber
} from 'src/app/models/haber';
import {
  Kategori
} from 'src/app/models/kategori';
import {
  ServisService
} from 'src/app/servis/servis.service';

@Component({
  selector: 'app-yoneticihaberislem',
  templateUrl: './yoneticihaberislem.component.html',
  styleUrls: ['./yoneticihaberislem.component.css']
})
export class YoneticihaberislemComponent implements OnInit {
  hata: boolean = false;
  mesaj: string;
  yeniHaber: Haber = new Haber();
  kategoriler: Kategori;
  kategori: Kategori;
  key: string;
  constructor(private servis: ServisService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.kategoriliste();
    this.key = this.activeRoute.snapshot.paramMap.get("key")
    if (this.key) {
      this.haberbykey()
    }
  }

  kategoriliste() {
    this.servis.kategoriliste().subscribe((d: Kategori) => {
      this.kategoriler = d
    })
  }

  haberEkle() {
    this.servis.kategoribykey(this.yeniHaber.haberKategorikey).subscribe((d: Kategori) => {
      this.yeniHaber.kategoriAd = d[0].kategoriAd;
      this.yeniHaber.kategoriClassName=d[0].kategoriClassName;

      if (this.yeniHaber.id) {
        this.servis.haberduzenle(this.yeniHaber).subscribe((d) => {
          this.router.navigate(['../yoneticihaber'])
        })
      }
      else {
        this.yeniHaber.haberOkundu=0;
        this.yeniHaber.haberTarih=Date().toString();
        this.yeniHaber.key = String(Math.round(Math.random() * 10000000));
        this.servis.haberekle(this.yeniHaber).subscribe((d) => {
          this.router.navigate(['../yoneticihaber'])
        })
      }
    })
  

  }
  haberbykey() {
    this.servis.haberbykey(this.key).subscribe((d: Haber) => {
      console.log(d)
      this.yeniHaber = d[0];
    })
  }
}
