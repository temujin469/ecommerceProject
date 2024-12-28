'use client';
import Link from 'next/link';
import React from 'react';
import ForgotForm from '../forms/forgot-form';
import LoginShapes from './login-shapes';

const ForgotArea = () => {
  return (
    <section className="tp-login-area pb-140 p-relative z-index-1 fix">
      <LoginShapes />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="tp-login-wrapper">
              <div className="tp-login-top text-center mb-30">
                <h3 className="tp-login-title">Нууц үгээ сэргээх</h3>
                <p>Имэйл хаягаа оруулна уу.</p>
              </div>
              <div className="tp-login-option">
                {/* form start */}
                <ForgotForm/>
                {/* form end */}
                <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-center">
                  <div className="tp-login-forgot">
                    <span>Нууц үгээ санаж байна уу? <Link href="/login"> Нэвтрэх</Link></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotArea;