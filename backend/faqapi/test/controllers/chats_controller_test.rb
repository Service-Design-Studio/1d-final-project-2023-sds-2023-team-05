require "test_helper"

class ChatsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @chat = chats(:one)
  end

  test "should get index" do
    get chats_url, as: :json
    assert_response :success
  end

  test "should create chat" do
    assert_difference("Chat.count") do
      post chats_url, params: { chat: { answer: @chat.answer, flagged: @chat.flagged, question: @chat.question } }, as: :json
    end

    assert_response :created
  end

  test "should show chat" do
    get chat_url(@chat), as: :json
    assert_response :success
  end

  test "should update chat" do
    patch chat_url(@chat), params: { chat: { answer: @chat.answer, flagged: @chat.flagged, question: @chat.question } }, as: :json
    assert_response :success
  end

  test "should destroy chat" do
    assert_difference("Chat.count", -1) do
      delete chat_url(@chat), as: :json
    end

    assert_response :no_content
  end

  test "should get flagged chats" do
    get '/chats/flagged', as: :json
    assert_response :success
    json_response = JSON.parse(response.body)
    assert_equal Chat.where(flagged: true).count, json_response.count
  end

  test "should unflag a chat" do
    chat = chats(:flagged) # Assuming you have a flagged chat in your fixtures
    post "/chats/flagged/#{chat.id}", as: :json
    assert_response :success
    chat.reload
    assert_not chat.flagged
  end

  test "should train a flagged chat" do
    chat = chats(:flagged) # Assuming you have a flagged chat in your fixtures
    trained_response = "New Trained Response"
    post "/chats/#{chat.id}", params: { trained_response: trained_response }, as: :json
    assert_response :success
    chat.reload
    assert_equal trained_response, chat.trained_response
  end

  test "should get trained chats" do
    get '/chats/trained', as: :json
    assert_response :success
    json_response = JSON.parse(response.body)
    assert_equal Chat.where.not(trained_response: nil).count, json_response.count
  end

  test "should not update chat with invalid parameters" do
    patch chat_url(@chat), params: { chat: { answer: nil, flagged: @chat.flagged, question: @chat.question } }, as: :json
    assert_response :unprocessable_entity
  end
  
  test "should not create chat with invalid parameters" do
    assert_no_difference("Chat.count") do
      post chats_url, params: { chat: { answer: nil, flagged: false, question: "Sample Question" } }, as: :json
    end
    assert_response :unprocessable_entity
  end
  
  
  
  
  
end
