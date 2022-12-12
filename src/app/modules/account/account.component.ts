import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "@angular/fire/auth";
import { Router } from "@angular/router";
import { LAYOUT } from "../../constant/routes";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class AccountComponent implements OnInit {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  loginWithGoogle() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider()).then(
      (res) => {
        console.log(res);
        this.router.navigate([LAYOUT.fullUrl]);
        localStorage.setItem("token", JSON.stringify(res.user?.uid));
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
