import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentageScore'
})
export class PercentageScorePipe implements PipeTransform {

    transform(score: number): string {
        let pct = score * 20;
        return `${pct}%`;
    }

}
