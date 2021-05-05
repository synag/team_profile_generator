const Manager = require('../lib/Manager');


describe('Manager', () => {
  
  const manager = new  Manager("carl",40,"cbenbow.gmail.com","410-804-8642");      
    
    
        // Arrange
        test('employer number should be 410-804-8642', () => {
          expect(manager.officeNumber).toBe("410-804-8642");
        });
    

        // Arrange
        test('getRole method should be overident to manger', () => {
            expect(manager.getRole()).toBe("Manager");
        });
      
        test('getName method should be overident to manager', () => {
          expect(manager.getName("carl")).toBe("carl");
      });
    
    
    
  
});