'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ruby-cmd:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ name: 'test', rubyVersion: '2.4.2' });
  });

  it('creates binary file', () => {
    assert.file(['bin/test']);
  });

  it('creates lib files', () => {
    assert.file(['lib/test.rb']);
  });

  it('creates version file', () => {
    assert.file(['lib/test/version.rb']);
  });

  it('creates feature', () => {
    assert.file(['features/sample.feature']);
  });

  it('creates feature environment', () => {
    assert.file(['features/support/env.rb']);
  });

  it('creates spec helper', () => {
    assert.file(['spec/spec_helper.rb']);
  });

  it('creates version spec', () => {
    assert.file(['spec/test/version_spec.rb']);
  });

  it('creates .gitignore', () => {
    assert.file(['.gitignore']);
  });

  it('creates .rspec', () => {
    assert.file(['.rspec']);
  });

  it('creates .ruby-version', () => {
    assert.file(['.ruby-version']);
  });

  it('creates Gemfile', () => {
    assert.file(['Gemfile']);
  });

  it('creates gemspec', () => {
    assert.file(['test.gemspec']);
  });

  it('creates LICENSE', () => {
    assert.file(['LICENSE']);
  });

  it('creates Rakefile', () => {
    assert.file(['Rakefile']);
  });

  it('creates README.md', () => {
    assert.file(['README.md']);
  });
});
