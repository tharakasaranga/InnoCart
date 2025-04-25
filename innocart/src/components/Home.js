import React from 'react';


function Home() {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              {/* You might want to add more descriptive text here */}
              <h2>Exclusive Offer!</h2>
              <p className="lead">Up to 10% off Voucher</p>
              <button className="btn btn-primary">Shop Now</button>
            </div>
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500x300/778899/fff?Text=Product+Image" // Placeholder image
                alt="Product"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      <section className="py-4 bg-white">
        <div className="container">
          <h2>Flash Sales</h2>
          <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3">
            {/* Sample Flash Sale Items - Replace with your actual data */}
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/add8e6/000?Text=Game+Controller"
                  alt="Game Controller"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Controller</h6>
                  <p className="card-text"><small className="text-muted">Ends in 01:23:45</small></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/f08080/fff?Text=SSD+Drive"
                  alt="SSD Drive"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">SSD Drive</h6>
                  <p className="card-text"><small className="text-muted">Ends in 02:30:15</small></p>
                </div>
              </div>
            </div>
            {/* Add more flash sale items here */}
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/90ee90/000?Text=Headphones"
                  alt="Headphones"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Headphones</h6>
                  <p className="card-text"><small className="text-muted">Ends in 03:10:00</small></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/ffd700/000?Text=Chair"
                  alt="Chair"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Chair</h6>
                  <p className="card-text"><small className="text-muted">Ends in 04:05:30</small></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/ffa07a/fff?Text=Another+Chair"
                  alt="Another Chair"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Another Chair</h6>
                  <p className="card-text"><small className="text-muted">Ends in 05:40:20</small></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/87ceeb/fff?Text=Keyboard"
                  alt="Keyboard"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Keyboard</h6>
                  <p className="card-text"><small className="text-muted">Ends in 06:15:55</small></p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-outline-primary">View All</button>
          </div>
        </div>
      </section>

      {/* Browse By Category */}
      <section className="py-4 bg-light">
        <div className="container">
          <h2>Browse By Category</h2>
          <div className="row row-cols-2 row-cols-md-4 g-3">
            {/* Sample Categories - Replace with your actual categories */}
            <div className="col text-center">
              <div className="p-3 bg-white rounded shadow-sm">
                <img
                  src="https://via.placeholder.com/80/ff69b4/fff?Text=Cat+1"
                  alt="Category 1"
                  className="img-fluid rounded-circle mb-2"
                />
                <h6>Category 1</h6>
              </div>
            </div>
            <div className="col text-center">
              <div className="p-3 bg-white rounded shadow-sm">
                <img
                  src="https://via.placeholder.com/80/4682b4/fff?Text=Cat+2"
                  alt="Category 2"
                  className="img-fluid rounded-circle mb-2"
                />
                <h6>Category 2</h6>
              </div>
            </div>
            <div className="col text-center">
              <div className="p-3 bg-white rounded shadow-sm">
                <img
                  src="https://via.placeholder.com/80/3cb371/fff?Text=Cat+3"
                  alt="Category 3"
                  className="img-fluid rounded-circle mb-2"
                />
                <h6>Category 3</h6>
              </div>
            </div>
            <div className="col text-center">
              <div className="p-3 bg-white rounded shadow-sm">
                <img
                  src="https://via.placeholder.com/80/dda0dd/fff?Text=Cat+4"
                  alt="Category 4"
                  className="img-fluid rounded-circle mb-2"
                />
                <h6>Category 4</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-4 bg-white">
        <div className="container">
          <h2>Best Selling Products</h2>
          <div className="row row-cols-2 row-cols-md-4 g-3">
            {/* Sample Best Selling Products - Replace with your actual data */}
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/fa8072/fff?Text=Product+A"
                  alt="Product A"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Product A</h6>
                  <p className="card-text">$XX.XX</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/ba55d3/fff?Text=Product+B"
                  alt="Product B"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Product B</h6>
                  <p className="card-text">$YY.YY</p>
                </div>
              </div>
            </div>
            {/* Add more best selling products here */}
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/483d8b/fff?Text=Product+C"
                  alt="Product C"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Product C</h6>
                  <p className="card-text">$ZZ.ZZ</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/cd5c5c/fff?Text=Product+D"
                  alt="Product D"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Product D</h6>
                  <p className="card-text">$WW.WW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhance Your Gaming Experience */}
      <section className="py-5 bg-secondary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Enhance Your Gaming Experience</h2>
              <p className="lead">Discover the latest gaming peripherals and accessories.</p>
              <button className="btn btn-light">Explore More</button>
            </div>
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500x300/333/fff?Text=Gaming+Setup" // Placeholder image
                alt="Gaming Setup"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Products */}
      <section className="py-4 bg-white">
        <div className="container">
          <h2>Explore Our Products</h2>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
            {/* Sample Products - Replace with your actual data */}
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/6495ed/fff?Text=Camera"
                  alt="Camera"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Camera</h6>
                  <p className="card-text">$XX.XX</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/f4a460/fff?Text=Laptop"
                  alt="Laptop"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Laptop</h6>
                  <p className="card-text">$YYY.YY</p>
                </div>
              </div>
            </div>
            {/* Add more products here */}
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/d2691e/fff?Text=Smartwatch"
                  alt="Smartwatch"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Smartwatch</h6>
                  <p className="card-text">$ZZ.ZZ</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/8fbc8f/fff?Text=Car"
                  alt="Car"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Toy Car</h6>
                  <p className="card-text">$AA.AA</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/bdb76b/fff?Text=Keyboard"
                  alt="Keyboard"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Gaming Keyboard</h6>
                  <p className="card-text">$BB.BB</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/e9967a/fff?Text=Controller"
                  alt="Controller"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Wireless Controller</h6>
                  <p className="card-text">$CC.CC</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/6b8e23/fff?Text=Jacket"
                  alt="Jacket"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Jacket</h6>
                  <p className="card-text">$DD.DD</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/150/a0522d/fff?Text=Shoes"
                  alt="Shoes"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h6 className="card-title">Shoes</h6>
                  <p className="card-text">$EE.EE</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-outline-primary">View More Products</button>
          </div>
        </div>
      </section>

      {/* New Arrival */}
     </div>
    );      
}
export default Home;