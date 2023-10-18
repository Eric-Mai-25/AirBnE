json.merge! @review.attributes

author = @review.author

json.username author.username
json.profile author.profile_picture
