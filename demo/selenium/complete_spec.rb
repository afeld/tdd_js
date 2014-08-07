require_relative './spec_helper'

describe "integration tests", type: :feature, js: true do
  it "renders the page" do
    visit('/index.html')
    expect(page).to have_content('todos')
  end

  it "saves the state of the page" do
    visit('/index.html')
    fill_in('new-todo', with: "Pick up kitty litter")
    find('#new-todo').native.send_keys(:return)

    visit('/index.html')
    expect(page).to have_content("Pick up kitty litter")
  end
end
