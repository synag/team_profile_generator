const Employee = require('../lib/Employee');

describe('employee', () => {
  
              const employee = new Employee();
    // Positive test
    
        // Arrange
        test('name should be jane', () => {
          expect(employee.getName("Jane")).toBe("Jane");
        });
    

        // Arrange
        test('employee id should be 90', () => {
            expect(employee.getId(90)).toBe(90);
        });
      
     
        // Arrange
        test('email should be jane@gmail.com', () => {
            expect(employee.getEmail('jane@gmail.com')).toBe('jane@gmail.com');
        });
      
     
        // Arrange
        test('getRole should be Employee', () => {
            expect(employee.getRole()).toBe('Employee');
        });
    


    
    
  
});