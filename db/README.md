## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|unique: true, null: false|

### index
- add_index :users, :name

### Association
- has_many :messages
- has_many :group_users
- has_many :groups, through: :group_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group|string|null: false|

### Association
- has_many :messages
- has_many :group_users
- has_many :users, through: :group_users

## group_users

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
