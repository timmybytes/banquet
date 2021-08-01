import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h2>Contact Form</h2>
      <input type="text" placeholder="Name" name="name" required />
      <input type="email" placeholder="Email" name="email" required />
      <input type="text" placeholder="Subject" name="subject" required />
      <textarea placeholder="Message" name="message" required />
      <button type="submit">Submit</button>
    </div>
  );
};

const InfoForm = () => {
  return (
    <div>
      <h2>Info Form</h2>
      <input type="text" placeholder="Name" name="name" required />
      <input type="email" placeholder="Email" name="email" required />
      <input type="text" placeholder="Subject" name="subject" required />
      <textarea placeholder="Message" name="message" required />
      <button type="submit">Submit</button>
    </div>
  );
};

const LogInOut = ({ isLoggedIn }: { isLoggedIn?: boolean }) => {
  return (
    <div>
      {!isLoggedIn && (
        <>
          <h2>Log In</h2>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <button type="submit">Log In</button>
          <hr />
          <h2>Sign Up</h2>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <button type="submit">Sign Up</button>
        </>
      )}
      {isLoggedIn && (
        <>
          <h2>Log Out</h2>
          <button type="submit">Log Out</button>
        </>
      )}
    </div>
  );
};

const CommerceForm = () => {
  return (
    <div>
      <h2>Commerce Form</h2>
      {/* Render log in component */}
      <LogInOut />

      <input type="text" placeholder="Name" name="name" required />
      <input type="email" placeholder="Email" name="email" required />

      <input type="text" placeholder="Name" name="name" required />
      <input type="email" placeholder="Email" name="email" required />
      {/* Render customer billing input */}
      <input type="text" placeholder="Billing Name" name="billingName" />
      <input type="text" placeholder="Billing Address" name="billingAddress" />
      <input type="text" placeholder="Billing City" name="billingCity" />
      <input type="text" placeholder="Billing State" name="billingState" />
      <input type="text" placeholder="Billing Zip" name="billingZip" />
      <input type="text" placeholder="Billing Country" name="billingCountry" />
      <input type="text" placeholder="Billing Phone" name="billingPhone" />

      {/* Render customer shipping input */}
      <input type="text" placeholder="Shipping Name" name="shippingName" />
      <input
        type="text"
        placeholder="Shipping Address"
        name="shippingAddress"
      />
      <input type="text" placeholder="Shipping City" name="shippingCity" />
      <input type="text" placeholder="Shipping State" name="shippingState" />
      <input type="text" placeholder="Shipping Zip" name="shippingZip" />
      <input
        type="text"
        placeholder="Shipping Country"
        name="shippingCountry"
      />
      <input type="text" placeholder="Shipping Phone" name="shippingPhone" />

      {/* Render customer payment input */}
      <input type="text" placeholder="Card Number" name="cardNumber" />
      <input type="text" placeholder="Card Name" name="cardName" />
      <input type="text" placeholder="Card Expiration" name="cardExpiration" />
      <input type="text" placeholder="Card Code" name="cardCode" />
      <button type="submit">Submit</button>
    </div>
  );
};

const CommentForm = () => {
  return (
    <div>
      <h2>Comment Form</h2>
      <p>Leave an anonymous comment or log in</p>
      <LogInOut />
      <textarea placeholder="Comment" name="comment" required />
      <button type="submit">Submit</button>
    </div>
  );
};

type FormProps = {
  onSubmit?: Function;
  formType?: "contact" | "info" | "commerce" | "comment";
  children?: any;
};

export const FormWrapper: React.FC<FormProps> = ({
  formType,
  onSubmit,
  children,
}: FormProps) => {
  return (
    <div>
      {formType === "contact" && <ContactForm />}
      {formType === "info" && <InfoForm />}
      {formType === "commerce" && <CommerceForm />}
      {formType === "comment" && <CommentForm />}
      {children}
    </div>
  );
};
