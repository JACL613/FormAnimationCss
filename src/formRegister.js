const formRegister = () => {
  return (
    <div className="form form__register">
      <form>
        <div className="form__control form__control_transparent">
          <input type="text" className="form__input" required />
          <label className="form__label">Name</label>
        </div>
        <div className="form__control form__control_transparent">
          <input type="text" className="form__input" required />
          <label className="form__label">Nameuser</label>
        </div>
        <div className="form__control form__control_transparent">
          <input type="password" className="form__input" required />
          <label className="form__label">Password</label>
        </div>
      </form>
    </div>
  );
};

export default formRegister;
