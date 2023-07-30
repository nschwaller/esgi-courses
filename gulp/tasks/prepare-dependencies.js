/*jslint node: true */
module.exports = function (gulp, plugins, current_config) {
    'use strict';
    gulp.task('prepare:revealjs', function () {
        var baseRevealJSPath = current_config.nodeModulesDir + '/@asciidoctor/reveal.js/node_modules/reveal.js',
            revealJsDestDir = current_config.buildDir + '/reveal.js',
            revealJsDist = gulp.src(baseRevealJSPath + '/dist/**/*')
                .pipe(gulp.dest(revealJsDestDir + '/dist/')),
            revealJsEmbeddedPlugins = gulp.src(baseRevealJSPath + '/plugin/**/*')
                .pipe(gulp.dest(revealJsDestDir + '/plugin/')),
            revealJsCommunityPlugins = gulp.src(current_config.nodeModulesDir + '/reveal.js-plugins/**/*')
                .pipe(gulp.dest(revealJsDestDir + '/reveal.js-plugins/' )),
            revealPluginCopyCode = gulp.src(current_config.nodeModulesDir + '/reveal.js-copycode/plugin/copycode/**/*')
                .pipe(gulp.dest(current_config.buildDir + '/reveal.js/plugin/reveal.js-copycode/'))
            ;

        return plugins.mergeStreams(
            revealJsDist,
            revealJsEmbeddedPlugins,
            revealJsCommunityPlugins,
            revealPluginCopyCode,
        );
    });
};
