import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseKullanici } from 'src/app/models/Kullanici';
import { ServisService } from 'src/app/servis/servis.service';

@Component({
  selector: 'app-yoneticiuye',
  templateUrl: './yoneticiuye.component.html',
  styleUrls: ['./yoneticiuye.component.css']
})
export class YoneticiuyeComponent implements OnInit {

  kullanicilar: FirebaseKullanici;

  constructor(private servis: ServisService, private router: Router) {}

  ngOnInit(): void {
    this.kullaniciliste();
  }

  kullaniciliste() {
    this.servis.kullaniciliste().subscribe((d: FirebaseKullanici) => {
      this.kullanicilar = d;
    })
  }
  kullaniciduzenle(k: FirebaseKullanici) {
    this.router.navigate(['../yoneticiuyeislemleri',  k.key])
  }
  kullanicisil(id: string) {
    this.servis.kullanicisil(id).subscribe(d => {
      this.kullaniciliste();
    })
  }

}
