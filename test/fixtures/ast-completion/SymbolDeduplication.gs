package com.example
        
        class TestClass {
          var testField : String
          function testMethod() : String {
            var testField : String  // Same name as field
            return testField
          }
        }