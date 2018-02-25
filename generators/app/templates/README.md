# <%= gemCapitalName %>

Small Ruby program generated using https://github.com/snada/generator-ruby-cmd

## Setup and install

This is a Ruby program and uses Bundler to ensure dependencies consistency. On your machine navigate to the project root and run:

```bash
# If not already installed:
gem install bundler

bundle install
```

This code is packaged as a Ruby gem, and it should be built and installed running these commands:

```bash
gem build <%= gemName %>.gemspec
gem install <%= gemName %>
```

## Usage

If you followed the above instruction and the gem is installed on the system, you should have the binary file ready to run from your command line.

```bash
<%= gemName %> input.txt
<%= gemName %> < input.txt
```

If you wish to execute without installing, you can by launching this command from the project root directory:

```bash
ruby -Ilib bin/<%= gemName %> < input.txt
```

## Testing

This code is covered with both unit tests and feature tests, using Rspec (testing library classes) and Cucumber/Aruba (testing the actual command line program).

You can launch the test suite by running:

```bash
bundle exec rake spec
bundle exec rake features
#launch both:
bundle exec rake
```

For unit tests, a simple code coverage tool is provided, and you can see the results by opening the generated `coverage` folder.
