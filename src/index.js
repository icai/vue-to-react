const fs = require('fs');
const transfrom = require('./transform');

const output = require('./output');
const { log } = require('./utils');

// AST for vue component
module.exports = function transform (src, targetPath, isSFC) {
    const source = fs.readFileSync(src);
    const code = transfrom(source.toString(), isSFC);
    output(code, targetPath);
    log('Transform successed!!!', 'success');
};
