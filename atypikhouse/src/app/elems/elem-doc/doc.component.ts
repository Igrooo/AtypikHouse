import { Component, OnInit, Input } from '@angular/core';
//import { pdfMake } from "pdfmake/build/pdfmake"
//import { pdfFonts } from "pdfmake/build/vfs_fonts";
//pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-doc',
  template: '<button mat-button class="ah-cta-primary" (click)="generatePdf()"><mat-icon>picture_as_pdf</mat-icon> Télécharger</button>'
})
export class DocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() data;

  generatePdf(){
    console.log('pdf');
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    //pdfMake.createPdf(documentDefinition).open();
   }

}
