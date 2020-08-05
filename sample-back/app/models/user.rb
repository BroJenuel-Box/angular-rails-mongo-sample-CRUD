class User
  include Mongoid::Document
  include ActiveModel::SecurePassword #ito yong bahala sa password natin
  # ito ung mga fields, wala ang ID dahil si mongodb na bahala sa ID collumn which is good.
  field :username, type: String
  field :password_digest, type: String
  field :email, type: String
  field :type, type: Integer
  # hash means objects
  field :information, type: Hash
  field :time, type: Time, default: Time.now
  field :token, type: String

  # sa validattion, ito ung mga way para mag validate. this way we dont have to hard code conditions sa ating controller when adding sa ating tables
  validates :username, uniqueness: true, presence: true
  validates :password, presence: true, :length => { :minimum => 7 }, :on => :create_user
  validates :email, uniqueness: true, presence: true

  has_secure_password #this function basically encrypts the password
end
