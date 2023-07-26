require "test_helper"

# test/controllers/sessions_controller_test.rb

class SessionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @session = sessions(:one) # Assuming you have fixture data or factory data set up for sessions.
  end

  test "should get index" do
    get sessions_url
    assert_response :success
  end

  test "should show session" do
    get session_url(@session)
    assert_response :success
  end

end

