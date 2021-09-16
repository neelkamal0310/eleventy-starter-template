module.exports = function (eleventyConfig) {
    // Copies static directory and favicon to the
    // generated _site folder, thus making them available
    // to our generated website at /static/** and /favicon.ico
    // respectively
    //
    // Add directories as you need using the same syntax
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("favicon.ico");
};
