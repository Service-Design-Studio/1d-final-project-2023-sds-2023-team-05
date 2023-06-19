class AddTagAndAuthorToFaqs < ActiveRecord::Migration[7.0]
  def change
    add_column :faqs, :tag, :string
    add_column :faqs, :author, :string
  end
end
