const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const generateHtmlParts = (templateDir) => {
  const templateFiles = fs.readdirSync(templateDir);

  return templateFiles.reduce((acc, file) => {
    const [name, extension] = file.split('.');

    return ({
      ...acc,
      [name]: fs.readFileSync(path.resolve(__dirname, 'src', 'html', 'parts', `${name}.${extension}`), {encoding: 'utf-8'}),
    })
  }, {})
}

const generateHtmlViews = (templateDir) => {
  const templateFiles = fs.readdirSync(templateDir);

  return templateFiles.map(file => {
    const [name, extension] = file.split('.');

    return new HtmlWebpackPlugin({
      filename: `${name}.${extension}`,
      template: path.resolve(templateDir, `${name}.${extension}`),
      templateParameters: generateHtmlParts(path.resolve(__dirname, 'src', 'html', 'parts')),
    })
  })
}

const isDev = mode => mode === 'development';

const fileName = (isDev, ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
  generateHtmlParts,
  generateHtmlViews,
  isDev,
  fileName,
}
