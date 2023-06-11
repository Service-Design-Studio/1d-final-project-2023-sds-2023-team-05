class CreateFaqs < ActiveRecord::Migration[7.0]
  def change
    create_table :faqs do |t|
      t.string :question
      t.string :answer

      t.timestamps
    end
  end
end
