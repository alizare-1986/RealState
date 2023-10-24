"use client";
import Loader from "@/module/Loader";
import styles from "@/template/SignupPage.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signupHnadler = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("رمز و تکرار ان برابر نیست");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };
  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label>ایمیل:</label>
        <input
          name="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>رمز عبور:</label>
        <input
          name="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>تکرار رمز عبور:</label>
        <input
          name="repassword"
          type="password"
          value={rePassword}
          placeholder="repassword"
          onChange={(e) => setRePassword(e.target.value)}
        />
        {loading ? (
        <Loader/>
        ) : (
          <button type="submit" onClick={signupHnadler}>
            ثبت نام
          </button>
        )}
      </form>
      <p>
        حساب کاربری دارید؟
        <Link href={"/signin"}>ورود</Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SignupPage;
