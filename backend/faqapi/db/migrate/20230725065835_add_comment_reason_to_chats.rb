class AddCommentReasonToChats < ActiveRecord::Migration[7.0]
  def change
    add_column :chats, :comment, :string
    add_column :chats, :reason, :string
  end
end
