# test/models/chat_test.rb

require 'test_helper'

class ChatTest < ActiveSupport::TestCase
  test "should be valid with valid attributes" do
    chat = Chat.new(flagged: true, question: "Sample Question", answer: "Sample Answer")
    assert chat.valid?
  end

  test "should be invalid without a question" do
    chat = Chat.new(flagged: true, answer: "Sample Answer")
    assert_not chat.valid?
    assert_includes chat.errors[:question], "can't be blank"
  end

  test "should be invalid without an answer" do
    chat = Chat.new(flagged: true, question: "Sample Question")
    assert_not chat.valid?
    assert_includes chat.errors[:answer], "can't be blank"
  end
end
