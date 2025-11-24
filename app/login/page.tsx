"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useNotifications } from "@/hooks/useNotifications";
import { AuthNotifications } from "@/lib/notifications/presets";

const backgroundImages = [
  "/fondos/bg1.jpg",
  "/fondos/bg2.jpg",
  "/fondos/bg3.jpg",
  "/fondos/bg4.jpg",
];

const inspirationalQuotes = [
  "La ingeniería es el arte de dirigir las grandes.",
  "Los ingenieros construyen el futuro, un proyecto a la vez.",
  "La excelencia en ingeniería no es un acto, sino un hábito.",
  "Innovar es ver lo que todos ven y pensar lo que nadie piensa.",
];

export default function LoginPage() {
  const router = useRouter();
  const { showError } = useNotifications();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("El correo electrónico es obligatorio");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Formato de correo electrónico inválido");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError("La contraseña es obligatoria");
      return false;
    }
    if (password.length < 12) {
      setPasswordError("La contraseña debe tener al menos 12 caracteres");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleEmailBlur = () => {
    validateEmail(email);
  };

  const handlePasswordBlur = () => {
    validatePassword(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        AuthNotifications.invalidCredentials();
      } else {
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      console.error("Error de autenticación:", err);
      showError("Error al iniciar sesión. Por favor, intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative w-[75%] h-full overflow-hidden">
        {backgroundImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Fondo ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/40" />

        <div className="absolute bottom-8 left-8 right-8 z-10">
          <p className="text-white text-lg font-light italic leading-relaxed">
            &ldquo;{inspirationalQuotes[currentImageIndex]}&rdquo;
          </p>
        </div>
      </div>
      <div className="w-[25%] h-full  justify-between flex flex-col p-12">
        {/* Header */}
        <div className="mb-20">
          <h1 className="letra text-4xl font-bold tracking-tight">Speed</h1>
          <p className="letra text-sm mt-2">Sistema Integrado de Gestión</p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            {/* Email */}
            <h2 className="letra text-xl font-bold text-gray-900 pb-2">
              Nice to see you again
            </h2>
            <div>
              <label
                htmlFor="email"
                className="block letra text-xs font-medium text-gray-700 mb-2"
              >
                Correo electrónico
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  onBlur={handleEmailBlur}
                  className={`block w-full px-4 py-3 border ${
                    emailError ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-1 bg-[#f2f2f2] focus:ring-[#007aff] focus:border-[#007aff] outline-none`}
                  placeholder="Email or phone number"
                />
              </div>
              {emailError && (
                <p className="mt-1 text-xs text-red-600">{emailError}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block letra text-xs font-medium text-gray-700 mb-2"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) setPasswordError("");
                  }}
                  onBlur={handlePasswordBlur}
                  className={`block w-full px-4 py-3 border ${
                    passwordError ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-1 bg-[#f2f2f2] focus:ring-[#007aff] focus:border-[#007aff] outline-none transition-colors`}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="mt-1 text-xs text-red-600">{passwordError}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 border-gray-300 rounded cursor-pointer"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700 cursor-pointer"
              >
                Recordarme
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[#14e742] hover:text-[#cccccc] transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          {rememberMe && (
            <div className="flex">
              <p className="text-xs text-[#ffa940]">
                Solo usa esta opción en dispositivos personales. No recomendado
                en equipos compartidos o públicos.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-[15px] font-semibold text-white bg-[#14e742] hover:bg-[#cccccc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Autenticando...
              </div>
            ) : (
              "Sign in"
            )}
          </button>

          {/* Security Notice */}
          <div className="mt-56 flex justify-between items-center">
            <p className="text-xs text-gray-500">© Erp App 2025</p>
          </div>
        </form>
      </div>
    </div>
  );
}
