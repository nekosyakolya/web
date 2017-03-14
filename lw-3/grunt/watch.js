module.exports =
{
    options:
    {
        spawn: false,
        livereload: true
    },
    scripts:
    {
        files: ['index.html', 'js/**', 'css/index.css'], 
        tasks: ['concat', 'uglify', 'cssmin', 'clean', 'filehash:js', 'filehash:css', 'copy:main']
    }
};