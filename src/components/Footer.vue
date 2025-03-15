<template>
  <div class="footer">
    <div class="container">
      <footer class="py-5" style="padding-bottom: 1rem !important">
        <div class="row">
          <div class="col-md-4 links footer_block">
            <router-link to="/">
               <img class="size" src="../assets/dark-logo.png" alt="" srcset="">
            </router-link>
            <p>
              At SochBlooms, we believe that every moment deserves a touch of beauty. As a premier florist, we are dedicated to delivering high-quality, fresh flowers at affordable prices, right to your doorstep. Whether it's a celebration, a heartfelt gesture, or just a way to brighten your day, we ensure fast and reliable delivery so your special moments never have to wait.

Experience the perfect blend of elegance, freshness, and convenience with SochBlooms – because every bloom tells a story! 🌸🚀
            </p>
            <br />
            
          </div>

          <div class="col-md-4">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">Home</a>
              </li>
              <li class="nav-item mb-2">
                <a href="Features" class="nav-link p-0 text-muted">Features</a>
              </li>
              <li class="nav-item mb-2">
                <a href="Pricing" class="nav-link p-0 text-muted">Pricing</a>
              </li>
              <li class="nav-item mb-2">
                <a href="FAQs" class="nav-link p-0 text-muted">FAQs</a>
              </li>
              <li class="nav-item mb-2">
                <a href="bout" class="nav-link p-0 text-muted">About</a>
              </li>
            </ul>
          </div>

          <div class="col-md-4">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden"
                  >Email address</label
                >
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button
                  class="btn btn-primary"
                  type="button"
                  style="height: 38px; background-color: #5C2751"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          class="
            d-flex
            flex-column flex-sm-row
            justify-content-between
            py-4
            my-4
            border-top
          "
        >
          <p style="padding-left: 35%">
            &copy; 2025 Company, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterView",
};
</script>
<style>
.footer {
  background: #f4f5f6;
}
.py-5 {
  padding-top: 4rem !important;
  padding-bottom: 0rem !important;
}

.size{
  width: 100px;
}
</style>