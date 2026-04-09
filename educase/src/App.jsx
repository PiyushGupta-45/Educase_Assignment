import { useMemo, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

function WelcomePage() {
  const navigate = useNavigate();
  const [loadingTarget, setLoadingTarget] = useState("");

  const handleNavigate = async (target) => {
    if (loadingTarget) {
      return;
    }

    setLoadingTarget(target);
    await new Promise((resolve) => setTimeout(resolve, 500));
    navigate(target === "signup" ? "/signup" : "/login");
  };

  return (
    <div className="welcome-page">
      <div className="welcome-spacer" />

      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <button
          className="btn-primary"
          disabled={Boolean(loadingTarget)}
          onClick={() => handleNavigate("signup")}
        >
          <span className="btn-content btn-content--overlay-right">
            <span className="btn-text">Create Account</span>
            {loadingTarget === "signup" ? (
              <span className="btn-spinner btn-spinner--right" aria-hidden="true" />
            ) : null}
          </span>
        </button>

        <button
          className="btn-secondary"
          disabled={Boolean(loadingTarget)}
          onClick={() => handleNavigate("login")}
        >
          <span className="btn-content btn-content--overlay-right">
            <span className="btn-text">Already Registered? Login</span>
            {loadingTarget === "login" ? (
              <span
                className="btn-spinner btn-spinner--dark btn-spinner--right"
                aria-hidden="true"
              />
            ) : null}
          </span>
        </button>
      </div>
    </div>
  );
}

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    navigate("/profile");
  };

  return (
    <div className="login-page">
      <h1>
        Signin to your
        <br />
        PopX account
      </h1>

      <p className="subtitle">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">Email Address</label>
          <input
            type="email"
            className="form-input form-input--floating"
            placeholder="Enter email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">Password</label>
          <input
            type="password"
            className="form-input form-input--floating"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={!isValid || isSubmitting}
          style={{ marginTop: "8px" }}
        >
          <span className="btn-content">
            {isSubmitting ? <span className="btn-spinner" aria-hidden="true" /> : null}
            {isSubmitting ? "Logging in..." : "Login"}
          </span>
        </button>
      </form>
    </div>
  );
}

function CreatePage() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = useMemo(
    () =>
      formState.fullName.trim() !== "" &&
      formState.phone.trim() !== "" &&
      formState.email.trim() !== "" &&
      formState.password.trim() !== "" &&
      (formState.isAgency === "yes" || formState.isAgency === "no"),
    [formState],
  );

  const updateField = (field, value) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    navigate("/profile");
  };

  return (
    <div className="create-page">
      <h1>
        Create your
        <br />
        PopX account
      </h1>

      <form onSubmit={handleSubmit} className="create-form">
        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">
            Full Name<span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input form-input--floating"
            placeholder="Marry Doe"
            value={formState.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
          />
        </div>

        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">
            Phone number<span className="required">*</span>
          </label>
          <input
            type="tel"
            className="form-input form-input--floating"
            placeholder="Marry Doe"
            value={formState.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
        </div>

        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">
            Email address<span className="required">*</span>
          </label>
          <input
            type="email"
            className="form-input form-input--floating"
            placeholder="Marry Doe"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </div>

        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">
            Password <span className="required">*</span>
          </label>
          <input
            type="password"
            className="form-input form-input--floating"
            placeholder="Marry Doe"
            value={formState.password}
            onChange={(event) => updateField("password", event.target.value)}
          />
        </div>

        <div className="form-group form-group--floating">
          <label className="form-label form-label--floating">Company name</label>
          <input
            type="text"
            className="form-input form-input--floating"
            placeholder="Marry Doe"
            value={formState.company}
            onChange={(event) => updateField("company", event.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Are you an Agency?<span className="required">*</span>
          </label>

          <div className="radio-group">
            {["yes", "no"].map((option) => (
              <label
                key={option}
                className="radio-option"
                onClick={() => updateField("isAgency", option)}
              >
                <span className={`radio-circle ${formState.isAgency === option ? "selected" : ""}`}>
                  {formState.isAgency === option ? <span className="radio-dot" /> : null}
                </span>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <div className="form-flex-spacer" />

        <button
          type="submit"
          className="btn-primary"
          style={{ marginTop: "16px" }}
          disabled={!isValid || isSubmitting}
        >
          <span className="btn-content">
            {isSubmitting ? <span className="btn-spinner" aria-hidden="true" /> : null}
            {isSubmitting ? "Creating..." : "Create Account"}
          </span>
        </button>
      </form>
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="settings-page">
      <h2>Account Settings</h2>

      <div className="profile-card">
        <div className="avatar-wrapper">
          <img
            src="https://i.pravatar.cc/112?img=47"
            alt="Marry Doe"
            className="avatar-img"
          />
          <div className="avatar-edit-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path
                d="M4 7a2 2 0 0 1 2-2h2l1.2-1.6A2 2 0 0 1 10.8 3h2.4a2 2 0 0 1 1.6.8L16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="profile-info">
          <p>Marry Doe</p>
          <span>Marry@Gmail.Com</span>
        </div>
      </div>

      <p className="settings-text">
        Lorem Ipsum Dolor Sit Amet, Consetatur Sadipscing Elitr, Sed Diam Nonumy Eirmod
        Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <hr className="dashed-divider" style={{ marginTop: "24px" }} />
    </div>
  );
}

function App() {
  return (
    <div className="phone-container">
      <div className="phone-frame">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<CreatePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
