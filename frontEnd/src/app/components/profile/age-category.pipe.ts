import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCategory'
})
export class AgeCategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    var today = new Date(); 
    var dd = today.getDate(); 
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var diff = yyyy-value.substr(0,4);
    if(diff>=9 && diff<=13){
      return "9-13";
    }
    else if(diff>=14 && diff<=30){
      return "14-30"; 
    }
    else if(diff>=30 && diff<=50){
      return "30-50";
    }
    else if(diff>50){
      return "50+";
    }else{
      return "kid";
    }
    
    
    
  }

}
