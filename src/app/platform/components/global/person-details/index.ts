import { Component, Input } from '@angular/core';

@Component({
  selector    : 'img-name',
  templateUrl : './index.html',
  styleUrls   : ['./index.scss'],
})

export class ImgWithName {
  @Input() imagePath: string;
  @Input() name: string;
  @Input() size: number;
}
