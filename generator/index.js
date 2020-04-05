const lowerFirst = require('lodash.lowerFirst')

module.exports = (api, options, rootOptions) => {
  if (options.choice === 'choice1') {
    console.log(options)
    api.render({
      [`./src/test/${options.path}/${lowerFirst(options.choice1name)}.js`]: '../template/choice1.js'
    })
  }

  if (options.choice === 'choice2') {
    console.log(options)
    api.render({
      [`./src/test/${options.path}/choice2.js`]: '../template/choice2.js'
    })
  }
}
