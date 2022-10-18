function Form() {
    return ( 
        <div className="testbox">
            <h1>Submit Adoption Request</h1>
            <form>
                <label>Name: <input type="text" name="name" placeholder="Full name"/></label>
                <label>Phone: <input type="text" name="name" placeholder="Phone number"/></label>
                <label>Email:<input type="text" name="name" placeholder="Email"/></label>
                <label>Animal: 
                    <select>
                        <option selected value="" disabled>Type</option>
                        <option value='d'>Dog</option>
                        <option value='c'>Cat</option>
                        <option value='o'>Other</option>
                    </select>
                </label>
                <br />
                <label>Message:
                <textarea rows="5"></textarea>
                </label>
                <button type="submit">Send Request</button>
            </form>
        </div>
     );
}

export default Form;