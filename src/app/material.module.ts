import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    exports: [MatInputModule, MatButtonModule, MatRadioModule, MatDividerModule],
})
export class MaterialModule { }
