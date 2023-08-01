class AddTrainedResponseToChats < ActiveRecord::Migration[7.0]
  def change
    add_column :chats, :trained_response, :string
  end
end
