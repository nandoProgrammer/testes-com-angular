import { UniqueIdService } from './unique-id.service';

const service = new UniqueIdService();

describe(UniqueIdService.name, () => {

    let service: UniqueIdService = null;

    beforeEach(() => {
       service = new UniqueIdService();
    });


    it(`#${UniqueIdService.prototype.generateUniqIdWithPrefix.name}
    should generate id when called with prefix`, () => {
       const id = service.generateUniqIdWithPrefix('app');

       expect(id.startsWith('app-')).toBeTrue();
    })

    it(`#${UniqueIdService.prototype.generateUniqIdWithPrefix.name}
    should not be generate duplicate ids`, () => {
        const ids = new Set();
        for(let i = 0; i < 50; i++){
           ids.add(service.generateUniqIdWithPrefix('app'))
        }

        expect(ids.size).toBe(50)
    });

    it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name}
    should return the number of generatedIds when called`, () => {
        service.generateUniqIdWithPrefix('app')
        service.generateUniqIdWithPrefix('app')
        expect(service.getNumberOfGenerateUniqueIds()).toBe(2)
    });

    it(`#${UniqueIdService.prototype.generateUniqIdWithPrefix.name} should throw with called with empty`, () => {
        const emptyValues = [null, undefined, ''];
        emptyValues.forEach(emptyValue => {
            expect(() => service.generateUniqIdWithPrefix(emptyValue))
            .withContext(`Empty value: ${emptyValue}`)
            .toThrow();
        })
    });
})
