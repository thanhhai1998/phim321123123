import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule
  ],
  exports: [
    MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule
  ]
})
export class MaterialModuleModule { }
