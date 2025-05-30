const Conatct = () => {
    function handleSubmit(e) {
        e.pereventDefult();

        const info = {
            email: e.target.eamil.value,
            password: e.target.password.value,
            Text: e.target.text.value,
        }
        console.log(info);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="email" required />
            <br />
            <input type="password" name="password" placeholder="password" required />
            <br />
            <input type="text" name="text" placeholder="text" required />
            <br />
            <button>Submit</button>
        </form>
    )
}

export default Conatct;
