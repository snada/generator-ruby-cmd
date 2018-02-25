# encoding: utf-8
require File.expand_path("../lib/<%= gemName %>/version", __FILE__)

Gem::Specification.new do |s|
  s.name = "<%= gemName %>"
  s.version = <%= gemClassName %>::VERSION
  s.authors = ['<%= gemAuthor %>']
  s.homepage = '<%= gemHomepage %>'
  s.summary = %q{<%= gemSummary %>}
  s.description = %q{<%= gemDescription %>}
  s.licenses = ['MIT']

  s.files = %x[git ls-files -z].split("\x0").reject { |f| f.match(%r{^(coverage|test|spec|features)/}) }
  s.test_files = %x[git ls-files -z].split("\x0").select { |f| f.match(%r{^(test|spec|features)/}) }
  s.executables = s.files.grep(%r{^bin/}) { |f| File.basename(f) }
  s.require_paths = ['lib']

  # Dependencies list:
  # s.add_runtime_dependency 'gem_name', '~> 1.0'

  s.add_development_dependency 'rspec', '~> 3.7'
  s.add_development_dependency 'aruba', '~> 0.14'
  s.add_development_dependency 'cucumber', '~> 1.3'
  s.add_development_dependency 'pry', '~> 0.11'
  s.add_development_dependency 'rake', '~> 12.3'
  s.add_development_dependency 'simplecov', '~> 0.15'
end
