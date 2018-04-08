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
			this.templatePath('Dockerfile'),
			this.destinationPath('Dockerfile'));
		this.fs.copyTpl(
			this.templatePath('_package.json'),
			this.destinationPath('package.json'),
			{ title: this.props.name }
		);
	}

	install() {
		this.npmInstall();
	}

	end() {
		this.log('Thanks for using systelab-angular generator.');
	}
};
