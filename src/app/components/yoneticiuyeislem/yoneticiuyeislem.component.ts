import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseKullanici } from 'src/app/models/Kullanici';
import { ServisService } from 'src/app/servis/servis.service';

@Component({
  selector: 'app-yoneticiuyeislem',
  templateUrl: './yoneticiuyeislem.component.html',
  styleUrls: ['./yoneticiuyeislem.component.css']
})
export class YoneticiuyeislemComponent implements OnInit {

  kullanici: FirebaseKullanici = new FirebaseKullanici();
  key: string;
  constructor(private servis: ServisService, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.key = this.activeRoute.snapshot.paramMap.get("key")
    if (this.key) {
      this.kullanicibykey()
    }
  }

  kullaniciEkle() {
    if (this.kullanici.id) {
      this.servis.kullaniciduzenle(this.kullanici).subscribe((d)=>{
        this.router.navigate(['../yoneticiuye'])
      })
    } else {
      this.kullanici.key = String(Math.round(Math.random() * 10000000));
      this.servis.kullaniciekle(this.kullanici).subscribe((d) => {
        this.router.navigate(['../yoneticiuye'])
      })
    }

  }
  kullanicibykey() {
    this.servis.kullanicibykey(this.key).subscribe((d: FirebaseKullanici) => {
      this.kullanici = d[0];
    })
  }

}
