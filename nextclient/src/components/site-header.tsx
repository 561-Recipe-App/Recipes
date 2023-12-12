"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://localhost:8000"
});

export function SiteHeader() {
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const csrfToken = Cookies.get("csrftoken");
    client.get("/api/user", {
      withCredentials: true,
      headers: {
        "X-CSRFToken": csrfToken
      }
    })
      .then(function(res) {
        console.log(res);
        setCurrentUser(true);
      })
      .catch(function(error) {
        setCurrentUser(false);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function handleSignOut() {
    client.post(
      "/api/logout",
      { withCredentials: true }
    ).then(function(res) {
      setCurrentUser(false);
    });
  }

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost"
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            {loading ? <></> : (!currentUser ? <Link href="/auth">
                <Button>
                  Login / Sign-Up
                </Button>
              </Link> :
              <Button onClick={handleSignOut}>
                Sign out
              </Button>)
            }
          </nav>
        </div>
      </div>
    </header>
  );
}