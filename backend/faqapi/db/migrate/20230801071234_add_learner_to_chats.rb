class AddLearnerToChats < ActiveRecord::Migration[7.0]
  def change
    add_column :chats, :learner, :string
    add_column :chats, :editor, :string
  end
end
