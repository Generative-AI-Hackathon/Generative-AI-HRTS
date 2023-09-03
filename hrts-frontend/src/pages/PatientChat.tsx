import "./../../styles/patientChat.css"

const PatientChat = () => {
  return (
    <div className="patient-chat">
      <div className="chat-messages">
        <div className="message patient">
          <div className="message-content">I am not filling well</div>
          <div className="message-timestamp">10:00 AM</div>
        </div>
        <div className="message doctor">
        <div className="message-content">I'm sorry to hear that you're not feeling well. I'm here to help in any way I can. It's important to remember that I'm an AI language model and not a substitute for professional medical advice. If your condition is serious or concerning, I strongly recommend reaching out to a healthcare professional or seeking medical attention immediately.</div>
          <div className="message-content">If you're comfortable sharing more details about how you're feeling, I can try to provide some general information or suggestions that may be helpful.</div>
          <div className="message-timestamp">10:01 AM</div>
        </div>
        <div className="message patient">
          <div className="message-content">I have a bad fever, and I can't even eat food.</div>
          <div className="message-timestamp">10:02 AM</div>
        </div>
        <div className="message doctor">
          <div className="message-content">Based on the symptoms you've described, it's possible that you may be experiencing a gastrointestinal infection or a viral illness. Gastroenteritis, commonly known as the stomach flu, is a common cause of symptoms such as fever, vomiting, and diarrhea. However, it's important to note that many different illnesses can cause these symptoms, so it's difficult to provide a definitive diagnosis without a proper medical evaluation.

In any case, if your symptoms are severe, persistent, or worsening, it's crucial to seek medical attention promptly. A healthcare professional will be able to evaluate your symptoms, perform any necessary tests, and provide an accurate diagnosis. They can also recommend the most appropriate treatment for your specific condition.

Remember to stay hydrated by drinking plenty of fluids, even if you have difficulty eating. Oral rehydration solutions can be particularly helpful in replacing lost fluids and electrolytes. However, it's best to consult with a healthcare professional to determine the most suitable course of action for your situation.

I hope you feel better soon!</div>
          <div className="message-timestamp">10:03 AM</div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default PatientChat;