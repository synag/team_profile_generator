const Employee = require('../lib/Employee');

describe('employee', () => {
  
              const employee = new Employee("Jane", 90, "jane@gmail.com");
    // Positive test
    
        // Arrange
        test('name should be jane', () => {
          expect(employee.getName()).toBe("Jane");
        });
    

        // Arrange
        test('employee id should be 90', () => {
            expect(employee.getId()).toBe(90);
        });
      
     
        // Arrange
        test('email should be jane@gmail.com', () => {
            expect(employee.getEmail()).toBe('jane@gmail.com');
        });
      
     
        // Arrange
        test('getRole should be Employee', () => {
            expect(employee.getRole()).toBe('Employee');
        });
    


    
    
  
});