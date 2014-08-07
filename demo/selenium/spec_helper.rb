require 'capybara/rspec'
require 'selenium/webdriver'

# https://gist.github.com/jgwhite/4046511
Capybara.app = Rack::File.new File.dirname __FILE__
