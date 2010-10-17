import os
import re
import subprocess

#FIXME assumes single target
#TODO make warn level an environment variable
#TODO make compilation level an environment variable
def build_javascript(target, source, env):
    args = ['java', '-jar', 'tools/compiler.jar']

    for js in source:
        args.extend(['--js', str(js)])
    
    args.extend(['--js_output_file', str(target[0])])
    args.extend(['--warning_level', 'VERBOSE'])
    args.extend(['--create_source_map', str(target[0]) + '.map'])

    return subprocess.call(args)


#TODO make strict an environment variable
#TODO make custom tags an environment variable
def build_jslint(target, source, env):
    args = ['gjslint']
    args.extend(['--strict'])
    args.extend(['--custom_jsdoc_tags', 'requires,provides'])
    args.extend([str(js) for js in source])

    return subprocess.call(args)

def build_jstest(target, source, env):
    totalpass = 0
    totalfail = 0
    passfailre = re.compile(r'PASSED:\s+(\d+)\s+FAILED:\s+(\d+)')

    args = ['java']
    args.extend(['-cp', 'tools/envjs/rhino/js.jar'])
    args.extend(['org.mozilla.javascript.tools.shell.Main'])
    args.extend(['-opt', '-1'])
    args.extend(['-e', None])
    testtemp = '''load('tools/envjs/dist/env.rhino.js'); \
load('tools/envjs/plugins/env.qunit.js'); \
load('tools/envjs_test_hooks.js'); \
window.location = '%(htmlpath)s';'''

    for htmltest in source:
        args[-1] = testtemp % {'htmlpath': str(htmltest)}
        proc = subprocess.Popen(args, stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT)
        (stdout, _) = proc.communicate()
        print str(htmltest), "---\n", stdout
        lines = stdout.splitlines()
        if len(lines) > 0:
            m = passfailre.match(lines[-1])
            if m:
                totalpass += int(m.group(1))
                totalfail += int(m.group(2))
        # TODO deal with test runner failures

    print "PASS:   %3d" % (totalpass, )
    print "FAIL:   %3d" % (totalfail, )
    print "TOTAL:  %3d" % (totalpass + totalfail, )

    return totalfail

def build_jsdocs(target, source, env):
    return None

bld_js = Builder(action=build_javascript)
bld_jslint = Builder(action=build_jslint)
bld_jstest = Builder(action=build_jstest)
bld_jsdocs = Builder(action=build_jsdocs)

env = Environment(BUILDERS = {'JS': bld_js,
                              'jslint': bld_jslint,
                              'jstest': bld_jstest,
                              'jsdocs': bld_jsdocs,
                             })

def filter_js(arg, top, names):
    # filter out 't' and 'test' directories
    for exclude in ('t', 'test'):
        try:
            names.remove(exclude)
        except ValueError:
            pass

    # include .js files
    arg.extend([File(os.path.join(top, name))
            for name in names if name.endswith('.js')])


def filter_test_html(arg, top, names):
    # filter out non 't' and 'test' directories
    if top.endswith('t') or top.endswith('test'):
        # include .html files
        arg.extend([File(os.path.join(top, name))
                for name in names if name.endswith('.html')])
    

js_files = []
os.path.walk('src', filter_js, js_files)
 
html_test_files = []
os.path.walk('src', filter_test_html, html_test_files)
 
env.JS('build/sneetches.min.js', js_files)

env.jslint('jslint', js_files)
env.jstest('jstest', html_test_files)

