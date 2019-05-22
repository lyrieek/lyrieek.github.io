'use strict'

process.env.NODE_ENV = 'production'

const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./config')
const webpackConfig = require('./webpack.prod.conf')
const semver = require('semver')
const packageConfig = require('../package.json')
const shell = require('shelljs')

function exec(cmd) {
	return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [{
	name: 'node',
	currentVersion: semver.clean(process.version),
	versionRequirement: packageConfig.engines.node
}]

if (shell.which('npm')) {
	versionRequirements.push({
		name: 'npm',
		currentVersion: exec('npm --version'),
		versionRequirement: packageConfig.engines.npm
	})
}

module.exports = function() {
	const warnings = []

	for (let i = 0; i < versionRequirements.length; i++) {
		const mod = versionRequirements[i]

		if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
			warnings.push(mod.name + ': '
				+ chalk.red(mod.currentVersion) + ' should be '
				+ chalk.green(mod.versionRequirement)
			)
		}
	}

	if (warnings.length) {
		console.log('')
		console.log(chalk.yellow('To use this template, you must update following to modules:'))
		console.log()

		for (let i = 0; i < warnings.length; i++) {
			const warning = warnings[i]
			console.log('  ' + warning)
		}

		console.log()
		process.exit(1)
	}
}


rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), (err) => {
	if (err) throw err
	webpack(webpackConfig, (err, stats) => {
		if (err) throw err
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
			chunks: false,
			chunkModules: false
		}) + '\n\n')

		if (stats.hasErrors()) {
			console.log(chalk.red('  Build failed with errors.\n'))
			process.exit(1)
		}

		console.log(chalk.cyan('Build complete.\n'))
		console.log(chalk.yellow('Build Finish!'))
	})
})
