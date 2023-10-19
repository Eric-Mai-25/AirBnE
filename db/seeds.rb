# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "faker"

require "open-uri"

CATEGORIES = ["beachfront", "countryside", "cabin", "mansion", "lakefront", "amazing views", "tiny home", "modern", "barn", "omg"]
PROPERTY_TYPES = ["House", "Apartment", "Studio", "Cabin", "Private Room"]
PROFILE_PICTURES = ["https://xsgames.co/randomusers/avatar.php?g=male", "https://xsgames.co/randomusers/avatar.php?g=female"]

HOMES_ARRAY = listings = [
  {
    title: "Serene Mountain Retreat",
    description: "Nestled in the heart of the Rockies, our cozy cabin offers a peaceful escape from the hustle and bustle. Enjoy stunning mountain views and hiking trails right outside your door. This retreat is the perfect place to unwind, with a spacious living area, a fully equipped kitchen, and a large deck for savoring the views. Whether you're an outdoor enthusiast or seeking relaxation, this mountain getaway has it all.",
    category: "Boat",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Boat/Boat",
  },
  {
    title: "Beachfront Paradise with Private Pool",
    description: "Wake up to the sound of waves crashing in this beautiful beachfront villa. Relax by your private pool, take long walks on the sandy shore, and savor breathtaking sunsets. The villa boasts multiple bedrooms with ocean views, a fully equipped kitchen, and a cozy living room with a fireplace. Outdoor amenities include a barbecue area and a private path to the beach. This is the ultimate seaside escape for those who crave luxury and tranquility.",
    category: "AmazingView",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/AmazingView/AmazingView",
  },
  {
    title: "Urban Oasis in the Heart of the City",
    description: "Our modern downtown apartment is the perfect base for exploring the city. Enjoy a spacious, sunlit living area with floor-to-ceiling windows that offer stunning urban views. The fully equipped kitchen is a chef's delight, and the bedrooms are comfortable and stylish. You'll be just steps away from the city's best restaurants, museums, and entertainment. After a day of exploring, relax on the private balcony and soak in the vibrant city atmosphere.",
    category: "Artic",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Artic/Artic",
  },
  {
    title: "Luxury Villa with Panoramic Ocean Views",
    description: "Indulge in the lap of luxury in this stunning villa perched on a hill. Panoramic ocean views stretch as far as the eye can see from the spacious terrace. Your personal chef will prepare exquisite meals in the gourmet kitchen, and the spa offers the ultimate relaxation experience. The villa's bedrooms are lavishly appointed, and the living areas are designed for elegant comfort. This is the perfect destination for a lavish and unforgettable getaway.",
    category: "Beach",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Beach/Beach",
  },
  {
    title: "Charming Cottage in Wine Country",
    description: "Escape to a quaint cottage surrounded by vineyards and rolling hills. Discover local wineries, explore the countryside, and unwind on the front porch while sipping a glass of the region's finest. The cottage exudes rustic charm with exposed wooden beams and a cozy fireplace. The fully equipped kitchen invites you to create gourmet meals from local produce. Whether you're a wine connoisseur or simply seeking a peaceful retreat, this cottage is a wine lover's dream.",
    category: "BnB",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/BNB/Bnb",
  },
  {
    title: "Treehouse Retreat in the Redwoods",
    description: "Experience a childhood dream come true in our secluded treehouse. Nestled high among the Redwoods, this unique hideaway offers an enchanting escape into nature. The treehouse is beautifully appointed with a cozy sleeping loft, a kitchenette, and a private deck. Hike through the forest, listen to the sounds of nature, and stargaze by the fire pit at night. This is a place where magical memories are made.",
    category: "Tree",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Tree/Tree",
  },
  {
    title: "Lakeside Cabin with Fishing Dock",
    description: "Reconnect with nature in our lakeside cabin. Enjoy fishing from your private dock, kayaking on the lake, and roasting marshmallows by the fire pit. The cabin features a warm, rustic interior with a stone fireplace, a fully equipped kitchen, and comfortable sleeping arrangements. Explore the surrounding woods or simply unwind on the deck and take in the serene views of the lake. This is a true haven for outdoor enthusiasts and those who appreciate the peace of the countryside.",
    category: "Cabin",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Cabin/Cabin",
  },
  {
    title: "Historic Loft with City Views",
    description: "Stay in a beautifully restored historic loft with exposed brick walls and stunning city views. Walk to museums, restaurants, and entertainment from this prime downtown location. The loft boasts an open living area with a chef's kitchen, making it ideal for entertaining. The bedrooms are spacious and stylish, providing a comfortable retreat after a day of city exploration. Live like a local while indulging in the luxuries of a bygone era.",
    category: "Camper",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Camper/Camper",
  },
  {
    title: "Rustic Farmhouse on Acres of Land",
    description: "Our farmhouse offers a rustic escape with modern amenities. Explore the farm, pick fresh produce from the gardens, and watch the sunset from the porch swing. The farmhouse's interior is filled with character, from the exposed wooden beams to the country-style kitchen. Enjoy a barbecue on the patio or relax by the fireplace in the cozy living room. Whether you're an animal lover or simply seeking a peaceful country getaway, this farmhouse has it all.",
    category: "Casas",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Casas/Casas",
  },
  {
    title: "Cozy Ski Chalet by the Slopes",
    description: "Hit the slopes from our charming ski chalet. After a day on the mountain, warm up by the fireplace, soak in the hot tub under the stars, and share stories by the fire pit. The chalet's interior is welcoming, with wood accents and a fully equipped kitchen for après-ski meals. The bedrooms are comfortable and designed for relaxation. This is the perfect destination for winter sports enthusiasts and cozy mountain retreats.",
    category: "Castle",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Castle/Castle",
  },
  {
    title: "Secluded Desert Retreat",
    description: "Get away from it all in our desert retreat. Stargaze from the rooftop deck, take nature walks in the desert landscape, and immerse yourself in the peace and serenity of the arid surroundings. The interior of the retreat features a blend of desert aesthetics and modern comforts. The kitchen is well-equipped, and the bedrooms offer cozy spaces to relax. Whether you're an astronomer or a desert lover, this retreat offers an unforgettable experience.",
    category: "Container",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Container/Container",
  },
  {
    title: "Historic Mansion for Large Groups",
    description: "Step back in time in our grand historic mansion, an ideal destination for large groups. The mansion boasts elegant architecture, a spacious ballroom for gatherings, and beautifully landscaped gardens for outdoor events. The bedrooms are exquisitely appointed, and the interior features historical decor. This is the perfect venue for weddings, reunions, and special celebrations where history and grandeur meet.",
    category: "CountrySide",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/CountrySide/Countryside",
  },
  {
    title: "Romantic Cottage with Hot Tub",
    description: "Rekindle romance in our secluded cottage with a private hot tub. Surrounded by nature, it's the perfect spot for a couple's getaway. The cottage's interior is filled with charm, featuring a cozy living room, a fully equipped kitchen, and a romantic bedroom. Stroll hand in hand through the garden, relax in the hot tub under the stars, and create cherished memories in this idyllic hideaway.",
    category: "Creative",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Creative/Creative",
  },
  {
    title: "Artist's Studio in Artsy Neighborhood",
    description: "Stay in a unique artist's studio in the heart of an artsy neighborhood. Experience creativity at every turn, from the colorful decor to the eclectic shops and vibrant local scene. The studio boasts a spacious living area, a fully equipped kitchen, and a private balcony for people-watching. Explore galleries and street art, dine in quirky cafes, and immerse yourself in a world of inspiration.",
    category: "Dome",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Dome/Dome",
  },
  {
    title: "Tropical Paradise by the Beach",
    description: "Escape to our tropical paradise just steps from the beach. Lush gardens, a hammock for lazy afternoons, and ocean breezes create a serene atmosphere for relaxation. The bungalow's interior is filled with tropical decor, offering a sunny and inviting ambiance. Listen to the waves from your bedroom, take leisurely strolls on the beach, and enjoy sunset cocktails on the private patio. This is a destination where the sun and sea take center stage.",
    category: "Golfing",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Golfing/Golfing",
  },
  {
    title: "Family-Friendly Cabin with Game Room",
    description: "Bring the family to our cabin with a game room and outdoor fun for all ages. Hike in the woods, have a BBQ on the deck, and roast marshmallows by the fire pit. The cabin's interior features a cozy living room with a fireplace, a fully equipped kitchen, and plenty of space for the whole family. Explore nearby trails, take in the beauty of the forest, and create lasting memories in this family-friendly retreat.",
    category: "Hannok",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Hannok/Hannok",
  },
  {
    title: "Modern Loft with Skyline Views",
    description: "Our modern loft offers sweeping skyline views and a rooftop terrace. It's the perfect spot for exploring the city's vibrant nightlife and enjoying stylish, contemporary living. The loft features an open concept living area with sleek furnishings and a fully equipped kitchen. The bedrooms are chic and comfortable, creating a sophisticated urban escape. Step outside to the rooftop terrace to take in the city lights and embrace the vibrant energy of downtown.",
    category: "Historical",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Historical/Historical",
  },
  {
    title: "Romantic Vineyard Cottage",
    description: "Sip wine at your own vineyard cottage. Enjoy a romantic escape with vineyard tours, wine tastings, and candlelit dinners. The cottage is an idyllic retreat with a spacious living area, a fully equipped kitchen, and a private patio for sipping wine. Take leisurely walks through the vineyards, watch the sunset over the hills, and savor the flavors of wine country. This is a destination for those who love wine, romance, and the beauty of the vineyard.",
    category: "Hut",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Hut/Hut",
  },
  {
    title: "Equestrian Ranch with Riding Trails",
    description: "Experience life on an equestrian ranch with horseback riding and miles of scenic trails. Relax in a hot tub under the starry desert skies and watch the horses graze in the pastures. The ranch house offers a comfortable living area, a fully equipped kitchen, and cozy bedrooms with a rustic touch. Explore the surrounding countryside on horseback, take in the beauty of the desert, and find your inner cowboy or cowgirl.",
    category: "Island",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Island/Island",
  },
  {
    title: "Seaside Bungalow with Private Beach",
    description: "Stay in a charming bungalow with your own private beach. Listen to the waves, watch the sunset, and have a beach bonfire. The bungalow's interior exudes coastal charm, featuring a beachy decor, a fully equipped kitchen, and comfortable sleeping arrangements. Spend your days beachcombing, swimming in the ocean, and building sandcastles with the family. This is a destination for those who cherish the simple pleasures of beachside living.",
    category: "LakeFront",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/lakefront/Lakefront",
  },
  {
    title: "Luxurious Penthouse with Rooftop Pool",
    description: "Live the high life in our luxurious penthouse with a rooftop pool and sweeping city views. It's a glamorous escape in the city center, with a grand living area and a chef's kitchen for entertaining. The penthouse's bedrooms offer opulent comfort and stunning city vistas. Step onto the rooftop terrace to take a dip in the pool, lounge in the sun, and sip cocktails while the cityscape glistens. This is a destination for those who crave luxury and exclusivity.",
    category: "WindMill",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/WindMill/WindMill",
  },
  {
    title: "Quaint Cabin on a Peaceful Lake",
    description: "Escape to a quaint cabin on a serene lake. Fishing, kayaking, and birdwatching await in this tranquil natural setting. The cabin's interior features a cozy living room with a wood-burning stove, a fully equipped kitchen, and comfortable bedrooms. Enjoy coffee on the deck as you watch the sunrise over the water, and take in the peaceful beauty of the lake. This is a destination for those seeking solitude and the wonders of nature.",
    category: "Mansion",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Mansion/Mansion",
  },
  {
    title: "Cozy Mountain A-Frame with Fireplace",
    description: "Embrace the cozy atmosphere of our A-frame cabin. Snuggle up by the fireplace, explore nearby trails, and relax in the crisp mountain air. The cabin's interior is filled with charm, featuring wood paneling and a fully equipped kitchen for home-cooked meals. The lofted bedroom offers beautiful forest views and a sense of seclusion. Whether you're an outdoor enthusiast or simply seeking a quiet retreat, this cabin has it all.",
    category: "Aframe",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/AFrame/Aframe",
  },
  {
    title: "Modern Beachfront Condo",
    description: "Wake up to the sound of the ocean in our modern beachfront condo. Swim, surf, or simply soak up the sun on the sandy shores just steps away. The condo's interior is sleek and contemporary, with ocean views from the living area and bedroom. Prepare meals in the gourmet kitchen, and dine on the balcony with the sound of the waves as your backdrop. This is a destination for beach lovers and those who cherish the beauty of the ocean.",
    category: "Minsus",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Minsus/Minsus",
  },
  {
    title: "Hidden Cottage in a Secret Garden",
    description: "Discover a hidden cottage in a secret garden. It's a peaceful oasis in the heart of the city, a true urban escape. The cottage's interior is a blend of modern comfort and whimsical charm, with a fully equipped kitchen and a cozy living room. Stroll through the lush garden, find a quiet nook to read or relax, and experience the serenity of this hidden gem. This is a destination for those who value privacy and the beauty of nature in the city.",
    category: "Piano",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Piano/Piano",
  },
  {
    title: "Enchanted Forest Treehouse",
    description: "Live out your childhood fantasies in an enchanted forest treehouse. Climb up into the treetops and live among the birds in this magical hideaway. The treehouse's interior is cozy and imaginative, featuring a kitchenette and a sleeping area in the treetops. Explore the forest trails, take in the sights and sounds of nature, and reconnect with your inner child in this whimsical destination.",
    category: "Pool",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Pool/Pool",
  },
  {
    title: "Spacious Villa with Private Chef",
    description: "Our spacious villa comes with a private chef, lush gardens, and a pool. Enjoy an exclusive and indulgent escape with your every need catered to. The villa's interior is elegantly furnished, with a fully equipped kitchen and comfortable bedrooms. Let your personal chef create culinary delights while you relax by the pool, explore the gardens, and enjoy the tranquility of this opulent villa. This is a destination for those who appreciate the finer things in life.",
    category: "Riad",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Riad/Raid",
  },
  {
    title: "Adorable Tiny House by the Lake",
    description: "Experience the charm of a tiny house by the lake. It's small in size but big on character, with picturesque lake views and outdoor amenities that will delight nature lovers. The tiny house's interior is cleverly designed, featuring a well-equipped kitchen, a cozy sleeping loft, and a small living area. The lake is just steps away, inviting you to paddle, swim, or simply relax by the water's edge. This is a destination for those who value simplicity and the beauty of lakeside living.",
    category: "Scenic",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Scenic/Scenic",
  },
  {
    title: "Romantic Castle on a Hill",
    description: "Feel like royalty in our romantic castle perched on a hill. Turrets, lush gardens, and a grand ballroom await you in this enchanting setting. The castle's interior is a blend of old-world charm and modern comforts. Enjoy elegant bedrooms, a well-appointed kitchen, and grand spaces for entertaining. Explore the gardens, dine in the castle's banquet hall, and create your own fairy tale in this castle on a hill.",
    category: "Ski",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Ski-in/Ski",
  },
  {
    title: "Modern Loft with a View of the Skyline",
    description: "Stay in a modern loft with an incredible view of the city skyline. It's the perfect spot for city explorers and night owls, with a vibrant living area, a fully equipped kitchen, and stylish bedrooms. The loft's interior features sleek furnishings and floor-to-ceiling windows that frame the cityscape. Step outside to the rooftop terrace, where you can take in the city lights and the buzz of the urban nightlife. This is a destination for those who seek the excitement and style of downtown living.",
    category: "Vinyard",
    image: "https://airbne-seeds.s3.us-west-1.amazonaws.com/Houses/Vinyard/Vinyard",
  },
]

