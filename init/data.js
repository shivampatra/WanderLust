// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   // 50 Additional Listings Below
//   {
//     title: "Waterfront Mansion in the Hamptons",
//     description:
//       "Experience ultimate luxury in this stunning waterfront mansion with panoramic bay views and private beach access.",
//     image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 8000,
//     location: "The Hamptons",
//     country: "United States",
//   },
//   {
//     title: "Alpine Cabin in Swiss Mountains",
//     description:
//       "Breathe in the fresh mountain air in this traditional alpine cabin with breathtaking views of snow-capped peaks.",
//     image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2200,
//     location: "Zermatt",
//     country: "Switzerland",
//   },
//   {
//     title: "Urban Penthouse in Singapore",
//     description:
//       "Stay in the heart of Singapore's financial district with stunning city views and world-class amenities.",
//     image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 3200,
//     location: "Singapore",
//     country: "Singapore",
//   },
//   {
//     title: "Countryside Manor in Ireland",
//     description:
//       "Discover the magic of the Irish countryside in this historic manor house surrounded by emerald green fields.",
//     image: "https://images.unsplash.com/photo-1520637836862-4d197d17c38a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2800,
//     location: "County Cork",
//     country: "Ireland",
//   },
//   {
//     title: "Desert Villa in Marrakech",
//     description:
//       "Immerse yourself in Moroccan culture at this stunning riad with traditional architecture and modern amenities.",
//     image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1900,
//     location: "Marrakech",
//     country: "Morocco",
//   },
//   {
//     title: "Oceanfront Resort in Hawaii",
//     description:
//       "Wake up to the sound of waves in this luxurious oceanfront suite with direct beach access and tropical gardens.",
//     image: "https://images.unsplash.com/photo-1520637736862-4d197d17c38a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 3800,
//     location: "Maui",
//     country: "United States",
//   },
//   {
//     title: "Vineyard Estate in Napa Valley",
//     description:
//       "Experience wine country luxury in this beautiful estate surrounded by rolling vineyards and olive groves.",
//     image: "https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 4500,
//     location: "Napa Valley",
//     country: "United States",
//   },
//   {
//     title: "Historic Palazzo in Venice",
//     description:
//       "Step into history in this restored 16th-century palazzo overlooking the romantic canals of Venice.",
//     image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 3500,
//     location: "Venice",
//     country: "Italy",
//   },
//   {
//     title: "Cliff-Top Villa in Santorini",
//     description:
//       "Witness breathtaking sunsets from this spectacular cliff-top villa with infinity pool and Aegean Sea views.",
//     image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 4200,
//     location: "Santorini",
//     country: "Greece",
//   },
//   {
//     title: "Beach Bungalow in the Seychelles",
//     description:
//       "Relax in paradise at this exclusive beach bungalow with pristine white sand and crystal-clear waters.",
//     image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 5500,
//     location: "Mahé",
//     country: "Seychelles",
//   },
//   {
//     title: "Farm Stay in New Zealand",
//     description:
//       "Experience authentic rural life in this working sheep farm with stunning mountain vistas and outdoor adventures.",
//     image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1300,
//     location: "Queenstown",
//     country: "New Zealand",
//   },
//   {
//     title: "Luxury Safari Tent in Kenya",
//     description:
//       "Sleep under the stars in this luxury safari tent while listening to the sounds of the African wilderness.",
//     image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 3700,
//     location: "Masai Mara",
//     country: "Kenya",
//   },
//   {
//     title: "Modern Apartment in Barcelona",
//     description:
//       "Explore Gaudí's masterpieces from this stylish apartment in the heart of Barcelona's Gothic Quarter.",
//     image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1700,
//     location: "Barcelona",
//     country: "Spain",
//   },
//   {
//     title: "Ice Hotel Suite in Sweden",
//     description:
//       "Experience the magic of the Arctic in this unique ice hotel suite, complete with Northern Lights viewing.",
//     image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2800,
//     location: "Jukkasjärvi",
//     country: "Sweden",
//   },
//   {
//     title: "Floating Villa in Amsterdam",
//     description:
//       "Stay on the water in this unique floating villa with modern design and panoramic canal views.",
//     image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2400,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Rainforest Lodge in Ecuador",
//     description:
//       "Immerse yourself in the Amazon rainforest at this eco-lodge with guided nature walks and wildlife spotting.",
//     image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1600,
//     location: "Amazon Basin",
//     country: "Ecuador",
//   },
//   {
//     title: "Beachfront Hotel in Rio",
//     description:
//       "Soak up the Brazilian sun at this vibrant beachfront hotel with views of Copacabana Beach and Sugar Loaf Mountain.",
//     image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2100,
//     location: "Rio de Janeiro",
//     country: "Brazil",
//   },
//   {
//     title: "Mountain Lodge in Patagonia",
//     description:
//       "Discover the wild beauty of Patagonia in this rustic lodge with hiking trails and glacier views.",
//     image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2600,
//     location: "El Calafate",
//     country: "Argentina",
//   },
//   {
//     title: "Traditional Ryokan in Kyoto",
//     description:
//       "Experience authentic Japanese hospitality in this traditional ryokan with tatami rooms and hot spring baths.",
//     image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1800,
//     location: "Kyoto",
//     country: "Japan",
//   },
//   {
//     title: "Luxury Yacht in Monaco",
//     description:
//       "Live like royalty aboard this luxury yacht docked in Monaco's prestigious harbor with full crew service.",
//     image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 7500,
//     location: "Monaco",
//     country: "Monaco",
//   },
//   {
//     title: "Desert Camp in Rajasthan",
//     description:
//       "Sleep under the stars in this luxury desert camp with camel rides and traditional Rajasthani cuisine.",
//     image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1400,
//     location: "Jaisalmer",
//     country: "India",
//   },
//   {
//     title: "Igloos in Finland",
//     description:
//       "Watch the Northern Lights from your glass igloo in the heart of Finnish Lapland's winter wonderland.",
//     image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 3200,
//     location: "Rovaniemi",
//     country: "Finland",
//   },
//   {
//     title: "Lighthouse Cottage in Maine",
//     description:
//       "Stay in a converted lighthouse with panoramic ocean views and dramatic coastal scenery.",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1600,
//     location: "Maine",
//     country: "United States",
//   },
//   {
//     title: "Boutique Hotel in Prague",
//     description:
//       "Explore the medieval charm of Prague from this elegant boutique hotel in the Old Town Square.",
//     image: "https://images.unsplash.com/photo-1520637736862-4d197d17c38a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1500,
//     location: "Prague",
//     country: "Czech Republic",
//   },
//   {
//     title: "Overwater Bungalow in Tahiti",
//     description:
//       "Float above turquoise lagoons in this luxurious overwater bungalow with direct ocean access.",
//     image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 5800,
//     location: "Bora Bora",
//     country: "French Polynesia",
//   },
//   {
//     title: "Converted Monastery in Portugal",
//     description:
//       "Find peace and tranquility in this beautifully converted monastery with stunning valley views.",
//     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2000,
//     location: "Douro Valley",
//     country: "Portugal",
//   },
//   {
//     title: "Urban Loft in Berlin",
//     description:
//       "Experience Berlin's vibrant culture from this converted industrial loft in the trendy Kreuzberg district.",
//     image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1300,
//     location: "Berlin",
//     country: "Germany",
//   },
//   {
//     title: "Beach Resort in Zanzibar",
//     description:
//       "Relax on pristine beaches with spice plantation tours and snorkeling in crystal-clear Indian Ocean waters.",
//     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2400,
//     location: "Stone Town",
//     country: "Tanzania",
//   },
//   {
//     title: "Cabin in Canadian Rockies",
//     description:
//       "Escape to the wilderness in this cozy log cabin surrounded by towering peaks and pristine lakes.",
//     image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1700,
//     location: "Jasper",
//     country: "Canada",
//   },
//   {
//     title: "Historic Hacienda in Mexico",
//     description:
//       "Step into colonial history at this beautifully preserved hacienda with traditional Mexican architecture.",
//     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1900,
//     location: "San Miguel de Allende",
//     country: "Mexico",
//   },
//   {
//     title: "Penthouse in Mumbai",
//     description:
//       "Experience the energy of Mumbai from this luxury penthouse with panoramic city and ocean views.",
//     image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2200,
//     location: "Mumbai",
//     country: "India",
//   },
//   {
//     title: "Glamping in Yosemite",
//     description:
//       "Experience luxury camping with all amenities while surrounded by Yosemite's majestic granite cliffs.",
//     image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2800,
//     location: "Yosemite",
//     country: "United States",
//   },
//   {
//     title: "Riad in Fez",
//     description:
//       "Discover the ancient medina from this traditional riad with intricate tilework and peaceful courtyards.",
//     image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1200,
//     location: "Fez",
//     country: "Morocco",
//   },
//   {
//     title: "Luxury Resort in Dubai",
//     description:
//       "Indulge in opulence at this world-class resort with private beaches, spa services, and desert adventures.",
//     image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 6200,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Mountain Chalet in Austria",
//     description:
//       "Enjoy alpine luxury in this traditional Austrian chalet with mountain views and world-class skiing.",
//     image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2900,
//     location: "Innsbruck",
//     country: "Austria",
//   },
//   {
//     title: "Boutique Hotel in Istanbul",
//     description:
//       "Bridge two continents at this elegant hotel with views of the Bosphorus and historic Byzantine architecture.",
//     image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1800,
//     location: "Istanbul",
//     country: "Turkey",
//   },
//   {
//     title: "Jungle Lodge in Borneo",
//     description:
//       "Explore one of the world's oldest rainforests from this eco-lodge with orangutan spotting opportunities.",
//     image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2100,
//     location: "Kota Kinabalu",
//     country: "Malaysia",
//   },
//   {
//     title: "Historic Inn in Edinburgh",
//     description:
//       "Stay in Scotland's capital at this charming historic inn near Edinburgh Castle and the Royal Mile.",
//     image: "https://images.unsplash.com/photo-1520637736862-4d197d17c38a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1700,
//     location: "Edinburgh",
//     country: "United Kingdom",
//   },
//   {
//     title: "Beachfront Villa in Barbados",
//     description:
//       "Enjoy Caribbean luxury with pristine beaches, rum tours, and vibrant local culture on this tropical island.",
//     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 3400,
//     location: "St. Lawrence Gap",
//     country: "Barbados",
//   },
//   {
//     title: "Luxury Tent in Serengeti",
//     description:
//       "Experience the Great Migration up close from this luxury safari camp with professional guides.",
//     image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 4200,
//     location: "Serengeti",
//     country: "Tanzania",
//   },
//   {
//     title: "Converted Castle in France",
//     description:
//       "Live like nobility in this converted medieval castle in the Loire Valley with vineyards and formal gardens.",
//     image: "https://images.unsplash.com/photo-1520637736862-4d197d17c38a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 3800,
//     location: "Loire Valley",
//     country: "France",
//   },
//   {
//     title: "Modern Villa in Ibiza",
//     description:
//       "Party by day and relax by night at this stunning modern villa with infinity pool and sunset views.",
//     image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 4800,
//     location: "Ibiza",
//     country: "Spain",
//   },
//   {
//     title: "Riverside Lodge in Vietnam",
//     description:
//       "Cruise the Mekong Delta from this charming riverside lodge with traditional Vietnamese architecture.",
//     image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1100,
//     location: "Ho Chi Minh City",
//     country: "Vietnam",
//   },
//   {
//     title: "Cliffside Resort in Big Sur",
//     description:
//       "Perched on dramatic cliffs overlooking the Pacific, this resort offers ultimate tranquility and natural beauty.",
//     image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 5200,
//     location: "Big Sur",
//     country: "United States",
//   },
//   {
//     title: "Windmill Cottage in Netherlands",
//     description:
//       "Stay in a converted windmill surrounded by colorful tulip fields and traditional Dutch countryside.",
//     image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 1400,
//     location: "Keukenhof",
//     country: "Netherlands",
//   },
//   {
//     title: "Luxury Tented Camp in Botswana",
//     description:
//       "Experience the Okavango Delta's pristine wilderness from this exclusive tented camp with mokoro excursions.",
//     image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 4600,
//     location: "Okavango Delta",
//     country: "Botswana",
//   },
//   {
//     title: "Historic Townhouse in Savannah",
//     description:
//       "Explore the American South from this beautifully restored antebellum townhouse in Savannah's Historic District.",
//     image: "https://images.unsplash.com/photo-1520637736862-4d197d17c38a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//     price: 2000,
//     location: "Savannah",
//     country: "United States",
//   },
// ];


