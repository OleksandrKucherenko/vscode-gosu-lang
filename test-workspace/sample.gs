package examples

/**
 * Sample GOSU file for testing syntax highlighting
 */
class SampleClass implements ISample {
    
    private var _value: String
    private var _count: int = 0
    
    construct(value: String) {
        _value = value
    }
    
    property get Value(): String {
        return _value
    }
    
    property set Value(val: String) {
        _value = val
    }
    
    function processValue(): String {
        _count++
        return "Processed: ${_value} (${_count})"
    }
    
    static function createSample(val: String): SampleClass {
        return new SampleClass(val)
    }
}

interface ISample {
    property get Value(): String
    property set Value(val: String)
    function processValue(): String
}