import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'vimeo',
  templateUrl: './vimeo.component.html',
  styleUrls: ['./vimeo.component.css']
})
export class VimeoComponent implements OnInit {

  @Input() videoid: string;
  @Input() width: string;
  @Input() height: string;

  @ViewChild('vimeo') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.setAttribute("src", "https://player.vimeo.com/video/" + this.videoid);

  }

}