// const sampleListings = [
//   {
//     title: "Romantic Escape in Santorini",
//     description:
//       "A 5-day luxurious getaway featuring sunset dinners, wine tasting, and private catamaran cruises.",
//     image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=60",
//     price: 1850,
//     location: "Santorini",
//     country: "Greece",
//   },
//   {
//     title: "Amazon Jungle Adventure",
//     description:
//       "7-day eco-tour with guided hikes, river boat rides, and wildlife encounters in the heart of the Amazon.",
//     image: "https://images.unsplash.com/photo-1596560548469-e9d8a0ef4c1f?auto=format&fit=crop&w=800&q=60",
//     price: 1300,
//     location: "Manaus, Amazonas",
//     country: "Brazil",
//   },
//   {
//     title: "Cultural Wonders of Kyoto",
//     description:
//       "Explore ancient temples, tea ceremonies, and traditional ryokans over 6 days in Kyoto.",
//     image: "https://images.unsplash.com/photo-1562503439-037f53f1c1c7?auto=format&fit=crop&w=800&q=60",
//     price: 1700,
//     location: "Kyoto",
//     country: "Japan",
//   },
//   {
//     title: "Iceland Northern Lights Tour",
//     description:
//       "A 4-night journey chasing the aurora borealis, with geothermal spas and glacier hikes.",
//     image: "https://images.unsplash.com/photo-1604147495794-f7d3d3d06c59?auto=format&fit=crop&w=800&q=60",
//     price: 2200,
//     location: "Reykjavik & Vik",
//     country: "Iceland",
//   },
//   {
//     title: "Tuscany Food & Wine Experience",
//     description:
//       "5-day culinary tour through vineyards, olive groves, and medieval towns in Tuscany.",
//     image: "https://images.unsplash.com/photo-1587547139090-e4b7efb7bd49?auto=format&fit=crop&w=800&q=60",
//     price: 2400,
//     location: "Florence, Siena",
//     country: "Italy",
//   },
//   {
//     title: "Kenya Wildlife Safari",
//     description:
//       "6-day all-inclusive safari across Maasai Mara and Lake Nakuru. Includes daily game drives.",
//     image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
//     price: 2900,
//     location: "Nairobi, Maasai Mara",
//     country: "Kenya",
//   },
//   {
//     title: "Hiking the Inca Trail to Machu Picchu",
//     description:
//       "4-day guided trek through breathtaking Andean scenery ending at Machu Picchu.",
//     image: "https://images.unsplash.com/photo-1533587851505-15c79f2f12f6?auto=format&fit=crop&w=800&q=60",
//     price: 1450,
//     location: "Cusco, Inca Trail",
//     country: "Peru",
//   },
//   {
//     title: "Bali Island Wellness Retreat",
//     description:
//       "7-day holistic retreat with yoga, spa treatments, and traditional Balinese healing.",
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
//     price: 1600,
//     location: "Ubud, Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Alaskan Glacier Cruise",
//     description:
//       "A 7-night luxury cruise along the Alaskan coast with glacier viewing and onboard excursions.",
//     image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=800&q=60",
//     price: 3200,
//     location: "Anchorage, Juneau",
//     country: "United States",
//   },
//   {
//     title: "Dubai Desert Luxury Experience",
//     description:
//       "3-day desert adventure with dune bashing, luxury camping, and fine dining under the stars.",
//     image: "https://images.unsplash.com/photo-1600526023495-6b5b1ae2eb5f?auto=format&fit=crop&w=800&q=60",
//     price: 1100,
//     location: "Dubai Desert Conservation Reserve",
//     country: "United Arab Emirates",
//   }
// ];



