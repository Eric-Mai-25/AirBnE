# == Schema Information
#
# Table name: reviews
#
#  id              :bigint           not null, primary key
#  author_id       :bigint           not null
#  home_id         :bigint           not null
#  cleanliness     :integer          not null
#  communication   :integer          not null
#  check_in        :integer          not null
#  accuracy        :integer          not null
#  location        :integer          not null
#  value           :integer          not null
#  public_comment  :text             not null
#  private_comment :text
#  review_date     :date             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Review < ApplicationRecord

    validates :cleanliness, :communication, :check_in, :accuracy, :location, :value, :public_comment, :review_date, presence: true

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id

    belongs_to :home
end
