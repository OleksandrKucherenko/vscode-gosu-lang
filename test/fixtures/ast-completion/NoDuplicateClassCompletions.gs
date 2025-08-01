class TestDupClass {
          function method() : void {
            var localVar : TestDupClass
            // At this position, TestDupClass could appear from multiple sources
          }
        }