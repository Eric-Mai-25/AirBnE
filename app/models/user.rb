# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  phone_number    :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  profile_picture :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password

  validates :email,
            uniqueness: true,
            length: { in: 3..255 },
            format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :phone_number,
            uniqueness: true,
            length: { in: 10...255 }
  validates :username, :session_token, :password_digest, presence: true
  validates :session_token, uniqueness: true
  validates :password, length: { in: 8..255 }, allow_nil: true

  before_validation :ensure_session_token

  has_many :homes,
    class_name: :Home,
    foreign_key: :host_id,
    dependent: :destroy

  has_many :reservations,
    class_name: :Reservation,
    foreign_key: :guest_id,
    dependent: :destroy

  has_many :trip_listings,
           through: :reservations,
           source: :home

  has_many :reviews,
    class_name: :Review,
    foreign_key: :review_id,
    dependent: :destroy

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    @user&.authenticate(password) ? @user : nil
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
    loop do
      token = SecureRandom::urlsafe_base64
      return token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
