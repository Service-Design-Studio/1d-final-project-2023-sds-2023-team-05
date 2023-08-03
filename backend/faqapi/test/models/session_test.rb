# test/models/session_test.rb

require 'test_helper'

class SessionTest < ActiveSupport::TestCase
  setup do
    @session = sessions(:one) # Assuming you have fixture data or factory data set up for sessions.
  end
  
  test "should be valid with valid attributes" do
    session = Session.new(title: "Sample Session", author: "John Doe")
    assert session.valid?
  end

  test "should be invalid without a title" do
    session = Session.new(author: "John Doe")
    assert_not session.valid?
    assert_includes session.errors[:title], "can't be blank"
  end

  test "should be invalid without an author" do
    session = Session.new(title: "Sample Session")
    assert_not session.valid?
    assert_includes session.errors[:author], "can't be blank"
  end

  test "should generate a classcode before creation" do
    session = Session.new(title: "Sample Session", author: "John Doe")
    assert_nil session.classcode
    session.save
    assert_not_nil session.classcode
  end

  test "should have a unique classcode" do
    # all session have different classcodes
    session1 = Session.new(title: "Sample Session", author: "John Doe")
    session2 = Session.new(title: "Sample Session", author: "John Doe")
    session1.save
    session2.save
    assert_not_equal session1.classcode, session2.classcode
  end

  test "should have associated FAQs" do
    session = Session.new(title: "Sample Session", author: "John Doe")
    faq1 = Faq.create!(question: "Question 1", answer: "Answer 1", tag: "Sample Tag", author: "John Doe")
    faq2 = Faq.create!(question: "Question 2", answer: "Answer 2", tag: "Sample Tag", author: "John Doe")
    session.faqs << faq1
    session.faqs << faq2
    session.save
    assert_equal session.faqs.count, 2
  end

  test "should create session with associated FAQs" do
    faq1 = Faq.create!(question: "Question 1", answer: "Answer 1", author: "Author 1", tag: "Tag 1")
    faq2 = Faq.create!(question: "Question 2", answer: "Answer 2", author: "Author 2", tag: "Tag 2")
  
    sessions = [{title: "Sample Session", author: "John Doe", classcode: "Code", faqs: [faq1.id, faq2.id]}]
  
    sessions.each do |s|
      session = Session.create!(title: s[:title], author: s[:author], classcode: s[:classcode])
      s[:faqs].each do |faq_id|
        FaqSession.create!(session_id: session.id, faq_id: faq_id)
      end
    end
  
    session = Session.last
    assert_equal session.faqs.count, 2
    assert_equal session.faqs.first.author, "Author 1"
    assert_equal session.faqs.first.tag, "Tag 1"
  end

  test "should create session FAQs" do
    # Create a couple of FAQs for testing
    faq1 = Faq.create!(question: "Question 1", answer: "Answer 1", author: "Author 1", tag: "Tag 1")
    faq2 = Faq.create!(question: "Question 2", answer: "Answer 2", author: "Author 2", tag: "Tag 2")
  
    # Define a session with the associated FAQs
    sessions = [{title: "Sample Session", author: "John Doe", classcode: "Code", faqs: [faq1.id, faq2.id]}]
  
    # Create the session and associate the FAQs
    sessions.each do |s|
      session = Session.create!(title: s[:title], author: s[:author], classcode: s[:classcode])
      s[:faqs].each do |faq_id|
        FaqSession.create!(session_id: session.id, faq_id: faq_id)
      end
    end
  
    # Validate that the session was created
    session = Session.last
    assert_not_nil session
  
    # Validate the session attributes
    assert_equal "Sample Session", session.title
    assert_equal "John Doe", session.author
  
    # Validate that the FAQs were associated correctly
    assert_equal 2, session.faqs.count
    assert_includes session.faqs, faq1
    assert_includes session.faqs, faq2
  end



    
  
  
  
  
end