# To access the descriptions, you can use listings[index][:description], where 'index' is the index of the listing you want to retrieve.

puts "Destroying tables..."
# Unnecessary if using `rails db:seed:replant`
User.destroy_all

puts "Resetting primary keys..."
# For easy testing, so that after seeding, the first `User` has `id` of 1
ApplicationRecord.connection.reset_pk_sequence!("users")

puts "Creating users..."
User.create!(
  username: "demo",
  email: "demo1@user.io",
  password: "password",
  phone_number: "1-510-932-3092",
  profile_picture: PROFILE_PICTURES.sample,
)

User.create!(
  username: "Demo-lition",
  email: "demo@user.io",
  password: "password",
  phone_number: "1-510-933-3092",
  profile_picture: PROFILE_PICTURES.sample,
)

30.times do
  User.create(
    username: Faker::Internet.username(specifier: 5..10),
    phone_number: Faker::PhoneNumber.cell_phone,
    email: Faker::Internet.email,
    password: "password",
    profile_picture: PROFILE_PICTURES.sample,
  )
end

# Clear existing data
# This will delete all records from the corresponding table.
Home.destroy_all

ApplicationRecord.connection.reset_pk_sequence!("homes")

HOMES_ARRAY.each do |data|
  puts data[:title]
  home = Home.create(
    host_id: Faker::Number.between(from: 1, to: 2),
    property_type: PROPERTY_TYPES.sample,
    address: Faker::Address.street_address,
    apt_num: Faker::Lorem.word,
    city: Faker::Address.city,
    state: Faker::Address.state,
    country: Faker::Address.country,
    title: data[:title],
    description: data[:description],
    num_beds: Faker::Number.between(from: 1, to: 6),
    num_bedrooms: Faker::Number.between(from: 1, to: 4),
    num_bathrooms: Faker::Number.between(from: 1, to: 3),
    night_price: Faker::Number.between(from: 50, to: 300).to_f,
    cleaning_fee: Faker::Number.between(from: 20, to: 100).to_f,
    latitude: Faker::Address.latitude,
    longitude: Faker::Address.longitude,
    created_at: Faker::Time.between(from: 2.years.ago, to: Time.zone.now),
    updated_at: Faker::Time.between(from: 2.years.ago, to: Time.zone.now),
    category: data[:category],
    has_wifi: Faker::Boolean.boolean(true_ratio: 0.8), # 80% chance of being true
    has_pets: Faker::Boolean.boolean(true_ratio: 0.2), # 20% chance of being true
    has_kitchen: Faker::Boolean.boolean(true_ratio: 0.9), # 90% chance of being true
    has_ac: Faker::Boolean.boolean(true_ratio: 0.7), # 70% chance of being true
    has_heat: Faker::Boolean.boolean(true_ratio: 0.7), # 70% chance of being true
    has_tv: Faker::Boolean.boolean(true_ratio: 0.8), # 80% chance of being true
    has_parking: Faker::Boolean.boolean(true_ratio: 0.6), # 60% chance of being true
    has_fireplace: Faker::Boolean.boolean(true_ratio: 0.3), # 30% chance of being true
  )
  home.images.attach([
    { io: URI.open(data[:image] + "1.jpeg"), filename: data[:image] },
    { io: URI.open(data[:image] + "2.jpeg"), filename: data[:image] },
    { io: URI.open(data[:image] + "3.jpeg"), filename: data[:image] },
    { io: URI.open(data[:image] + "4.jpeg"), filename: data[:image] },
    { io: URI.open(data[:image] + "5.jpeg"), filename: data[:image] },
  ])
end

Review.destroy_all

ApplicationRecord.connection.reset_pk_sequence!("reviews")

50.times do
  Review.create(
    author_id: Faker::Number.between(from: 1, to: 20), # Assuming user IDs are between 1 and 30
    home_id: Faker::Number.between(from: 1, to: 30), # Assuming home IDs are between 1 and 20
    cleanliness: Faker::Number.between(from: 1, to: 5),
    communication: Faker::Number.between(from: 1, to: 5),
    check_in: Faker::Number.between(from: 1, to: 5),
    accuracy: Faker::Number.between(from: 1, to: 5),
    location: Faker::Number.between(from: 1, to: 5),
    value: Faker::Number.between(from: 1, to: 5),
    public_comment: Faker::Lorem.paragraph,
    private_comment: Faker::Lorem.paragraph,
    review_date: Faker::Date.between(from: 2.years.ago, to: Date.today),
    rating: Faker::Number.between(from: 1.0, to: 5.0),
    created_at: Faker::Time.between(from: 2.years.ago, to: Time.zone.now),
    updated_at: Faker::Time.between(from: 2.years.ago, to: Time.zone.now),
  )
end
