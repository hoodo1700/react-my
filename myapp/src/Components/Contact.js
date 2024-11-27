function ContactForm() {
    return (
      <div>
        <form className="container-fluid mt-5">
          <div className="col-4">
            <input
              className="form-control"
              type="text"
              placeholder="Enter your name"
            />
            <br />
            <input
              className="form-control"
              type="email"
              placeholder="Enter your email"
            />
            <br />
            <textarea
              className="form-control"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
            <br />
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default ContactForm;
  
