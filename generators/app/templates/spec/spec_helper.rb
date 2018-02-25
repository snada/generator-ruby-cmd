require 'simplecov'
SimpleCov.start do
  add_filter '/spec/'
  add_filter '/bin/'
end

require_relative '../lib/<%= gemName %>'
