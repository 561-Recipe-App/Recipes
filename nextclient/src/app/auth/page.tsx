"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://localhost:8000/api/"
});

const SignupFormSchema = z.object({
  username: z.string().min(6).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(50)
});

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(50)
});


export default function Auth() {
  const signUpForm = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      username: ""
    }
  });
  const loginForm = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: ""
    }
  });

  const [currentUser, setCurrentUser] = useState(false);

  // 2. Define a submit handler.


  function onSubmitSignUp(values: z.infer<typeof SignupFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log(values);
    client.post(
      "register",
      {
        email: values.email,
        username: values.username,
        password: values.password
      }
    ).then(function(res) {
        console.log(res);
      }
    );
  }

  function onSubmitLogIn(values: z.infer<typeof SignupFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log(values);
    client.post(
      "login",
      {
        email: values.email,
        password: values.password
      }
    ).then(function(res) {
      console.log(res);
    });
  }


  return (
    <>
      {/*center this directly in the middle of the screen*/}
      <div className="flex items-center justify-center min-h-screen pb:1">
        <Tabs defaultValue="Login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Login">Login</TabsTrigger>
            <TabsTrigger value="Sign-Up">Sign-Up</TabsTrigger>
          </TabsList>
          <TabsContent value="Login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Login to your account here. Click the login button when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Form {...signUpForm}>
                  <form onSubmit={signUpForm.handleSubmit(onSubmitLogIn)} className="space-y-8">
                    <FormField
                      control={loginForm.control}
                      name="email"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormMessage />
                            <FormControl>
                              <Input placeholder="" {...field} />
                            </FormControl>
                          </FormItem>
                        </>
                      )}
                    />
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormMessage />
                            <FormControl>
                              <Input type="password" placeholder="" {...field} />
                            </FormControl>
                          </FormItem>
                        </>
                      )}
                    />

                    <Button type="submit">
                      <>
                        Login
                      </>
                    </Button>

                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Sign-Up">
            <Card>
              <CardHeader>
                <CardTitle>Sign-Up</CardTitle>
                <CardDescription>
                  Sign up for an account here. After submitting, you will be able to login.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Form {...signUpForm}>
                  <form onSubmit={signUpForm.handleSubmit(onSubmitSignUp)} className="space-y-8">
                    <FormField
                      control={signUpForm.control}
                      name="username"
                      render={({ field }) => (
                        <>

                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormMessage />
                            <FormControl>
                              <Input placeholder="Hayden Thai" {...field} />
                            </FormControl>
                            <FormDescription>
                              Your public display name.
                            </FormDescription>
                          </FormItem>
                        </>
                      )}
                    />
                    <FormField control={signUpForm.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="thaihayden@gmail.com" {...field} />
                        </FormControl>
                      </FormItem>
                    )} />
                    <FormField
                      control={signUpForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Must be 8 or more characters" {...field} />

                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button type="submit">
                      <>
                        Sign Up
                      </>
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
