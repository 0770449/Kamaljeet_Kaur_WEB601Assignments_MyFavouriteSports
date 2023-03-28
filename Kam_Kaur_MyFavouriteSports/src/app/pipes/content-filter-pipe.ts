import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentPipe'
})
export class ContentFilterPipe implements PipeTransform {
    transform(content: any[], type?: string): any[] {
        
        if(!type)
        {
            return content.filter(c => !c.type);
        }
        else{
            
            return content.filter(c => c.type.toLowerCase()==type.toLowerCase());
        }
    }
    }