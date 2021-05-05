const Intern = require('../lib/Intern');


describe('Intern', () => {
  
              const intern = new Intern("carl",40,"cbenbow.gmail.com","stonehill");
    // Positive test
    
        // Arrange
        test('school should be stonehill', () => {
          expect(intern.school).toBe("stonehill");
        });
    

        // Arrange
        test('getRole method should be overident to Intern', () => {
            expect(intern.getRole()).toBe("Intern");
        });
      
    
        test('getSchool method should be stonehill', () => {
          expect(intern.getSchool("stonehill")).toBe("stonehill");
      });
    
  
});