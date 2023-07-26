require "test_helper"

class FaqsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @faq = faqs(:one)
  end

  test "should get index" do
    get faqs_url, as: :json
    assert_response :success
  end

  test "should create faq" do
    assert_difference("Faq.count", 1) do
      post faqs_url, params: { faq: { question: "New Question", answer: "New Answer", tag: "New Tag", author: "New Author" } }, as: :json
    end
  
    assert_response :created
  end
  

  test "should show faq" do
    get faq_url(@faq), as: :json
    assert_response :success
  end

  test "should update faq" do
    patch faq_url(@faq), params: { faq: { question: "Updated Question", answer: "Updated Answer", tag: "Updated Tag", author: "Updated Author" } }, as: :json
    assert_response :success
  
    @faq.reload
    assert_equal "Updated Question", @faq.question
    assert_equal "Updated Answer", @faq.answer
    assert_equal "Updated Tag", @faq.tag
    assert_equal "Updated Author", @faq.author
  end
  

  test "should destroy faq" do
    assert_difference("Faq.count", -1) do
      delete faq_url(@faq), as: :json
    end

    assert_response :no_content
  end

end
