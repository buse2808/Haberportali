import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import {
  FirebaseKullanici
} from 'src/app/models/Kullanici';
import {
  ServisService
} from 'src/app/servis/servis.service';

@Component({
  selector: 'app-girisyap',
  templateUrl: './girisyap.component.html',
  styleUrls: ['./girisyap.component.css']
})
export class GirisyapComponent implements OnInit {

  hata: boolean = false;
  mesaj: string;
  constructor(public servis: ServisService,public router:Router) {}

  ngOnInit(): void {}

  GirisYap(mail, sifre) {
    if (mail == "" || sifre == "") {
      this.hata = true;
      this.mesaj = "Mail veya şifre boş olamaz";
    } else {
      this.servis.GirisYap(mail, sifre).subscribe((d: FirebaseKullanici[]) => {
        if (d.length > 0) {
          localStorage.setItem("token", this.servis.ParolaUret(64));
          this.router.navigate(['yoneticipaneli']);
        } else {
          this.hata = true;
          this.mesaj = "Mail veya şifre yanlış";
        }
      })
    }
  }
}
