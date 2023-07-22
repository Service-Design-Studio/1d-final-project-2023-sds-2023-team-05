# test/models/faq_test.rb

require 'test_helper'

class FaqTest < ActiveSupport::TestCase
  test "should be valid with valid attributes" do
    faq = Faq.new(question: "Sample Question", answer: "Sample Answer", tag: "Sample Tag", author: "John Doe")
    assert faq.valid?
  end

  test "should be invalid without a question" do
    faq = Faq.new(answer: "Sample Answer", tag: "Sample Tag", author: "John Doe")
    assert_not faq.valid?
    assert_includes faq.errors[:question], "can't be blank"
  end

  test "should be invalid without an answer" do
    faq = Faq.new(question: "Sample Question", tag: "Sample Tag", author: "John Doe")
    assert_not faq.valid?
    assert_includes faq.errors[:answer], "can't be blank"
  end

  test "should be invalid without a tag" do
    faq = Faq.new(question: "Sample Question", answer: "Sample Answer", author: "John Doe")
    assert_not faq.valid?
    assert_includes faq.errors[:tag], "can't be blank"
  end

  test "should be invalid without an author" do
    faq = Faq.new(question: "Sample Question", answer: "Sample Answer", tag: "Sample Tag")
    assert_not faq.valid?
    assert_includes faq.errors[:author], "can't be blank"
  end
end
