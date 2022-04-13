import { Component } from '@angular/core'; //import

@Component({ // Metadata and template 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //define propiedades y metodos que necesitamos Vista
  title = 'my-app-ang';
  list:any[] = [];
  addTask(item:string ){
    this.list.push({id:this.list.length, name:item})
    
  }
  removeTask(id:number){
    console.log(id);
    this.list = this.list.filter(item=> item.id!== id);
    
  }
}
