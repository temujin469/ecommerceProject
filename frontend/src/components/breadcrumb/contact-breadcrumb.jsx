import React from "react";

const ContactBreadcrumb = () => {
  return (
    <section className="breadcrumb__area include-bg text-center pt-15 pb-15">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              {/* <h3 className="breadcrumb__title">Холбоо барих</h3> */}
              <div className="breadcrumb__list">
                <span>
                  <a href="#">Нүүр</a>
                </span>
                <span>Холбоо барих</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBreadcrumb;
