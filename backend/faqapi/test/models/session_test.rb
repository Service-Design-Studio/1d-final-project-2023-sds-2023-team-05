# test/models/session_test.rb

require 'test_helper'

class SessionTest < ActiveSupport::TestCase
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
end
