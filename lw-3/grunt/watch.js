module.exports =
{
    options:
    {
        livereload: true
    },
    scripts:
    {
        files: ['index.html', 'js/**', 'css/index.css'], 
        tasks: ['concat', 'uglify', 'cssmin', 'hashres:prod', 'copy:main']
    }
};