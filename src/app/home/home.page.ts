import { Component, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  claveMaestra = [];
  otpInputs = new Array(8);

  @ViewChild('index0') index0?: ElementRef<HTMLInputElement>;
  @ViewChild('index1') index1!: ElementRef<HTMLInputElement>;
  @ViewChild('index2') index2!: ElementRef<HTMLInputElement>;
  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any; config = {
     allowNumbersOnly: true,
      length: 8,
       isPasswordInput: false,
        disableAutoFocus: false,
          inputStyles: { width: "28px", height: "28px",border: "1px solid #93358d", focusVisible: "#93358d", fontSize: "18px"},
    };

  constructor() {  }


  onOtpChange(event: any) {
    this.claveMaestra = [];
    this.claveMaestra += event;
  console.log(this.claveMaestra);
  }

  // Funcion que verifica que lo que se envia sea un numero
  // numericOnly(event: any): boolean {
  //   let pattern = /^([0-9])$/;
  //   let result = pattern.test(event.key);
  //   console.log(result)
  //   return result;
  // }

  // onKeyUp(event: KeyboardEvent, index: number) {
  //   const input = event.target as HTMLInputElement;
  //   console.log('tecla: ' + KeyboardEvent);

  //   if (event.key >= '0' && event.key <= '9') {
  //     // Si es un número y hay un siguiente input, enfócalo
  //     if (index < this.otpInputs.length - 1) {
  //       this.otpInputFields.toArray()[index + 1].nativeElement.focus();
  //     }
  //   } else if (event.key === 'Backspace') {
  //     // Si es backspace y hay un input anterior, enfócalo
  //     if (index > 0) {
  //       this.otpInputFields.toArray()[index - 1].nativeElement.focus();
  //     }
  //   }
  // }

  // onKeyUp (e: any, prev: any, current: any, next: any) {
  //   var length = current.value.length;
  //   var maxlength = 1;
  //   if (length === maxlength) {
  //     if (next && next.nativeElement) {
  //         const input = next.nativeElement.querySelector('input');
  //         console.log('Works');

  //         if (input) {
  //             input.focus();
  //             console.log('Worksdoble');
  //         }
  //     }
  //   } else if (e.key === 'Backspace') {
  //         if (prev && prev.nativeElement) {
  //             const input = prev.nativeElement.querySelector('input');
  //             if (input) {
  //                 input.focus();
  //             }
  //         }
  //     }
  // }
}
