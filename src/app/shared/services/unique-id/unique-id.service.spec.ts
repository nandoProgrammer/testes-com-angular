import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
    it(`#${UniqueIdService.prototype.generateUniqIdWithPrefix.name} should generate id when called with prefix`, () => {
       const service = new UniqueIdService();
       const id = service.generateUniqIdWithPrefix('app');

       expect(id).toContain('app-');
    })
})