const sampleListings = [
  {
    title: "Romantic Escape in Santorini",
    description:
      "A 5-day luxurious getaway featuring sunset dinners, wine tasting, and private catamaran cruises.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=60",
    price: 1850,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Bangkok Nightlife & Pub Crawl",
    description:
      "Experience 3 nights of vibrant pub scenes, rooftop bars, and exclusive adult parties in the heart of Bangkok.",
    image: "https://images.unsplash.com/photo-1519183071298-a2962cc28d39?auto=format&fit=crop&w=800&q=60",
    price: 600,
    location: "Bangkok",
    country: "Thailand",
  },
  {
    title: "Dubai Luxury Party Weekend",
    description:
      "Enjoy a 4-day VIP nightlife experience with pool parties, desert safaris, and world-class club access.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Phuket Beach & Night Party",
    description:
      "5 nights on Phuket Island featuring beach parties, boat trips, and buzzing nightclubs by the shore.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Mykonos Sunset & Night Fest",
    description:
      "4 days filled with beach bars, sunset views, luxury dining, and lively adult night events.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Goa Party & Beach Vibes",
    description:
      "A 7-day tour including outdoor pubs, nightclubs, and vibrant beach parties in Goa’s hottest spots.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    price: 750,
    location: "Goa",
    country: "India",
  },
  {
    title: "Ibiza Clubbing & Pool Parties",
    description:
      "5 nights in Ibiza hosting world famous clubs, pool parties, and private yacht events.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Ibiza",
    country: "Spain",
  },
  {
    title: "Bangkok Rooftop Bars & Nightclubs",
    description:
      "3-night package with access to the best rooftop bars and exclusive nightclubs in Bangkok.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=60",
    price: 650,
    location: "Bangkok",
    country: "Thailand",
  },
  {
    title: "Dubai Desert Safari & Nightlife",
    description:
      "A 4-day trip including afternoon desert safaris followed by Dubai’s lively nightlife and bar hopping.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Koh Phi Phi Party & Beach Adventure",
    description:
      "4 days packed with beach parties, snorkeling, and late night bar fun at Koh Phi Phi.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    price: 850,
    location: "Koh Phi Phi",
    country: "Thailand",
  },
  {
    title: "Athens Nightlife & Historical Tours",
    description:
      "Couple the rich history of Athens by day with pub crawls and Greek night parties by night.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Athens",
    country: "Greece",
  },
  {
    title: "Dubai Marina Yacht Party",
    description:
      "3 days VIP access including private yacht parties in Dubai Marina with dining and clubbing.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Dubai Marina",
    country: "UAE",
  },
  {
    title: "Pattaya Beach & Nightclub Madness",
    description:
      "5 nights in Pattaya featuring beachside parties, clubs, and adult-themed night cabarets.",
    image: "https://images.unsplash.com/photo-1494522238193-4f7cae96cf2b?auto=format&fit=crop&w=800&q=60",
    price: 700,
    location: "Pattaya",
    country: "Thailand",
  },
  {
    title: "Corfu Island Beach & Nightlife",
    description:
      "4 days on Corfu with beach lounging by day and popular nightclubs by night.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Corfu",
    country: "Greece",
  },
  {
    title: "Dubai Burj Khalifa Views & Night Clubs",
    description:
      "VIP access to Burj Khalifa observation decks paired with luxurious nightlife experiences.",
    image: "https://images.unsplash.com/photo-1564518098551-c71ad9ec3a87?auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Chiang Mai Night Market & Pub Tour",
    description:
      "4 days experiencing cultural night markets and lively pubs in Chiang Mai’s buzzing scene.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60",
    price: 550,
    location: "Chiang Mai",
    country: "Thailand",
  },
  {
    title: "Rhodes Island Beach Parties & Clubs",
    description:
      "5 nights exploring Rhodes with its vibrant beach parties and renowned clubs.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Rhodes",
    country: "Greece",
  },
  {
    title: "Dubai Night Desert BBQ & Party",
    description:
      "An adventure with desert BBQ dinner followed by exclusive desert dune parties at night.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Dubai Desert",
    country: "UAE",
  },
  {
    title: "Koh Samui Beach Club Experience",
    description:
      "3 nights enjoying world-class beach clubs, pool parties, and island nightlife in Koh Samui.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Koh Samui",
    country: "Thailand",
  },
  {
    title: "Santorini Wine & Night Party Tour",
    description:
      "7 days combining island wine tours with vibrant beachfront night parties in Santorini.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Bangkok Luxury Night Parties",
    description:
      "Experience 5-star night parties with celebrity DJs and private table service in Bangkok.",
    image: "https://images.unsplash.com/photo-1519183071298-a2962cc28d39?auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Bangkok",
    country: "Thailand",
  },
  {
    title: "Dubai VIP Club & Lounge Pass",
    description:
      "4 nights of unrestricted access to the city’s top clubs and luxury lounges in Dubai.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    price: 2400,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Phuket Sunset Beach Parties",
    description:
      "4 nights on the beach with sunset cocktails, live DJ sets, and wild night parties.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    price: 850,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Mykonos Luxury Nightlife & Dining",
    description:
      "5-day package including fine dining, beach clubs, and exclusive adult night events in Mykonos.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Goa Beach Club & Night Crawl",
    description:
      "6 nights hopping between Goa’s hottest beach clubs, pubs, and beach bonfire parties.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Goa",
    country: "India",
  },
  {
    title: "Ibiza Ultimate Party Pass",
    description:
      "7 nights including club entries, pool parties, and VIP yacht events in Ibiza’s nightlife scene.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Ibiza",
    country: "Spain",
  },
  {
    title: "Bangkok Night Market & Club Tours",
    description:
      "4-day itinerary exploring Bangkok's street food markets by day and clubbing by night.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=60",
    price: 700,
    location: "Bangkok",
    country: "Thailand",
  },
  {
    title: "Dubai Tower Views & Elite Nightclubs",
    description:
      "Enjoy 3 days with private tours of Dubai Tower and exclusive entries to top nightclubs.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Koh Phi Phi Wild Nightlife Tour",
    description:
      "5 nights filled with beach bar hopping, nightclubs, and private island parties.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Koh Phi Phi",
    country: "Thailand",
  },
  {
    title: "Athens Night Club & Rooftop Experience",
    description:
      "3 nights discovering Athens’ best rooftops and nightclubs paired with gourmet local cuisine.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Athens",
    country: "Greece",
  },
  {
    title: "Dubai Yacht Club & Night Tours",
    description:
      "4-day luxury yacht cruises combined with Dubai’s elite club experiences.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Dubai Marina",
    country: "UAE",
  },
  {
    title: "Pattaya Adult Night & Beach Fest",
    description:
      "5-day party fest with adult shows, nightclubs, and beachside music events in Pattaya.",
    image: "https://images.unsplash.com/photo-1494522238193-4f7cae96cf2b?auto=format&fit=crop&w=800&q=60",
    price: 720,
    location: "Pattaya",
    country: "Thailand",
  },
  {
    title: "Corfu Summer Nightlife & Beach Days",
    description:
      "6 nights filled with beach fun by day and popular nightclubs by night in Corfu.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    price: 1650,
    location: "Corfu",
    country: "Greece",
  },
  {
    title: "Dubai Burj Khalifa Dinner & Party",
    description:
      "5 nights of dining at Burj Khalifa’s restaurant with night parties at exclusive clubs.",
    image: "https://images.unsplash.com/photo-1564518098551-c71ad9ec3a87?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Chiang Mai Pub Nights & Cultural Tours",
    description:
      "3 nights combining cultural visits with Chiang Mai’s lively pubs and night markets.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60",
    price: 600,
    location: "Chiang Mai",
    country: "Thailand",
  },
  {
    title: "Rhodes Beach & Night Party Weekend",
    description:
      "4-day weekend package with beach activities and island night parties in Rhodes.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    price: 1550,
    location: "Rhodes",
    country: "Greece",
  },
  {
    title: "Dubai Night Desert Safari & Clubbing",
    description:
      "Exciting 3-night experience combining desert nightlife with Dubai’s best clubs.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Dubai Desert",
    country: "UAE",
  },
  {
    title: "Koh Samui Luxury Beach & Party",
    description:
      "5 nights at a luxury resort with beach parties and VIP club entries in Koh Samui.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Koh Samui",
    country: "Thailand",
  },
  {
    title: "Santorini Night Fireworks & Wine Tasting",
    description:
      "Romantic nights with fireworks, wine tastings, and seaside parties during a 6-day stay.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=60",
    price: 1950,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Bangkok Skybar & DJ Party Nights",
    description:
      "4 nights of rooftop skybars and strobe-light club parties with international DJs.",
    image: "https://images.unsplash.com/photo-1519183071298-a2962cc28d39?auto=format&fit=crop&w=800&q=60",
    price: 1750,
    location: "Bangkok",
    country: "Thailand",
  },
  {
    title: "Dubai VIP Nightclubs & Lounge Experience",
    description:
      "Experience luxury with private tables, bottle service, and lounge parties in Dubai.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    price: 2600,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Phuket Beach Club & Night Gala",
    description:
      "Enjoy 5 days of poolside beach club fun, sunset parties and gala night events.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Mykonos Seaside Club Nights",
    description:
      "7 days filled with nighttime seaside clubs, fine dining, and boat excursions.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Goa Beachside Night Parties & Yoga",
    description:
      "6 nights combining relaxing yoga mornings with beach parties and midnight raves in Goa.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    price: 850,
    location: "Goa",
    country: "India",
  },
  {
    title: "Ibiza Fiesta & Sunset Disco",
    description:
      "5-day fiesta including sunset discos, beach clubs, and VIP party access in Ibiza.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Ibiza",
    country: "Spain",
  },
  {
    title: "Bangkok Night Bazaar & Club Experience",
    description:
      "3 nights mixed with cultural night bazaar visits and electric nightlife in Bangkok.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=60",
    price: 675,
    location: "Bangkok",
    country: "Thailand",
  },
  {
    title: "Dubai Elite Party Bus Tour",
    description:
      "Exploring Dubai nightlife in style on a VIP party bus with access to multiple clubs.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60",
    price: 2250,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Koh Phi Phi Beach Nightlife Blast",
    description:
      "4 nights on Koh Phi Phi with beach parties, fire shows, and lively nightclubs.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Koh Phi Phi",
    country: "Thailand",
  },
  {
    title: "Athens Sunset & Nightlife Gala",
    description:
      "Experience historic city tours by day and gala nightlife events on city rooftops.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    price: 1550,
    location: "Athens",
    country: "Greece",
  },
  {
    title: "Dubai Marina Evening Yacht & Club Tour",
    description:
      "Private yacht cruise in Dubai Marina followed by visits to top clubs and lounges.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60",
    price: 2900,
    location: "Dubai Marina",
    country: "UAE",
  },
  {
    title: "Pattaya Wild Night Cabaret & Beach",
    description:
      "4 nights packed with cabaret shows, beachside parties, and adult nightlife experiences.",
    image: "https://images.unsplash.com/photo-1494522238193-4f7cae96cf2b?auto=format&fit=crop&w=800&q=60",
    price: 730,
    location: "Pattaya",
    country: "Thailand",
  },
];



module.exports = { data: sampleListings };

