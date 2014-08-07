require 'capybara/rspec'

Capybara.app = Rack::File.new File.dirname __FILE__

describe "integration tests", type: :feature do
  it "renders the page" do
    visit('/index.html')
    expect(page).to have_content('todos')
  end
end
