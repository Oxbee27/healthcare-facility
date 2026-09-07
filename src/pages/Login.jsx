import { useState } from "react";
import {
  FaUser,
  FaUserDoctor,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaArrowLeft,
  FaCheck,
} from "react-icons/fa6";

const PATIENT_STORAGE_KEY = "havillah_patient_account";

export default function Login({ onLogin }) {
  const [role, setRole] = useState("patient");
  const [screen, setScreen] = useState("login");

  // Login
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  // Patient registration
  const [fullName, setFullName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  // Forgot password
  const [resetEmail, setResetEmail] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isPatient = role === "patient";

  const clearMessages = () => {
    setError("");
    setSuccess("");
  };

  const switchRole = (newRole) => {
    setRole(newRole);
    setScreen("login");
    setIdentifier("");
    setPassword("");
    setShowPassword(false);
    clearMessages();
  };

  const openCreateAccount = () => {
    setRole("patient");
    setScreen("register");
    setError("");
    setSuccess("");
    setFullName("");
    setRegisterEmail("");
    setPhone("");
    setRegisterPassword("");
    setConfirmPassword("");
    setAgree(false);
  };

  const backToLogin = () => {
    setScreen("login");
    clearMessages();
  };

  const openForgotPassword = () => {
    setScreen("forgot");
    setError("");
    setSuccess("");
    setResetEmail(identifier);
  };

  // ============================================================
  // LOGIN
  // ============================================================
  const handleLogin = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const enteredIdentifier = identifier.trim().toLowerCase();
    const enteredPassword = password.trim();

    if (!enteredIdentifier) {
      setError(
        "Please enter your email, phone number, or professional ID."
      );
      return;
    }

    if (!enteredPassword) {
      setError("Please enter your password.");
      return;
    }

    // ==========================================================
    // PATIENT LOGIN
    // Patient must use credentials they created
    // ==========================================================
    if (role === "patient") {
      const savedPatient =
        localStorage.getItem(PATIENT_STORAGE_KEY);

      if (!savedPatient) {
        setError(
          "No patient account was found. Please create an account first."
        );
        return;
      }

      let patientAccount;

      try {
        patientAccount = JSON.parse(savedPatient);
      } catch {
        setError(
          "Your patient account could not be loaded. Please create a new account."
        );
        return;
      }

      const emailMatches =
        enteredIdentifier ===
        patientAccount.email.toLowerCase();

      const phoneMatches =
        patientAccount.phone &&
        enteredIdentifier ===
          patientAccount.phone.toLowerCase();

      const passwordMatches =
        enteredPassword === patientAccount.password;

      if ((!emailMatches && !phoneMatches) || !passwordMatches) {
        setError(
          "Invalid patient credentials. Please check your email/phone and password."
        );
        return;
      }

      if (onLogin) {
        onLogin("patient", {
          identifier: patientAccount.email,
          name: patientAccount.fullName,
          phone: patientAccount.phone,
          remember,
        });
      }

      return;
    }

    // ==========================================================
    // DOCTOR LOGIN
    // Doctor credentials are issued by the facility
    // ==========================================================
    if (role === "doctor") {
      const validDoctor =
        (enteredIdentifier === "doc-001" ||
          enteredIdentifier === "doctor@havillahhealth.com") &&
        enteredPassword === "doctor123";

      if (!validDoctor) {
        setError(
          "Invalid doctor credentials. Use DOC-001 or doctor@havillahhealth.com with password doctor123."
        );
        return;
      }

      if (onLogin) {
        onLogin("doctor", {
          identifier: identifier.trim(),
          name: "Dr. James Anderson",
          remember,
        });
      }

      return;
    }
  };

  // ============================================================
  // PATIENT CREATE ACCOUNT
  // ============================================================
  const handleCreateAccount = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const cleanName = fullName.trim();
    const cleanEmail = registerEmail.trim().toLowerCase();
    const cleanPhone = phone.trim();
    const cleanPassword = registerPassword.trim();

    if (!cleanName) {
      setError("Please enter your full name.");
      return;
    }

    if (!cleanEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!cleanPhone) {
      setError("Please enter your phone number.");
      return;
    }

    if (!cleanPassword) {
      setError("Please create a password.");
      return;
    }

    if (cleanPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (!confirmPassword.trim()) {
      setError("Please confirm your password.");
      return;
    }

    if (cleanPassword !== confirmPassword.trim()) {
      setError("Passwords do not match.");
      return;
    }

    if (!agree) {
      setError(
        "Please agree to the terms and privacy policy."
      );
      return;
    }

    // Check whether a patient account already exists
    const existingAccount =
      localStorage.getItem(PATIENT_STORAGE_KEY);

    if (existingAccount) {
      try {
        const existingPatient = JSON.parse(existingAccount);

        if (
          existingPatient.email.toLowerCase() ===
          cleanEmail
        ) {
          setError(
            "An account with this email already exists. Please sign in."
          );
          return;
        }
      } catch {
        // Ignore invalid old local storage and overwrite it.
      }
    }

    // Save the patient-created credentials
    const patientAccount = {
      fullName: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      password: cleanPassword,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      PATIENT_STORAGE_KEY,
      JSON.stringify(patientAccount)
    );

    // Put the new email into the login form
    setIdentifier(cleanEmail);
    setPassword("");

    setFullName("");
    setRegisterEmail("");
    setPhone("");
    setRegisterPassword("");
    setConfirmPassword("");
    setAgree(false);

    setSuccess(
      "Account created successfully. Your credentials are ready. You can now sign in."
    );

    setTimeout(() => {
      setScreen("login");
      setSuccess("");
    }, 1800);
  };

  // ============================================================
  // FORGOT PASSWORD
  // ============================================================
  const handleForgotPassword = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!resetEmail.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setSuccess(
      "If an account exists with this email, a password reset link has been sent."
    );
  };

  return (
    <div className="min-h-screen bg-[#F3F5EF] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[680px]">

          {/* ================================================== */}
          {/* LEFT SIDE */}
          {/* ================================================== */}
          <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-[#12232B] p-12 text-white">

            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#1F6F63]" />
              <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#C1622E]" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#1F6F63] flex items-center justify-center">
                  <FaHeart className="text-xl" />
                </div>

                <div>
                  <h1 className="text-xl font-bold tracking-wide">
                    HAVILLAH HEALTH
                  </h1>

                  <p className="text-xs text-white/60">
                    Connected care platform
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 max-w-md">
              <p className="text-[#9BC9C0] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Secure healthcare access
              </p>

              <h2 className="font-serif text-5xl leading-tight mb-6">
                Better care begins with better connection.
              </h2>

              <p className="text-white/65 text-base leading-7">
                Access appointments, medical records,
                prescriptions, billing, and your care team
                from one secure healthcare platform.
              </p>

              <div className="mt-8 flex gap-3">
                <div className="px-4 py-3 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-lg font-bold">24/7</p>
                  <p className="text-xs text-white/50">
                    Access
                  </p>
                </div>

                <div className="px-4 py-3 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-lg font-bold">
                    Secure
                  </p>
                  <p className="text-xs text-white/50">
                    Records
                  </p>
                </div>

                <div className="px-4 py-3 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-lg font-bold">
                    Connected
                  </p>
                  <p className="text-xs text-white/50">
                    Care
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 text-xs text-white/40">
              © 2026 Havillah Health. Secure healthcare access.
            </div>
          </div>

          {/* ================================================== */}
          {/* RIGHT SIDE */}
          {/* ================================================== */}
          <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
            <div className="w-full max-w-md">

              {/* MOBILE LOGO */}
              <div className="lg:hidden flex items-center gap-3 mb-10">
                <div className="w-11 h-11 rounded-xl bg-[#1F6F63] text-white flex items-center justify-center">
                  <FaHeart />
                </div>

                <div>
                  <h1 className="font-bold text-[#12232B]">
                    HAVILLAH HEALTH
                  </h1>

                  <p className="text-xs text-gray-500">
                    Connected care platform
                  </p>
                </div>
              </div>

              {/* ================================================== */}
              {/* LOGIN */}
              {/* ================================================== */}
              {screen === "login" && (
                <div>
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-[#1F6F63] mb-2">
                      Welcome back
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold text-[#12232B]">
                      Sign in to your account
                    </h2>

                    <p className="mt-3 text-gray-500">
                      Choose your account type to continue.
                    </p>
                  </div>

                  {/* ROLE SWITCH */}
                  <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#F3F5EF] rounded-2xl mb-7">
                    <button
                      type="button"
                      onClick={() => switchRole("patient")}
                      className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                        isPatient
                          ? "bg-white text-[#1F6F63] shadow-sm"
                          : "text-gray-500 hover:text-[#12232B]"
                      }`}
                    >
                      <FaUser />
                      Patient
                    </button>

                    <button
                      type="button"
                      onClick={() => switchRole("doctor")}
                      className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                        !isPatient
                          ? "bg-white text-[#1F6F63] shadow-sm"
                          : "text-gray-500 hover:text-[#12232B]"
                      }`}
                    >
                      <FaUserDoctor />
                      Doctor
                    </button>
                  </div>

                  {/* LOGIN FORM */}
                  <form
                    onSubmit={handleLogin}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-[#12232B] mb-2">
                        {isPatient
                          ? "Email address or phone number"
                          : "Email address or professional ID"}
                      </label>

                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                          type="text"
                          value={identifier}
                          onChange={(e) =>
                            setIdentifier(e.target.value)
                          }
                          placeholder={
                            isPatient
                              ? "you@example.com"
                              : "DOC-001 or doctor@example.com"
                          }
                          className="w-full h-13 rounded-xl border border-gray-200 pl-11 pr-4 outline-none transition focus:border-[#1F6F63] focus:ring-4 focus:ring-[#1F6F63]/10"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-semibold text-[#12232B]">
                          Password
                        </label>

                        <button
                          type="button"
                          onClick={openForgotPassword}
                          className="text-sm font-semibold text-[#1F6F63] hover:underline"
                        >
                          Forgot password?
                        </button>
                      </div>

                      <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                          type={
                            showPassword
                              ? "text"
                              : "password"
                          }
                          value={password}
                          onChange={(e) =>
                            setPassword(e.target.value)
                          }
                          placeholder="Enter your password"
                          className="w-full h-13 rounded-xl border border-gray-200 pl-11 pr-12 outline-none transition focus:border-[#1F6F63] focus:ring-4 focus:ring-[#1F6F63]/10"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword(!showPassword)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#12232B]"
                        >
                          {showPassword ? (
                            <FaEyeSlash />
                          ) : (
                            <FaEye />
                          )}
                        </button>
                      </div>
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) =>
                          setRemember(e.target.checked)
                        }
                        className="w-4 h-4 accent-[#1F6F63]"
                      />

                      <span className="text-sm text-gray-600">
                        Remember me
                      </span>
                    </label>

                    {error && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                      </div>
                    )}

                    {success && (
                      <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-start gap-3">
                        <FaCheck className="mt-0.5 shrink-0" />
                        <span>{success}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full h-13 rounded-xl bg-[#1F6F63] text-white font-bold flex items-center justify-center gap-3 hover:bg-[#154F46] transition-all shadow-lg shadow-[#1F6F63]/20"
                    >
                      Sign in as{" "}
                      {isPatient ? "Patient" : "Doctor"}
                      <FaArrowRight />
                    </button>
                  </form>

                  {/* ACCOUNT CREATION */}
                  <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    {isPatient ? (
                      <p className="text-sm text-gray-500">
                        New patient?{" "}
                        <button
                          type="button"
                          onClick={openCreateAccount}
                          className="font-bold text-[#1F6F63] hover:underline cursor-pointer"
                        >
                          Create an account
                        </button>
                      </p>
                    ) : (
                      <div className="text-sm text-gray-500">
                        <p className="font-medium text-[#12232B]">
                          Doctor access
                        </p>

                        <p className="mt-1">
                          Your account is created by
                          Havillah Health facility administration.
                        </p>

                        <p className="mt-2 text-xs text-gray-400">
                          Contact your administrator if you
                          need your professional ID or password.
                        </p>
                      </div>
                    )}
                  </div>

                  <p className="text-center text-xs text-gray-400 mt-6">
                    Your healthcare information is protected.
                  </p>
                </div>
              )}

              {/* ================================================== */}
              {/* PATIENT REGISTRATION */}
              {/* ================================================== */}
              {screen === "register" && (
                <div>
                  <button
                    type="button"
                    onClick={backToLogin}
                    className="flex items-center gap-2 text-sm font-semibold text-[#1F6F63] hover:underline mb-6"
                  >
                    <FaArrowLeft />
                    Back to sign in
                  </button>

                  <div className="mb-7">
                    <p className="text-sm font-semibold text-[#1F6F63] mb-2">
                      Patient registration
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold text-[#12232B]">
                      Create your account
                    </h2>

                    <p className="mt-3 text-gray-500">
                      Create your own secure Havillah Health
                      account.
                    </p>
                  </div>

                  <form
                    onSubmit={handleCreateAccount}
                    className="space-y-4"
                  >
                    {/* FULL NAME */}
                    <div>
                      <label className="block text-sm font-semibold text-[#12232B] mb-2">
                        Full name
                      </label>

                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) =>
                            setFullName(e.target.value)
                          }
                          placeholder="Enter your full name"
                          className="w-full h-13 rounded-xl border border-gray-200 pl-11 pr-4 outline-none transition focus:border-[#1F6F63] focus:ring-4 focus:ring-[#1F6F63]/10"
                        />
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="block text-sm font-semibold text-[#12232B] mb-2">
                        Email address
                      </label>

                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                          type="email"
                          value={registerEmail}
                          onChange={(e) =>
                            setRegisterEmail(e.target.value)
                          }
                          placeholder="you@example.com"
                          className="w-full h-13 rounded-xl border border-gray-200 pl-11 pr-4 outline-none transition focus:border-[#1F6F63] focus:ring-4 focus:ring-[#1F6F63]/10"
                        />
                      </div>
                    </div>

                    {/* PHONE */}
                    <div>
                      <label className="block text-sm font-semibold text-[#12232B] mb-2">
                        Phone number
                      </label>

                      <div className="relative">
                        <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) =>
                            setPhone(e.target.value)
                          }
                          placeholder="0800 000 0000"
                          className="w-full h-13 rounded-xl border border-gray-200 pl-11 pr-4 outline-none transition focus:border-[#1F6F63] focus:ring-4 focus:ring-[#1F6F63]/10"
                        />
                      </div>
                    </div>

                    {/* PASSWORD */}
                    <div>
                      <label className="block text-sm font-semibold text-[#12232B] mb-2">
                        Create password
                      </label>

                      <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                          type={
                            showRegisterPassword
                              ? "text"
                              : "password"
                          }
                          value={registerPassword}
                          onChange={(e) =>
                            setRegisterPassword(e.target.value)
                          }
                          placeholder="Create a password"
                          className="w-full h-13 rounded-xl border border-gray-200 pl-11 pr-12 outline-none transition focus:border-[#1F6F63] focus:ring-4 focus:ring-[#1F6F63]/10"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowRegisterPassword(
                              !showRegisterPassword
                            )
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#12232B]"
                        >
                          {showRegisterPassword ? (
                            <FaEyeSlash />
                          ) : (
                            <FaEye />
                          )}
                        </button>
                      </div>

                      <p className="text-xs text-gray-400 mt-1">
                        Password must contain at least 6
                        characters.
                      </p>
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div>
                      <label className="block text-sm font-semibold text-[#12232B] mb-2">
                        Confirm password
                      </label>

                      <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) =>
                            setConfirmPassword(e.target.value)
                          }
                          placeholder="Confirm your password"
                          className="w-full h-13 rounded-xl border border-gray-200 pl-11 pr-4 outline-none transition focus:border-[#1F6F63] focus:ring-4 focus:ring-[#1F6F63]/10"
                        />
                      </div>
                    </div>

                    {/* TERMS */}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e) =>
                          setAgree(e.target.checked)
                        }
                        className="w-4 h-4 mt-1 accent-[#1F6F63]"
                      />

                      <span className="text-sm text-gray-600 leading-5">
                        I agree to the Havillah Health terms
                        of service and privacy policy.
                      </span>
                    </label>

                    {error && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                      </div>
                    )}

                    {success && (
                      <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-start gap-3">
                        <FaCheck className="mt-0.5 shrink-0" />
                        <span>{success}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full h-13 rounded-xl bg-[#1F6F63] text-white font-bold flex items-center justify-center gap-3 hover:bg-[#154F46] transition-all shadow-lg shadow-[#1F6F63]/20"
                    >
                      Create patient account
                      <FaArrowRight />
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={backToLogin}
                        className="font-bold text-[#1F6F63] hover:underline"
                      >
                        Sign in
                      </button>
                    </p>
                  </div>
                </div>
              )}

              {/* ================================================== */}
              {/* FORGOT PASSWORD */}
              {/* ================================================== */}
              {screen === "forgot" && (
                <div>
                  <button
                    type="button"
                    onClick={backToLogin}
                    className="flex items-center gap-2 text-sm font-semibold text-[#1F6F63] hover:underline mb-6"
                  >
                    <FaArrowLeft />
                    Back to sign in
                  </button>

                  <div className="mb-8">
                    <p className="text-sm font-semibold text-[#1F6F63] mb-2">
                      Account recovery
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold text-[#12232B]">
                      Forgot your password?
                    </h2>

                    <p className="mt-3 text-gray-500 leading-6">
                      Enter your email address and we'll help
                      you recover access to your account.
                    </p>
                  </div>

                  <form
                    onSubmit={handleForgotPassword}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-[#12232B] mb-2">
                        Email address
                      </label>

                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                          type="email"
                          value={resetEmail}
                          onChange={(e) =>
                            setResetEmail(e.target.value)
                          }
                          placeholder="you@example.com"
                          className="w-full h-13 rounded-xl border border-gray-200 pl-11 pr-4 outline-none transition focus:border-[#1F6F63] focus:ring-4 focus:ring-[#1F6F63]/10"
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                      </div>
                    )}

                    {success && (
                      <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-start gap-3">
                        <FaCheck className="mt-0.5 shrink-0" />
                        <span>{success}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full h-13 rounded-xl bg-[#1F6F63] text-white font-bold flex items-center justify-center gap-3 hover:bg-[#154F46] transition-all shadow-lg shadow-[#1F6F63]/20"
                    >
                      Send reset link
                      <FaArrowRight />
                    </button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-500">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={openCreateAccount}
                        className="font-bold text-[#1F6F63] hover:underline"
                      >
                        Create an account
                      </button>
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}