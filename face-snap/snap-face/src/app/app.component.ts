import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Marilyn',
        description: "L'oeuvre la plus chère du monde",
        imageUrl: 'https://c0.wallpaperflare.com/preview/370/208/1/art-wall-marilyn-monroe-thumbnail.jpg',
        createdDate : new Date(),
        snaps: 0,
        location: "Paris"
      },
      {
        title: 'Un bon repas',
        description: 'Mmmmh que c\'est bon !',
        imageUrl : 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate : new Date(),
        snaps: 350
      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-three_Rock_Mountain_Southern_Tor.jpg',
        createdDate : new Date(),
        snaps : 0,
        location: "la montagne"

      }
    ]
  }
}
