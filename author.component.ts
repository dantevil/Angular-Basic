//import { AuthorService } from './author.service';
import { Component } from '@angular/core';

@Component({
selector:'author',
template:`<h2>list of Author</h2>
<ul>
<li *ngFor="let Author of author">
 {{Author}}
</li>
</ul>
`

})
export class AuthorComponent{
author= ["JK rowling","stephen king ","Dan brown"];
  
    
   }
    
   
    