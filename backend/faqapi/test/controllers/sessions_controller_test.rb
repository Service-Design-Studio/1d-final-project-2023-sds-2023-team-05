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


  test "create REST API" do
    # Create a couple of FAQs for testing
    faq1 = Faq.create!(question: "Question 1", answer: "Answer 1", author: "Author 1", tag: "Tag 1")
    faq2 = Faq.create!(question: "Question 2", answer: "Answer 2", author: "Author 2", tag: "Tag 2")

    # Define the session parameters
    session_params = {
      title: "Sample Session",
      author: "John Doe",
      faqs: [faq1.id, faq2.id]
    
    }

    # Make a POST request to the create endpoint
    assert_difference('Session.count') do
      post sessions_url, params: session_params, as: :json
    end

    # Verify the response status and JSON structure
    assert_response :success
    json_response = JSON.parse(response.body)
    assert_equal "Sample Session", json_response["title"]
    assert_equal "John Doe", json_response["author"]
    assert_equal 2, json_response["faqs"].count
    assert_equal "Question 1", json_response["faqs"][0]["question"]
    assert_equal "Answer 1", json_response["faqs"][0]["answer"]
  end

  test "should create a new session without associated FAQs" do
    # Define the session parameters without FAQs
    session_params = {
      title: "Session Without FAQs",
      author: "Jane Doe",
      faqs: []
    }
  
    # Make a POST request to the create endpoint
    assert_difference('Session.count') do
      post sessions_url, params: session_params, as: :json
    end
  
    # Verify the response status and JSON structure
    assert_response :success
    json_response = JSON.parse(response.body)
    assert_equal "Session Without FAQs", json_response["title"]
    assert_equal "Jane Doe", json_response["author"]
    assert_empty json_response["faqs"]
  end

  test "should add a FAQ to existing session" do
    question = "New Question"
    answer = "New Answer"
    author = "Author Name"
    tag = "Tag Name"
  
    # Make a POST request to the add_faq endpoint for a specific session
    post session_url(@session), params: { question: question, answer: answer, author: author, tag: tag }, as: :json
  
    # Verify the response status and JSON structure
    assert_response :created
    json_response = JSON.parse(response.body)
    assert_equal question, json_response["faqs"].last["question"]
    assert_equal answer, json_response["faqs"].last["answer"]
  end

  test "should add multiple FAQs to existing session" do
    faq_ids = [faqs(:one).id, faqs(:two).id] # Assuming you have fixture data or factory data set up for FAQs.
  
    # Make a patch request to the add_faq_to_session endpoint for a specific session
    patch session_url(@session), params: { faq_ids: faq_ids }, as: :json
  
    # Verify the response status and JSON structure
    assert_response :created
    json_response = JSON.parse(response.body)
    assert_equal 3, json_response["faqs"].count
    assert_equal faqs(:one).question, json_response["faqs"].first["question"]
    assert_equal faqs(:two).question, json_response["faqs"].last["question"]
  end
  
  

end

