import subprocess
import os

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

    print ' '.join(args)

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
    return None

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

    

js_files = []
os.path.walk('src', filter_js, js_files)
 
env.JS('build/sneetches.min.js', js_files)

env.jslint('jslint', js_files)

