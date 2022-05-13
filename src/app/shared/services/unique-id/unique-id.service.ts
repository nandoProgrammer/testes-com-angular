import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()

export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generateUniqIdWithPrefix(prefix: string): string{
    if(!prefix || !this.validId.test(prefix)){
       throw Error('Prefix can not be empty');
    }
    const uniqueId = this.generateUniqId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGenerateUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUniqId(): string {
    return uuidv4();
  }
}
