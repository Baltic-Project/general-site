var plugins = [{
<<<<<<< HEAD
      plugin: require('C:/Users/marcin.tuchalski/Desktop/baltic/general-site/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
=======
<<<<<<< HEAD
      plugin: require('C:/Users/marcin.tuchalski/Desktop/baltic/general-site/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/marcin.tuchalski/Desktop/baltic/general-site/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/marcin.tuchalski/Desktop/baltic/general-site/node_modules/gatsby-plugin-layout/gatsby-ssr'),
=======
      plugin: require('C:/Users/roksana.rebiewska/Desktop/project/Baltics/general-site/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
>>>>>>> bf34846e54c6dc93186a5d409798b4109e591de1
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/marcin.tuchalski/Desktop/baltic/general-site/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
<<<<<<< HEAD
      plugin: require('C:/Users/marcin.tuchalski/Desktop/baltic/general-site/node_modules/gatsby-plugin-layout/gatsby-ssr'),
=======
      plugin: require('C:/Users/roksana.rebiewska/Desktop/project/Baltics/general-site/node_modules/gatsby-plugin-layout/gatsby-ssr'),
>>>>>>> parent of 03e9aea... new product automation + filters
>>>>>>> bf34846e54c6dc93186a5d409798b4109e591de1
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
