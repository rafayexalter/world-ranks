import { Brightness6Rounded } from "@material-ui/icons";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Layout.module.css";

const Layout = ({
  children,
  title = "World Ranks",
  favicon = "/favicon.ico",
}) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme"),
    );

    setTheme(localStorage.getItem("theme"));
  }, []);
  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
      </Head>

      <header className={styles.header}>
        <Link href={"/"}>
          <h2>World Ranks</h2>
        </Link>

        <button className={styles.themeSwitcher} onClick={switchTheme}>
          <Brightness6Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Rafay @ abdulrafay.me</footer>
    </div>
  );
};

export default Layout;
