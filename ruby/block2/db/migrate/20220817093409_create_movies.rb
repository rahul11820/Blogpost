class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.integer :movieid
      t.string  :name
      t.integer :year
      t.string  :plot

      t.timestamps
    end
  end
end
