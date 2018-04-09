var Generator = require('yeoman-generator');

module.exports = class extends Generator {

	constructor(args, options) {
		super(args, options);
	}

	prompting() {
		return this.prompt([{
			type: 'input',
			name: 'account',
			message: 'Your github account name',
			default: 'systelab'
		},{
			type: 'input',
			name: 'name',
			message: 'Your project name',
			//Defaults to the project's folder name if the input is skipped
			default: this.appname
		}, {
			type    : 'confirm',
			name    : 'e2e',
			message : 'Would you like to include E2E test?'
		}, {
			type    : 'confirm',
			name    : 'docker',
			message : 'Would you like to include docker image generation?'
		}, {
			type    : 'confirm',
			name    : 'travis',
			message : 'Would you like to include a Travis script?'
		}]).then((answers)=> {
			this.props = answers;
			this.log('Summary:');

		this.log('   Project name: '+answers.account+'/'+answers.name);
			if (answers.e2e) {
				this.log('   Include E2E test');
			}
			if (answers.travis) {
				this.log('   Include Travis script');
			}
			if (answers.docker) {
				this.log('   Include Docker image generation');
			}
		});
	}

	writing() {
		this.log('Creating files:');
		this.fs.copy(
			this.templatePath('_karma.conf.js'),
			this.destinationPath('karma.conf.js'));
		this.fs.copyTpl(
			this.templatePath('_README.md'),
			this.destinationPath('README.md'),
			{ 	title: this.props.name,
				e2e: this.props.e2e,
				account: this.props.account});
		this.fs.copy(
			this.templatePath('_tsconfig.json'),
			this.destinationPath('tsconfig.json'));
		this.fs.copy(
			this.templatePath('_tslint.json'),
			this.destinationPath('tslint.json'));
		this.fs.copy(
			this.templatePath('_gitignore'),
			this.destinationPath('.gitignore'));
		this.fs.copyTpl(
			this.templatePath('_package.json'),
			this.destinationPath('package.json'),
			{ 	title: this.props.name,
				e2e: this.props.e2e});
		this.fs.copyTpl(
			this.templatePath('_angular-cli.json'),
			this.destinationPath('.angular-cli.json'),
			{ 	title: this.props.name,
				e2e: this.props.e2e});
		this.fs.copy(
			this.templatePath('src'),
			this.destinationPath('src'));
		if (this.props.e2e) {
			this.fs.copy(
				this.templatePath('_protractor.conf.js'),
				this.destinationPath('protractor.conf.js'));
			this.fs.copy(
				this.templatePath('e2e'),
				this.destinationPath('e2e'));
		}
		if (this.props.travis) {
			this.fs.copyTpl(
				this.templatePath('_travis.yml'),
				this.destinationPath('.travis.yml'),
				{ 	title: this.props.name,
					e2e: this.props.e2e});
		}

		if (this.props.docker) {
			this.fs.copy(
				this.templatePath('_Dockerfile'),
				this.destinationPath('Dockerfile'));
			this.fs.copy(
				this.templatePath('docker'),
				this.destinationPath('docker'));
		}
	}

	install() {
		this.npmInstall();
	}

	end() {
		this.log('Thanks for using systelab-angular generator.');
	}
};
