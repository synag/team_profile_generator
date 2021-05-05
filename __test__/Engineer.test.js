const Engineer = require('../lib/Engineer');


describe('Engineer', () => {
  
              const engineer = new Engineer("carl",40,"cbenbow.gmail.com","synac");
    // Positive test
    
        // Arrange
        test('engineer gitHub should be synac', () => {
          expect(engineer.github).toBe("synac");
        });
    

        // Arrange
        test('getRole method should be overident to Engineer', () => {
            expect(engineer.getRole()).toBe("Engineer");
        });
      
    
        // Arrange
        test('getGithub method should be synac', () => {
          expect(engineer.getGithub("synac")).toBe("synac");
      });
    
    
  
});

