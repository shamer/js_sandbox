Envjs({
    scriptTypes: {
        '': true, //anonymous and inline
        'text/javascript': true
    },
    afterScriptLoad:{
        "qunit": function(script){
            var count = 0,
                module;
            // track test modules so we can include them in logs
            QUnit.moduleStart = function(name, settings) {
                module = name;
            };
            // hookinto QUnit log so we can log test results 
            QUnit.log = function(result, message){
                console.log(
                     '{%s}(%s)[%s] %s ',
                     module, 
                     count++, 
                     result ? 'PASS' : 'FAIL', 
                     message
                );
            };
            
            QUnit.testStart = function(name){
                console.log('\n--- %s ---', name);
            };
            
            QUnit.done = function(failures, total){
                console.log('PASSED: %s FAILED: %s', total - failures, failures);
           };
        }
    }
});
