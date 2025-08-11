import React from "react";

const HomePage = () => {
  return (
    <>
      <>
        <div className="body-overlay transition-3" />
        <section className="extra__info transition-3">
          <div className="extra__info-inner">
            <div className="extra__info-close text-end">
              <a href="#" className="extra__info-close-btn">
                <i className="fal fa-times" />
              </a>
            </div>
            <nav className="side-mobile-menu d-block d-lg-none mm-menu">
              <ul>
                <li className="menu-item-has-children has-droupdown">
                  <a>Home</a>
                  <ul className="sub-menu">
                    <li>
                      <a
                        aria-current="page"
                        href="/"
                        className="router-link-active router-link-exact-active"
                      >
                        Home Style 1
                      </a>
                    </li>
                    <li>
                      <a href="/home-2" className="">
                        Home Style 2
                      </a>
                    </li>
                    <li>
                      <a href="/home-3" className="">
                        Home Style 3
                      </a>
                    </li>
                    <li>
                      <a href="/home-4" className="">
                        Home Style 4
                      </a>
                    </li>
                    <li>
                      <a href="/home-5" className="">
                        Home Style 5
                      </a>
                    </li>
                    <li>
                      <a href="/home-6" className="">
                        Home Style 6
                      </a>
                    </li>
                    <li>
                      <a href="/home-7" className="">
                        Home Style 7
                      </a>
                    </li>
                  </ul>
                </li>
                {/**/}
                <li className="menu-item-has-children has-droupdown">
                  <a>Shop</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/shop" className="">
                        Standard Shop Page
                      </a>
                    </li>
                    <li>
                      <a href="/shop-right" className="">
                        Shop Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="/shop-4-col" className="">
                        Shop 4 Column
                      </a>
                    </li>
                    <li>
                      <a href="/shop-3-col" className="">
                        Shop 3 Column
                      </a>
                    </li>
                    <li>
                      <a href="/product-details" className="">
                        Shop Details
                      </a>
                    </li>
                  </ul>
                </li>
                {/**/}
                <li className="menu-item-has-children has-droupdown">
                  <a>Other Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/wishlist" className="">
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="/cart" className="">
                        Cart
                      </a>
                    </li>
                    <li>
                      <a href="/compare" className="">
                        Compare
                      </a>
                    </li>
                    <li>
                      <a href="/checkout" className="">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a href="/register" className="">
                        Register
                      </a>
                    </li>
                    <li>
                      <a href="/login" className="">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="/account" className="">
                        Account
                      </a>
                    </li>
                  </ul>
                </li>
                {/**/}
                <li className="menu-item-has-children has-droupdown">
                  <a>Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/blog" className="">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/blog-left-sidebar" className="">
                        Blog Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="/blog-no-sidebar" className="">
                        Blog No Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="/blog-2-col" className="">
                        Blog 2 Column
                      </a>
                    </li>
                    <li>
                      <a href="/blog-3-col" className="">
                        Blog 3 Column
                      </a>
                    </li>
                    <li>
                      <a href="/blog-2-col-mas" className="">
                        Blog 2 Col Masonry
                      </a>
                    </li>
                    <li>
                      <a href="/blog-details" className="">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                {/**/}
                {/**/}
                <li>
                  <a href="/contact" className="">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <div className="body-overlay transition-3" />
        {/*[*/}
        <section className="slider__area  p-relative tp_hero">
          <section
            className="carousel slider-active"
            dir="ltr"
            aria-label="Gallery"
            tabIndex={0}
          >
            <div className="carousel__viewport">
              <ol
                className="carousel__track"
                style={{
                  transform: "translateX(0px)",
                  transition: "all",
                  margin: "0px -3794px",
                  width: "100%",
                }}
              >
                <li
                  style={{
                    width: "1264.67px",
                    backgroundImage: 'url("/slider-1.DKONN3p5.jpg")',
                  }}
                  className="carousel__slide carousel_slide--clone single-slider slider__height  d-flex align-items-center"
                  aria-hidden="true"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                        <div className="slider__content">
                          <h2>
                            Handmade <br /> Hand carved Coffee
                          </h2>
                          <p>
                            As rich and unique as the coffee beans it is
                            intended for, this little scoop will make your
                            morning ritual a special occasion every day.
                          </p>
                          <a
                            href="/shop"
                            className="os-btn os-btn-2 hero-slider-btn"
                          >
                            Discover now{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    width: "1264.67px",
                    backgroundImage: 'url("/slider-2._MYcgK8B.jpg")',
                  }}
                  className="carousel__slide carousel_slide--clone single-slider slider__height  d-flex align-items-center"
                  aria-hidden="true"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                        <div className="slider__content">
                          <h2>
                            Think Different &amp;
                            <br /> Do it otherwise
                          </h2>
                          <p>
                            Claritas est etiam processus dynamicus, qui sequitur
                            mutationem consuetudium lectorum.
                          </p>
                          <a
                            href="/shop"
                            className="os-btn os-btn-2 hero-slider-btn"
                          >
                            {" "}
                            Discover now{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    width: "1264.67px",
                    backgroundImage: 'url("/slider-3.Fabl2JIs.jpg")',
                  }}
                  className="carousel__slide carousel_slide--clone carousel__slide--prev single-slider slider__height  d-flex align-items-center"
                  aria-hidden="true"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                        <div className="slider__content">
                          <h2>
                            High Beam
                            <br /> by Tom Chung
                          </h2>
                          <p>
                            High Beam is an adjustable desk or shelf light that
                            offers a wide variety of lighting possibilities
                          </p>
                          <a
                            href="/shop"
                            className="os-btn os-btn-2 hero-slider-btn"
                          >
                            {" "}
                            Discover now{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    width: "1264.67px",
                    backgroundImage: 'url("/slider-1.DKONN3p5.jpg")',
                  }}
                  className="carousel__slide carousel__slide--visible carousel__slide--active single-slider slider__height  d-flex align-items-center"
                  aria-hidden="false"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                        <div className="slider__content">
                          <h2>
                            Handmade <br /> Hand carved Coffee
                          </h2>
                          <p>
                            As rich and unique as the coffee beans it is
                            intended for, this little scoop will make your
                            morning ritual a special occasion every day.
                          </p>
                          <a
                            href="/shop"
                            className="os-btn os-btn-2 hero-slider-btn"
                          >
                            Discover now{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    width: "1264.67px",
                    backgroundImage: 'url("/slider-2._MYcgK8B.jpg")',
                  }}
                  className="carousel__slide carousel__slide--next single-slider slider__height  d-flex align-items-center"
                  aria-hidden="true"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                        <div className="slider__content">
                          <h2>
                            Think Different &amp;
                            <br /> Do it otherwise
                          </h2>
                          <p>
                            Claritas est etiam processus dynamicus, qui sequitur
                            mutationem consuetudium lectorum.
                          </p>
                          <a
                            href="/shop"
                            className="os-btn os-btn-2 hero-slider-btn"
                          >
                            {" "}
                            Discover now{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    width: "1264.67px",
                    backgroundImage: 'url("/slider-3.Fabl2JIs.jpg")',
                  }}
                  className="carousel__slide single-slider slider__height  d-flex align-items-center"
                  aria-hidden="true"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                        <div className="slider__content">
                          <h2>
                            High Beam
                            <br /> by Tom Chung
                          </h2>
                          <p>
                            High Beam is an adjustable desk or shelf light that
                            offers a wide variety of lighting possibilities
                          </p>
                          <a
                            href="/shop"
                            className="os-btn os-btn-2 hero-slider-btn"
                          >
                            {" "}
                            Discover now{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    width: "1264.67px",
                    backgroundImage: 'url("/slider-1.DKONN3p5.jpg")',
                  }}
                  className="carousel__slide carousel_slide--clone single-slider slider__height  d-flex align-items-center"
                  aria-hidden="true"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                        <div className="slider__content">
                          <h2>
                            Handmade <br /> Hand carved Coffee
                          </h2>
                          <p>
                            As rich and unique as the coffee beans it is
                            intended for, this little scoop will make your
                            morning ritual a special occasion every day.
                          </p>
                          <a
                            href="/shop"
                            className="os-btn os-btn-2 hero-slider-btn"
                          >
                            Discover now{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    width: "1264.67px",
                    backgroundImage: 'url("/slider-2._MYcgK8B.jpg")',
                  }}
                  className="carousel__slide carousel_slide--clone single-slider slider__height  d-flex align-items-center"
                  aria-hidden="true"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                        <div className="slider__content">
                          <h2>
                            Think Different &amp;
                            <br /> Do it otherwise
                          </h2>
                          <p>
                            Claritas est etiam processus dynamicus, qui sequitur
                            mutationem consuetudium lectorum.
                          </p>
                          <a
                            href="/shop"
                            className="os-btn os-btn-2 hero-slider-btn"
                          >
                            {" "}
                            Discover now{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    width: "1264.67px",
                    backgroundImage: 'url("/slider-3.Fabl2JIs.jpg")',
                  }}
                  className="carousel__slide carousel_slide--clone single-slider slider__height  d-flex align-items-center"
                  aria-hidden="true"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                        <div className="slider__content">
                          <h2>
                            High Beam
                            <br /> by Tom Chung
                          </h2>
                          <p>
                            High Beam is an adjustable desk or shelf light that
                            offers a wide variety of lighting possibilities
                          </p>
                          <a
                            href="/shop"
                            className="os-btn os-btn-2 hero-slider-btn"
                          >
                            {" "}
                            Discover now{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            {/*[*/}
            <ol className="carousel__pagination">
              <li className="carousel__pagination-item">
                <button
                  type="button"
                  className="carousel__pagination-button carousel__pagination-button--active"
                  aria-label="Navigate to slide 1"
                />
              </li>
              <li className="carousel__pagination-item">
                <button
                  type="button"
                  className="carousel__pagination-button"
                  aria-label="Navigate to slide 2"
                />
              </li>
              <li className="carousel__pagination-item">
                <button
                  type="button"
                  className="carousel__pagination-button"
                  aria-label="Navigate to slide 3"
                />
              </li>
            </ol>
            {/*]*/}
            <div
              className="carousel__liveregion carousel__sr-only"
              aria-live="polite"
              aria-atomic="true"
            >
              Item 1 of 3
            </div>
          </section>
        </section>
        <div className="banner__area">
          <div className="container">
            <div className="banner__inner p-relative mt--95">
              <div className="row">
                {/*[*/}
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="banner__item mb-30 p-relative">
                    <div className="banner__thumb fix">
                      <a href="/shop" className="w-img">
                        <img
                          src="/banner-sm-1.ClyyK-Mi.jpg"
                          alt="banner"
                        />
                      </a>
                    </div>
                    <div className="banner__content p-absolute transition-3">
                      <h5>
                        <a href="/shop" className="">
                          <span>Lighting &amp; Chair</span>
                        </a>
                      </h5>
                      <a href="/shop" className="link-btn">
                        Discover now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="banner__item mb-30 p-relative">
                    <div className="banner__thumb fix">
                      <a href="/shop" className="w-img">
                        <img
                          src="/banner-sm-2.XGeMoC7b.jpg"
                          alt="banner"
                        />
                      </a>
                    </div>
                    <div className="banner__content p-absolute transition-3">
                      <h5>
                        <a href="/shop" className="">
                          <span>Decoration &amp; Accessories</span>
                        </a>
                      </h5>
                      <a href="/shop" className="link-btn">
                        Discover now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="banner__item mb-30 p-relative">
                    <div className="banner__thumb fix">
                      <a href="/shop" className="w-img">
                        <img
                          src="/banner-sm-3.vIdxkbii.jpg"
                          alt="banner"
                        />
                      </a>
                    </div>
                    <div className="banner__content p-absolute transition-3">
                      <h5>
                        <a href="/shop" className="">
                          <span>Clothing &amp; Oil</span>
                        </a>
                      </h5>
                      <a href="/shop" className="link-btn">
                        Discover now
                      </a>
                    </div>
                  </div>
                </div>
                {/*]*/}
              </div>
            </div>
          </div>
        </div>
        <section className="product__area pt-60 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section__title-wrapper text-center mb-55">
                  <div className="section__title mb-10">
                    <h2>Trending Products</h2>
                  </div>
                  <div className="section__sub-title">
                    <p>
                      {" "}
                      Mirum est notare quam littera gothica quam nunc putamus
                      parum claram!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product__slider">
              <div className="row">
                {/*[*/}
                <div className="col-lg-3 col-md-4 product__item">
                  {/*[*/}
                  <div className="product__wrapper mb-60">
                    <div className="product__thumb">
                      <a href="/product-details/1" className="w-img">
                        <img
                          src="/product_1.DXKIe6x_.png"
                          alt="product-img"
                        />
                        <img
                          className="product__thumb-2"
                          src="/product_3.EdfpAkfr.png"
                          alt="product-img"
                        />
                      </a>
                      <div className="product__action transition-3">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="fal fa-heart" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <i className="fal fa-sliders-h" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productModalId-1"
                        >
                          <i className="fal fa-search" />
                        </a>
                      </div>
                      {/**/}
                    </div>
                    <div className="product__content p-relative">
                      <div className="product__content-inner">
                        <a href="/product-details/1" className="">
                          <span>Wooden container Bowl</span>
                        </a>
                        <div className="product__price transition-3">
                          <span>$96.00</span>
                          <span className="old-price">$120</span>
                        </div>
                      </div>
                      <div className="add-cart p-absolute transition-3">
                        <a href="#">+ Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="productModalId-1"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered product-modal"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="product__modal-wrapper p-relative">
                          <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal">
                              <i className="fal fa-times" />
                            </button>
                          </div>
                          <div className="product__modal-inner">
                            <div className="row">
                              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-box">
                                  <div
                                    className="tab-content mb-20"
                                    id="nav-tabContent"
                                  >
                                    <div className="product__modal-img w-img">
                                      <img
                                        src="/product_1.DXKIe6x_.png"
                                        alt="product_img"
                                      />
                                    </div>
                                  </div>
                                  <nav>
                                    <div className="nav nav-tabs justify-content-between">
                                      {/*[*/}
                                      <button className="nav-item nav-link active">
                                        <img
                                          src="/product_1.DXKIe6x_.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_2.CugT_G4S.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_3.EdfpAkfr.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      {/*]*/}
                                    </div>
                                  </nav>
                                </div>
                              </div>
                              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-content">
                                  <h4>
                                    <a href="/product-details/1" className="">
                                      <span>Wooden container Bowl</span>
                                    </a>
                                  </h4>
                                  <div className="rating rating-shop mb-15">
                                    <ul>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fal fa-star" />
                                        </span>
                                      </li>
                                    </ul>
                                    <span className="rating-no ml-10">
                                      3 rating(s)
                                    </span>
                                  </div>
                                  <div className="product__price-2 mb-25">
                                    <span>$96.00</span>
                                    <span className="old-price">$120</span>
                                  </div>
                                  <div className="product__modal-des mb-30">
                                    <p>
                                      Claritas est etiam processus dynamicus,
                                      qui sequitur mutationem consuetudium
                                      lectorum. Mirum est notare quam littera
                                      gothica, quam nunc putamus parum claram.
                                    </p>
                                  </div>
                                  <div className="product__modal-form">
                                    <form action="#">
                                      <div className="product__modal-input size mb-20">
                                        <label>
                                          Size{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>L</option>
                                          <option>XL</option>
                                          <option>XXL</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-input color mb-20">
                                        <label>
                                          Color{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>Yellow</option>
                                          <option>Blue</option>
                                          <option>White</option>
                                          <option>Ocean Blue</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-required mb-5">
                                        <span>Repuired Fiields *</span>
                                      </div>
                                      <div className="pro-quan-area d-lg-flex align-items-center">
                                        <div className="product-quantity-title">
                                          <label>Quantity</label>
                                        </div>
                                        <div className="product-quantity">
                                          <div className="cart-plus-minus">
                                            <input
                                              type="text"
                                              defaultValue={1}
                                            />
                                            <div className="dec qtybutton">
                                              -
                                            </div>
                                            <div className="inc qtybutton">
                                              +
                                            </div>
                                          </div>
                                        </div>
                                        <div className="pro-cart-btn ml-20">
                                          <a
                                            href="#"
                                            className="os-btn os-btn-black os-btn-3 mr-10"
                                          >
                                            + Add to Cart
                                          </a>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*]*/}
                </div>
                <div className="col-lg-3 col-md-4 product__item">
                  {/*[*/}
                  <div className="product__wrapper mb-60">
                    <div className="product__thumb">
                      <a href="/product-details/2" className="w-img">
                        <img
                          src="/product_2.CugT_G4S.png"
                          alt="product-img"
                        />
                        <img
                          className="product__thumb-2"
                          src="/product_5.B2cGuthk.png"
                          alt="product-img"
                        />
                      </a>
                      <div className="product__action transition-3">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="fal fa-heart" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <i className="fal fa-sliders-h" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productModalId-2"
                        >
                          <i className="fal fa-search" />
                        </a>
                      </div>
                      {/**/}
                    </div>
                    <div className="product__content p-relative">
                      <div className="product__content-inner">
                        <a href="/product-details/2" className="">
                          <span>Euvira Rocking Chair</span>
                        </a>
                        <div className="product__price transition-3">
                          <span>$90.00</span>
                          <span className="old-price">$110</span>
                        </div>
                      </div>
                      <div className="add-cart p-absolute transition-3">
                        <a href="#">+ Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="productModalId-2"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered product-modal"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="product__modal-wrapper p-relative">
                          <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal">
                              <i className="fal fa-times" />
                            </button>
                          </div>
                          <div className="product__modal-inner">
                            <div className="row">
                              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-box">
                                  <div
                                    className="tab-content mb-20"
                                    id="nav-tabContent"
                                  >
                                    <div className="product__modal-img w-img">
                                      <img
                                        src="/product_2.CugT_G4S.png"
                                        alt="product_img"
                                      />
                                    </div>
                                  </div>
                                  <nav>
                                    <div className="nav nav-tabs justify-content-between">
                                      {/*[*/}
                                      <button className="nav-item nav-link active">
                                        <img
                                          src="/product_2.CugT_G4S.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_3.EdfpAkfr.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_4.B_CatYpZ.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      {/*]*/}
                                    </div>
                                  </nav>
                                </div>
                              </div>
                              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-content">
                                  <h4>
                                    <a href="/product-details/2" className="">
                                      <span>Euvira Rocking Chair</span>
                                    </a>
                                  </h4>
                                  <div className="rating rating-shop mb-15">
                                    <ul>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fal fa-star" />
                                        </span>
                                      </li>
                                    </ul>
                                    <span className="rating-no ml-10">
                                      4 rating(s)
                                    </span>
                                  </div>
                                  <div className="product__price-2 mb-25">
                                    <span>$90.00</span>
                                    <span className="old-price">$110</span>
                                  </div>
                                  <div className="product__modal-des mb-30">
                                    <p>
                                      Claritas est etiam processus dynamicus,
                                      qui sequitur mutationem consuetudium
                                      lectorum. Mirum est notare quam littera
                                      gothica, quam nunc putamus parum claram.
                                    </p>
                                  </div>
                                  <div className="product__modal-form">
                                    <form action="#">
                                      <div className="product__modal-input size mb-20">
                                        <label>
                                          Size{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>XL</option>
                                          <option>L</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-input color mb-20">
                                        <label>
                                          Color{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>White</option>
                                          <option>Ocean Blue</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-required mb-5">
                                        <span>Repuired Fiields *</span>
                                      </div>
                                      <div className="pro-quan-area d-lg-flex align-items-center">
                                        <div className="product-quantity-title">
                                          <label>Quantity</label>
                                        </div>
                                        <div className="product-quantity">
                                          <div className="cart-plus-minus">
                                            <input
                                              type="text"
                                              defaultValue={1}
                                            />
                                            <div className="dec qtybutton">
                                              -
                                            </div>
                                            <div className="inc qtybutton">
                                              +
                                            </div>
                                          </div>
                                        </div>
                                        <div className="pro-cart-btn ml-20">
                                          <a
                                            href="#"
                                            className="os-btn os-btn-black os-btn-3 mr-10"
                                          >
                                            + Add to Cart
                                          </a>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*]*/}
                </div>
                <div className="col-lg-3 col-md-4 product__item">
                  {/*[*/}
                  <div className="product__wrapper mb-60">
                    <div className="product__thumb">
                      <a href="/product-details/3" className="w-img">
                        <img
                          src="/product_3.EdfpAkfr.png"
                          alt="product-img"
                        />
                        <img
                          className="product__thumb-2"
                          src="/product_1.DXKIe6x_.png"
                          alt="product-img"
                        />
                      </a>
                      <div className="product__action transition-3">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="fal fa-heart" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <i className="fal fa-sliders-h" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productModalId-3"
                        >
                          <i className="fal fa-search" />
                        </a>
                      </div>
                      {/**/}
                    </div>
                    <div className="product__content p-relative">
                      <div className="product__content-inner">
                        <a href="/product-details/3" className="">
                          <span>Set of 2 baskets</span>
                        </a>
                        <div className="product__price transition-3">
                          <span>$230.00</span>
                          <span className="old-price">$250</span>
                        </div>
                      </div>
                      <div className="add-cart p-absolute transition-3">
                        <a href="#">+ Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="productModalId-3"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered product-modal"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="product__modal-wrapper p-relative">
                          <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal">
                              <i className="fal fa-times" />
                            </button>
                          </div>
                          <div className="product__modal-inner">
                            <div className="row">
                              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-box">
                                  <div
                                    className="tab-content mb-20"
                                    id="nav-tabContent"
                                  >
                                    <div className="product__modal-img w-img">
                                      <img
                                        src="/product_3.EdfpAkfr.png"
                                        alt="product_img"
                                      />
                                    </div>
                                  </div>
                                  <nav>
                                    <div className="nav nav-tabs justify-content-between">
                                      {/*[*/}
                                      <button className="nav-item nav-link active">
                                        <img
                                          src="/product_3.EdfpAkfr.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_4.B_CatYpZ.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_5.B2cGuthk.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      {/*]*/}
                                    </div>
                                  </nav>
                                </div>
                              </div>
                              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-content">
                                  <h4>
                                    <a href="/product-details/3" className="">
                                      <span>Set of 2 baskets</span>
                                    </a>
                                  </h4>
                                  <div className="rating rating-shop mb-15">
                                    <ul>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fal fa-star" />
                                        </span>
                                      </li>
                                    </ul>
                                    <span className="rating-no ml-10">
                                      5 rating(s)
                                    </span>
                                  </div>
                                  <div className="product__price-2 mb-25">
                                    <span>$230.00</span>
                                    <span className="old-price">$250</span>
                                  </div>
                                  <div className="product__modal-des mb-30">
                                    <p>
                                      Claritas est etiam processus dynamicus,
                                      qui sequitur mutationem consuetudium
                                      lectorum. Mirum est notare quam littera
                                      gothica, quam nunc putamus parum claram.
                                    </p>
                                  </div>
                                  <div className="product__modal-form">
                                    <form action="#">
                                      <div className="product__modal-input size mb-20">
                                        <label>
                                          Size{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>XXL</option>
                                          <option>M</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-input color mb-20">
                                        <label>
                                          Color{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>Orange</option>
                                          <option>Green</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-required mb-5">
                                        <span>Repuired Fiields *</span>
                                      </div>
                                      <div className="pro-quan-area d-lg-flex align-items-center">
                                        <div className="product-quantity-title">
                                          <label>Quantity</label>
                                        </div>
                                        <div className="product-quantity">
                                          <div className="cart-plus-minus">
                                            <input
                                              type="text"
                                              defaultValue={1}
                                            />
                                            <div className="dec qtybutton">
                                              -
                                            </div>
                                            <div className="inc qtybutton">
                                              +
                                            </div>
                                          </div>
                                        </div>
                                        <div className="pro-cart-btn ml-20">
                                          <a
                                            href="#"
                                            className="os-btn os-btn-black os-btn-3 mr-10"
                                          >
                                            + Add to Cart
                                          </a>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*]*/}
                </div>
                <div className="col-lg-3 col-md-4 product__item">
                  {/*[*/}
                  <div className="product__wrapper mb-60">
                    <div className="product__thumb">
                      <a href="/product-details/4" className="w-img">
                        <img
                          src="/product_4.B_CatYpZ.png"
                          alt="product-img"
                        />
                        <img
                          className="product__thumb-2"
                          src="/product_2.CugT_G4S.png"
                          alt="product-img"
                        />
                      </a>
                      <div className="product__action transition-3">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="fal fa-heart" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <i className="fal fa-sliders-h" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productModalId-4"
                        >
                          <i className="fal fa-search" />
                        </a>
                      </div>
                      <div className="product__sale">
                        <span className="new">new</span>
                        <span className="percent">-8%</span>
                      </div>
                    </div>
                    <div className="product__content p-relative">
                      <div className="product__content-inner">
                        <a href="/product-details/4" className="">
                          <span>Tailored Fit Mesh-Panel</span>
                        </a>
                        <div className="product__price transition-3">
                          <span>$67.00</span>
                          <span className="old-price">$80</span>
                        </div>
                      </div>
                      <div className="add-cart p-absolute transition-3">
                        <a href="#">+ Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="productModalId-4"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered product-modal"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="product__modal-wrapper p-relative">
                          <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal">
                              <i className="fal fa-times" />
                            </button>
                          </div>
                          <div className="product__modal-inner">
                            <div className="row">
                              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-box">
                                  <div
                                    className="tab-content mb-20"
                                    id="nav-tabContent"
                                  >
                                    <div className="product__modal-img w-img">
                                      <img
                                        src="/product_4.B_CatYpZ.png"
                                        alt="product_img"
                                      />
                                    </div>
                                  </div>
                                  <nav>
                                    <div className="nav nav-tabs justify-content-between">
                                      {/*[*/}
                                      <button className="nav-item nav-link active">
                                        <img
                                          src="/product_4.B_CatYpZ.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_5.B2cGuthk.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_6.DlFtNKWc.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      {/*]*/}
                                    </div>
                                  </nav>
                                </div>
                              </div>
                              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-content">
                                  <h4>
                                    <a href="/product-details/4" className="">
                                      <span>Tailored Fit Mesh-Panel</span>
                                    </a>
                                  </h4>
                                  <div className="rating rating-shop mb-15">
                                    <ul>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fal fa-star" />
                                        </span>
                                      </li>
                                    </ul>
                                    <span className="rating-no ml-10">
                                      4 rating(s)
                                    </span>
                                  </div>
                                  <div className="product__price-2 mb-25">
                                    <span>$67.00</span>
                                    <span className="old-price">$80</span>
                                  </div>
                                  <div className="product__modal-des mb-30">
                                    <p>
                                      Claritas est etiam processus dynamicus,
                                      qui sequitur mutationem consuetudium
                                      lectorum. Mirum est notare quam littera
                                      gothica, quam nunc putamus parum claram.
                                    </p>
                                  </div>
                                  <div className="product__modal-form">
                                    <form action="#">
                                      <div className="product__modal-input size mb-20">
                                        <label>
                                          Size{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>L</option>
                                          <option>M</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-input color mb-20">
                                        <label>
                                          Color{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>Black</option>
                                          <option>White</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-required mb-5">
                                        <span>Repuired Fiields *</span>
                                      </div>
                                      <div className="pro-quan-area d-lg-flex align-items-center">
                                        <div className="product-quantity-title">
                                          <label>Quantity</label>
                                        </div>
                                        <div className="product-quantity">
                                          <div className="cart-plus-minus">
                                            <input
                                              type="text"
                                              defaultValue={1}
                                            />
                                            <div className="dec qtybutton">
                                              -
                                            </div>
                                            <div className="inc qtybutton">
                                              +
                                            </div>
                                          </div>
                                        </div>
                                        <div className="pro-cart-btn ml-20">
                                          <a
                                            href="#"
                                            className="os-btn os-btn-black os-btn-3 mr-10"
                                          >
                                            + Add to Cart
                                          </a>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*]*/}
                </div>
                <div className="col-lg-3 col-md-4 product__item">
                  {/*[*/}
                  <div className="product__wrapper mb-60">
                    <div className="product__thumb">
                      <a href="/product-details/5" className="w-img">
                        <img
                          src="/product_5.B2cGuthk.png"
                          alt="product-img"
                        />
                        <img
                          className="product__thumb-2"
                          src="/product_8.CG8z8APh.png"
                          alt="product-img"
                        />
                      </a>
                      <div className="product__action transition-3">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="fal fa-heart" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <i className="fal fa-sliders-h" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productModalId-5"
                        >
                          <i className="fal fa-search" />
                        </a>
                      </div>
                      {/**/}
                    </div>
                    <div className="product__content p-relative">
                      <div className="product__content-inner">
                        <a href="/product-details/5" className="">
                          <span>Rosmo Namino</span>
                        </a>
                        <div className="product__price transition-3">
                          <span>$180.00</span>
                          <span className="old-price">$200</span>
                        </div>
                      </div>
                      <div className="add-cart p-absolute transition-3">
                        <a href="#">+ Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="productModalId-5"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered product-modal"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="product__modal-wrapper p-relative">
                          <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal">
                              <i className="fal fa-times" />
                            </button>
                          </div>
                          <div className="product__modal-inner">
                            <div className="row">
                              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-box">
                                  <div
                                    className="tab-content mb-20"
                                    id="nav-tabContent"
                                  >
                                    <div className="product__modal-img w-img">
                                      <img
                                        src="/product_5.B2cGuthk.png"
                                        alt="product_img"
                                      />
                                    </div>
                                  </div>
                                  <nav>
                                    <div className="nav nav-tabs justify-content-between">
                                      {/*[*/}
                                      <button className="nav-item nav-link active">
                                        <img
                                          src="/product_5.B2cGuthk.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_6.DlFtNKWc.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_7.Cw7GvBea.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      {/*]*/}
                                    </div>
                                  </nav>
                                </div>
                              </div>
                              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-content">
                                  <h4>
                                    <a href="/product-details/5" className="">
                                      <span>Rosmo Namino</span>
                                    </a>
                                  </h4>
                                  <div className="rating rating-shop mb-15">
                                    <ul>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fal fa-star" />
                                        </span>
                                      </li>
                                    </ul>
                                    <span className="rating-no ml-10">
                                      3.5 rating(s)
                                    </span>
                                  </div>
                                  <div className="product__price-2 mb-25">
                                    <span>$180.00</span>
                                    <span className="old-price">$200</span>
                                  </div>
                                  <div className="product__modal-des mb-30">
                                    <p>
                                      Claritas est etiam processus dynamicus,
                                      qui sequitur mutationem consuetudium
                                      lectorum. Mirum est notare quam littera
                                      gothica, quam nunc putamus parum claram.
                                    </p>
                                  </div>
                                  <div className="product__modal-form">
                                    <form action="#">
                                      <div className="product__modal-input size mb-20">
                                        <label>
                                          Size{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>L</option>
                                          <option>XXL</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-input color mb-20">
                                        <label>
                                          Color{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>Red</option>
                                          <option>White</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-required mb-5">
                                        <span>Repuired Fiields *</span>
                                      </div>
                                      <div className="pro-quan-area d-lg-flex align-items-center">
                                        <div className="product-quantity-title">
                                          <label>Quantity</label>
                                        </div>
                                        <div className="product-quantity">
                                          <div className="cart-plus-minus">
                                            <input
                                              type="text"
                                              defaultValue={1}
                                            />
                                            <div className="dec qtybutton">
                                              -
                                            </div>
                                            <div className="inc qtybutton">
                                              +
                                            </div>
                                          </div>
                                        </div>
                                        <div className="pro-cart-btn ml-20">
                                          <a
                                            href="#"
                                            className="os-btn os-btn-black os-btn-3 mr-10"
                                          >
                                            + Add to Cart
                                          </a>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*]*/}
                </div>
                <div className="col-lg-3 col-md-4 product__item">
                  {/*[*/}
                  <div className="product__wrapper mb-60">
                    <div className="product__thumb">
                      <a href="/product-details/6" className="w-img">
                        <img
                          src="/product_6.DlFtNKWc.png"
                          alt="product-img"
                        />
                        <img
                          className="product__thumb-2"
                          src="/product_1.DXKIe6x_.png"
                          alt="product-img"
                        />
                      </a>
                      <div className="product__action transition-3">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="fal fa-heart" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <i className="fal fa-sliders-h" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productModalId-6"
                        >
                          <i className="fal fa-search" />
                        </a>
                      </div>
                      {/**/}
                    </div>
                    <div className="product__content p-relative">
                      <div className="product__content-inner">
                        <a href="/product-details/6" className="">
                          <span>Bottle With Wooden Cork</span>
                        </a>
                        <div className="product__price transition-3">
                          <span>$270.00</span>
                          <span className="old-price">$290</span>
                        </div>
                      </div>
                      <div className="add-cart p-absolute transition-3">
                        <a href="#">+ Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="productModalId-6"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered product-modal"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="product__modal-wrapper p-relative">
                          <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal">
                              <i className="fal fa-times" />
                            </button>
                          </div>
                          <div className="product__modal-inner">
                            <div className="row">
                              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-box">
                                  <div
                                    className="tab-content mb-20"
                                    id="nav-tabContent"
                                  >
                                    <div className="product__modal-img w-img">
                                      <img
                                        src="/product_6.DlFtNKWc.png"
                                        alt="product_img"
                                      />
                                    </div>
                                  </div>
                                  <nav>
                                    <div className="nav nav-tabs justify-content-between">
                                      {/*[*/}
                                      <button className="nav-item nav-link active">
                                        <img
                                          src="/product_6.DlFtNKWc.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_7.Cw7GvBea.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_8.CG8z8APh.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      {/*]*/}
                                    </div>
                                  </nav>
                                </div>
                              </div>
                              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-content">
                                  <h4>
                                    <a href="/product-details/6" className="">
                                      <span>Bottle With Wooden Cork</span>
                                    </a>
                                  </h4>
                                  <div className="rating rating-shop mb-15">
                                    <ul>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fal fa-star" />
                                        </span>
                                      </li>
                                    </ul>
                                    <span className="rating-no ml-10">
                                      3 rating(s)
                                    </span>
                                  </div>
                                  <div className="product__price-2 mb-25">
                                    <span>$270.00</span>
                                    <span className="old-price">$290</span>
                                  </div>
                                  <div className="product__modal-des mb-30">
                                    <p>
                                      Claritas est etiam processus dynamicus,
                                      qui sequitur mutationem consuetudium
                                      lectorum. Mirum est notare quam littera
                                      gothica, quam nunc putamus parum claram.
                                    </p>
                                  </div>
                                  <div className="product__modal-form">
                                    <form action="#">
                                      <div className="product__modal-input size mb-20">
                                        <label>
                                          Size{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>L</option>
                                          <option>XXL</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-input color mb-20">
                                        <label>
                                          Color{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>Red</option>
                                          <option>White</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-required mb-5">
                                        <span>Repuired Fiields *</span>
                                      </div>
                                      <div className="pro-quan-area d-lg-flex align-items-center">
                                        <div className="product-quantity-title">
                                          <label>Quantity</label>
                                        </div>
                                        <div className="product-quantity">
                                          <div className="cart-plus-minus">
                                            <input
                                              type="text"
                                              defaultValue={1}
                                            />
                                            <div className="dec qtybutton">
                                              -
                                            </div>
                                            <div className="inc qtybutton">
                                              +
                                            </div>
                                          </div>
                                        </div>
                                        <div className="pro-cart-btn ml-20">
                                          <a
                                            href="#"
                                            className="os-btn os-btn-black os-btn-3 mr-10"
                                          >
                                            + Add to Cart
                                          </a>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*]*/}
                </div>
                <div className="col-lg-3 col-md-4 product__item">
                  {/*[*/}
                  <div className="product__wrapper mb-60">
                    <div className="product__thumb">
                      <a href="/product-details/7" className="w-img">
                        <img
                          src="/product_7.Cw7GvBea.png"
                          alt="product-img"
                        />
                        <img
                          className="product__thumb-2"
                          src="/product_6.DlFtNKWc.png"
                          alt="product-img"
                        />
                      </a>
                      <div className="product__action transition-3">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="fal fa-heart" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <i className="fal fa-sliders-h" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productModalId-7"
                        >
                          <i className="fal fa-search" />
                        </a>
                      </div>
                      <div className="product__sale">
                        <span className="new">new</span>
                        {/**/}
                      </div>
                    </div>
                    <div className="product__content p-relative">
                      <div className="product__content-inner">
                        <a href="/product-details/7" className="">
                          <span>Hauteville Plywood Chair</span>
                        </a>
                        <div className="product__price transition-3">
                          <span>$320.00</span>
                          <span className="old-price">$325</span>
                        </div>
                      </div>
                      <div className="add-cart p-absolute transition-3">
                        <a href="#">+ Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="productModalId-7"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered product-modal"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="product__modal-wrapper p-relative">
                          <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal">
                              <i className="fal fa-times" />
                            </button>
                          </div>
                          <div className="product__modal-inner">
                            <div className="row">
                              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-box">
                                  <div
                                    className="tab-content mb-20"
                                    id="nav-tabContent"
                                  >
                                    <div className="product__modal-img w-img">
                                      <img
                                        src="/product_7.Cw7GvBea.png"
                                        alt="product_img"
                                      />
                                    </div>
                                  </div>
                                  <nav>
                                    <div className="nav nav-tabs justify-content-between">
                                      {/*[*/}
                                      <button className="nav-item nav-link active">
                                        <img
                                          src="/product_7.Cw7GvBea.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_8.CG8z8APh.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_9.BEuXcrNw.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      {/*]*/}
                                    </div>
                                  </nav>
                                </div>
                              </div>
                              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-content">
                                  <h4>
                                    <a href="/product-details/7" className="">
                                      <span>Hauteville Plywood Chair</span>
                                    </a>
                                  </h4>
                                  <div className="rating rating-shop mb-15">
                                    <ul>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fal fa-star" />
                                        </span>
                                      </li>
                                    </ul>
                                    <span className="rating-no ml-10">
                                      4 rating(s)
                                    </span>
                                  </div>
                                  <div className="product__price-2 mb-25">
                                    <span>$320.00</span>
                                    <span className="old-price">$325</span>
                                  </div>
                                  <div className="product__modal-des mb-30">
                                    <p>
                                      Claritas est etiam processus dynamicus,
                                      qui sequitur mutationem consuetudium
                                      lectorum. Mirum est notare quam littera
                                      gothica, quam nunc putamus parum claram.
                                    </p>
                                  </div>
                                  <div className="product__modal-form">
                                    <form action="#">
                                      <div className="product__modal-input size mb-20">
                                        <label>
                                          Size{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>XXL</option>
                                          <option>M</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-input color mb-20">
                                        <label>
                                          Color{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>Black</option>
                                          <option>Green</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-required mb-5">
                                        <span>Repuired Fiields *</span>
                                      </div>
                                      <div className="pro-quan-area d-lg-flex align-items-center">
                                        <div className="product-quantity-title">
                                          <label>Quantity</label>
                                        </div>
                                        <div className="product-quantity">
                                          <div className="cart-plus-minus">
                                            <input
                                              type="text"
                                              defaultValue={1}
                                            />
                                            <div className="dec qtybutton">
                                              -
                                            </div>
                                            <div className="inc qtybutton">
                                              +
                                            </div>
                                          </div>
                                        </div>
                                        <div className="pro-cart-btn ml-20">
                                          <a
                                            href="#"
                                            className="os-btn os-btn-black os-btn-3 mr-10"
                                          >
                                            + Add to Cart
                                          </a>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*]*/}
                </div>
                <div className="col-lg-3 col-md-4 product__item">
                  {/*[*/}
                  <div className="product__wrapper mb-60">
                    <div className="product__thumb">
                      <a href="/product-details/8" className="w-img">
                        <img
                          src="/product_8.CG8z8APh.png"
                          alt="product-img"
                        />
                        <img
                          className="product__thumb-2"
                          src="/product_4.B_CatYpZ.png"
                          alt="product-img"
                        />
                      </a>
                      <div className="product__action transition-3">
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="fal fa-heart" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Compare"
                        >
                          <i className="fal fa-sliders-h" />
                        </a>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productModalId-8"
                        >
                          <i className="fal fa-search" />
                        </a>
                      </div>
                      {/**/}
                    </div>
                    <div className="product__content p-relative">
                      <div className="product__content-inner">
                        <a href="/product-details/8" className="">
                          <span>Juicy Pendant Lamp</span>
                        </a>
                        <div className="product__price transition-3">
                          <span>$350.00</span>
                          <span className="old-price">$380</span>
                        </div>
                      </div>
                      <div className="add-cart p-absolute transition-3">
                        <a href="#">+ Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="productModalId-8"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered product-modal"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="product__modal-wrapper p-relative">
                          <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal">
                              <i className="fal fa-times" />
                            </button>
                          </div>
                          <div className="product__modal-inner">
                            <div className="row">
                              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-box">
                                  <div
                                    className="tab-content mb-20"
                                    id="nav-tabContent"
                                  >
                                    <div className="product__modal-img w-img">
                                      <img
                                        src="/product_8.CG8z8APh.png"
                                        alt="product_img"
                                      />
                                    </div>
                                  </div>
                                  <nav>
                                    <div className="nav nav-tabs justify-content-between">
                                      {/*[*/}
                                      <button className="nav-item nav-link active">
                                        <img
                                          src="/product_8.CG8z8APh.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_9.BEuXcrNw.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      <button className="nav-item nav-link">
                                        <img
                                          src="/product_10.D2Jo4ErI.png"
                                          alt="image"
                                          style={{ width: 90, height: 90 }}
                                        />
                                      </button>
                                      {/*]*/}
                                    </div>
                                  </nav>
                                </div>
                              </div>
                              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                <div className="product__modal-content">
                                  <h4>
                                    <a href="/product-details/8" className="">
                                      <span>Juicy Pendant Lamp</span>
                                    </a>
                                  </h4>
                                  <div className="rating rating-shop mb-15">
                                    <ul>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fas fa-star" />
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          <i className="fal fa-star" />
                                        </span>
                                      </li>
                                    </ul>
                                    <span className="rating-no ml-10">
                                      4 rating(s)
                                    </span>
                                  </div>
                                  <div className="product__price-2 mb-25">
                                    <span>$350.00</span>
                                    <span className="old-price">$380</span>
                                  </div>
                                  <div className="product__modal-des mb-30">
                                    <p>
                                      Claritas est etiam processus dynamicus,
                                      qui sequitur mutationem consuetudium
                                      lectorum. Mirum est notare quam littera
                                      gothica, quam nunc putamus parum claram.
                                    </p>
                                  </div>
                                  <div className="product__modal-form">
                                    <form action="#">
                                      <div className="product__modal-input size mb-20">
                                        <label>
                                          Size{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>XXL</option>
                                          <option>M</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-input color mb-20">
                                        <label>
                                          Color{" "}
                                          <i className="fas fa-star-of-life" />
                                        </label>
                                        <select>
                                          <option>- Please select -</option>
                                          {/*[*/}
                                          <option>Black</option>
                                          <option>White</option>
                                          {/*]*/}
                                        </select>
                                      </div>
                                      <div className="product__modal-required mb-5">
                                        <span>Repuired Fiields *</span>
                                      </div>
                                      <div className="pro-quan-area d-lg-flex align-items-center">
                                        <div className="product-quantity-title">
                                          <label>Quantity</label>
                                        </div>
                                        <div className="product-quantity">
                                          <div className="cart-plus-minus">
                                            <input
                                              type="text"
                                              defaultValue={1}
                                            />
                                            <div className="dec qtybutton">
                                              -
                                            </div>
                                            <div className="inc qtybutton">
                                              +
                                            </div>
                                          </div>
                                        </div>
                                        <div className="pro-cart-btn ml-20">
                                          <a
                                            href="#"
                                            className="os-btn os-btn-black os-btn-3 mr-10"
                                          >
                                            + Add to Cart
                                          </a>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*]*/}
                </div>
                {/*]*/}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="product__load-btn text-center mt-25">
                  <a href="#" className="os-btn os-btn-3">
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="banner__area-2 pb-60" data-v-57094119="">
          <div className="container-fluid p-0" data-v-57094119="">
            <div className="row g-0" data-v-57094119="">
              {/*[*/}
              <div className="col-xl-6 col-lg-6" data-v-57094119="">
                <div
                  className="banner__item-2 banner-right p-relative mb-30 pr-15"
                  data-v-57094119=""
                >
                  <div className="banner__thumb fix" data-v-57094119="">
                    <a
                      href="/product-details/1"
                      className="w-img"
                      data-v-57094119=""
                    >
                      <img
                        src="/banner-big-1.3MqLkO20.jpg"
                        alt="banner"
                        data-v-57094119=""
                      />
                    </a>
                  </div>
                  <div
                    className="banner__content-2   p-absolute transition-3"
                    data-v-57094119=""
                  >
                    <span data-v-57094119="">Products Accessories</span>
                    <h4 data-v-57094119="">
                      <a
                        href="/product-details/1"
                        className=""
                        data-v-57094119=""
                      >
                        Wooden container Bowl
                      </a>
                    </h4>
                    <p className="sm_desc" data-v-57094119="">
                      Claritas est etiam processus dynamicus, qui sequitur
                      mutationem consuetudium lectorum. Mirum est notare quam
                      littera gothica, quam nunc putamus parum claram.
                    </p>
                    <a
                      href="/product-details/1"
                      className="os-btn os-btn-2"
                      data-v-57094119=""
                    >
                      {" "}
                      buy now / <span data-v-57094119="">$96</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6" data-v-57094119="">
                <div
                  className="banner__item-2 banner-left p-relative mb-30 pl-15"
                  data-v-57094119=""
                >
                  <div className="banner__thumb fix" data-v-57094119="">
                    <a
                      href="/product-details/3"
                      className="w-img"
                      data-v-57094119=""
                    >
                      <img
                        src="/banner-big-2.DCkApKfN.jpg"
                        alt="banner"
                        data-v-57094119=""
                      />
                    </a>
                  </div>
                  <div
                    className="banner__content-2   p-absolute transition-3"
                    data-v-57094119=""
                  >
                    <span data-v-57094119="">Products Clothing</span>
                    <h4 data-v-57094119="">
                      <a
                        href="/product-details/3"
                        className=""
                        data-v-57094119=""
                      >
                        Set of 2 baskets
                      </a>
                    </h4>
                    <p className="sm_desc" data-v-57094119="">
                      Claritas est etiam processus dynamicus, qui sequitur
                      mutationem consuetudium lectorum. Mirum est notare quam
                      littera gothica, quam nunc putamus parum claram.
                    </p>
                    <a
                      href="/product-details/3"
                      className="os-btn os-btn-2"
                      data-v-57094119=""
                    >
                      {" "}
                      buy now / <span data-v-57094119="">$230</span>
                    </a>
                  </div>
                </div>
              </div>
              {/*]*/}
            </div>
          </div>
        </div>
        <section className="sale__area pb-100" data-v-f7d97260="">
          <div className="container" data-v-f7d97260="">
            <div className="row" data-v-f7d97260="">
              <div className="col-xl-12" data-v-f7d97260="">
                <div
                  className="section__title-wrapper text-center mb-55"
                  data-v-f7d97260=""
                >
                  <div className="section__title mb-10" data-v-f7d97260="">
                    <h2 data-v-f7d97260="">Sale Off</h2>
                  </div>
                  <div className="section__sub-title" data-v-f7d97260="">
                    <p data-v-f7d97260="">
                      {" "}
                      Mirum est notare quam littera gothica quam nunc putamus
                      parum claram!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5"
              data-v-f7d97260=""
            >
              {/*[*/}
              <div className="col" data-v-f7d97260="">
                {/*[*/}
                <div className="product__wrapper mb-60">
                  <div className="product__thumb">
                    <a href="/product-details/4" className="w-img">
                      <img
                        src="/product_4.B_CatYpZ.png"
                        alt="product-img"
                      />
                      <img
                        className="product__thumb-2"
                        src="/product_2.CugT_G4S.png"
                        alt="product-img"
                      />
                    </a>
                    <div className="product__action transition-3">
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add to Wishlist"
                      >
                        <i className="fal fa-heart" />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i className="fal fa-sliders-h" />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId-4"
                      >
                        <i className="fal fa-search" />
                      </a>
                    </div>
                    <div className="product__sale">
                      <span className="new">new</span>
                      <span className="percent">-8%</span>
                    </div>
                  </div>
                  <div className="product__content p-relative">
                    <div className="product__content-inner">
                      <a href="/product-details/4" className="">
                        <span>Tailored Fit Mesh-Panel</span>
                      </a>
                      <div className="product__price transition-3">
                        <span>$67.00</span>
                        <span className="old-price">$80</span>
                      </div>
                    </div>
                    <div className="add-cart p-absolute transition-3">
                      <a href="#">+ Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="productModalId-4"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered product-modal"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="product__modal-wrapper p-relative">
                        <div className="product__modal-close p-absolute">
                          <button data-bs-dismiss="modal">
                            <i className="fal fa-times" />
                          </button>
                        </div>
                        <div className="product__modal-inner">
                          <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                              <div className="product__modal-box">
                                <div
                                  className="tab-content mb-20"
                                  id="nav-tabContent"
                                >
                                  <div className="product__modal-img w-img">
                                    <img
                                      src="/product_4.B_CatYpZ.png"
                                      alt="product_img"
                                    />
                                  </div>
                                </div>
                                <nav>
                                  <div className="nav nav-tabs justify-content-between">
                                    {/*[*/}
                                    <button className="nav-item nav-link active">
                                      <img
                                        src="/product_4.B_CatYpZ.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    <button className="nav-item nav-link">
                                      <img
                                        src="/product_5.B2cGuthk.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    <button className="nav-item nav-link">
                                      <img
                                        src="/product_6.DlFtNKWc.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    {/*]*/}
                                  </div>
                                </nav>
                              </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                              <div className="product__modal-content">
                                <h4>
                                  <a href="/product-details/4" className="">
                                    <span>Tailored Fit Mesh-Panel</span>
                                  </a>
                                </h4>
                                <div className="rating rating-shop mb-15">
                                  <ul>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fal fa-star" />
                                      </span>
                                    </li>
                                  </ul>
                                  <span className="rating-no ml-10">
                                    4 rating(s){" "}
                                  </span>
                                </div>
                                <div className="product__price-2 mb-25">
                                  <span>$67.00</span>
                                  <span className="old-price">$80</span>
                                </div>
                                <div className="product__modal-des mb-30">
                                  <p>
                                    Claritas est etiam processus dynamicus, qui
                                    sequitur mutationem consuetudium lectorum.
                                    Mirum est notare quam littera gothica, quam
                                    nunc putamus parum claram.
                                  </p>
                                </div>
                                <div className="product__modal-form">
                                  <form action="#">
                                    <div className="product__modal-input size mb-20">
                                      <label>
                                        Size{" "}
                                        <i className="fas fa-star-of-life" />
                                      </label>
                                      <select>
                                        <option>- Please select -</option>
                                        {/*[*/}
                                        <option>L</option>
                                        <option>M</option>
                                        {/*]*/}
                                      </select>
                                    </div>
                                    <div className="product__modal-input color mb-20">
                                      <label>
                                        Color{" "}
                                        <i className="fas fa-star-of-life" />
                                      </label>
                                      <select>
                                        <option>- Please select -</option>
                                        {/*[*/}
                                        <option>Black</option>
                                        <option>White</option>
                                        {/*]*/}
                                      </select>
                                    </div>
                                    <div className="product__modal-required mb-5">
                                      <span>Repuired Fiields *</span>
                                    </div>
                                    <div className="pro-quan-area d-lg-flex align-items-center">
                                      <div className="product-quantity-title">
                                        <label>Quantity</label>
                                      </div>
                                      <div className="product-quantity">
                                        <div className="cart-plus-minus">
                                          <input type="text" defaultValue={1} />
                                          <div className="dec qtybutton">-</div>
                                          <div className="inc qtybutton">+</div>
                                        </div>
                                      </div>
                                      <div className="pro-cart-btn ml-20">
                                        <a
                                          href="#"
                                          className="os-btn os-btn-black os-btn-3 mr-10"
                                        >
                                          + Add to Cart
                                        </a>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*]*/}
              </div>
              <div className="col" data-v-f7d97260="">
                {/*[*/}
                <div className="product__wrapper mb-60">
                  <div className="product__thumb">
                    <a href="/product-details/9" className="w-img">
                      <img
                        src="/product_9.BEuXcrNw.png"
                        alt="product-img"
                      />
                      <img
                        className="product__thumb-2"
                        src="/product_7.Cw7GvBea.png"
                        alt="product-img"
                      />
                    </a>
                    <div className="product__action transition-3">
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add to Wishlist"
                      >
                        <i className="fal fa-heart" />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i className="fal fa-sliders-h" />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId-9"
                      >
                        <i className="fal fa-search" />
                      </a>
                    </div>
                    <div className="product__sale">
                      <span className="new">new</span>
                      <span className="percent">-12%</span>
                    </div>
                  </div>
                  <div className="product__content p-relative">
                    <div className="product__content-inner">
                      <a href="/product-details/9" className="">
                        <span>Big sale canvas basket</span>
                      </a>
                      <div className="product__price transition-3">
                        <span>$400.00</span>
                        {/**/}
                      </div>
                    </div>
                    <div className="add-cart p-absolute transition-3">
                      <a href="#">+ Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="productModalId-9"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered product-modal"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="product__modal-wrapper p-relative">
                        <div className="product__modal-close p-absolute">
                          <button data-bs-dismiss="modal">
                            <i className="fal fa-times" />
                          </button>
                        </div>
                        <div className="product__modal-inner">
                          <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                              <div className="product__modal-box">
                                <div
                                  className="tab-content mb-20"
                                  id="nav-tabContent"
                                >
                                  <div className="product__modal-img w-img">
                                    <img
                                      src="/product_9.BEuXcrNw.png"
                                      alt="product_img"
                                    />
                                  </div>
                                </div>
                                <nav>
                                  <div className="nav nav-tabs justify-content-between">
                                    {/*[*/}
                                    <button className="nav-item nav-link active">
                                      <img
                                        src="/product_9.BEuXcrNw.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    <button className="nav-item nav-link">
                                      <img
                                        src="/product_10.D2Jo4ErI.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    <button className="nav-item nav-link">
                                      <img
                                        src="/product_11.B58p0EoY.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    {/*]*/}
                                  </div>
                                </nav>
                              </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                              <div className="product__modal-content">
                                <h4>
                                  <a href="/product-details/9" className="">
                                    <span>Big sale canvas basket</span>
                                  </a>
                                </h4>
                                <div className="rating rating-shop mb-15">
                                  <ul>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fal fa-star" />
                                      </span>
                                    </li>
                                  </ul>
                                  <span className="rating-no ml-10">
                                    4 rating(s){" "}
                                  </span>
                                </div>
                                <div className="product__price-2 mb-25">
                                  <span>$400.00</span>
                                  {/**/}
                                </div>
                                <div className="product__modal-des mb-30">
                                  <p>
                                    Claritas est etiam processus dynamicus, qui
                                    sequitur mutationem consuetudium lectorum.
                                    Mirum est notare quam littera gothica, quam
                                    nunc putamus parum claram.
                                  </p>
                                </div>
                                <div className="product__modal-form">
                                  <form action="#">
                                    <div className="product__modal-input size mb-20">
                                      <label>
                                        Size{" "}
                                        <i className="fas fa-star-of-life" />
                                      </label>
                                      <select>
                                        <option>- Please select -</option>
                                        {/*[*/}
                                        <option>XL</option>
                                        <option>L</option>
                                        {/*]*/}
                                      </select>
                                    </div>
                                    <div className="product__modal-input color mb-20">
                                      <label>
                                        Color{" "}
                                        <i className="fas fa-star-of-life" />
                                      </label>
                                      <select>
                                        <option>- Please select -</option>
                                        {/*[*/}
                                        <option>Gray</option>
                                        <option>White</option>
                                        {/*]*/}
                                      </select>
                                    </div>
                                    <div className="product__modal-required mb-5">
                                      <span>Repuired Fiields *</span>
                                    </div>
                                    <div className="pro-quan-area d-lg-flex align-items-center">
                                      <div className="product-quantity-title">
                                        <label>Quantity</label>
                                      </div>
                                      <div className="product-quantity">
                                        <div className="cart-plus-minus">
                                          <input type="text" defaultValue={1} />
                                          <div className="dec qtybutton">-</div>
                                          <div className="inc qtybutton">+</div>
                                        </div>
                                      </div>
                                      <div className="pro-cart-btn ml-20">
                                        <a
                                          href="#"
                                          className="os-btn os-btn-black os-btn-3 mr-10"
                                        >
                                          + Add to Cart
                                        </a>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*]*/}
              </div>
              <div className="col" data-v-f7d97260="">
                {/*[*/}
                <div className="product__wrapper mb-60">
                  <div className="product__thumb">
                    <a href="/product-details/10" className="w-img">
                      <img
                        src="/product_10.D2Jo4ErI.png"
                        alt="product-img"
                      />
                      <img
                        className="product__thumb-2"
                        src="/product_8.CG8z8APh.png"
                        alt="product-img"
                      />
                    </a>
                    <div className="product__action transition-3">
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add to Wishlist"
                      >
                        <i className="fal fa-heart" />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i className="fal fa-sliders-h" />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId-10"
                      >
                        <i className="fal fa-search" />
                      </a>
                    </div>
                    <div className="product__sale">
                      <span className="new">new</span>
                      <span className="percent">-25%</span>
                    </div>
                  </div>
                  <div className="product__content p-relative">
                    <div className="product__content-inner">
                      <a href="/product-details/10" className="">
                        <span>Haggar Men's Heather</span>
                      </a>
                      <div className="product__price transition-3">
                        <span>$420.00</span>
                        {/**/}
                      </div>
                    </div>
                    <div className="add-cart p-absolute transition-3">
                      <a href="#">+ Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="productModalId-10"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered product-modal"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="product__modal-wrapper p-relative">
                        <div className="product__modal-close p-absolute">
                          <button data-bs-dismiss="modal">
                            <i className="fal fa-times" />
                          </button>
                        </div>
                        <div className="product__modal-inner">
                          <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                              <div className="product__modal-box">
                                <div
                                  className="tab-content mb-20"
                                  id="nav-tabContent"
                                >
                                  <div className="product__modal-img w-img">
                                    <img
                                      src="/product_10.D2Jo4ErI.png"
                                      alt="product_img"
                                    />
                                  </div>
                                </div>
                                <nav>
                                  <div className="nav nav-tabs justify-content-between">
                                    {/*[*/}
                                    <button className="nav-item nav-link active">
                                      <img
                                        src="/product_10.D2Jo4ErI.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    <button className="nav-item nav-link">
                                      <img
                                        src="/product_11.B58p0EoY.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    <button className="nav-item nav-link">
                                      <img
                                        src="/product_12.BXz9cOjL.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    {/*]*/}
                                  </div>
                                </nav>
                              </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                              <div className="product__modal-content">
                                <h4>
                                  <a href="/product-details/10" className="">
                                    <span>Haggar Men's Heather</span>
                                  </a>
                                </h4>
                                <div className="rating rating-shop mb-15">
                                  <ul>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fal fa-star" />
                                      </span>
                                    </li>
                                  </ul>
                                  <span className="rating-no ml-10">
                                    4 rating(s){" "}
                                  </span>
                                </div>
                                <div className="product__price-2 mb-25">
                                  <span>$420.00</span>
                                  {/**/}
                                </div>
                                <div className="product__modal-des mb-30">
                                  <p>
                                    Claritas est etiam processus dynamicus, qui
                                    sequitur mutationem consuetudium lectorum.
                                    Mirum est notare quam littera gothica, quam
                                    nunc putamus parum claram.
                                  </p>
                                </div>
                                <div className="product__modal-form">
                                  <form action="#">
                                    <div className="product__modal-input size mb-20">
                                      <label>
                                        Size{" "}
                                        <i className="fas fa-star-of-life" />
                                      </label>
                                      <select>
                                        <option>- Please select -</option>
                                        {/*[*/}
                                        <option>L</option>
                                        <option>XL</option>
                                        {/*]*/}
                                      </select>
                                    </div>
                                    <div className="product__modal-input color mb-20">
                                      <label>
                                        Color{" "}
                                        <i className="fas fa-star-of-life" />
                                      </label>
                                      <select>
                                        <option>- Please select -</option>
                                        {/*[*/}
                                        <option>Gray</option>
                                        <option>White</option>
                                        {/*]*/}
                                      </select>
                                    </div>
                                    <div className="product__modal-required mb-5">
                                      <span>Repuired Fiields *</span>
                                    </div>
                                    <div className="pro-quan-area d-lg-flex align-items-center">
                                      <div className="product-quantity-title">
                                        <label>Quantity</label>
                                      </div>
                                      <div className="product-quantity">
                                        <div className="cart-plus-minus">
                                          <input type="text" defaultValue={1} />
                                          <div className="dec qtybutton">-</div>
                                          <div className="inc qtybutton">+</div>
                                        </div>
                                      </div>
                                      <div className="pro-cart-btn ml-20">
                                        <a
                                          href="#"
                                          className="os-btn os-btn-black os-btn-3 mr-10"
                                        >
                                          + Add to Cart
                                        </a>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*]*/}
              </div>
              <div className="col" data-v-f7d97260="">
                {/*[*/}
                <div className="product__wrapper mb-60">
                  <div className="product__thumb">
                    <a href="/product-details/11" className="w-img">
                      <img
                        src="/product_11.B58p0EoY.png"
                        alt="product-img"
                      />
                      <img
                        className="product__thumb-2"
                        src="/product_9.BEuXcrNw.png"
                        alt="product-img"
                      />
                    </a>
                    <div className="product__action transition-3">
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add to Wishlist"
                      >
                        <i className="fal fa-heart" />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i className="fal fa-sliders-h" />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId-11"
                      >
                        <i className="fal fa-search" />
                      </a>
                    </div>
                    <div className="product__sale">
                      <span className="new">new</span>
                      <span className="percent">-16%</span>
                    </div>
                  </div>
                  <div className="product__content p-relative">
                    <div className="product__content-inner">
                      <a href="/product-details/11" className="">
                        <span>Cotton Twill Suit</span>
                      </a>
                      <div className="product__price transition-3">
                        <span>$450.00</span>
                        {/**/}
                      </div>
                    </div>
                    <div className="add-cart p-absolute transition-3">
                      <a href="#">+ Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="productModalId-11"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered product-modal"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="product__modal-wrapper p-relative">
                        <div className="product__modal-close p-absolute">
                          <button data-bs-dismiss="modal">
                            <i className="fal fa-times" />
                          </button>
                        </div>
                        <div className="product__modal-inner">
                          <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                              <div className="product__modal-box">
                                <div
                                  className="tab-content mb-20"
                                  id="nav-tabContent"
                                >
                                  <div className="product__modal-img w-img">
                                    <img
                                      src="/product_11.B58p0EoY.png"
                                      alt="product_img"
                                    />
                                  </div>
                                </div>
                                <nav>
                                  <div className="nav nav-tabs justify-content-between">
                                    {/*[*/}
                                    <button className="nav-item nav-link active">
                                      <img
                                        src="/product_11.B58p0EoY.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    <button className="nav-item nav-link">
                                      <img
                                        src="/product_12.BXz9cOjL.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    <button className="nav-item nav-link">
                                      <img
                                        src="/product_13.CY4466X2.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    {/*]*/}
                                  </div>
                                </nav>
                              </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                              <div className="product__modal-content">
                                <h4>
                                  <a href="/product-details/11" className="">
                                    <span>Cotton Twill Suit</span>
                                  </a>
                                </h4>
                                <div className="rating rating-shop mb-15">
                                  <ul>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fal fa-star" />
                                      </span>
                                    </li>
                                  </ul>
                                  <span className="rating-no ml-10">
                                    4 rating(s){" "}
                                  </span>
                                </div>
                                <div className="product__price-2 mb-25">
                                  <span>$450.00</span>
                                  {/**/}
                                </div>
                                <div className="product__modal-des mb-30">
                                  <p>
                                    Claritas est etiam processus dynamicus, qui
                                    sequitur mutationem consuetudium lectorum.
                                    Mirum est notare quam littera gothica, quam
                                    nunc putamus parum claram.
                                  </p>
                                </div>
                                <div className="product__modal-form">
                                  <form action="#">
                                    <div className="product__modal-input size mb-20">
                                      <label>
                                        Size{" "}
                                        <i className="fas fa-star-of-life" />
                                      </label>
                                      <select>
                                        <option>- Please select -</option>
                                        {/*[*/}
                                        <option>M</option>
                                        <option>XXL</option>
                                        {/*]*/}
                                      </select>
                                    </div>
                                    <div className="product__modal-input color mb-20">
                                      <label>
                                        Color{" "}
                                        <i className="fas fa-star-of-life" />
                                      </label>
                                      <select>
                                        <option>- Please select -</option>
                                        {/*[*/}
                                        <option>Red</option>
                                        <option>Orange</option>
                                        {/*]*/}
                                      </select>
                                    </div>
                                    <div className="product__modal-required mb-5">
                                      <span>Repuired Fiields *</span>
                                    </div>
                                    <div className="pro-quan-area d-lg-flex align-items-center">
                                      <div className="product-quantity-title">
                                        <label>Quantity</label>
                                      </div>
                                      <div className="product-quantity">
                                        <div className="cart-plus-minus">
                                          <input type="text" defaultValue={1} />
                                          <div className="dec qtybutton">-</div>
                                          <div className="inc qtybutton">+</div>
                                        </div>
                                      </div>
                                      <div className="pro-cart-btn ml-20">
                                        <a
                                          href="#"
                                          className="os-btn os-btn-black os-btn-3 mr-10"
                                        >
                                          + Add to Cart
                                        </a>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*]*/}
              </div>
              <div className="col" data-v-f7d97260="">
                {/*[*/}
                <div className="product__wrapper mb-60">
                  <div className="product__thumb">
                    <a href="/product-details/12" className="w-img">
                      <img
                        src="/product_12.BXz9cOjL.png"
                        alt="product-img"
                      />
                      <img
                        className="product__thumb-2"
                        src="/product_10.D2Jo4ErI.png"
                        alt="product-img"
                      />
                    </a>
                    <div className="product__action transition-3">
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add to Wishlist"
                      >
                        <i className="fal fa-heart" />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Compare"
                      >
                        <i className="fal fa-sliders-h" />
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId-12"
                      >
                        <i className="fal fa-search" />
                      </a>
                    </div>
                    <div className="product__sale">
                      <span className="new">new</span>
                      <span className="percent">-8%</span>
                    </div>
                  </div>
                  <div className="product__content p-relative">
                    <div className="product__content-inner">
                      <a href="/product-details/12" className="">
                        <span>Big sale canvas basket</span>
                      </a>
                      <div className="product__price transition-3">
                        <span>$480.00</span>
                        {/**/}
                      </div>
                    </div>
                    <div className="add-cart p-absolute transition-3">
                      <a href="#">+ Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="productModalId-12"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered product-modal"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="product__modal-wrapper p-relative">
                        <div className="product__modal-close p-absolute">
                          <button data-bs-dismiss="modal">
                            <i className="fal fa-times" />
                          </button>
                        </div>
                        <div className="product__modal-inner">
                          <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                              <div className="product__modal-box">
                                <div
                                  className="tab-content mb-20"
                                  id="nav-tabContent"
                                >
                                  <div className="product__modal-img w-img">
                                    <img
                                      src="/product_12.BXz9cOjL.png"
                                      alt="product_img"
                                    />
                                  </div>
                                </div>
                                <nav>
                                  <div className="nav nav-tabs justify-content-between">
                                    {/*[*/}
                                    <button className="nav-item nav-link active">
                                      <img
                                        src="/product_12.BXz9cOjL.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    <button className="nav-item nav-link">
                                      <img
                                        src="/product_13.CY4466X2.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    <button className="nav-item nav-link">
                                      <img
                                        src="/product_14.DNgcn5Av.png"
                                        alt="image"
                                        style={{ width: 90, height: 90 }}
                                      />
                                    </button>
                                    {/*]*/}
                                  </div>
                                </nav>
                              </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                              <div className="product__modal-content">
                                <h4>
                                  <a href="/product-details/12" className="">
                                    <span>Big sale canvas basket</span>
                                  </a>
                                </h4>
                                <div className="rating rating-shop mb-15">
                                  <ul>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fas fa-star" />
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <i className="fal fa-star" />
                                      </span>
                                    </li>
                                  </ul>
                                  <span className="rating-no ml-10">
                                    4 rating(s){" "}
                                  </span>
                                </div>
                                <div className="product__price-2 mb-25">
                                  <span>$480.00</span>
                                  {/**/}
                                </div>
                                <div className="product__modal-des mb-30">
                                  <p>
                                    Claritas est etiam processus dynamicus, qui
                                    sequitur mutationem consuetudium lectorum.
                                    Mirum est notare quam littera gothica, quam
                                    nunc putamus parum claram.
                                  </p>
                                </div>
                                <div className="product__modal-form">
                                  <form action="#">
                                    <div className="product__modal-input size mb-20">
                                      <label>
                                        Size{" "}
                                        <i className="fas fa-star-of-life" />
                                      </label>
                                      <select>
                                        <option>- Please select -</option>
                                        {/*[*/}
                                        <option>L</option>
                                        <option>XL</option>
                                        {/*]*/}
                                      </select>
                                    </div>
                                    <div className="product__modal-input color mb-20">
                                      <label>
                                        Color{" "}
                                        <i className="fas fa-star-of-life" />
                                      </label>
                                      <select>
                                        <option>- Please select -</option>
                                        {/*[*/}
                                        <option>Green</option>
                                        <option>Orange</option>
                                        {/*]*/}
                                      </select>
                                    </div>
                                    <div className="product__modal-required mb-5">
                                      <span>Repuired Fiields *</span>
                                    </div>
                                    <div className="pro-quan-area d-lg-flex align-items-center">
                                      <div className="product-quantity-title">
                                        <label>Quantity</label>
                                      </div>
                                      <div className="product-quantity">
                                        <div className="cart-plus-minus">
                                          <input type="text" defaultValue={1} />
                                          <div className="dec qtybutton">-</div>
                                          <div className="inc qtybutton">+</div>
                                        </div>
                                      </div>
                                      <div className="pro-cart-btn ml-20">
                                        <a
                                          href="#"
                                          className="os-btn os-btn-black os-btn-3 mr-10"
                                        >
                                          + Add to Cart
                                        </a>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*]*/}
              </div>
              {/*]*/}
            </div>
          </div>
        </section>
        <section className="client__area pt-15 pb-140">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <section
                  className="carousel client__slider  text-center"
                  dir="ltr"
                  aria-label="Gallery"
                  tabIndex={0}
                >
                  <div className="carousel__viewport">
                    <ol
                      className="carousel__track"
                      style={{
                        transform: "translateX(446.4px)",
                        transition: "all",
                        margin: "0px -1339.2px",
                        width: "100%",
                      }}
                    >
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel_slide--clone client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="data:image/jpeg;base64,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F/wV/8QAKhABAAEEAgAFAwQDAAAAAAAAAREAITFBUWFAcYHB8CCRsRBgodFQ4fH/2gAIAQEAAT8h/ZJjIjTJwE/rj3JgkYceKKmrEvH4O6VYnS7ix6Tt9isWslCQFzNQMl8TMDrnqahQAkh0Jw91J3YCQ/D4mfMlyH1/VLuTmJmCXt60DXckPcedNInuXkJsjbj4xC0luRtff8tJ1Ny24nPhen2Cglot4UkJJDOLw/RBfn+/9Jt/1QaR3qqD8GjvBfYs6m7H8jWSIqzOub218xH0BYw4izJljN+KROBIngRKI4BCErPRYGZLeLX19AX12yPMOJ3M5oAAEBqgWpY4OSlcXQIu3cwbI39EeiqCbETfcN6AgAWA/wAes6+oUoRpxjUnSFk2duKy7wCKI6VDCpwr2BNq9Sk/hIEJLvNEuxkRYJadqKmaXFvKnObJwitEzy+hUDox6CbwsJaTUnEsLZtJ96c88oziB81VxBLKlt/HpTIG2HHntNra0i3onwQ9L8mFro13WEUZDitc7WnPbpDZicWaOgSx2IBjypZNr4igWgWtRPR4AESy9tOoMIOy7eH7FKAMOYm7AKSMNEBsMzG8gtVF/emOaD5Zqe7SISMRbL/HdZq4/OWQy3YuxQCUrL28LJ3S69QbBdDPFABGR2VYRJDDhqc3zErNepC+/iVyHBDE0WIMrcVJcnEROKEBfEpEsy1bCgJZ9NRQ1TpeZqGJa4OEzFcMxhWQjL12sVIHTIariwS3fy+KjSwknKGviXvXxL3pEsxiN7Ex4s0xQgh6lfEvaviXtX/WlKj9lf/aAAwDAQACAAMAAAAQ8888888888888888888880sc8888888888w8MMk8488888888s88sc8s88888888gAIoUUA8888888888sAk888888888888sM0888888888888888888888/8QAFBEBAAAAAAAAAAAAAAAAAAAAYP/aAAgBAwEBPxBx/8QAFBEBAAAAAAAAAAAAAAAAAAAAYP/aAAgBAgEBPxBx/8QAJBABAQEAAwACAgICAwAAAAAAAREhADFBQFFhcRAgYIFQodH/2gAIAQEAAT8Q/wAJZ3M7F1CrHDc/hYV65YhEe1lUnY/K3lIFEu9BSr/Vc4VMn9UqC72NU6AAwePwXoiGvvfScp8/1z0NVGfZ+8MLdikwCz6JsiIcYV2s6UHTxiKMY58k+m4QeRV6MKsYeghT5PFmZdC9n/XlGm5tbkDFxTT7OUvVRVUtKGyZkgcgYrzGmSmgpWHRvK5jHTAgFUOgAAACfFsGRhbSQ1gPDBpKFdlrhET3q/zrMZoi9+u7wIdoWuFC1Gq5ZPOT44GFctU5I+2frdwDSMSIw/fKI+pe/wBJIF7OYGErE/BIoJROuR0fgiOlGqkH0inGBAJB4AD+dKAPP6HwpCtimJY4JpuBwwQIAgHDz5FQkQ9EU/3w8kL5FsrI8FGj/T9JhJv4MGDA97wMCgEA+j/j3zJlIAmiKI/jipo3evYagSUYzOPISywKK0xWXebvaPox11C6hCQOYJZsUnsQTXcLXeCGZgCoEWVWfl5b1YIYSimGOUOAuE4mg8MNkRUVB4+HskvQjBA77DvjXpgpehC+AM9cF/ZUAIMH6K7i3jd41OloS7G+0u15U1ff8yrp1P0HnDCnKqMNl8+D3w6JluxINk7IdTeO9JiNOlE6cvnFf1mDulQtaFhu8LMZd9itNVl6nKXWatCtoLp/5ydiKkzKCA9b+ODiZXWC5LsEFYdigqdbRyLNIeU4Hyw42IvprDzvw9M8aJ7aCBD0s+xYFFHZdWjQWu3eE5hXqiI12ngrR53C9Kwlfn4ogWBRMn3O5xcQB0lHdXsjnAbGolE+7zvzExh2P08AJJ4NMI+3OJBiyEc/c78fkxaoZoiDI4gRI8AynS/9ICNgUXD9RHymmSIJrb5ObjlWcxCqCDhHVFpkWQQErcA7YQXK72Ww1dR5qnhK/JrpuLCgEsol/D9fyOHHCRMRqgmWM/T8vZfKOrBZC+fylSh9R+VWYlle/v8Awr//2Q=="
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel_slide--clone client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="/client-2.RJAGLL8M.jpg"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel_slide--clone client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="data:image/jpeg;base64,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"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel_slide--clone client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="/client-4.14mIfKHt.jpg"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel_slide--clone carousel__slide--visible client__thumb"
                        aria-hidden="false"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="data:image/jpeg;base64,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"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel_slide--clone carousel__slide--visible carousel__slide--prev client__thumb"
                        aria-hidden="false"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="/client-2.RJAGLL8M.jpg"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel__slide--visible carousel__slide--active client__thumb"
                        aria-hidden="false"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2OTApLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8IAEQgAfQDwAwEiAAIRAQMRAf/EABwAAQACAgMBAAAAAAAAAAAAAAAFBgQIAgMHAf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdqQAAAAAAAAAAAAAAAAAAAAMOD1hNxlcjC15eoezhYAAAAAAAAAAGPTy8ArsVd6sU3IwcQttl4ToAUG+HIAAAAAAAHTVbgAHm3pI+cOwedeigBSrp9AAAAAAAAGDrls3r4XSr2mCLP0ZVFLXGTcUYc/gzZ5d6XWbeeJ7Sa67CGQAAAAAAAAADhxrsaXj5wqZblHsBNgAAAAAAAAAAARMtgkSzB2yeHmAAAAAAAAAAAAAAAAAAAAAH//xAAmEAACAgIABgICAwAAAAAAAAAEBQMGAQIAEBESFUATFgdgFDFQ/9oACAEBAAEFAv0kguETmMVEZF7L2xC1+BoyYWo2vFxmJbkVGPX0zo+pGpngr0b2HaIZ8LVq1iuDvSYqgZW947KRaKppY9lCgdKH6hE+gsC6zZML52J9FXwKvXNzZbGjkr5KVvC8A5mWv+MRrtjbX0JotCIl9ZgXk83dO8y2/riSPWWOtVL6+TzLqoxZOMdMf5x0e0wU9kLjrSoqc25tojXlnpDGdjX6AXOYkv5swK2vmGWl1+QDpxS6fB3YYkkTv6qzMYVhYQeZPr17fRio5UjGjIyk4zCmTOLFTFRKlKkEs6AW6KC3SwGvGVyw3ZIc0KrWGke01L2ZNa+IfDXDUFgb4HizBB6nfr3fLp0xnrxjbGeO7HTv17vYGBkjZ6ppN1OvXG3jp5cTp55QtwflZ+yW2CAk+yquPsqrgNmIw9ucEYrbwwHHhgOBw4BP0r//xAAUEQEAAAAAAAAAAAAAAAAAAABg/9oACAEDAQE/AXH/xAAUEQEAAAAAAAAAAAAAAAAAAABg/9oACAECAQE/AXH/xAA7EAACAQIDBAUICQUBAAAAAAABAgMEEQASEwUhMUEiI0BRYRAVIDJCcYGTFDQ1UmCRsdHwJFBiwdLh/9oACAEBAAY/AvwSmrIsedgi5ja58upC6yJci6m/ag85Jkb1Il4thpNN5cgusUQuI1/nPFJJFI0o0wCXN2vzviqDyMjSDImQ72buwVeJ1Rt8lPKMt/HGtTNe3rI3Fe06NQN43pIvFcTLqCaSR75wtt3IfrgVlK65ag9dQ39f/Ne7HnSplSWWM2ipRwp/H3+OKZtXQePczZb3XC09Mtl4knix7z2WSaQ5Y41LMfDEEU1FLSJVAtTSMwOoLX+HoGZ+lId0cf3jjzztbrqmXpxxtwUcjjz3snq8p66EcLfthKmE8dzLzU93oT5KKWejpmyVFSpHQPgOeARvB7C8ci543GVlPMYim156jRBWBJnuIh4ehBVyVTGJSM0DjdbuHkZHGZGFiDzxPKKt3V9wiHq25X8fQlkM08cU5DTU8b2SQ+OLDh/b50RzG7IQrLxBtjZlqqXX13ztn6RA5H88bR65zSQxKFjzdG5A5fnjaFKm0HpIqWIMoUm3AfvgPO5kkRmTO3E4d55nmfWIzSNc8BileGaSD+oAYxtY2scSV+tJT7PgOVIFf1j442akdZLRxvmztGT4b93HE1Sm2ZdqQnq7SKwyn4nG1Ubbcmz0huY1LmzeA341362qXOELe3bhjP56am2nq20KklVP+vhgZuPO3Ytp60Q+jlZDTnN7R9XFS1YmSeVh7V9wxtCebNDTso0nRh0jYDDwVUenKZGNr3w1PT0UDoXzdYw/6xTRU8eeQShnGa1txwJNnx6uzZwFkQvvT+ccbPlpKdKjRuWVyLcuOJY62gpaGC11FMLXb88bYlqY8ok300mfnj6JOopKpFaON1sfc2IqWqpYGZG+um2Yj393wwkZYuVFsx59ly3GbuxfOtuHHyGxvbF7i3fjLmGbu7TtCR0GnOQVYW+6o9/LDUrwxFRIpiR7Gyi3E23njgrlAQerbG0uqSnebopkbcwHf4m5vjIEjW8jsIb9GO4sCPdxxDOyJlhTov7RY/8An69qCVNVFA5FwrvY2x9o03zBj7RpvmDDfRqmKfLx02vbtYM1PFMRwMiA4+o03ylx9RpvlLg6EEcN+OmoF/wV/8QAKhABAAEEAgAFAwQDAAAAAAAAAREAITFBUWFAcYHB8CCRsRBgodFQ4fH/2gAIAQEAAT8h/ZJjIjTJwE/rj3JgkYceKKmrEvH4O6VYnS7ix6Tt9isWslCQFzNQMl8TMDrnqahQAkh0Jw91J3YCQ/D4mfMlyH1/VLuTmJmCXt60DXckPcedNInuXkJsjbj4xC0luRtff8tJ1Ny24nPhen2Cglot4UkJJDOLw/RBfn+/9Jt/1QaR3qqD8GjvBfYs6m7H8jWSIqzOub218xH0BYw4izJljN+KROBIngRKI4BCErPRYGZLeLX19AX12yPMOJ3M5oAAEBqgWpY4OSlcXQIu3cwbI39EeiqCbETfcN6AgAWA/wAes6+oUoRpxjUnSFk2duKy7wCKI6VDCpwr2BNq9Sk/hIEJLvNEuxkRYJadqKmaXFvKnObJwitEzy+hUDox6CbwsJaTUnEsLZtJ96c88oziB81VxBLKlt/HpTIG2HHntNra0i3onwQ9L8mFro13WEUZDitc7WnPbpDZicWaOgSx2IBjypZNr4igWgWtRPR4AESy9tOoMIOy7eH7FKAMOYm7AKSMNEBsMzG8gtVF/emOaD5Zqe7SISMRbL/HdZq4/OWQy3YuxQCUrL28LJ3S69QbBdDPFABGR2VYRJDDhqc3zErNepC+/iVyHBDE0WIMrcVJcnEROKEBfEpEsy1bCgJZ9NRQ1TpeZqGJa4OEzFcMxhWQjL12sVIHTIariwS3fy+KjSwknKGviXvXxL3pEsxiN7Ex4s0xQgh6lfEvaviXtX/WlKj9lf/aAAwDAQACAAMAAAAQ8888888888888888888880sc8888888888w8MMk8488888888s88sc8s88888888gAIoUUA8888888888sAk888888888888sM0888888888888888888888/8QAFBEBAAAAAAAAAAAAAAAAAAAAYP/aAAgBAwEBPxBx/8QAFBEBAAAAAAAAAAAAAAAAAAAAYP/aAAgBAgEBPxBx/8QAJBABAQEAAwACAgICAwAAAAAAAREhADFBQFFhcRAgYIFQodH/2gAIAQEAAT8Q/wAJZ3M7F1CrHDc/hYV65YhEe1lUnY/K3lIFEu9BSr/Vc4VMn9UqC72NU6AAwePwXoiGvvfScp8/1z0NVGfZ+8MLdikwCz6JsiIcYV2s6UHTxiKMY58k+m4QeRV6MKsYeghT5PFmZdC9n/XlGm5tbkDFxTT7OUvVRVUtKGyZkgcgYrzGmSmgpWHRvK5jHTAgFUOgAAACfFsGRhbSQ1gPDBpKFdlrhET3q/zrMZoi9+u7wIdoWuFC1Gq5ZPOT44GFctU5I+2frdwDSMSIw/fKI+pe/wBJIF7OYGErE/BIoJROuR0fgiOlGqkH0inGBAJB4AD+dKAPP6HwpCtimJY4JpuBwwQIAgHDz5FQkQ9EU/3w8kL5FsrI8FGj/T9JhJv4MGDA97wMCgEA+j/j3zJlIAmiKI/jipo3evYagSUYzOPISywKK0xWXebvaPox11C6hCQOYJZsUnsQTXcLXeCGZgCoEWVWfl5b1YIYSimGOUOAuE4mg8MNkRUVB4+HskvQjBA77DvjXpgpehC+AM9cF/ZUAIMH6K7i3jd41OloS7G+0u15U1ff8yrp1P0HnDCnKqMNl8+D3w6JluxINk7IdTeO9JiNOlE6cvnFf1mDulQtaFhu8LMZd9itNVl6nKXWatCtoLp/5ydiKkzKCA9b+ODiZXWC5LsEFYdigqdbRyLNIeU4Hyw42IvprDzvw9M8aJ7aCBD0s+xYFFHZdWjQWu3eE5hXqiI12ngrR53C9Kwlfn4ogWBRMn3O5xcQB0lHdXsjnAbGolE+7zvzExh2P08AJJ4NMI+3OJBiyEc/c78fkxaoZoiDI4gRI8AynS/9ICNgUXD9RHymmSIJrb5ObjlWcxCqCDhHVFpkWQQErcA7YQXK72Ww1dR5qnhK/JrpuLCgEsol/D9fyOHHCRMRqgmWM/T8vZfKOrBZC+fylSh9R+VWYlle/v8Awr//2Q=="
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel__slide--visible carousel__slide--next client__thumb"
                        aria-hidden="false"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="/client-2.RJAGLL8M.jpg"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel__slide--visible client__thumb"
                        aria-hidden="false"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="data:image/jpeg;base64,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"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="/client-4.14mIfKHt.jpg"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="data:image/jpeg;base64,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"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="/client-2.RJAGLL8M.jpg"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel_slide--clone client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="data:image/jpeg;base64,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F/wV/8QAKhABAAEEAgAFAwQDAAAAAAAAAREAITFBUWFAcYHB8CCRsRBgodFQ4fH/2gAIAQEAAT8h/ZJjIjTJwE/rj3JgkYceKKmrEvH4O6VYnS7ix6Tt9isWslCQFzNQMl8TMDrnqahQAkh0Jw91J3YCQ/D4mfMlyH1/VLuTmJmCXt60DXckPcedNInuXkJsjbj4xC0luRtff8tJ1Ny24nPhen2Cglot4UkJJDOLw/RBfn+/9Jt/1QaR3qqD8GjvBfYs6m7H8jWSIqzOub218xH0BYw4izJljN+KROBIngRKI4BCErPRYGZLeLX19AX12yPMOJ3M5oAAEBqgWpY4OSlcXQIu3cwbI39EeiqCbETfcN6AgAWA/wAes6+oUoRpxjUnSFk2duKy7wCKI6VDCpwr2BNq9Sk/hIEJLvNEuxkRYJadqKmaXFvKnObJwitEzy+hUDox6CbwsJaTUnEsLZtJ96c88oziB81VxBLKlt/HpTIG2HHntNra0i3onwQ9L8mFro13WEUZDitc7WnPbpDZicWaOgSx2IBjypZNr4igWgWtRPR4AESy9tOoMIOy7eH7FKAMOYm7AKSMNEBsMzG8gtVF/emOaD5Zqe7SISMRbL/HdZq4/OWQy3YuxQCUrL28LJ3S69QbBdDPFABGR2VYRJDDhqc3zErNepC+/iVyHBDE0WIMrcVJcnEROKEBfEpEsy1bCgJZ9NRQ1TpeZqGJa4OEzFcMxhWQjL12sVIHTIariwS3fy+KjSwknKGviXvXxL3pEsxiN7Ex4s0xQgh6lfEvaviXtX/WlKj9lf/aAAwDAQACAAMAAAAQ8888888888888888888880sc8888888888w8MMk8488888888s88sc8s88888888gAIoUUA8888888888sAk888888888888sM0888888888888888888888/8QAFBEBAAAAAAAAAAAAAAAAAAAAYP/aAAgBAwEBPxBx/8QAFBEBAAAAAAAAAAAAAAAAAAAAYP/aAAgBAgEBPxBx/8QAJBABAQEAAwACAgICAwAAAAAAAREhADFBQFFhcRAgYIFQodH/2gAIAQEAAT8Q/wAJZ3M7F1CrHDc/hYV65YhEe1lUnY/K3lIFEu9BSr/Vc4VMn9UqC72NU6AAwePwXoiGvvfScp8/1z0NVGfZ+8MLdikwCz6JsiIcYV2s6UHTxiKMY58k+m4QeRV6MKsYeghT5PFmZdC9n/XlGm5tbkDFxTT7OUvVRVUtKGyZkgcgYrzGmSmgpWHRvK5jHTAgFUOgAAACfFsGRhbSQ1gPDBpKFdlrhET3q/zrMZoi9+u7wIdoWuFC1Gq5ZPOT44GFctU5I+2frdwDSMSIw/fKI+pe/wBJIF7OYGErE/BIoJROuR0fgiOlGqkH0inGBAJB4AD+dKAPP6HwpCtimJY4JpuBwwQIAgHDz5FQkQ9EU/3w8kL5FsrI8FGj/T9JhJv4MGDA97wMCgEA+j/j3zJlIAmiKI/jipo3evYagSUYzOPISywKK0xWXebvaPox11C6hCQOYJZsUnsQTXcLXeCGZgCoEWVWfl5b1YIYSimGOUOAuE4mg8MNkRUVB4+HskvQjBA77DvjXpgpehC+AM9cF/ZUAIMH6K7i3jd41OloS7G+0u15U1ff8yrp1P0HnDCnKqMNl8+D3w6JluxINk7IdTeO9JiNOlE6cvnFf1mDulQtaFhu8LMZd9itNVl6nKXWatCtoLp/5ydiKkzKCA9b+ODiZXWC5LsEFYdigqdbRyLNIeU4Hyw42IvprDzvw9M8aJ7aCBD0s+xYFFHZdWjQWu3eE5hXqiI12ngrR53C9Kwlfn4ogWBRMn3O5xcQB0lHdXsjnAbGolE+7zvzExh2P08AJJ4NMI+3OJBiyEc/c78fkxaoZoiDI4gRI8AynS/9ICNgUXD9RHymmSIJrb5ObjlWcxCqCDhHVFpkWQQErcA7YQXK72Ww1dR5qnhK/JrpuLCgEsol/D9fyOHHCRMRqgmWM/T8vZfKOrBZC+fylSh9R+VWYlle/v8Awr//2Q=="
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel_slide--clone client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="/client-2.RJAGLL8M.jpg"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel_slide--clone client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="data:image/jpeg;base64,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"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel_slide--clone client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="/client-4.14mIfKHt.jpg"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel_slide--clone client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="data:image/jpeg;base64,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"
                            alt="client"
                          />
                        </a>
                      </li>
                      <li
                        style={{ width: "223.2px" }}
                        className="carousel__slide carousel_slide--clone client__thumb"
                        aria-hidden="true"
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="/client-2.RJAGLL8M.jpg"
                            alt="client"
                          />
                        </a>
                      </li>
                    </ol>
                  </div>
                  {/*[*/}
                  {/*]*/}
                  <div
                    className="carousel__liveregion carousel__sr-only"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    Item 1 of 6
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="blog__area  pb-70" data-v-23c9013e="">
          <div className="container" data-v-23c9013e="">
            <div className="row" data-v-23c9013e="">
              <div className="col-xl-12" data-v-23c9013e="">
                <div
                  className="section__title-wrapper text-center mb-55"
                  data-v-23c9013e=""
                >
                  <div className="section__title mb-10" data-v-23c9013e="">
                    <h2 data-v-23c9013e="">Our Blog Posts</h2>
                  </div>
                  <div className="section__sub-title" data-v-23c9013e="">
                    <p data-v-23c9013e="">
                      {" "}
                      Mirum est notare quam littera gothica quam nunc putamus
                      parum claram!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-v-23c9013e="">
              <div className="col-xl-12" data-v-23c9013e="">
                <section
                  className="carousel blog__slider"
                  dir="ltr"
                  aria-label="Gallery"
                  tabIndex={0}
                  data-v-23c9013e=""
                >
                  <div className="carousel__viewport">
                    <ol
                      className="carousel__track"
                      style={{
                        transform: "translateX(372px)",
                        transition: "all",
                        margin: "0px -1488px",
                        width: "100%",
                      }}
                    >
                      <li
                        style={{ width: 372 }}
                        className="carousel__slide carousel_slide--clone"
                        aria-hidden="true"
                        data-v-23c9013e=""
                      >
                        <div className="blog__item mb-30" data-v-23c9013e="">
                          <div className="blog__thumb fix">
                            <a href="/blog-details/1" className="w-img">
                              <img
                                src="/blog-1.DGJ501kQ.jpg"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog__content">
                            <h4>
                              <a href="/blog-details/1" className="">
                                <span>Anteposuerit litterarum formas.</span>
                              </a>
                            </h4>
                            <div className="blog__meta">
                              <span>
                                By <a href="#">Shahnewaz Sakil</a>
                              </span>
                              <span> / September 14, 2023</span>
                            </div>
                            <div>
                              <p>
                                Mirum est notare quam littera gothica, quam nunc
                                putamus parum claram.
                              </p>
                              <a href="/blog-details/1" className="os-btn">
                                read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ width: 372 }}
                        className="carousel__slide carousel_slide--clone"
                        aria-hidden="true"
                        data-v-23c9013e=""
                      >
                        <div className="blog__item mb-30" data-v-23c9013e="">
                          <div className="blog__thumb fix">
                            <a href="/blog-details/2" className="w-img">
                              <img
                                src="/blog-2.DlaPLrhx.jpg"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog__content">
                            <h4>
                              <a href="/blog-details/2" className="">
                                <span>Hanging fruit to identify</span>
                              </a>
                            </h4>
                            <div className="blog__meta">
                              <span>
                                By <a href="#">Naim Ahmed</a>
                              </span>
                              <span> / November 14, 2022</span>
                            </div>
                            <div>
                              <p>
                                Mirum est notare quam littera gothica, quam nunc
                                putamus parum claram.
                              </p>
                              <a href="/blog-details/2" className="os-btn">
                                read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ width: 372 }}
                        className="carousel__slide carousel_slide--clone"
                        aria-hidden="true"
                        data-v-23c9013e=""
                      >
                        <div className="blog__item mb-30" data-v-23c9013e="">
                          <div className="blog__thumb fix">
                            <a href="/blog-details/3" className="w-img">
                              <img
                                src="/blog-3.CmBT_0Sl.jpg"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog__content">
                            <h4>
                              <a href="/blog-details/3" className="">
                                <span>The information highway will</span>
                              </a>
                            </h4>
                            <div className="blog__meta">
                              <span>
                                By <a href="#">John Smith</a>
                              </span>
                              <span> / January 14, 2023</span>
                            </div>
                            <div>
                              <p>
                                Mirum est notare quam littera gothica, quam nunc
                                putamus parum claram.
                              </p>
                              <a href="/blog-details/3" className="os-btn">
                                read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ width: 372 }}
                        className="carousel__slide carousel_slide--clone carousel__slide--visible carousel__slide--prev"
                        aria-hidden="false"
                        data-v-23c9013e=""
                      >
                        <div className="blog__item mb-30" data-v-23c9013e="">
                          <div className="blog__thumb fix">
                            <a href="/blog-details/4" className="w-img">
                              <img
                                src="/blog-2.DlaPLrhx.jpg"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog__content">
                            <h4>
                              <a href="/blog-details/4" className="">
                                <span>Hanging fruit to identify</span>
                              </a>
                            </h4>
                            <div className="blog__meta">
                              <span>
                                By <a href="#">Mamun Ahmed</a>
                              </span>
                              <span> / December 14, 2022</span>
                            </div>
                            <div>
                              <p>
                                Mirum est notare quam littera gothica, quam nunc
                                putamus parum claram.
                              </p>
                              <a href="/blog-details/4" className="os-btn">
                                read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ width: 372 }}
                        className="carousel__slide carousel__slide--visible carousel__slide--active"
                        aria-hidden="false"
                        data-v-23c9013e=""
                      >
                        <div className="blog__item mb-30" data-v-23c9013e="">
                          <div className="blog__thumb fix">
                            <a href="/blog-details/1" className="w-img">
                              <img
                                src="/blog-1.DGJ501kQ.jpg"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog__content">
                            <h4>
                              <a href="/blog-details/1" className="">
                                <span>Anteposuerit litterarum formas.</span>
                              </a>
                            </h4>
                            <div className="blog__meta">
                              <span>
                                By <a href="#">Shahnewaz Sakil</a>
                              </span>
                              <span> / September 14, 2023</span>
                            </div>
                            <div>
                              <p>
                                Mirum est notare quam littera gothica, quam nunc
                                putamus parum claram.
                              </p>
                              <a href="/blog-details/1" className="os-btn">
                                read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ width: 372 }}
                        className="carousel__slide carousel__slide--visible carousel__slide--next"
                        aria-hidden="false"
                        data-v-23c9013e=""
                      >
                        <div className="blog__item mb-30" data-v-23c9013e="">
                          <div className="blog__thumb fix">
                            <a href="/blog-details/2" className="w-img">
                              <img
                                src="/blog-2.DlaPLrhx.jpg"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog__content">
                            <h4>
                              <a href="/blog-details/2" className="">
                                <span>Hanging fruit to identify</span>
                              </a>
                            </h4>
                            <div className="blog__meta">
                              <span>
                                By <a href="#">Naim Ahmed</a>
                              </span>
                              <span> / November 14, 2022</span>
                            </div>
                            <div>
                              <p>
                                Mirum est notare quam littera gothica, quam nunc
                                putamus parum claram.
                              </p>
                              <a href="/blog-details/2" className="os-btn">
                                read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ width: 372 }}
                        className="carousel__slide"
                        aria-hidden="true"
                        data-v-23c9013e=""
                      >
                        <div className="blog__item mb-30" data-v-23c9013e="">
                          <div className="blog__thumb fix">
                            <a href="/blog-details/3" className="w-img">
                              <img
                                src="/blog-3.CmBT_0Sl.jpg"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog__content">
                            <h4>
                              <a href="/blog-details/3" className="">
                                <span>The information highway will</span>
                              </a>
                            </h4>
                            <div className="blog__meta">
                              <span>
                                By <a href="#">John Smith</a>
                              </span>
                              <span> / January 14, 2023</span>
                            </div>
                            <div>
                              <p>
                                Mirum est notare quam littera gothica, quam nunc
                                putamus parum claram.
                              </p>
                              <a href="/blog-details/3" className="os-btn">
                                read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ width: 372 }}
                        className="carousel__slide"
                        aria-hidden="true"
                        data-v-23c9013e=""
                      >
                        <div className="blog__item mb-30" data-v-23c9013e="">
                          <div className="blog__thumb fix">
                            <a href="/blog-details/4" className="w-img">
                              <img
                                src="/blog-2.DlaPLrhx.jpg"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog__content">
                            <h4>
                              <a href="/blog-details/4" className="">
                                <span>Hanging fruit to identify</span>
                              </a>
                            </h4>
                            <div className="blog__meta">
                              <span>
                                By <a href="#">Mamun Ahmed</a>
                              </span>
                              <span> / December 14, 2022</span>
                            </div>
                            <div>
                              <p>
                                Mirum est notare quam littera gothica, quam nunc
                                putamus parum claram.
                              </p>
                              <a href="/blog-details/4" className="os-btn">
                                read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ width: 372 }}
                        className="carousel__slide carousel_slide--clone"
                        aria-hidden="true"
                        data-v-23c9013e=""
                      >
                        <div className="blog__item mb-30" data-v-23c9013e="">
                          <div className="blog__thumb fix">
                            <a href="/blog-details/1" className="w-img">
                              <img
                                src="/blog-1.DGJ501kQ.jpg"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog__content">
                            <h4>
                              <a href="/blog-details/1" className="">
                                <span>Anteposuerit litterarum formas.</span>
                              </a>
                            </h4>
                            <div className="blog__meta">
                              <span>
                                By <a href="#">Shahnewaz Sakil</a>
                              </span>
                              <span> / September 14, 2023</span>
                            </div>
                            <div>
                              <p>
                                Mirum est notare quam littera gothica, quam nunc
                                putamus parum claram.
                              </p>
                              <a href="/blog-details/1" className="os-btn">
                                read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ width: 372 }}
                        className="carousel__slide carousel_slide--clone"
                        aria-hidden="true"
                        data-v-23c9013e=""
                      >
                        <div className="blog__item mb-30" data-v-23c9013e="">
                          <div className="blog__thumb fix">
                            <a href="/blog-details/2" className="w-img">
                              <img
                                src="/blog-2.DlaPLrhx.jpg"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog__content">
                            <h4>
                              <a href="/blog-details/2" className="">
                                <span>Hanging fruit to identify</span>
                              </a>
                            </h4>
                            <div className="blog__meta">
                              <span>
                                By <a href="#">Naim Ahmed</a>
                              </span>
                              <span> / November 14, 2022</span>
                            </div>
                            <div>
                              <p>
                                Mirum est notare quam littera gothica, quam nunc
                                putamus parum claram.
                              </p>
                              <a href="/blog-details/2" className="os-btn">
                                read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ width: 372 }}
                        className="carousel__slide carousel_slide--clone"
                        aria-hidden="true"
                        data-v-23c9013e=""
                      >
                        <div className="blog__item mb-30" data-v-23c9013e="">
                          <div className="blog__thumb fix">
                            <a href="/blog-details/3" className="w-img">
                              <img
                                src="/blog-3.CmBT_0Sl.jpg"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog__content">
                            <h4>
                              <a href="/blog-details/3" className="">
                                <span>The information highway will</span>
                              </a>
                            </h4>
                            <div className="blog__meta">
                              <span>
                                By <a href="#">John Smith</a>
                              </span>
                              <span> / January 14, 2023</span>
                            </div>
                            <div>
                              <p>
                                Mirum est notare quam littera gothica, quam nunc
                                putamus parum claram.
                              </p>
                              <a href="/blog-details/3" className="os-btn">
                                read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        style={{ width: 372 }}
                        className="carousel__slide carousel_slide--clone"
                        aria-hidden="true"
                        data-v-23c9013e=""
                      >
                        <div className="blog__item mb-30" data-v-23c9013e="">
                          <div className="blog__thumb fix">
                            <a href="/blog-details/4" className="w-img">
                              <img
                                src="/blog-2.DlaPLrhx.jpg"
                                alt="blog"
                              />
                            </a>
                          </div>
                          <div className="blog__content">
                            <h4>
                              <a href="/blog-details/4" className="">
                                <span>Hanging fruit to identify</span>
                              </a>
                            </h4>
                            <div className="blog__meta">
                              <span>
                                By <a href="#">Mamun Ahmed</a>
                              </span>
                              <span> / December 14, 2022</span>
                            </div>
                            <div>
                              <p>
                                Mirum est notare quam littera gothica, quam nunc
                                putamus parum claram.
                              </p>
                              <a href="/blog-details/4" className="os-btn">
                                read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  {/*[*/}
                  {/*]*/}
                  <div
                    className="carousel__liveregion carousel__sr-only"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    Item 1 of 4
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="subscribe__area  pb-100">
          <div className="container">
            <div className="subscribe__inner pt-95">
              <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                  <div className="subscribe__content text-center">
                    <h2>Get Discount Info</h2>
                    <p>
                      Subscribe to the Outstock mailing list to receive updates
                      on new arrivals, special offers and other discount
                      information.
                    </p>
                    <div className="subscribe__form">
                      <form>
                        <input
                          required=""
                          type="email"
                          defaultValue=""
                          placeholder="Subscribe to our newsletter..."
                        />
                        <button className="os-btn os-btn-2 os-btn-3">
                          subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*]*/}
        
      </>
    </>
  );
};

export default HomePage;
