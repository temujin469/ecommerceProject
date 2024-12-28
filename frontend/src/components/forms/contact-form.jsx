'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// internal
import ErrorMsg from "../common/error-msg";
import { notifySuccess } from "@/utils/toast";

// schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().label("Subject"),
  message: Yup.string().required().label("Subject"),
  remember: Yup.bool()
    .oneOf([true], "Та үргэлжлүүлэхийн тулд нөхцөл, болзлыг зөвшөөрөх ёстой.")
    .label("Үйлчилгээний нөхцөл"),
});

const ContactForm = () => {

    // react hook form
    const {register,handleSubmit,formState: { errors },reset} = useForm({
      resolver: yupResolver(schema),
    });
    // on submit
    const onSubmit = (data) => {
      if(data){
        notifySuccess('Мессеж амжилттай илгээгдсэн!');
      }

      reset();
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
      <div className="tp-contact-input-wrapper">
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("name", { required: `Нэр оруулах шаардлагатай!` })} name="name" id="name" type="text" placeholder="Таны нэр" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="name">Нэр</label>
          </div>
          <ErrorMsg msg={errors.name?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("email", { required: `Имэйл шаардлагатай!` })} name="email" id="email" type="email" placeholder="example@mail.com" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="email">Имэйл</label>
          </div>
          <ErrorMsg msg={errors.email?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("subject", { required: `Сэдвийг оруулах шаардлагатай!` })} name="subject" id="subject" type="text" placeholder="Сэдвээ бичээрэй" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="subject">Сэдэв</label>
          </div>
          <ErrorMsg msg={errors.subject?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <textarea {...register("message", { required: `Message is required!` })} id="message" name="message" placeholder="Энд мессежээ бичээрэй..."/>
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="message">Таны мессеж</label>
          </div>
          <ErrorMsg msg={errors.message?.message} />
        </div>
      </div>
      <div className="tp-contact-suggetions mb-20">
        <div className="tp-contact-remeber">
          <input  {...register("remember", {required: `Terms and Conditions is required!`})} name="remember" id="remember" type="checkbox" />
          <label htmlFor="remember">Сануулах</label>
          <ErrorMsg msg={errors.remember?.message} />
        </div>
      </div>
      <div className="tp-contact-btn">
        <button type="submit">Илгээх</button>
      </div>
    </form>
  );
};

export default ContactForm;