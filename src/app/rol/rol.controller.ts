import { Body, Controller, Get } from '@nestjs/common';
import { RolService } from './rol.service';
import { GenericController } from 'src/utils/generic-controller/generic.controller';
import { HttpService } from '@nestjs/axios';


@Controller('rol')
export class RolController extends GenericController {

  constructor(private readonly rolService: RolService, private readonly httpService: HttpService) {
    super();
  }

  @Get()
  async getAll() {
    const data = await this.rolService.getAll();
    return this.returnResponse(data);
  }

  url = "https://hr-testcases-us-east-1.s3.amazonaws.com/226681/input04.txt?response-content-type=text%2Fplain&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR6O7GJNX5DNFO3PV%2F20230910%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230910T052535Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=c96b0d7a20b1dc40a6e85f2eb9532a2e2179616860277d178de637a8b28f38a2";

  @Get('test')
  test(@Body() body): number {
   var s: number[] = this.removeDuplicate(body.s);
   var d: number = body.d;
   var m: number = body.m;
   console.log(`[${s}]\nday:${d}\nmonth:${m}`);
   var cent: number[] = this.removeDuplicate(body.s);
   var res: number[][] = [];
   var cont = 0;
   for(let i = 0; i <= s.length; i++) {
     cent.forEach((x) => {
      if(s[i] + x == d) {
        res.push([x,s[i]].sort());
      }
     })
   }
   console.log(res)
   return;
  }

  removeDuplicate<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }


  quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...this.quickSort(left), pivot, ...this.quickSort(right)];
}
}