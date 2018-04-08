var Generator = require('yeoman-generator');

module.exports = class extends Generator {

	constructor(args, options) {
		super(args, options);
	}

	prompting() {
		return this.prompt([{
			type: 'input',
			name: 'name',
			message: 'Your project name',
			//Defaults to the project's folder name if the input is skipped
			default: this.appname
		}]).then((answers)=> {
			this.props = answers;
			this.log(answers.name);
		});
	}

	writing() {
		this.fs.copy(
			this.templatePath('_Dockerfile'),
			this.destinationPath('Dockerfile'));
		this.fs.copy(
			this.templatePath('_karma.conf.js'),
			this.destinationPath('karma.conf.js'));
		this.fs.copy(
			this.templatePath('_protractor.conf.js'),
			this.destinationPath('protractor.conf.js'));
		this.fs.copy(
			this.templatePath('_README.md'),
			this.destinationPath('README.md'));
		this.fs.copy(
			this.templatePath('_tsconfig.json'),
			this.destinationPath('tsconfig.json'));
		this.fs.copy(
			this.templatePath('_tslint.json'),
			this.destinationPath('tslint.json'));
		this.fs.copyTpl(
			this.templatePath('_package.json'),
			this.destinationPath('package.json'),
			{ title: this.props.name });
		this.fs.copyTpl(
			this.templatePath('_angular-cli.json'),
			this.destinationPath('.angular-cli.json'),
			{ title: this.props.name });
		this.fs.copy(
			this.templatePath('docker'),
			this.destinationPath('docker'));
		this.fs.copy(
			this.templatePath('e2e'),
			this.destinationPath('e2e'));
		this.fs.copy(
			this.templatePath('src'),
			this.destinationPath('src'));

	}

	install() {
		this.npmInstall();
	}

	end() {
		this.log('Thanks for using systelab-angular generator.');
	}
};
