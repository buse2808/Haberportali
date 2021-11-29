import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FirebaseKullanici
} from 'src/app/models/Kullanici';
import {
  ServisService
} from 'src/app/servis/servis.service';

@Component({
  selector: 'app-uyeol',
  templateUrl: './uyeol.component.html',
  styleUrls: ['./uyeol.component.css']
})
export class UyeolComponent implements OnInit {

  yeniKullanici: FirebaseKullanici = new FirebaseKullanici();
  constructor(private servis: ServisService, private router: Router) {}

  ngOnInit(): void {}

  UyeOl() {
    this.yeniKullanici.key = String(Math.round(Math.random() * 10000000));

    this.servis.kullaniciekle(this.yeniKullanici).subscribe(() => {
      this.router.navigate(['girisyap'])
    })
  }

}
