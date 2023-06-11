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
    assert_difference("Faq.count") do
      post faqs_url, params: { faq: { answer: @faq.answer, question: @faq.question } }, as: :json
    end

    assert_response :created
  end

  test "should show faq" do
    get faq_url(@faq), as: :json
    assert_response :success
  end

  test "should update faq" do
    patch faq_url(@faq), params: { faq: { answer: @faq.answer, question: @faq.question } }, as: :json
    assert_response :success
  end

  test "should destroy faq" do
    assert_difference("Faq.count", -1) do
      delete faq_url(@faq), as: :json
    end

    assert_response :no_content
  end
end
