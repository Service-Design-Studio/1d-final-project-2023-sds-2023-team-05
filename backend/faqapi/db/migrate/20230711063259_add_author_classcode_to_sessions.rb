class AddAuthorClasscodeToSessions < ActiveRecord::Migration[7.0]
  def change
    add_column :sessions, :author, :string
    add_column :sessions, :classcode, :integer
  end
end
