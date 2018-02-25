'use strict';
const Case = require('case');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the stupendous ' + chalk.red('generator-ruby-cmd') + ' generator!'
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // Default to current folder name
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        store: true
      },
      {
        type: 'input',
        name: 'homepage',
        message: 'Homepage'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Gem description:'
      },
      {
        type: 'input',
        name: 'summary',
        message: 'Gem summary:'
      },
      {
        type: 'input',
        name: 'rubyVersion',
        message: 'Preferred ruby version:',
        default: '2.5.0'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const gemName = Case.snake(this.props.name);
    const gemCapitalName = Case.capital(this.props.name);
    const gemConstant = Case.constant(this.props.name);
    const gemClassName = Case.pascal(this.props.name);

    const subs = {
      gemName,
      gemCapitalName,
      gemConstant,
      gemClassName,
      gemAuthor: this.props.author,
      gemSummary: this.props.summary,
      gemHomepage: this.props.homepage,
      gemDescription: this.props.description,
      rubyVersion: this.props.rubyVersion
    };

    if (this.appname !== this.props.name) {
      this.destinationRoot(gemName);
    }

    this.fs.copyTpl(
      this.templatePath('bin/gemName'),
      this.destinationPath('bin', gemName),
      subs
    );

    this.fs.copyTpl(
      this.templatePath('features'),
      this.destinationPath('features'),
      subs
    );

    this.fs.copyTpl(
      this.templatePath('lib/gemName'),
      this.destinationPath('lib', gemName),
      subs
    );

    this.fs.copyTpl(
      this.templatePath('lib/gemName.rb'),
      this.destinationPath('lib', gemName + '.rb'),
      subs
    );

    this.fs.copyTpl(
      this.templatePath('spec/spec_helper.rb'),
      this.destinationPath('spec/spec_helper.rb'),
      subs
    );

    this.fs.copyTpl(
      this.templatePath('spec/gemName'),
      this.destinationPath('spec', gemName),
      subs
    );

    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'),
      subs
    );

    this.fs.copyTpl(this.templatePath('.rspec'), this.destinationPath('.rspec'), subs);

    this.fs.copyTpl(
      this.templatePath('.ruby-version'),
      this.destinationPath('.ruby-version'),
      subs
    );

    this.fs.copyTpl(this.templatePath('Gemfile'), this.destinationPath('Gemfile'), subs);

    this.fs.copyTpl(
      this.templatePath('gemName.gemspec'),
      this.destinationPath(gemName + '.gemspec'),
      subs
    );

    this.fs.copyTpl(
      this.templatePath('Rakefile'),
      this.destinationPath('Rakefile'),
      subs
    );

    this.fs.copyTpl(this.templatePath('LICENSE'), this.destinationPath('LICENSE'), subs);

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      subs
    );
  }

  install() {
    this.log(
      yosay(
        'Done! Run \n' + chalk.green('bundle install') + '\n to install dependencies!'
      )
    );
  }
};
