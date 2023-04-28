import React from 'react';
import { message } from "antd";
import styles from '../styles';

const onFinish = async () => {
  message.success("Message sent successfully!");
};

const Contact = () => {
  return (
    <div id="contact">
      <div className={`${styles.contactDiv}`}>
        <div class="flex flex-col justify-center">
          <div>
            <h1 className={`${styles.h1Text} text-gradient`}>Send me a message!</h1>
            <div className={`${styles.descriptionText}`}>
              You can contact me to make a proposal or ask any questions you may have
            </div>
          </div>
        </div>
        <div>
        <form action="https://formsubmit.co/bobbyamali2@gmail.com" method="POST">
          <div>
            <span className={`${styles.contactText}`}>Name</span>
            <input className={`${styles.contactInput}`}
              type="text" name="Name" required />
          </div>
          <div class="mt-8">
            <span className={`${styles.contactText}`}>Email</span>
            <input className={`${styles.contactInput}`}
              type="email"  name="Email" required/>
          </div>
          <div class="mt-8">
            <span className={`${styles.contactText}`}>Message</span>
            <textarea name="Message" required
              class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="col">
            <input type="hidden" name="_next" value="http://localhost:5173/"/>
          </div>
          <div class="col">
            <input type="hidden" name="_captcha" value="false"/>
          </div>
          
          <div class='flex flex-col items-center justify-center mt-5 '>
            <button onClick={onFinish} class='button bg-cyan-300 w-32 h-14 cursor-pointer select-none
             active:translate-y-2  active:[box-shadow:0_0px_0_0_#03f0fc,0_0px_0_0_#1b70f841]
             active:border-b-[0px]
             transition-all duration-150 [box-shadow:0_10px_0_0_#03f0fc,0_15px_0_0_#1b70f841]
             rounded-full  border-[1px] border-cyan-400
            '>
            <span class='flex flex-col justify-center items-center h-full text-white font-semibold text-sm '>SEND MESSAGE</span>
            </button>
          </div>

        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact