import React from 'react';


function ProductCategory() {
  const categories = [
    { name: "Woman's Fashion", imageUrl: "https://static.fibre2fashion.com//articleresources/images/87/8609/fashion%20women-small_Small.jpg" },
    { name: "Men's Fashion", imageUrl: "https://fault-magazine.com/wp-content/uploads/2023/02/bruce-mars-qNF8jx8ZsFY-unsplash.jpg" },
    { name: "Electronics Devices", imageUrl: "https://i.pinimg.com/736x/df/99/78/df99784d9589a390c8d20b72cb3bd63e.jpg" },
    { name: "Home & Lifestyle", imageUrl: "https://img.jakpost.net/c/2019/09/17/2019_09_17_79579_1568684756._large.jpg" },
    { name: "Medicine", imageUrl: "https://ipkey.eu/sites/default/files/2021-02/Article_Medicines.jpg" },
    { name: "Sports & Outdoor", imageUrl: "https://opaltrading.com/wp-content/uploads/2021/12/sport-917899790.jpg" },
    { name: "Baby's & Toys", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBL7T69VJO-YZJDdQT3giXLMLJXK70PaK-tg&s" },
    { name: "Groceries & Pets", imageUrl: "https://assets3.thrillist.com/v1/image/2559986/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70" },
    { name: "Health & Beauty", imageUrl: "https://thebeautyspa.info/wp-content/uploads/2021/04/The-Beauty-Spa-Warlingham-Facial-Treatments-1024x683.jpeg" },
    { name: "Electronics Accessories", imageUrl: "https://en.idei.club/uploads/posts/2023-06/thumbs/1686007224_en-idei-club-p-electronic-accessories-dizain-36.jpg" },
    { name: "Automotive & Motorbike", imageUrl: "https://www.shutterstock.com/image-photo/shanghai-china-february-16-2023-600nw-2263678717.jpg" },   
    { name: "Watches & Accessories", imageUrl: "https://static.chrono24.com/magazine/wp-content/uploads/2019/11/Straps-Watchgecko-Tudor-Black-Bay-58.jpg" },
  ];

  return (
    <section className="py-4 bg-light">
      <div className="container">
        <h2>Browse By Category</h2>
        <div className="row row-cols-2 row-cols-md-4 g-3">
          {categories.map((category) => (
            <div className="col text-center" key={category.name}>
              <div className="p-3 bg-white rounded shadow-sm d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '150px' }}>
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="img-fluid rounded-circle mb-2"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <h6>{category.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategory;