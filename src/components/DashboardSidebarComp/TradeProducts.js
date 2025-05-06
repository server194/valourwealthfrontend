import valourThemeCard from "../DashboardSidebarComp/images/products-theme-card.jpeg";
import valourThemeCard2 from "../DashboardSidebarComp/images/1 on 1  Mentrship.jpeg";
import valourThemeCard3 from "../DashboardSidebarComp/images/TradeGPT.jpeg";
import valourThemeCard4 from "../DashboardSidebarComp/images/Trading Academy.jpeg";
import valourThemeCard5 from "../DashboardSidebarComp/images/products-theme-card2.jpg";

function TradeProducts() {
  return (
    <div className="container">
      <div class="row mt-4">
        <div class="col-lg-4">
          <div class="valour-products-theme-card">
            <img
              className="obj_fit"
              src={valourThemeCard}
              alt=""
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>

        <div class="col-lg-4">
          <div class="valour-products-theme-card">
            <img
              className="obj_fit"
              src={valourThemeCard2}
              alt=""
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>


        <div class="col-lg-4">
          <div class="valour-products-theme-card">
            <img
              className="obj_fit"
              src={valourThemeCard3}
              alt=""
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>


        <div class="col-lg-4">
          <div class="valour-products-theme-card">
            <img
              className="obj_fit"
              src={valourThemeCard4}
              alt=""
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>


        <div class="col-lg-4">
          <div class="valour-products-theme-card">
            <img
              className="obj_fit"
              src={valourThemeCard5}
              alt=""
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeProducts;
