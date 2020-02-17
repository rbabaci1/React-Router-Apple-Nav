const productData = [
  {
    id: 1,
    name: "Mac",
    productIcon: "🖥️",
    imageUrl:
      "https://images.unsplash.com/photo-1517162024945-595ae6bca1a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    repository: [
      { id: 1, name: "MacBookAir", new: false },
      { id: 2, name: 'MacBook Pro 13"', new: false },
      { id: 3, name: 'MacBook Pro 16"', new: true },
      { id: 4, name: "iMac", new: false },
      { id: 5, name: "iMac Pro", new: false },
      { id: 6, name: "Mac Pro", new: true },
      { id: 7, name: "Mac mini", new: false },
      { id: 8, name: "Compare", new: false },
      { id: 9, name: "Pro Display XDR", new: true },
      { id: 10, name: "Accessories", new: false },
      { id: 11, name: "Catalina", new: false }
    ]
  },
  {
    id: 2,
    name: "iPad",
    productIcon: "📱",
    imageUrl:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    repository: [
      { id: 1, name: "iPad Pro", new: false },
      { id: 2, name: "iPad Air", new: false },
      { id: 3, name: "iPad", new: true },
      { id: 4, name: "iPad mini", new: false },
      { id: 5, name: "Compare", new: false },
      { id: 6, name: "Apple Pencil", new: false },
      { id: 7, name: "Smart Keyboard", new: false },
      { id: 8, name: "AirPods", new: true },
      { id: 9, name: "Accessories", new: false },
      { id: 10, name: "iPadOS", new: false }
    ]
  },
  {
    id: 3,
    name: "iPhone",
    productIcon: "📱",
    imageUrl:
      "https://images.unsplash.com/photo-1580466931754-def27bb0f188?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    repository: [
      { id: 1, name: "iPhone 11 Pro", new: true },
      { id: 2, name: "iPhone11", new: true },
      { id: 3, name: "iPhone Xr", new: false },
      { id: 4, name: "iPhone 8", new: false },
      { id: 5, name: "Compare", new: false },
      { id: 6, name: "Apple Card", new: false },
      { id: 7, name: "AirPods", new: true },
      { id: 8, name: "Accessories", new: false },
      { id: 9, name: "iOS 13", new: false }
    ]
  },
  {
    id: 4,
    name: "Watch",
    productIcon: "⌚️",
    imageUrl:
      "https://images.unsplash.com/photo-1519315910113-861dcfbfb9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    repository: [
      { id: 1, name: "Apple Watch Series 5", new: true },
      { id: 2, name: "Apple Watch Nike", new: true },
      { id: 3, name: "Apple Watch Hermès", new: true },
      { id: 4, name: "Apple Watch Edition", new: true },
      { id: 5, name: "Apple Watch Series 3", new: false },
      { id: 6, name: "Compare", new: false },
      { id: 7, name: "Bands", new: false },
      { id: 8, name: "AirPods", new: true },
      { id: 9, name: "Accessories", new: false },
      { id: 10, name: "WatchOS", new: false }
    ]
  },
  {
    id: 5,
    name: "TV",
    productIcon: "📼",
    imageUrl:
      "https://images.unsplash.com/photo-1515703817793-511cee221bb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    repository: [
      { id: 1, name: "Apple TV+", new: true },
      { id: 2, name: "Apple TV app", new: true },
      { id: 3, name: "Apple TV 4K", new: false },
      { id: 4, name: "Apple TV HD", new: false },
      { id: 5, name: "AirPlay", new: false },
      { id: 6, name: "Accessories", new: false }
    ]
  },
  {
    id: 6,
    name: "Music",
    productIcon: "🎵",
    imageUrl:
      "https://images.unsplash.com/photo-1520390244437-6f1c5eae66ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    repository: [
      { id: 1, name: "Apple Music", new: false },
      { id: 2, name: "AirPods Pro", new: true },
      { id: 3, name: "AirPods", new: false },
      { id: 4, name: "HomePod", new: false },
      { id: 5, name: "iPod touch", new: false },
      { id: 6, name: "Music Accessories", new: false },
      { id: 7, name: "Gift Cards", new: false }
    ]
  }
];

export default productData;
