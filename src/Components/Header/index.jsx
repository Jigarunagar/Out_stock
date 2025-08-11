import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div id="header-sticky" className="header__area  grey-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                <div className="logo">
                  <a
                    aria-current="page"
                    href="/"
                    className="router-link-active router-link-exact-active"
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAXCAYAAADZYae+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NUM2M0FDMDkyMTVFNTExQTUzM0FGRkVCN0ZCQjNFRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkEzMDEyMzE1RkUxMUVCOEJEN0VCNjZCMjhFMTFCNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkEzMDEyMjE1RkUxMUVCOEJEN0VCNjZCMjhFMTFCNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdCQzRBNDYxQzEyM0U4MTFBOTEyOUM3QzREMDZBNzRFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1QzYzQUMwOTIxNUU1MTFBNTMzQUZGRUI3RkJCM0VEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jVn/9gAABIhJREFUeNrsW4txozAQlZlrgJTgdGBcAi6BlIBLwCXYJUAJpgQowSrBlBBKuBN3q2SzWX1h4jhnzWjsGLGsVk9vPyKrzWYjLK1QPYOeo98l9F71Vnx9+03+Xt2J7G9pEynl388sy6b1TtEaD+raCNdy9b1PDDJK1a+qn1WvCFgEAKiE61f4/mj339aq1wCaaW2PAJZpfbvpOwWMHljDzSEPOSN0PtodNsUgJ/yJiKDWYxIClg7cUEwr4P4HaH4QhhS7dBB6fAJMDa6Gtkb1HfhE3beqn5ixGUbjo919e4Fw5EABUzLMMgU9z6rvMcLQtQNclwzTPGKa+21P8LlVrmmY/pb/ouInDJiKAcTEKoND+ADjKGgqSySPuwgcZ7pP/14Z4qsrGtMZ9AuVjROEM3mGThhCN44OLl+RrIuF/UNaSuRqW9A4ZrR9JsAIa4aKRk9FRhhPF6q48U4pUQaH55dD9H+ZGW9lIL9mbKjnr8HqWuwCycqJXjojvcxMLGpyL7duzpYwKXPjwSwc0zSMQW/Vco9YKoMFiAXjxTOTXMPY0sFQPrKKSKAXzAbeB5DCB8BQRftII/ZfAJjeoJ/+fSTpIN5NPeM6c7RhfGWbAvuBGUt3eM4sJCdLWmStOVficEX0GVPCElVwXW02myUrmy5Zvs+aK4de3yKwnMluO5CMzyX7SjbZCDIahjmOhA0GSBT0QlKW0slETxa8YmIoX73pfCXYA8ct3gv86z+J/EcSn82JiyhYuKBfu3ZJalNrkNEwsnQCMTK6HxjW9mFw6opGcEXRLfmhAGkZVtDZ0RxXmTPUbtuekqlX5RZZtpjiAIDS3QV8kyuScwHTM6hcwpj9DQFzMuins6PY8y8uQQgFb25giKUPcWlW1BrsEgyYwWGUWGMONwSMJHGLMNRnQjOO1OLqbBkkJyNGVmhmtDggOYYphf/BIzZC+Y0YBoPmBZhgNKTWx8hYSASk1ZyM0QHGpd1yHbGuLGBaZheEFog6JhtoI4wplpgUY7gp0HsC8MxxwTH3ckcuQvBHKks2WmdJxQJvFCQooKI7r/MIEHVqmHnEEJzBcw/XFuMaK9RzAp7djJ1N9XcF0RmTDrcGBjg6dDnCmujuKjpyldxQRjUCpmUmkIn3c4zC8GCu7N1bgkHJuL90yQkBQx1Rp8HfnFiLVsH1KyGlIQXnmLexyLow+ulsR4Nfd+kJ8BOjVxVr3BV6RTP1ZBVX3LCzBHC5+FylHJDhTOwSUrjTh2x0t0nDM0ILd9wc6DzWBte6IyzlIytjmOdT8c2hN+cF3nQJKdytyDu9KezKmJSzF36Hll2E2wmt9FaeTDXp+kx09qlGlyL8vZ+9gXlDZY0AliHAJhnDdm9yQgCTMMrsYeGHgAkcHMyC24tHsWtWcQkYw1UjGQJ05lzT1tNGmg0ai6ydp6weAB5asuAKiFFB8Grmfw1IiH1Cja7T8AJRpUTFJRrbnAIZButfiI+vDPQozuL0Dj1bK0F+htzQIN4PEJsAu5QoRkmRLP3fGbZShY/eZyYebRTDeB8X/BFgAGKekrDc/Q/hAAAAAElFTkSuQmCC"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8">
                <div className="header__right p-relative d-flex justify-content-between align-items-center">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul>
                        <li className="active has-dropdown">
                          <a
                            aria-current="page"
                            href="/"
                            className="router-link-active router-link-exact-active"
                          >
                            Home
                          </a>
                          <ul className="submenu transition-3">
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
                          {/**/}
                        </li>
                        <li className="mega-menu has-dropdown">
                          <a href="/shop" className="">
                            Shop
                          </a>
                          {/**/}
                          <ul
                            className="submenu transition-3"
                            style={{
                              backgroundImage:
                                'url("https://outstock-vue.vercel.app/_nuxt/mega-menu-bg.BBYZ3P0y.jpg")',
                            }}
                          >
                            <li className="has-dropdown">
                              <a href="/shop" className="">
                                Shop Pages
                              </a>
                              <ul>
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
                                  <a href="/shop" className="">
                                    Shop Page
                                  </a>
                                </li>
                                <li>
                                  <a href="/shop" className="">
                                    Shop Page
                                  </a>
                                </li>
                                <li>
                                  <a href="/shop" className="">
                                    Shop Infinity
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <a href="/shop" className="">
                                Products Pages
                              </a>
                              <ul>
                                <li>
                                  <a href="/product-details" className="">
                                    Product Details
                                  </a>
                                </li>
                                <li>
                                  <a href="/product-details" className="">
                                    Product Page V2
                                  </a>
                                </li>
                                <li>
                                  <a href="/product-details" className="">
                                    Product Page V3
                                  </a>
                                </li>
                                <li>
                                  <a href="/product-details" className="">
                                    Product Page V4
                                  </a>
                                </li>
                                <li>
                                  <a href="/product-details" className="">
                                    Simple Product
                                  </a>
                                </li>
                                <li>
                                  <a href="/product-details" className="">
                                    Variable Product
                                  </a>
                                </li>
                                <li>
                                  <a href="/product-details" className="">
                                    External Product
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <a href="/shop" className="">
                                Other Shop Pages
                              </a>
                              <ul>
                                <li>
                                  <a href="/wishlist" className="">
                                    Wishlist
                                  </a>
                                </li>
                                <li>
                                  <a href="/compare" className="">
                                    Compare
                                  </a>
                                </li>
                                <li>
                                  <a href="/cart" className="">
                                    Shopping Cart
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
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="active has-dropdown">
                          <a href="/blog" className="">
                            Blog
                          </a>
                          <ul className="submenu transition-3">
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
                              <a href="/blog-2-col-mas" className="">
                                Blog 2 Column Masonary
                              </a>
                            </li>
                            <li>
                              <a href="/blog-3-col" className="">
                                Blog 3 Column
                              </a>
                            </li>
                            <li>
                              <a href="/blog-details" className="">
                                Blog Details
                              </a>
                            </li>
                          </ul>
                          {/**/}
                        </li>
                        <li className="active has-dropdown">
                          <a href="/shop" className="">
                            Pages
                          </a>
                          <ul className="submenu transition-3">
                            <li>
                              <a href="/wishlist" className="">
                                Wishlist
                              </a>
                            </li>
                            <li>
                              <a href="/cart" className="">
                                Shopping Cart
                              </a>
                            </li>
                            <li>
                              <a href="/checkout" className="">
                                Checkout
                              </a>
                            </li>
                            <li>
                              <a href="/account" className="">
                                Account
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
                              <a href="/404" className="">
                                Error 404
                              </a>
                            </li>
                          </ul>
                          {/**/}
                        </li>
                        <li className="undefined">
                          <a href="/contact" className="">
                            Contact
                          </a>
                          {/**/}
                          {/**/}
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="mobile-menu-btn d-lg-none">
                    <a href="#" className="mobile-menu-toggle">
                      <i className="fas fa-bars" />
                    </a>
                  </div>
                  <div className="header__action">
                    <ul>
                      <li>
                        <a href="#" className="search-toggle">
                          <i className="ion-ios-search-strong" />
                          Search{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="cart">
                          <i className="ion-bag" /> Cart
                          <span>(0)</span>
                        </a>
                        <div className="mini-cart">
                          <div>
                            <h5>Your cart is empty</h5>
                          </div>
                          {/**/}
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-bars" />
                        </a>
                        <ul className="extra-info">
                          <li>
                            <div className="my-account">
                              <div className="extra-title">
                                <h5>My Account</h5>
                              </div>
                              <ul>
                                <li>
                                  <a href="/account" className="">
                                    My Account
                                  </a>
                                </li>
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
                                  <a href="/checkout" className="">
                                    Checkout
                                  </a>
                                </li>
                                <li>
                                  <a href="/register" className="">
                                    Create Account
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="lang">
                              <div className="extra-title">
                                <h5>Language</h5>
                              </div>
                              <ul>
                                <li>
                                  <a href="#">English</a>
                                </li>
                                <li>
                                  <a href="#">France</a>
                                </li>
                                <li>
                                  <a href="#">Germany</a>
                                </li>
                                <li>
                                  <a href="#">Bangla</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div className="currency">
                              <div className="extra-title">
                                <h5>currency</h5>
                              </div>
                              <ul>
                                <li>
                                  <a href="#">USD - US Dollar</a>
                                </li>
                                <li>
                                  <a href="#">EUR - Ruro</a>
                                </li>
                                <li>
                                  <a href="#">GBP - Britis Pound</a>
                                </li>
                                <li>
                                  <a href="#">INR - Indian Rupee</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/**/}
            </div>
          </div>
        </div>
      </header>
      <section className="header__search white-bg transition-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="header__search-inner text-center">
                <form action="#">
                  <div className="header__search-btn">
                    <a href="#" className="header__search-btn-close">
                      <i className="fal fa-times" />
                    </a>
                  </div>
                  <div className="header__search-header">
                    <h3>Search</h3>
                  </div>
                  <div className="header__search-categories">
                    <ul className="search-category">
                      <li>
                        <a href="/shop" className="">
                          All Categories
                        </a>
                      </li>
                      <li>
                        <a href="/shop" className="">
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a href="/shop" className="">
                          Chair
                        </a>
                      </li>
                      <li>
                        <a href="/shop" className="">
                          Tablet
                        </a>
                      </li>
                      <li>
                        <a href="/shop" className="">
                          Men
                        </a>
                      </li>
                      <li>
                        <a href="/shop" className="">
                          Women
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__search-input p-relative">
                    <input type="text" placeholder="Search for products... " />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
